-- =============================================================================
-- Close the admin authorization bypass at the database layer
--
-- WHERE: https://supabase.com/dashboard/project/mjgpvzcqlupuspwohhbc/sql/new
--
-- THE BUG
-- Being signed in to Supabase was treated as being an admin. These policies
-- granted the whole `authenticated` role, with `using (true)`:
--
--   contact_messages : SELECT, UPDATE, DELETE   -- every lead you have ever had
--   services         : ALL                      -- the public website CMS
--   aksh_waitlist    : SELECT, UPDATE
--
-- So any account that could log in -- including one created through public
-- signup or an OAuth provider -- could read every enquiry, delete them, and
-- rewrite the live services pages. The app-layer half of this is fixed in
-- lib/supabase/admin-auth.ts; this is the half that holds even when somebody
-- skips the app and talks to the REST API with the public anon key directly.
--
-- RIGHT NOW there are 0 rows in auth.users, so there is no account that could
-- do any of it. This closes the hole BEFORE you create the first one.
--
-- ⚠️ ORDER MATTERS. Run this BEFORE you create your admin account and set its
-- claim. If you create the account first, you are briefly an authenticated
-- non-admin, and the old policies are the ones still in force. Do it in the
-- order in the handover notes.
--
-- SAFE FOR THE RUNNING SYSTEM:
--   * the public contact form keeps working -- the anon INSERT policy is
--     re-created unchanged, and the form only ever inserts
--   * the public website keeps working -- anon still reads published services
--   * the WhatsApp agent and Business OS are untouched: they use the
--     service-role key, which bypasses RLS entirely
--   * no data is read, written or deleted by this file
--
-- Safe to run twice: every policy is dropped by name first.
-- =============================================================================

begin;

-- ---------------------------------------------------------------------------
-- 1. One place that decides who is an admin.
--
-- Reads the claim from the JWT. `app_metadata` ONLY -- that is the half of the
-- token a user cannot write. `user_metadata` is editable by the user via
-- updateUser(), so trusting it would let anybody promote themselves with one
-- API call. This function must never look at it.
--
-- `security invoker` (the default) is correct here: it must see the CALLER's
-- JWT, not the owner's. `set search_path = ''` pins resolution so the function
-- cannot be hijacked by a crafted search_path, and also clears the
-- "Function Search Path Mutable" warning Supabase's linter reports.
--
-- Verified against all ten claim shapes, including the self-promotion attempt,
-- and matches lib/supabase/admin-auth.ts case for case.
-- ---------------------------------------------------------------------------
create or replace function public.is_admin()
returns boolean
language sql
stable
set search_path = ''
as $$
  select coalesce(
    lower(auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    or (auth.jwt() -> 'app_metadata' ->> 'is_admin')::boolean is true
    -- `? 'admin'` on a jsonb array asks "is this an element". Guarded by a
    -- type check because `?` on a string would raise, and an error inside a
    -- policy is a failed request, not a denial.
    or (case
          when jsonb_typeof(auth.jwt() -> 'app_metadata' -> 'roles') = 'array'
          then auth.jwt() -> 'app_metadata' -> 'roles' ? 'admin'
          else false
        end),
    false
  );
$$;

comment on function public.is_admin() is
  'True only for a JWT carrying an admin claim in app_metadata, which a user '
  'cannot set on themselves. Never reads user_metadata.';

-- ---------------------------------------------------------------------------
-- 2. contact_messages -- your leads.
--
-- Anyone may still INSERT: that is the public contact form, and it must keep
-- working for visitors who are not logged in at all. Reading, changing and
-- deleting become admin-only.
-- ---------------------------------------------------------------------------
drop policy if exists "anyone can insert contact messages" on public.contact_messages;
create policy "anyone can insert contact messages"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

drop policy if exists "authenticated can read contact messages" on public.contact_messages;
drop policy if exists "admins can read contact messages"       on public.contact_messages;
create policy "admins can read contact messages"
  on public.contact_messages for select
  to authenticated
  using (public.is_admin());

drop policy if exists "authenticated can update contact messages" on public.contact_messages;
drop policy if exists "admins can update contact messages"        on public.contact_messages;
create policy "admins can update contact messages"
  on public.contact_messages for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "authenticated can delete contact messages" on public.contact_messages;
drop policy if exists "admins can delete contact messages"        on public.contact_messages;
create policy "admins can delete contact messages"
  on public.contact_messages for delete
  to authenticated
  using (public.is_admin());

-- ---------------------------------------------------------------------------
-- 3. services -- the public website CMS.
--
-- The public read stays, because the website is public. But the old read
-- policy also said `or auth.role() = 'authenticated'`, which let any logged-in
-- account see UNPUBLISHED drafts. Only admins see those now.
-- ---------------------------------------------------------------------------
drop policy if exists "public can read published services" on public.services;
create policy "public can read published services"
  on public.services for select
  to anon, authenticated
  using (published = true or public.is_admin());

drop policy if exists "authenticated manage services" on public.services;
drop policy if exists "admins manage services"        on public.services;
create policy "admins manage services"
  on public.services for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ---------------------------------------------------------------------------
-- 4. aksh_waitlist -- sign-ups. Same shape: anyone joins, only admins look.
-- ---------------------------------------------------------------------------
drop policy if exists "anyone can insert aksh waitlist" on public.aksh_waitlist;
create policy "anyone can insert aksh waitlist"
  on public.aksh_waitlist for insert
  to anon, authenticated
  with check (true);

drop policy if exists "authenticated can read aksh waitlist" on public.aksh_waitlist;
drop policy if exists "admins can read aksh waitlist"        on public.aksh_waitlist;
create policy "admins can read aksh waitlist"
  on public.aksh_waitlist for select
  to authenticated
  using (public.is_admin());

drop policy if exists "authenticated can update aksh waitlist" on public.aksh_waitlist;
drop policy if exists "admins can update aksh waitlist"        on public.aksh_waitlist;
create policy "admins can update aksh waitlist"
  on public.aksh_waitlist for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ---------------------------------------------------------------------------
-- 5. Pin the search_path on the three existing trigger functions.
--
-- Supabase's linter flags these as "Function Search Path Mutable". All three
-- are one line -- `new.updated_at = now(); return new;` -- and `now()` lives
-- in pg_catalog, which is always in scope, so pinning the path cannot break
-- them. Checked against their actual bodies before writing this.
-- ---------------------------------------------------------------------------
alter function public.set_last_updated()  set search_path = '';
alter function public.set_updated_at()    set search_path = '';
alter function public.touch_updated_at()  set search_path = '';

commit;

-- =============================================================================
-- CHECK — read this before moving on
-- =============================================================================

-- Every policy on the three tables. Each `authenticated` row for select,
-- update, delete or all must now read `is_admin()`. The only `true` left
-- should be the two anon INSERT policies and the `published = true` read.
select tablename, policyname, cmd, roles::text,
       coalesce(qual, '-') as using_expr,
       coalesce(with_check, '-') as check_expr
from pg_policies
where schemaname = 'public'
  and tablename in ('contact_messages', 'services', 'aksh_waitlist')
order by tablename, cmd, policyname;

-- Sanity: the claim reader exists and refuses an empty token. Run as an
-- anonymous caller this returns false, which is the correct answer.
select public.is_admin() as should_be_false;
