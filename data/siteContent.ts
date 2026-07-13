/**
 * ═══════════════════════════════════════════════════════════════════
 *  AitoTech — SINGLE SOURCE OF TRUTH FOR ALL WEBSITE CONTENT
 *  Edit text, contact info, and image paths here only.
 * ═══════════════════════════════════════════════════════════════════
 */

/** Brand & contact */
export const site = {
  name: 'AitoTech',
  tagline: 'Websites · Apps · AI · Automation',
  email: 'info@aitotech.in',
  address: 'Delhi, India',
  website: 'https://aitotech.in',
  responseTime: 'Within 24 hours on business days',
  founder: {
    name: 'Ujjwal',
    role: 'Founder & CEO',
    photo: '/images/founder.jpg',
    initials: 'UC',
  },
  social: {
    // TODO(founder): confirm the LinkedIn / Instagram handles below
    instagram: 'https://www.instagram.com/aitotech.in',
    facebook: '',
    x: '',
    linkedin: 'https://www.linkedin.com/company/aitotech',
    discord: '',
    youtube: '',
    github: 'https://github.com/ujjwal-coder211',
  },
  map: {
    lat: 28.7041,
    lng: 77.1025,
    embedUrl: 'https://maps.google.com/maps?q=28.7041,77.1025&z=12&output=embed',
    directionsUrl: 'https://www.google.com/maps?q=28.7041,77.1025',
  },
} as const;

export const images = {
  logo: '/images/logo-full.png',
  logoMark: '/images/logo-mark.png',
  founder: '/images/founder-placeholder.jpg',
  heroDashboard: '/images/hero-dashboard-placeholder.jpg',
  office: '/images/office-placeholder.jpg',
  ogImage: '/images/og.png',
  services: {
    'data-automation': '/images/services/data-automation.jpg',
    'workflow-automation': '/images/services/workflow.jpg',
    'invoice-intelligence': '/images/services/invoice.jpg',
    'custom-ai': '/images/services/custom-ai.jpg',
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/demos', label: 'Demos' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const cta = {
  primary: 'Book a Call',
  secondary: 'View Services',
  contact: 'Get in Touch',
} as const;

/** Shared delivery methodology */
export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    body: 'We map your workflows, pain points, and KPIs with stakeholders in structured discovery sessions.',
  },
  {
    step: '02',
    title: 'Design',
    body: 'We architect secure integrations, automation pipelines, and AI models tailored to your stack.',
  },
  {
    step: '03',
    title: 'Deploy',
    body: 'We ship to production with monitoring, documentation, and hands-on training for your team.',
  },
  {
    step: '04',
    title: 'Scale',
    body: 'We optimize continuously as volume grows — new use cases without rebuilding from scratch.',
  },
] as const;

/** ─── HOME PAGE ─── */
export const home = {
  hero: {
    badge: 'Websites · Apps · AI · Automation',
    title: 'AitoTech',
    subheadline: 'Software and automation that actually works for your business.',
    description:
      'A Delhi-based studio building websites, mobile apps, and AI automation for small and growing businesses — and our own products along the way.',
    ctaPrimary: 'Start a Project',
    ctaSecondary: 'See What We Build',
  },
  /** Honest, verifiable facts — no inflated client counts or invented ROI numbers */
  facts: [
    { value: '2026', label: 'Founded · Delhi, India' },
    { value: 'Founder-led', label: 'You work directly with the maker' },
    { value: '< 24h', label: 'Enquiry response time' },
    { value: '100%', label: 'Built in-house — no outsourcing' },
  ],
  trust: {
    label: 'Built with modern, production-grade tools',
    clients: ['Next.js', 'React Native', 'Supabase', 'OpenAI', 'n8n', 'WhatsApp API'],
  },
  products: {
    eyebrow: 'Our Product',
    title: 'SalesConnect',
    highlight: 'Coming soon',
    description:
      'Our own AI sales assistant for local businesses — clinics, dentists, property dealers, and agencies. Turn WhatsApp and Instagram enquiries into booked clients with AI-drafted replies and automatic follow-ups.',
    outreach: {
      badge: 'In development · Join the waitlist',
      summary:
        'SalesConnect helps local service businesses reply to every enquiry with an AI-drafted message in English, Hindi, or Hinglish, and schedules follow-ups so no lead is forgotten. We are building it now — join the waitlist for early access.',
      downloadCta: 'Join the waitlist',
      learnMore: 'Learn more',
      requestAccess: 'Get early access',
    },
  },
  bento: {
    eyebrow: 'What We Do',
    title: 'Automation',
    highlight: 'Built for Scale',
    description: 'Four core service lines — each delivered by a dedicated pod with clear SLAs and measurable outcomes.',
    viewAll: 'View all services',
  },
  process: {
    eyebrow: 'How We Work',
    title: 'A clear path from',
    highlight: 'idea to impact',
    description: 'Fixed phases, transparent timelines, and results you can measure — not endless slide decks.',
  },
  whyChooseUs: {
    eyebrow: 'Why AitoTech',
    title: 'Built for',
    highlight: 'Real Results',
    description: 'We are a long-term automation partner — not a vendor that ships and disappears.',
    items: [
      {
        title: 'Outcome-first delivery',
        body: 'Every project starts with measurable KPIs: hours saved, error rates, cost per transaction.',
      },
      {
        title: 'Security by design',
        body: 'Enterprise-grade architecture with strict data boundaries for regulated industries.',
      },
      {
        title: 'Embedded partnership',
        body: 'Our architects work alongside your team from discovery through scale.',
      },
      {
        title: 'Adaptive intelligence',
        body: 'Systems that learn from your workflows and improve accuracy over time.',
      },
    ],
  },
  cta: {
    title: 'Ready to',
    highlight: 'automate?',
    description: 'Book a free strategy call. We will map your workflows and define clear goals before any code is written.',
    button: 'Book a Call',
  },
} as const;

