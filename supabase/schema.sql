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
  using (true);

drop policy if exists "authenticated can update leads" on public.leads;
create policy "authenticated can update leads"
  on public.leads for update
  to authenticated
  using (true);

drop policy if exists "authenticated can delete leads" on public.leads;
create policy "authenticated can delete leads"
  on public.leads for delete
  to authenticated
  using (true);


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
  using (published = true or auth.role() = 'authenticated');

-- Logged-in admins can do everything
drop policy if exists "authenticated manage services" on public.services;
create policy "authenticated manage services"
  on public.services for all
  to authenticated
  using (true)
  with check (true);

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
-- Remove any retired/over-claimed services from earlier versions of the site.
delete from public.services where slug in ('data-automation', 'invoice-intelligence');

insert into public.services (slug, title, short, description, features, icon, accent, gradient, sort_order, published)
values
  (
    'website-development', 'Business Websites', 'Fast, modern sites that convert.',
    'SEO-ready websites with booking, payments, WhatsApp chat, and AI built in — designed, built, and hosted end to end for your business.',
    '["Custom design","SEO & analytics","Booking & payments","WhatsApp + AI chat"]'::jsonb,
    'globe', 'text-brand-light', 'from-indigo-500/15 via-indigo-500/5 to-transparent', 1, true
  ),
  (
    'mobile-apps', 'Mobile Apps', 'Android & iOS, idea to store.',
    'Booking, ordering, and field-team apps built with React Native — shipped to the store with over-the-air updates so new features land without reinstalls.',
    '["Android & iOS","Play Store publishing","OTA updates","Offline-first"]'::jsonb,
    'mobile', 'text-brand-light', 'from-indigo-500/15 via-indigo-500/5 to-transparent', 2, true
  ),
  (
    'workflow-automation', 'WhatsApp & Workflow Automation', 'Automate the busywork, not your judgement.',
    'Auto-replies, lead follow-ups, and approval flows that run on WhatsApp and the tools you already use — so nothing slips through the cracks.',
    '["WhatsApp auto-replies","Lead follow-ups","Multi-app workflows","CRM sync"]'::jsonb,
    'workflow', 'text-violet-400', 'from-violet-500/20 via-indigo-500/10 to-transparent', 3, true
  ),
  (
    'custom-ai', 'AI Tools & Chatbots', 'AI that fits your business.',
    'Chatbots trained on your business, private knowledge bases, and AI assistants that answer questions, qualify leads, and help your team — not generic bots stapled onto your stack.',
    '["Business-trained chatbots","Private knowledge base","Lead qualification","Human-in-the-loop"]'::jsonb,
    'ai', 'text-emerald-400', 'from-emerald-500/15 via-cyan-500/10 to-transparent', 4, true
  )
on conflict (slug) do update set
  title = excluded.title,
  short = excluded.short,
  description = excluded.description,
  features = excluded.features,
  icon = excluded.icon,
  accent = excluded.accent,
  gradient = excluded.gradient,
  sort_order = excluded.sort_order,
  published = excluded.published;


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
  using (true);

drop policy if exists "authenticated can update aksh waitlist" on public.aksh_waitlist;
create policy "authenticated can update aksh waitlist"
  on public.aksh_waitlist for update
  to authenticated
  using (true);
