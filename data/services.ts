/**
 * The AitoTech service catalogue.
 *
 * `catalogue` mirrors the columns of the Supabase `services` table and is the
 * static fallback when the database isn't reachable, so the site renders the
 * same list either way. Editable fields (title, short, description, features)
 * stay owned by the admin CMS.
 *
 * `details` holds the richer per-page content — benefits, use cases, process —
 * that the table has no columns for. Keyed by slug; a service with no entry
 * still renders a complete page from its catalogue fields alone.
 */

export type ServiceGroupId = 'presence' | 'software' | 'automation';

export interface ServiceGroup {
  id: ServiceGroupId;
  label: string;
  title: string;
  blurb: string;
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'presence',
    label: 'Websites & digital presence',
    title: 'Be the business they find, and trust',
    blurb:
      'The site a customer lands on decides whether they enquire or go back to the search results.',
  },
  {
    id: 'software',
    label: 'Applications & software',
    title: 'Software shaped around how you already work',
    blurb:
      'When a spreadsheet stops coping, this is the step that replaces it — without changing how your team thinks.',
  },
  {
    id: 'automation',
    label: 'AI & automation',
    title: 'The work that happens without anyone doing it',
    blurb:
      'Enquiries answered, follow-ups sent, approvals routed, systems kept in sync — day and night.',
  },
];

export interface ServiceCatalogueItem {
  slug: string;
  title: string;
  /** Benefit in one line — used on cards and as the page subtitle. */
  short: string;
  description: string;
  features: string[];
  icon: string;
  group: ServiceGroupId;
  /** Lower sorts first, matching services.sort_order. */
  order: number;
}