/** ─── PORTFOLIO / WORK GRID (home) ─── */
export const portfolio = {
  eyebrow: 'What We Build',
  title: 'Everything a growing business needs,',
  highlight: 'built by hand',
  description:
    'Websites, mobile apps, and AI automation — designed, built, and maintained for small and growing businesses.',
  items: [
    {
      title: 'Business Websites',
      kind: 'Web Design · Live Demos',
      body: 'Fast, modern websites with booking, payments, WhatsApp chat, and AI built in — browse demo templates for your industry.',
      tags: ['Next.js', 'SEO', 'AI Chat'],
      href: '/demos',
      icon: 'globe',
      featured: true,
    },
    {
      title: 'Mobile Apps',
      kind: 'Android & iOS',
      body: 'Booking, ordering, and field-team apps — from idea to the store, with updates delivered over the air.',
      tags: ['React Native', 'Play Store', 'OTA'],
      href: '/demos',
      icon: 'mobile',
      featured: true,
    },
    {
      title: 'WhatsApp & Workflow Automation',
      kind: 'Automation',
      body: 'Auto-replies, lead follow-ups, and approvals that run on WhatsApp and the tools you already use.',
      tags: ['WhatsApp API', 'CRM', 'n8n'],
      href: '/services/workflow-automation',
      icon: 'workflow',
      featured: false,
    },
    {
      title: 'AI Tools & Chatbots',
      kind: 'Custom AI',
      body: 'Chatbots trained on your business, private knowledge bases, and AI assistants that fit your workflow.',
      tags: ['Chatbots', 'RAG', 'Assistants'],
      href: '/services/custom-ai',
      icon: 'ai',
      featured: false,
    },
  ],
} as const;

/** ─── CASE STUDIES — real shipped work, honest social proof ─── */
export const caseStudies = {
  eyebrow: 'Our Own Products',
  title: 'We build our own products,',
  highlight: 'not just client work',
  description:
    'No borrowed logos and no inflated numbers — these are products we are designing and building ourselves. The same team builds your project.',
  items: [
    {
      name: 'SalesConnect',
      status: 'In development · Waitlist open',
      summary:
        'An AI sales assistant for local businesses — clinics, dentists, property dealers, and agencies. It turns WhatsApp and Instagram enquiries into booked clients with AI-drafted replies and automatic follow-ups.',
      points: [
        'AI-drafted replies in English, Hindi, or Hinglish',
        'Human-in-the-loop — the owner always reviews before sending',
        'Automatic follow-ups so no enquiry is ever forgotten',
      ],
      href: '/products/outreach',
    },
    {
      name: 'Sarva AI · SAIRA',
      status: 'In development',
      summary:
        'Our in-house AI project — an intelligent routing engine that classifies each task and picks the right model for it. The foundation that powers our automation and future products.',
      points: [
        'Task classification with smart model routing',
        'Persistent per-project memory and context',
        'Being built and researched by our own team',
      ],
      href: '/routely',
    },
  ],
} as const;

