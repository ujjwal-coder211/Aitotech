-- ═══════════════════════════════════════════════════════════════════
--  Fix: the website contact form was writing to the wrong table
--
--  Run this in: Supabase Dashboard -> SQL Editor -> New query -> Run
--
--  The website's /api/contact inserted {name, email, company, message}
--  into public.leads. But public.leads in this database is the
--  SalesConnect AI agent's CRM (channel, customer_name, phone,
--  lead_score, raw_memory, ...) -- it has no name/email/message column,
--  so every insert failed and the visitor got a 503. supabase/schema.sql
--  said `create table if not exists`, so the website's own definition
--  was never applied: the agent's table already held the name.
--
--  This gives the website its own table. It is additive: nothing is
--  dropped and public.leads is not touched, so SalesConnect keeps
--  working exactly as before.
-- ═══════════════════════════════════════════════════════════════════

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  company     text,
  message     text not null,
  status      text not null default 'new',  -- new | read | archived
  created_at  timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

-- Anyone (anon) can submit a message via the contact form
drop policy if exists "anyone can insert contact messages" on public.contact_messages;
create policy "anyone can insert contact messages"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

-- Only logged-in admins can read / update / delete them
drop policy if exists "authenticated can read contact messages" on public.contact_messages;
create policy "authenticated can read contact messages"
  on public.contact_messages for select
  to authenticated
  using (true);

drop policy if exists "authenticated can update contact messages" on public.contact_messages;
create policy "authenticated can update contact messages"
  on public.contact_messages for update
  to authenticated
  using (true);

drop policy if exists "authenticated can delete contact messages" on public.contact_messages;
create policy "authenticated can delete contact messages"
  on public.contact_messages for delete
  to authenticated
  using (true);

comment on table public.contact_messages is
  'Website contact form submissions. Separate from public.leads, which is the SalesConnect AI agent CRM.';
