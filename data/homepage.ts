/**
 * Homepage content for the digital-solutions positioning.
 *
 * Section copy only. The service catalogue lives in data/services.ts and the
 * industries in data/industries.ts, so the homepage renders the same twelve
 * services and nine industries as the pages behind it — nothing is restated
 * here that another file already owns.
 */

/** Section 2 — the problems a visitor should recognise themselves in. */
export const problems = [
  {
    title: 'Customers cannot find you',
    body: 'You rank below competitors who are not better, only easier to find.',
  },
  {
    title: 'The site does not bring enquiries',
    body: 'Visitors arrive, look around, and leave without ever contacting you.',
  },
  {
    title: 'Enquiries wait until morning',
    body: 'A message at 11 PM gets answered at 11 AM — after someone else replied.',
  },
  {
    title: 'Follow-ups depend on memory',
    body: 'Most deals need several touches. Most teams manage one and move on.',
  },
  {
    title: 'The business runs on spreadsheets',
    body: 'Four files, three versions, and one person who knows how they work.',
  },
  {
    title: 'Staff spend the day copy-pasting',
    body: 'Skilled people retyping the same customer into three different systems.',
  },
  {
    title: 'Approvals stall the work',
    body: 'A job sits idle because one person has not seen a message yet.',
  },
  {
    title: 'You find out too late',
    body: 'Problems surface a week after they happened, once the damage is done.',
  },
] as const;

/** Section 4 — how the work translates into growth. */
export const growthPillars = [
  {
    stage: 'Get found',
    title: 'More of the right people reach you',
    body: 'A fast, search-ready site and focused landing pages put you in front of people already looking for what you sell.',
    points: ['Search foundations', 'Pages built for one clear action', 'Credible first impression'],
  },
  {
    stage: 'Convert',
    title: 'More of them become customers',
    body: 'Instant replies, qualification and booking mean interest turns into a conversation while it is still warm.',
    points: ['Reply in seconds, not hours', 'Qualified before your team calls', 'Appointments booked automatically'],
  },
  {
    stage: 'Deliver',
    title: 'The work runs without the chaos',
    body: 'Orders, approvals, inventory and reporting move through one connected system instead of four disconnected ones.',
    points: ['One source of truth', 'Approvals that do not stall', 'Reports that build themselves'],
  },
  {
    stage: 'Scale',
    title: 'Growth stops meaning more headcount',
    body: 'Automation absorbs the repetitive volume, so taking on more customers does not mean hiring for every extra step.',
    points: ['Repetitive work handled', 'Capacity without new hires', 'Add workflows as you grow'],
  },
] as const;

/** Section 7 — why a buyer should pick a small Delhi studio. */
export const whyAitotech = [
  {
    title: 'You talk to the builder',
    body: 'No account manager relaying messages. The person on your first call designs and builds your system.',
  },
  {
    title: 'Business first, technology second',
    body: 'We start from what is costing you time or deals, not from a tool we happen to want to sell.',
  },
  {
    title: 'Built around your existing tools',
    body: 'WhatsApp, your CRM, your billing and your sheets keep working — we connect them instead of replacing them.',
  },
  {
    title: 'Websites and automation under one roof',
    body: 'The team that builds the site also builds the automation behind it, so they are designed to work together.',
  },
  {
    title: 'You see it before you commit',
    body: 'Every engagement starts with a working demo of your own workflow, not a slide deck.',
  },
  {
    title: 'We stay after launch',
    body: 'Software needs tending. We keep tuning as your volume grows and new edge cases appear.',
  },
] as const;

/**
 * Section 6 — what we can genuinely show today: our own products and the
 * industry demo templates. No client logos or outcomes until real ones exist
 * and the client has approved them.
 */
export const featured = [
  {
    visual: 'chat',
    kind: 'Our product',
    title: 'SalesConnect',
    body: 'Our AI sales assistant for local businesses: it turns WhatsApp and Instagram enquiries into booked clients with AI-drafted replies and automatic follow-ups, with the owner approving before anything is sent.',
    points: ['Replies in English, Hindi or Hinglish', 'Human-in-the-loop approval', 'Automatic follow-ups'],
    href: '/products/outreach',
    linkLabel: 'See SalesConnect',
  },
  {
    visual: 'templates',
    kind: 'Live demos',
    title: 'Industry demo templates',
    body: 'Browse working site templates built for specific trades — business, e-commerce, restaurant, clinic, real estate and portfolio — then tell us which fits and we build a demo around your own content.',
    points: ['Six industry templates', 'Fully browsable, not screenshots', 'Personalised demo on request'],
    href: '/demos',
    linkLabel: 'Browse the demos',
  },
] as const;

/** Honest trust signals — capability and practice, not invented metrics. */
export const trustPoints = [
  'Founder-led studio based in Delhi, India',
  'Registered business with Udyam registration',
  'Built on production-grade tools, not experiments',
  'Enquiries stored in your own database, not a shared one',
] as const;

/**
 * Section 8 — the working process. Deliberately worded to cover a website
 * build as well as an automation rollout, since both run the same way.
 */
export const processSteps = [
  { step: '01', title: 'Discover', body: 'A free call where we map your business, your customers and where the work gets stuck.' },
  { step: '02', title: 'Scope', body: 'We agree exactly what gets built, what it costs and when it lands — in writing.' },
  { step: '03', title: 'Design', body: 'Layouts, flows and screens you approve before a single line of code is written.' },
  { step: '04', title: 'Build', body: 'We build it on production-grade tools and connect it to the systems you already use.' },
  { step: '05', title: 'Launch', body: 'Testing, training and a careful go-live — with us watching the first days closely.' },
  { step: '06', title: 'Improve', body: 'We stay on after launch, tuning and extending as your volume and needs grow.' },
] as const;

/** The tools we actually build on — named, so the claim is checkable. */
export const stack = [
  'Next.js',
  'React Native',
  'Supabase',
  'WhatsApp Business API',
  'OpenAI',
  'n8n',
  'Vercel',
] as const;

export const dataPrinciples = [
  'Everything runs on your own accounts and numbers.',
  'Role-based access — people see only what they should.',
  'Human approval before anything sensitive goes out.',
  'Every automated action is logged and reviewable.',
] as const;