/** ─── SERVICES PAGE ─── */
export const servicesPage = {
  hero: {
    badge: 'Services',
    title: 'Websites, apps, AI &',
    highlight: 'automation',
    description:
      'Everything a business needs to go digital and run on autopilot — designed, built, and maintained end to end.',
  },
  process: {
    eyebrow: 'Methodology',
    title: 'How we',
    highlight: 'deliver',
    description: 'A proven four-phase engagement model with clear milestones and measurable outcomes.',
  },
} as const;

/** Service catalog */
export const services = [
  {
    slug: 'website-development',
    title: 'Business Websites',
    short: 'Fast, modern sites that convert.',
    description:
      'SEO-ready websites with booking, payments, WhatsApp chat, and AI built in — designed, built, and hosted end to end for your business.',
    features: ['Custom design', 'SEO & analytics', 'Booking & payments', 'WhatsApp + AI chat'],
    gradient: 'from-indigo-500/15 via-indigo-500/5 to-transparent',
    accent: 'text-brand-light',
    bentoLg: 'lg:col-span-2 lg:row-span-1',
    icon: 'globe',
    comingSoon: false,
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    short: 'Android & iOS, idea to store.',
    description:
      'Booking, ordering, and field-team apps built with React Native — shipped to the Play Store with over-the-air updates so new features land without reinstalls.',
    features: ['Android & iOS', 'Play Store publishing', 'OTA updates', 'Offline-first'],
    gradient: 'from-indigo-500/15 via-indigo-500/5 to-transparent',
    accent: 'text-brand-light',
    bentoLg: 'lg:col-span-2 lg:row-span-1',
    icon: 'mobile',
    comingSoon: false,
  },
  {
    slug: 'workflow-automation',
    title: 'WhatsApp & Workflow Automation',
    short: 'Automate the busywork, not your judgement.',
    description:
      'Auto-replies, lead follow-ups, and approval flows that run on WhatsApp and the tools you already use — so nothing slips through the cracks.',
    features: ['WhatsApp auto-replies', 'Lead follow-ups', 'Multi-app workflows', 'CRM sync'],
    gradient: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    accent: 'text-violet-400',
    bentoLg: 'lg:col-span-2 lg:row-span-1',
    icon: 'workflow',
    comingSoon: false,
    imageKey: 'workflow-automation' as const,
  },
  {
    slug: 'custom-ai',
    title: 'AI Tools & Chatbots',
    short: 'AI that fits your business.',
    description:
      'Chatbots trained on your business, private knowledge bases, and AI assistants that answer questions, qualify leads, and help your team — not generic bots stapled onto your stack.',
    features: ['Business-trained chatbots', 'Private knowledge base', 'Lead qualification', 'Human-in-the-loop'],
    gradient: 'from-emerald-500/15 via-cyan-500/10 to-transparent',
    accent: 'text-emerald-400',
    bentoLg: 'lg:col-span-2 lg:row-span-1',
    icon: 'ai',
    comingSoon: false,
    imageKey: 'custom-ai' as const,
  },
] as const;

export type ServiceSlug = (typeof services)[number]['slug'];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** ─── ABOUT PAGE ─── */
export const aboutPage = {
  hero: {
    eyebrow: 'About Us',
    title: 'Engineering the',
    highlight: 'Future of Work',
    description:
      'AitoTech was founded on a simple belief: AI should remove friction, not add complexity.',
  },
  founder: {
    initials: 'UC',
    role: 'Founder & CEO',
    company: 'AitoTech',
    established: 'Est. 2026 · Delhi, India',
    letterTitle: 'A note from the',
    letterHighlight: 'founder',
    paragraphs: [
      'I started AitoTech in 2026 from Delhi with a simple goal: give small and growing businesses the kind of software and automation that usually only big companies can afford.',
      'We are a small, engineering-first team — and we build our own products too. SalesConnect, our AI sales assistant for local businesses, is in active development, and Sarva, our in-house AI project, is being researched and built right now. Building our own products keeps us honest: every client project gets the same discipline.',
      'No slide decks, no outsourcing chains. You talk directly to the people who build your system, and every engagement starts with a working demo — so you see exactly what you are getting before you commit.',
    ],
    signature: '— Ujjwal, Founder & CEO',
    imageAlt: 'Ujjwal — Founder & CEO, AitoTech',
  },
  pillars: [
    { title: 'Mission', body: 'Make enterprise automation accessible, measurable, and human-centered.' },
    { title: 'Vision', body: 'A world where every team operates at the speed of insight — not manual labor.' },
    { title: 'Values', body: 'Transparency, security, and outcomes over vanity metrics.' },
  ],
  team: {
    title: 'Small team, direct access',
    body: 'AitoTech is deliberately small. The person you talk to on the first call is the person who designs and builds your system — no account managers, no hand-offs, no outsourcing chains.',
  },
  ctaButton: 'Book a Call',
} as const;

