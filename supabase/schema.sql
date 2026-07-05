-- ═══════════════════════════════════════════════════════════════════
--  AitoTech — Supabase Database Schema
--  Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- ═══════════════════════════════════════════════════════════════════

-- ─── 1. LEADS (contact form submissions) ───
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  company     text,
  message     text not null,
  status      text not null default 'new',  -- new | read | archived
  created_at  timestamptz not null default now()
);

alter table public.leads enable row level security;

-- Admins must have a non-user-editable Supabase Auth app_metadata claim:
--   {"role":"admin"} or {"roles":["admin"]} or {"is_admin":true}
-- Set this in Supabase Auth user app metadata; do not use user_metadata.
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
    or coalesce(auth.jwt() -> 'app_metadata' -> 'roles', '[]'::jsonb) ? 'admin'
    or coalesce(auth.jwt() -> 'app_metadata' ->> 'is_admin', '') = 'true';
$$;

-- Anyone (anon) can submit a lead via the contact form
drop policy if exists "anyone can insert leads" on public.leads;
create policy "anyone can insert leads"
  on public.leads for insert
  to anon, authenticated
  with check (true);

-- Only logged-in admins can read / update / delete leads
drop policy if exists "authenticated can read leads" on public.leads;
create policy "authenticated can read leads"
  on public.leads for select
  to authenticated
  using (public.is_admin());

drop policy if exists "authenticated can update leads" on public.leads;
create policy "authenticated can update leads"
  on public.leads for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "authenticated can delete leads" on public.leads;
create policy "authenticated can delete leads"
  on public.leads for delete
  to authenticated
  using (public.is_admin());


-- ─── 2. SERVICES (CMS-managed content) ───
create table if not exists public.services (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  short        text not null,
  description  text not null,
  features     jsonb not null default '[]'::jsonb,
  icon         text not null default 'ai',
  accent       text not null default 'text-cyan-400',
  gradient     text not null default 'from-cyan-500/20 via-sky-500/10 to-transparent',
  sort_order   int  not null default 0,
  published    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

alter table public.services enable row level security;

-- Public can read only PUBLISHED services
drop policy if exists "public can read published services" on public.services;
create policy "public can read published services"
  on public.services for select
  to anon, authenticated
  using (published = true or public.is_admin());

-- Logged-in admins can do everything
drop policy if exists "authenticated manage services" on public.services;
create policy "authenticated manage services"
  on public.services for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Auto-update updated_at on row change
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists services_updated_at on public.services;
create trigger services_updated_at
  before update on public.services
  for each row execute function public.set_updated_at();


-- ─── 3. SEED initial services (matches the current website) ───
insert into public.services (slug, title, short, description, features, icon, accent, gradient, sort_order, published)
values
  (
    'data-automation', 'Data Automation', 'Unify pipelines. Eliminate manual ETL.',
    'AI-driven data pipelines that sync warehouses in real time, auto-map schemas, and self-heal when sources change — so your team trusts every dashboard.',
    '["Real-time CDC sync","Schema intelligence","Quality scoring","Lineage & compliance"]'::jsonb,
    'database', 'text-cyan-400', 'from-cyan-500/20 via-sky-500/10 to-transparent', 1, true
  ),
  (
    'workflow-automation', 'Workflow Automation', 'Orchestrate ops without bottlenecks.',
    'End-to-end workflow engines that connect your tools, route approvals, and trigger AI decisions — from invoice intake to customer onboarding.',
    '["Multi-app orchestration","Smart routing","Audit trails","SLA monitoring"]'::jsonb,
    'workflow', 'text-violet-400', 'from-violet-500/20 via-indigo-500/10 to-transparent', 2, true
  ),
  (
    'invoice-intelligence', 'Invoice Intelligence', 'From inbox to ERP in seconds.',
    'OCR + NLP extraction with PO matching and anomaly detection. Process thousands of invoices with 99% accuracy and full ERP integration.',
    '["99% extraction accuracy","3-way matching","ERP connectors","Spend analytics"]'::jsonb,
    'invoice', 'text-sky-400', 'from-sky-500/20 via-cyan-500/10 to-transparent', 3, true
  ),
  (
    'custom-ai', 'Custom AI Systems', 'Models built for your domain.',
    'Fine-tuned LLMs, RAG knowledge bases, and autonomous agents deployed in your VPC — not generic chatbots stapled onto your stack.',
    '["Domain fine-tuning","Private RAG","Agent workflows","Human-in-the-loop"]'::jsonb,
    'ai', 'text-emerald-400', 'from-emerald-500/15 via-cyan-500/10 to-transparent', 4, true
  )
on conflict (slug) do nothing;


-- ─── 4. AKSH WAITLIST (launch page signups) ───
create table if not exists public.aksh_waitlist (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null unique,
  role        text not null default 'developer',
  interest    text not null default 'both',
  status      text not null default 'new',
  created_at  timestamptz not null default now()
);

alter table public.aksh_waitlist enable row level security;

drop policy if exists "anyone can insert aksh waitlist" on public.aksh_waitlist;
create policy "anyone can insert aksh waitlist"
  on public.aksh_waitlist for insert
  to anon, authenticated
  with check (true);

drop policy if exists "authenticated can read aksh waitlist" on public.aksh_waitlist;
create policy "authenticated can read aksh waitlist"
  on public.aksh_waitlist for select
  to authenticated
  using (public.is_admin());

drop policy if exists "authenticated can update aksh waitlist" on public.aksh_waitlist;
create policy "authenticated can update aksh waitlist"
  on public.aksh_waitlist for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());