export const catalogue: ServiceCatalogueItem[] = [
  {
    slug: 'business-websites',
    title: 'Business Websites',
    short: 'A site that brings you enquiries, not just compliments.',
    description:
      'A fast, modern website built around the questions your customers actually ask — what you do, whether you serve their area, what it costs, and how to reach you. Search-ready from day one, with enquiry forms and WhatsApp chat wired in so interest turns into a conversation.',
    features: ['Custom design', 'SEO foundations', 'Enquiry forms', 'WhatsApp chat'],
    icon: 'globe',
    group: 'presence',
    order: 1,
  },
  {
    slug: 'landing-pages',
    title: 'Premium Landing Pages',
    short: 'One page, one offer, built to convert ad spend.',
    description:
      'When you are running ads, a general website splits attention. A landing page keeps one offer, one message and one action in front of the visitor, so the money you spend on clicks has somewhere to land.',
    features: ['Single clear offer', 'Fast load', 'A/B ready', 'Lead capture'],
    icon: 'target',
    group: 'presence',
    order: 2,
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce Development',
    short: 'Sell online without babysitting every order.',
    description:
      'A storefront with the parts that actually decide whether people buy: clear product pages, UPI and card payments that work on the first try, honest delivery information, and order updates that go out on their own.',
    features: ['UPI & card payments', 'Inventory sync', 'Order tracking', 'Abandoned-cart recovery'],
    icon: 'cart',
    group: 'presence',
    order: 3,
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    short: 'Replace the spreadsheet everyone is afraid to break.',
    description:
      'A tool your team opens in the browser and logs into — bookings, records, dashboards, approvals. Built for the way your business actually runs, with roles so people only see what they should.',
    features: ['Role-based access', 'Live dashboards', 'Reports', 'Works on any device'],
    icon: 'window',
    group: 'software',
    order: 4,
  },
  {
    slug: 'mobile-apps',
    title: 'Android & iOS Applications',
    short: 'Your business in your customer’s pocket.',
    description:
      'Booking, ordering and field-team apps built once for both platforms and shipped to the stores. Updates reach users over the air, so improvements land without anyone reinstalling anything.',
    features: ['Android & iOS', 'Play Store & App Store', 'Over-the-air updates', 'Works offline'],
    icon: 'mobile',
    group: 'software',
    order: 5,
  },
  {
    slug: 'custom-software',
    title: 'Custom Software',
    short: 'For the part of your business no product fits.',
    description:
      'Every business has one process that off-the-shelf software gets wrong. We build that piece properly, and connect it to the tools you already pay for instead of replacing them.',
    features: ['Built to your process', 'Connects to existing tools', 'Documented', 'Yours to own'],
    icon: 'code',
    group: 'software',
    order: 6,
  },
  {
    slug: 'crm-erp',
    title: 'CRM & ERP Development',
    short: 'One place where the business is actually visible.',
    description:
      'Customers, orders, inventory, invoices and team activity in one system instead of four spreadsheets and a WhatsApp group — so a question like “where is that order?” takes a second, not a phone call.',
    features: ['Customer & order records', 'Inventory', 'Invoicing', 'Owner dashboard'],
    icon: 'database',
    group: 'software',
    order: 7,
  },
  {
    slug: 'ai-chatbots',
    title: 'AI Chatbots',
    short: 'Answers your customers at 11 PM, in your words.',
    description:
      'A chatbot trained on your business — your services, pricing, timings and policies — not a generic bot. It answers the routine questions, captures the details that matter, and hands over to a human when it should.',
    features: ['Trained on your business', 'Captures enquiry details', 'Human handover', 'Website & WhatsApp'],
    icon: 'chat',
    group: 'automation',
    order: 8,
  },
  {
    slug: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    short: 'Reply in seconds, follow up without remembering to.',
    description:
      'Most Indian businesses already run on WhatsApp. We make it work properly: instant replies to new enquiries, follow-ups that go out on schedule, reminders before appointments, and every conversation recorded where you can see it.',
    features: ['Instant first reply', 'Scheduled follow-ups', 'Appointment reminders', 'Official Business API'],
    icon: 'whatsapp',
    group: 'automation',
    order: 9,
  },
  {
    slug: 'ai-voice-agents',
    title: 'AI Voice Agents',
    short: 'Nobody has to let the phone ring out.',
    description:
      'A voice agent that picks up missed calls, confirms appointments and qualifies enquiries over a normal phone conversation — then writes what it learned into your system so your team starts informed.',
    features: ['Answers missed calls', 'Appointment confirmation', 'Call summaries', 'Hands over to your team'],
    icon: 'voice',
    group: 'automation',
    order: 10,
  },
  {
    slug: 'process-automation',
    title: 'Business Process Automation',
    short: 'Give your team back the hours they lose to copy-paste.',
    description:
      'The repetitive middle of your operations — data moving between systems, approvals waiting on a message, reports someone rebuilds every Friday — handled automatically, with a person still approving anything that matters.',
    features: ['Approval routing', 'Automatic reports', 'No manual re-entry', 'Human-in-the-loop'],
    icon: 'workflow',
    group: 'automation',
    order: 11,
  },
  {
    slug: 'api-integrations',
    title: 'API Integrations',
    short: 'Make the tools you already pay for talk to each other.',
    description:
      'Your website, CRM, billing, inventory and WhatsApp each hold a piece of the truth. We connect them so a change in one place shows up everywhere, and nobody is re-typing the same customer into three systems.',
    features: ['Two-way sync', 'Payment & billing', 'Tally / ERP', 'Error alerts'],
    icon: 'link',
    group: 'automation',
    order: 12,
  },
];

export interface ServiceDetail {
  /** What the customer gains — outcomes, not features. */
  benefits: { title: string; body: string }[];
  /** Concrete situations a visitor can recognise themselves in. */
  useCases: string[];
  /** How a project of this kind runs. */
  process: { step: string; title: string; body: string }[];
  /** Button label that matches the intent of this service. */
  cta: string;
}

const BUILD_PROCESS: ServiceDetail['process'] = [
  { step: '01', title: 'Understand', body: 'We learn what your customers ask for and where enquiries are being lost today.' },
  { step: '02', title: 'Design', body: 'You see the layout and copy before anything is built, and changes are cheap at this stage.' },
  { step: '03', title: 'Build', body: 'We build it, connect your forms and WhatsApp, and test it on real phones.' },
  { step: '04', title: 'Launch & support', body: 'We put it live, hand over the logins, and stay available for changes.' },
];

const SOFTWARE_PROCESS: ServiceDetail['process'] = [
  { step: '01', title: 'Map the workflow', body: 'We sit with the people doing the work and write down how it actually happens.' },
  { step: '02', title: 'Design the system', body: 'We agree the screens, roles and rules before writing code.' },
  { step: '03', title: 'Build & test', body: 'We build in stages so you are using something real early, not at the end.' },
  { step: '04', title: 'Train & improve', body: 'We train your team, watch the first weeks, and tune what gets in the way.' },
];