/** ─── CONTACT PAGE ─── */
export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    title: "Let's",
    highlight: 'Build Together',
    description:
      'Tell us about your automation goals. We respond within one business day.',
  },
  infoCards: [
    { label: 'Email', value: site.email, icon: 'mail' },
    { label: 'WhatsApp', value: 'Chat with us directly', icon: 'whatsapp' },
    { label: 'Office', value: site.address, icon: 'location' },
    { label: 'Response', value: site.responseTime, icon: 'clock' },
  ],
  form: {
    nameLabel: 'Full Name',
    emailLabel: 'Email',
    companyLabel: 'Company',
    messageLabel: 'Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Thank you! Your message has been received. We will respond within one business day.',
    placeholders: {
      name: 'Jane Smith',
      email: 'jane@company.com',
      company: 'Acme Inc.',
      message: 'Tell us about your automation goals, team size, and timeline...',
    },
  },
  map: {
    title: 'Visit Us',
    body: 'Delhi, India · 28.7041° N, 77.1025° E',
    directions: 'Get directions',
  },
} as const;

/** ─── FOOTER ─── */
export const footer = {
  blurb: 'Websites, AI systems, and business automation — engineered end to end.',
  navigateTitle: 'Navigate',
  servicesTitle: 'Services',
  contactTitle: 'Contact',
} as const;

/** ─── DEMOS PAGE ─── */
export const demosPage = {
  hero: {
    eyebrow: 'Demos & Templates',
    title: 'See your project',
    highlight: 'before we build it',
    description:
      'Browse demo templates, tell us your requirement, and we prepare a personalised demo — your brand, your content, your workflow.',
  },
  websitesTitle: 'Website templates',
  automationsTitle: 'Automation demos',
  requestCta: 'Request this demo',
  templates: [
    {
      slug: 'business',
      name: 'Business Website',
      blurb: 'Company profile, services, enquiry forms, and WhatsApp chat.',
      tags: ['5–7 pages', 'SEO-ready', 'Enquiry form'],
      accent: '#5e6ad2',
    },
    {
      slug: 'ecommerce',
      name: 'E-commerce Store',
      blurb: 'Product catalog, cart, UPI/card payments, order tracking.',
      tags: ['Payments', 'Inventory', 'WhatsApp updates'],
      accent: '#0ea5e9',
    },
    {
      slug: 'restaurant',
      name: 'Restaurant & Café',
      blurb: 'Digital menu, table booking, QR ordering, and reviews.',
      tags: ['QR menu', 'Booking', 'Google Maps'],
      accent: '#f59e0b',
    },
    {
      slug: 'clinic',
      name: 'Clinic & Healthcare',
      blurb: 'Doctor profiles, appointment booking, patient reminders.',
      tags: ['Appointments', 'Reminders', 'WhatsApp alerts'],
      accent: '#10b981',
    },
    {
      slug: 'realestate',
      name: 'Real Estate',
      blurb: 'Property listings with filters, site-visit booking, lead capture.',
      tags: ['Listings', 'Lead capture', 'Map view'],
      accent: '#ec4899',
    },
    {
      slug: 'portfolio',
      name: 'Portfolio & Personal Brand',
      blurb: 'Showcase your work with testimonials, blog, and bookings.',
      tags: ['Showcase', 'Blog', 'Booking'],
      accent: '#6366f1',
    },
  ],
  automations: [
    {
      slug: 'whatsapp-bot',
      name: 'WhatsApp Auto-Reply Bot',
      blurb: 'Answers enquiries 24×7, qualifies leads, books appointments.',
      icon: 'workflow',
    },
    {
      slug: 'invoice-automation',
      name: 'Invoice → ERP Automation',
      blurb: 'Reads invoices from email, extracts data, pushes to your ERP or Tally.',
      icon: 'invoice',
    },
    {
      slug: 'lead-sync',
      name: 'Lead Capture + CRM Sync',
      blurb: 'Website and social leads land in your CRM with instant follow-up.',
      icon: 'database',
    },
    {
      slug: 'ai-chatbot',
      name: 'AI Website Chatbot',
      blurb: 'Trained on your business — quotes, FAQs, and bookings on your site.',
      icon: 'ai',
    },
  ],
  form: {
    title: 'Tell us your requirement',
    subtitle: 'We reply with a personalised demo within 1–2 business days.',
    nameLabel: 'Your Name',
    emailLabel: 'Email',
    companyLabel: 'Business Name',
    typeLabel: 'What do you need?',
    types: [
      'Business Website',
      'E-commerce Store',
      'Restaurant & Café',
      'Clinic & Healthcare',
      'Real Estate',
      'Portfolio & Personal Brand',
      'Mobile App',
      'WhatsApp Automation',
      'Invoice Automation',
      'AI Chatbot',
      'Other',
    ],
    messageLabel: 'Describe your requirement',
    messagePlaceholder: 'e.g. I need an appointment booking website for my clinic with WhatsApp reminders…',
    submit: 'Request My Demo',
    sending: 'Sending…',
    success: 'Got it! We will email your personalised demo within 1–2 business days.',
    error: 'Something went wrong. Try again or email info@aitotech.in',
  },
} as const;

