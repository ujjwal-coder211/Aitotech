-- ═══════════════════════════════════════════════════════════════════
--  AitoTech — Supabase Database Schema
--  Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- ═══════════════════════════════════════════════════════════════════

-- ─── 1. CONTACT MESSAGES (contact form submissions) ───
--
-- NOTE: this used to be called `leads`, which collided with the SalesConnect
-- AI agent's own `public.leads` CRM table in the same database. Because this
-- file says `create table if not exists`, the website's definition silently
-- did nothing while the policies below were applied to the agent's table —
-- so every contact form insert failed on a missing `name` column and the
-- visitor got a 503. The website now owns `contact_messages`; `public.leads`
-- belongs to SalesConnect and must be left alone.
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

-- This file also left four policies behind on `public.leads`, which is
-- SalesConnect's table, not the website's. One of them lets the public `anon`
-- key INSERT rows into that CRM, which is worth closing — but SalesConnect may
-- be relying on them, so confirm which key that app uses before running this:
--
--   drop policy if exists "anyone can insert leads" on public.leads;
--   drop policy if exists "authenticated can read leads" on public.leads;
--   drop policy if exists "authenticated can update leads" on public.leads;
--   drop policy if exists "authenticated can delete leads" on public.leads;
--
-- If it uses the service-role key, RLS is bypassed and dropping them is safe.


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


-- ─── 3. SEED services (mirrors data/services.ts) ───
-- Retire slugs from earlier versions of the catalogue.
delete from public.services where slug not in (
  'business-websites',
  'landing-pages',
  'ecommerce',
  'web-applications',
  'mobile-apps',
  'custom-software',
  'crm-erp',
  'ai-chatbots',
  'whatsapp-automation',
  'ai-voice-agents',
  'process-automation',
  'api-integrations'
);

insert into public.services (slug, title, short, description, features, icon, accent, gradient, sort_order, published)
values
  (
    'business-websites', 'Business Websites', 'A site that brings you enquiries, not just compliments.',
    'A fast, modern website built around the questions your customers actually ask — what you do, whether you serve their area, what it costs, and how to reach you. Search-ready from day one, with enquiry forms and WhatsApp chat wired in so interest turns into a conversation.',
    '["Custom design", "SEO foundations", "Enquiry forms", "WhatsApp chat"]'::jsonb,
    'globe', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 1, true
  ),
  (
    'landing-pages', 'Premium Landing Pages', 'One page, one offer, built to convert ad spend.',
    'When you are running ads, a general website splits attention. A landing page keeps one offer, one message and one action in front of the visitor, so the money you spend on clicks has somewhere to land.',
    '["Single clear offer", "Fast load", "A/B ready", "Lead capture"]'::jsonb,
    'target', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 2, true
  ),
  (
    'ecommerce', 'E-commerce Development', 'Sell online without babysitting every order.',
    'A storefront with the parts that actually decide whether people buy: clear product pages, UPI and card payments that work on the first try, honest delivery information, and order updates that go out on their own.',
    '["UPI & card payments", "Inventory sync", "Order tracking", "Abandoned-cart recovery"]'::jsonb,
    'cart', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 3, true
  ),
  (
    'web-applications', 'Web Applications', 'Replace the spreadsheet everyone is afraid to break.',
    'A tool your team opens in the browser and logs into — bookings, records, dashboards, approvals. Built for the way your business actually runs, with roles so people only see what they should.',
    '["Role-based access", "Live dashboards", "Reports", "Works on any device"]'::jsonb,
    'window', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 4, true
  ),
  (
    'mobile-apps', 'Android & iOS Applications', 'Your business in your customer’s pocket.',
    'Booking, ordering and field-team apps built once for both platforms and shipped to the stores. Updates reach users over the air, so improvements land without anyone reinstalling anything.',
    '["Android & iOS", "Play Store & App Store", "Over-the-air updates", "Works offline"]'::jsonb,
    'mobile', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 5, true
  ),
  (
    'custom-software', 'Custom Software', 'For the part of your business no product fits.',
    'Every business has one process that off-the-shelf software gets wrong. We build that piece properly, and connect it to the tools you already pay for instead of replacing them.',
    '["Built to your process", "Connects to existing tools", "Documented", "Yours to own"]'::jsonb,
    'code', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 6, true
  ),
  (
    'crm-erp', 'CRM & ERP Development', 'One place where the business is actually visible.',
    'Customers, orders, inventory, invoices and team activity in one system instead of four spreadsheets and a WhatsApp group — so a question like “where is that order?” takes a second, not a phone call.',
    '["Customer & order records", "Inventory", "Invoicing", "Owner dashboard"]'::jsonb,
    'database', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 7, true
  ),
  (
    'ai-chatbots', 'AI Chatbots', 'Answers your customers at 11 PM, in your words.',
    'A chatbot trained on your business — your services, pricing, timings and policies — not a generic bot. It answers the routine questions, captures the details that matter, and hands over to a human when it should.',
    '["Trained on your business", "Captures enquiry details", "Human handover", "Website & WhatsApp"]'::jsonb,
    'chat', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 8, true
  ),
  (
    'whatsapp-automation', 'WhatsApp Automation', 'Reply in seconds, follow up without remembering to.',
    'Most Indian businesses already run on WhatsApp. We make it work properly: instant replies to new enquiries, follow-ups that go out on schedule, reminders before appointments, and every conversation recorded where you can see it.',
    '["Instant first reply", "Scheduled follow-ups", "Appointment reminders", "Official Business API"]'::jsonb,
    'whatsapp', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 9, true
  ),
  (
    'ai-voice-agents', 'AI Voice Agents', 'Nobody has to let the phone ring out.',
    'A voice agent that picks up missed calls, confirms appointments and qualifies enquiries over a normal phone conversation — then writes what it learned into your system so your team starts informed.',
    '["Answers missed calls", "Appointment confirmation", "Call summaries", "Hands over to your team"]'::jsonb,
    'voice', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 10, true
  ),
  (
    'process-automation', 'Business Process Automation', 'Give your team back the hours they lose to copy-paste.',
    'The repetitive middle of your operations — data moving between systems, approvals waiting on a message, reports someone rebuilds every Friday — handled automatically, with a person still approving anything that matters.',
    '["Approval routing", "Automatic reports", "No manual re-entry", "Human-in-the-loop"]'::jsonb,
    'workflow', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 11, true
  ),
  (
    'api-integrations', 'API Integrations', 'Make the tools you already pay for talk to each other.',
    'Your website, CRM, billing, inventory and WhatsApp each hold a piece of the truth. We connect them so a change in one place shows up everywhere, and nobody is re-typing the same customer into three systems.',
    '["Two-way sync", "Payment & billing", "Tally / ERP", "Error alerts"]'::jsonb,
    'link', 'text-azure-deep', 'from-sky-500/15 via-sky-500/5 to-transparent', 12, true
  )
on conflict (slug) do update set
  title = excluded.title,
  short = excluded.short,
  description = excluded.description,
  features = excluded.features,
  icon = excluded.icon,
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