const AUTOMATION_PROCESS: ServiceDetail['process'] = [
  { step: '01', title: 'Free audit', body: 'We map the workflow and mark the steps costing the most time or deals.' },
  { step: '02', title: 'Design the flow', body: 'We design it around your existing tools, with a human approving anything sensitive.' },
  { step: '03', title: 'Build & connect', body: 'We build the automation and connect it to WhatsApp, your CRM and your systems.' },
  { step: '04', title: 'Monitor & tune', body: 'We watch real conversations and keep improving as edge cases appear.' },
];

export const details: Record<string, ServiceDetail> = {
  'business-websites': {
    benefits: [
      { title: 'Found by people already looking', body: 'Built on search foundations so you appear when someone searches your service and city.' },
      { title: 'Enquiries, not just visits', body: 'Clear calls to action and WhatsApp chat turn a visitor into a conversation.' },
      { title: 'Credible at first glance', body: 'A considered site makes a small business look like the safe choice.' },
    ],
    useCases: [
      'A showroom that wants enquiries from its own area instead of relying on listing portals.',
      'A clinic or consultant whose patients look them up before booking.',
      'A manufacturer who needs a serious profile to send to prospective buyers.',
    ],
    process: BUILD_PROCESS,
    cta: 'Get a Business Website',
  },
  'landing-pages': {
    benefits: [
      { title: 'Your ad budget works harder', body: 'One offer and one action means fewer visitors leave without doing anything.' },
      { title: 'Live quickly', body: 'A focused page can be ready in days, so a campaign is not waiting on a full website.' },
      { title: 'You can see what works', body: 'Built so two versions can be compared instead of guessed about.' },
    ],
    useCases: [
      'A property launch that needs site-visit bookings while the campaign runs.',
      'A seasonal offer that deserves its own page rather than a buried section.',
      'A new service being tested before it earns a place on the main site.',
    ],
    process: BUILD_PROCESS,
    cta: 'Discuss Your Project',
  },
  ecommerce: {
    benefits: [
      { title: 'Payments that do not fail', body: 'UPI and cards set up and tested properly, because a failed payment is a lost sale.' },
      { title: 'Fewer “where is my order” messages', body: 'Customers get updates automatically, so your staff can sell instead of reply.' },
      { title: 'Stock stays honest', body: 'Inventory updates as orders come in, so you are not selling what you do not have.' },
    ],
    useCases: [
      'A retailer moving beyond WhatsApp orders and a paper ledger.',
      'A wholesaler who wants regular buyers to reorder without a phone call.',
      'A brand that wants to sell directly instead of only through marketplaces.',
    ],
    process: BUILD_PROCESS,
    cta: 'Discuss Your Project',
  },
  'web-applications': {
    benefits: [
      { title: 'One version of the truth', body: 'Everyone works from the same records instead of their own copy of a sheet.' },
      { title: 'People see only what they should', body: 'Roles keep sensitive numbers away from those who do not need them.' },
      { title: 'Answers without asking', body: 'A dashboard replaces the daily round of status phone calls.' },
    ],
    useCases: [
      'A service business tracking jobs from enquiry to completion.',
      'A team whose shared spreadsheet keeps breaking as it grows.',
      'An owner who wants to see the day’s numbers without calling anyone.',
    ],
    process: SOFTWARE_PROCESS,
    cta: 'Discuss Your Project',
  },
  'mobile-apps': {
    benefits: [
      { title: 'You are one tap away', body: 'An icon on the home screen beats being one of fifty browser tabs.' },
      { title: 'Field teams can work anywhere', body: 'Offline support means a weak signal does not stop the job.' },
      { title: 'Improvements land quietly', body: 'Over-the-air updates reach users without a store review or a reinstall.' },
    ],
    useCases: [
      'A booking or ordering app customers use again and again.',
      'A field team recording work, photos and signatures on site.',
      'A loyalty or membership programme that lives on the phone.',
    ],
    process: SOFTWARE_PROCESS,
    cta: 'Discuss Your Project',
  },
  'custom-software': {
    benefits: [
      { title: 'Fits your process, not the other way round', body: 'You stop bending your business to suit a product you rented.' },
      { title: 'Keeps your existing tools', body: 'We connect to what you already pay for instead of forcing a migration.' },
      { title: 'You own it', body: 'The system and its documentation are yours, with no per-seat fee growing every year.' },
    ],
    useCases: [
      'A process so specific that every product you tried needed a workaround.',
      'A business paying for several tools that still do not talk to each other.',
      'A workflow that currently only works because one experienced person remembers it.',
    ],
    process: SOFTWARE_PROCESS,
    cta: 'Discuss Your Project',
  },
  'crm-erp': {
    benefits: [
      { title: 'No lead quietly disappears', body: 'Every enquiry has an owner and a next step instead of living in someone’s inbox.' },
      { title: 'The business is visible', body: 'Orders, stock, payments and follow-ups in one place you can actually check.' },
      { title: 'Handover stops being risky', body: 'When someone is away or leaves, the history stays with the business.' },
    ],
    useCases: [
      'A sales team losing track of who was supposed to call whom back.',
      'A distributor reconciling orders, stock and payments by hand.',
      'An owner who finds out about problems a week after they happen.',
    ],
    process: SOFTWARE_PROCESS,
    cta: 'Discuss Your Project',
  },
  'ai-chatbots': {
    benefits: [
      { title: 'Always the first to reply', body: 'The business that answers first usually gets the enquiry, including after hours.' },
      { title: 'Your team stops repeating itself', body: 'Timings, pricing and directions get answered without a person typing them again.' },
      { title: 'Warm leads, not raw ones', body: 'The details you need are captured before the conversation reaches your team.' },
    ],
    useCases: [
      'A clinic answering timings, fees and preparation questions around the clock.',
      'A dealership qualifying budget and model before a salesperson calls.',
      'Any business where the same ten questions arrive every day.',
    ],
    process: AUTOMATION_PROCESS,
    cta: 'Automate My Business',
  },
  'whatsapp-automation': {
    benefits: [
      { title: 'Seconds, not next morning', body: 'A new enquiry gets a real answer immediately, while interest is still high.' },
      { title: 'Follow-ups actually happen', body: 'Most deals need several touches; scheduled follow-ups do not forget.' },
      { title: 'Fewer no-shows', body: 'Timed reminders measurably reduce empty appointment slots.' },
    ],
    useCases: [
      'A property dealer replying to portal leads the moment they arrive.',
      'A clinic or salon reminding patients the day before.',
      'A wholesaler taking repeat orders in a single message.',
    ],
    process: AUTOMATION_PROCESS,
    cta: 'Automate My Business',
  },
  'ai-voice-agents': {
    benefits: [
      { title: 'Missed calls stop being lost customers', body: 'The call is answered even when everyone is busy or it is after hours.' },
      { title: 'Your team starts informed', body: 'A written summary of the call reaches them before they dial back.' },
      { title: 'Calls at scale', body: 'Confirmations and reminders go out without anyone sitting on a phone.' },
    ],
    useCases: [
      'Confirming appointments the day before so slots do not go empty.',
      'Answering enquiry calls at times when nobody is at the desk.',
      'Following up with people who filled in a form but never picked up.',
    ],
    process: AUTOMATION_PROCESS,
    cta: 'Automate My Business',
  },
  'process-automation': {
    benefits: [
      { title: 'Hours back every week', body: 'The copy-paste middle of the day stops consuming skilled people.' },
      { title: 'Work stops waiting on approvals', body: 'Requests reach the right person where they already are, and get logged.' },
      { title: 'Reports build themselves', body: 'The numbers are ready on Monday morning without anyone assembling them.' },
    ],
    useCases: [
      'Orders arriving in one system and being typed into another.',
      'Approvals that stall because one person has not seen a message.',
      'A weekly report someone rebuilds by hand every single week.',
    ],
    process: AUTOMATION_PROCESS,
    cta: 'Automate My Business',
  },
  'api-integrations': {
    benefits: [
      { title: 'Enter it once', body: 'A customer or order typed in one place appears everywhere it is needed.' },
      { title: 'Fewer quiet mistakes', body: 'Manual re-entry is where wrong numbers and missed orders come from.' },
      { title: 'You hear when something breaks', body: 'Failed syncs raise an alert instead of going unnoticed for a week.' },
    ],
    useCases: [
      'Website enquiries landing straight in the CRM with their source attached.',
      'Orders and invoices flowing into Tally or your accounting system.',
      'Payment and delivery status reflected back to the customer automatically.',
    ],
    process: AUTOMATION_PROCESS,
    cta: 'Discuss Your Project',
  },
};

export function getServiceDetail(slug: string) {
  return details[slug];
}

export function servicesInGroup(group: ServiceGroupId) {
  return catalogue.filter((s) => s.group === group).sort((a, b) => a.order - b.order);
}