/** Service detail page shared copy */
export const serviceDetail = {
  ctaTitle: (name: string) => `Ready to deploy ${name}?`,
  ctaBody:
    'Schedule a discovery session — we will map your workflows and define measurable outcomes.',
  ctaButton: 'Book a Call',
} as const;

/** Outreach app product pages — /products/outreach/* */
export const outreachProduct = {
  slug: 'salesconnect',
  name: 'SalesConnect',
  tagline: 'AI Sales Assistant for Local Businesses',
  poweredBy: 'Aitotech',
  status: 'In development',
  contactEmail: site.email,
  hero: {
    eyebrow: 'Aitotech Product · In development',
    title: 'SalesConnect',
    highlight: 'Coming soon',
    description:
      'An AI sales assistant for local businesses — clinics, dentists, property dealers, brokers, and agencies. Turn WhatsApp and Instagram enquiries into booked clients with AI-drafted replies and automatic follow-ups. We are building it now — join the waitlist for early access.',
  },
  waitlist: {
    title: 'Join the SalesConnect waitlist',
    subtitle: 'In development · Be first to get early access when we launch.',
    note:
      'SalesConnect is not available to download yet. Leave your details and we will email you the moment early access opens.',
    caption: 'No spam — just one email when SalesConnect is ready.',
  },
  features: [
    { title: 'Every enquiry captured', body: 'Contacts from WhatsApp, Instagram, uploads, or added by hand — all in one place.' },
    { title: 'AI-drafted replies', body: 'Personalised replies in English, Hindi, or Hinglish that match your business.' },
    { title: 'You stay in control', body: 'The AI drafts, you review and send — nothing goes out without your okay.' },
    { title: 'Automatic follow-ups', body: 'Scheduled reminders so no enquiry is ever forgotten.' },
    { title: 'Built for your trade', body: 'Tuned for clinics, dentists, property dealers, brokers, and agencies.' },
    { title: 'Simple and mobile', body: 'A clean mobile app — no training or complex setup needed.' },
  ],
  demoSteps: [
    { step: '01', title: 'Set up your business', body: 'Pick your industry and answer a few questions so the AI understands your work.' },
    { step: '02', title: 'Bring in enquiries', body: 'Upload contacts or let WhatsApp / Instagram enquiries arrive automatically.' },
    { step: '03', title: 'Get an AI draft', body: 'For each lead, SalesConnect drafts a personalised reply in your language.' },
    { step: '04', title: 'Review and send', body: 'Tweak if you want, then send on WhatsApp or email — you are always in control.' },
    { step: '05', title: 'Never miss a follow-up', body: 'Follow-ups are scheduled automatically so no enquiry slips away.' },
  ],
  docs: {
    title: 'Overview',
    sections: [
      {
        heading: 'Who is it for?',
        bullets: [
          'Dental clinics, doctors, and healthcare practices',
          'Property dealers, brokers, and real-estate agents',
          'Local service agencies turning enquiries into clients',
        ],
      },
      {
        heading: 'Status & support',
        bullets: ['SalesConnect is in active development', 'Questions? Email info@aitotech.in or chat with us on WhatsApp'],
      },
    ],
  },
  faq: [
    {
      q: 'Is SalesConnect available now?',
      a: 'Not yet — it is in active development. Join the waitlist and we will email you the moment early access opens.',
    },
    {
      q: 'Which businesses is it for?',
      a: 'Local service businesses in India — clinics, dentists, property dealers, brokers, and agencies that get enquiries on WhatsApp and Instagram.',
    },
    {
      q: 'Does the AI send messages on its own?',
      a: 'No. SalesConnect drafts the reply; you always review and send it yourself.',
    },
  ],
} as const;

/** Routely product pages — /routely, /docs, /aksh/* */
export const routely = {
  badge: 'SAIRA Phase 1 · Made in India',
  title: 'Routely',
  headline: 'Code with AI. SAIRA routes the best free model for you.',
  subtitle: 'Routely — Omni, Harness, Hermes',
  tagline: 'PERCEIVE → DECIDE → ACT → REMEMBER → IMPROVE. Browser or desktop.',
  heroLead:
    'Tell Omni what to build or fix. SAIRA classifies your task, cold-start routes to the best free model, and Harness edits your project while Hermes remembers context.',
  description:
    'Routely by AitoTech — SAIRA Phase 1 with Omni chat, Harness IDE, Hermes memory, and smart model routing. Join the waitlist before public launch.',
  elevatorPitch:
    'One coding agent loop — Omni chat, Harness IDE, Hermes memory, and cold-start routing — in your browser or on your machine.',
  elevatorLabel: 'In one line',
  cta: 'Join the waitlist',
  ctaSecondary: 'Try Phase 1 demo',
  ctaTryBrowser: 'Try in browser',
  tryBrowserHref: 'https://app.routely.aitotech.in',
  ctaHint: 'Early access · launch news · no spam',
  status: 'Phase 1 mock live — waitlist open · browser beta next',
  waitlistSubtitle: 'Join the waitlist. We will email you when Routely opens.',
  roadmap: [
    { phase: 'Now', label: 'SAIRA Phase 1 mock UI, waitlist, and docs live on aitotech.in', done: true },
    { phase: 'Next', label: 'Live Omni + Harness + Hermes at app.routely.aitotech.in', done: false },
    { phase: 'Later', label: 'Online routing learning · desktop download · India E2E hosting', done: false },
  ],
  features: [
    {
      title: 'Omni — chat & classify',
      body: 'Describe tasks in plain English. Omni classifies CODE_GEN, DEBUG, DEPLOY, and more — then shows which free model SAIRA picked.',
    },
    {
      title: 'Harness — browser IDE',
      body: 'File tree, editor, live preview, and terminal. ACT on your codebase without leaving Routely Studio.',
    },
    {
      title: 'Hermes — memory & skills',
      body: 'Threads and extracted skills persist per project. REMEMBER context when you reopen a chat or switch tasks.',
    },
    {
      title: 'Cold-start routing',
      body: 'Section 8.1 defaults route each task class to the best free OpenRouter model — no manual picker. IMPROVE weights over time.',
    },
  ],
  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@email.com',
    roleLabel: 'I am a…',
    roles: [
      { value: 'developer', label: 'Developer' },
      { value: 'student', label: 'Student' },
      { value: 'founder', label: 'Founder / startup' },
      { value: 'enterprise', label: 'Company' },
      { value: 'other', label: 'Other' },
    ],
    interestLabel: 'I want',
    interests: [
      { value: 'browser', label: 'Browser (try online)' },
      { value: 'desktop', label: 'Desktop download' },
      { value: 'both', label: 'Both' },
    ],
    success: 'You are on the Routely list! We will email you before launch.',
    error: 'Something went wrong. Try again or email info@aitotech.in',
  },
  faqs: [
    {
      q: 'What is Routely?',
      a: 'Routely is AitoTech\'s AI coding platform. SAIRA Phase 1 combines Omni (chat), Harness (IDE), and Hermes (memory) with automatic model routing.',
    },
    {
      q: 'Do I choose an AI model?',
      a: 'No. SAIRA cold-start routing picks the best free model per task class — CODE_GEN, DEBUG, DEPLOY, SECURITY, and more.',
    },
    {
      q: 'Browser or desktop?',
      a: 'Both. Try Routely in the browser with cloud projects. Download the desktop app to open local folders and use real git on your machine.',
    },
    {
      q: 'Is it only for coding?',
      a: 'Yes for now. We are focused on coding first — build, fix, refactor, git. General tasks come later.',
    },
    {
      q: 'How do updates work?',
      a: 'We push to GitHub — Railway and Vercel deploy automatically. Try in browser always shows the latest build.',
    },
  ],
} as const;

/** @deprecated Legacy imports — use routely */
export const aksh = routely;


