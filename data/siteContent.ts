/**
 * ═══════════════════════════════════════════════════════════════════
 *  AitoTech — SINGLE SOURCE OF TRUTH FOR ALL WEBSITE CONTENT
 *  Edit text, contact info, and image paths here only.
 * ═══════════════════════════════════════════════════════════════════
 */

/** Brand & contact */
export const site = {
  name: 'AitoTech',
  tagline: 'AI Automation Agency',
  email: 'info@aitotech.in',
  phone: '+91 93544 59046',
  address: 'Delhi, India',
  website: 'https://aitotech.in',
  responseTime: 'Within 24 hours on business days',
  map: {
    lat: 28.7041,
    lng: 77.1025,
    embedUrl: 'https://maps.google.com/maps?q=28.7041,77.1025&z=12&output=embed',
    directionsUrl: 'https://www.google.com/maps?q=28.7041,77.1025',
  },
} as const;

export const images = {
  logo: '/images/logo-placeholder.svg',
  founder: '/images/founder-placeholder.jpg',
  heroDashboard: '/images/hero-dashboard-placeholder.jpg',
  office: '/images/office-placeholder.jpg',
  ogImage: '/images/og-placeholder.jpg',
  services: {
    'data-automation': '/images/services/data-automation.jpg',
    'workflow-automation': '/images/services/workflow.jpg',
    'invoice-intelligence': '/images/services/invoice.jpg',
    'custom-ai': '/images/services/custom-ai.jpg',
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
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
    badge: 'AI Automation Agency · Delhi, India',
    title: 'Automate the Work.',
    titleHighlight: 'Amplify the Impact.',
    description:
      'AitoTech builds intelligent automation for data, finance, and operations — so your team spends time on strategy, not spreadsheets.',
    ctaPrimary: 'Book a Call',
    ctaSecondary: 'View Services',
    dashboardLabel: 'Live automation overview',
    liveBadge: '12 workflows active',
  },
  stats: [
    { id: 'hours', label: 'Hours Saved', suffix: '+', value: 12000, decimals: 0 },
    { id: 'processes', label: 'Processes Automated', suffix: '+', value: 340, decimals: 0 },
    { id: 'clients', label: 'Enterprise Clients', suffix: '+', value: 85, decimals: 0 },
    { id: 'roi', label: 'Avg. ROI Delivered', suffix: '×', value: 3.2, decimals: 1 },
  ],
  trust: {
    label: 'Trusted by teams across finance, logistics, and healthcare',
    clients: ['FinServ', 'Logistics Co.', 'HealthTech', 'Retail Group', 'SaaS Scale-up', 'Manufacturing'],
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

/** ─── SERVICES PAGE ─── */
export const servicesPage = {
  hero: {
    badge: 'Services',
    title: 'Intelligent',
    highlight: 'Automation Services',
    description:
      'End-to-end automation across data, workflows, finance, and custom AI — delivered by dedicated pods aligned to your outcomes.',
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
    slug: 'data-automation',
    title: 'Data Automation',
    short: 'Unify pipelines. Eliminate manual ETL.',
    description:
      'AI-driven data pipelines that sync warehouses in real time, auto-map schemas, and self-heal when sources change — so your team trusts every dashboard.',
    features: ['Real-time CDC sync', 'Schema intelligence', 'Quality scoring', 'Lineage & compliance'],
    gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    accent: 'text-cyan-400',
    bentoLg: 'lg:col-span-2 lg:row-span-2',
    icon: 'database',
    comingSoon: false,
    imageKey: 'data-automation' as const,
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    short: 'Orchestrate ops without bottlenecks.',
    description:
      'End-to-end workflow engines that connect your tools, route approvals, and trigger AI decisions — from invoice intake to customer onboarding.',
    features: ['Multi-app orchestration', 'Smart routing', 'Audit trails', 'SLA monitoring'],
    gradient: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    accent: 'text-violet-400',
    bentoLg: 'lg:col-span-1 lg:row-span-1',
    icon: 'workflow',
    comingSoon: false,
    imageKey: 'workflow-automation' as const,
  },
  {
    slug: 'invoice-intelligence',
    title: 'Invoice Intelligence',
    short: 'From inbox to ERP in seconds.',
    description:
      'OCR + NLP extraction with PO matching and anomaly detection. Process thousands of invoices with 99% accuracy and full ERP integration.',
    features: ['99% extraction accuracy', '3-way matching', 'ERP connectors', 'Spend analytics'],
    gradient: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    accent: 'text-sky-400',
    bentoLg: 'lg:col-span-1 lg:row-span-2',
    icon: 'invoice',
    comingSoon: false,
    imageKey: 'invoice-intelligence' as const,
  },
  {
    slug: 'custom-ai',
    title: 'Custom AI Systems',
    short: 'Models built for your domain.',
    description:
      'Fine-tuned LLMs, RAG knowledge bases, and autonomous agents deployed in your environment — not generic chatbots stapled onto your stack.',
    features: ['Domain fine-tuning', 'Private RAG', 'Agent workflows', 'Human-in-the-loop'],
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
    initials: 'AT',
    role: 'Founder & CEO',
    company: 'AitoTech',
    established: 'Est. 2022 · Delhi, India',
    letterTitle: 'A letter from our',
    letterHighlight: 'Founder',
    paragraphs: [
      'I started AitoTech after a decade watching brilliant teams drown in repetitive work — copying data between systems, chasing invoice approvals, answering the same support tickets. The technology to fix this existed; the delivery model did not.',
      'We built AitoTech to be the partner I wished I had: engineers who speak business, who measure success in hours returned to your people, and who treat security as non-negotiable. Every engagement ships with clear KPIs and a path to scale.',
      'Today we work with finance, logistics, and healthcare leaders who refuse to accept "that\'s how we\'ve always done it." If that sounds like you — let\'s build something remarkable together.',
    ],
    signature: '— The AitoTech Founding Team',
    imageAlt: 'AitoTech Founder',
  },
  pillars: [
    { title: 'Mission', body: 'Make enterprise automation accessible, measurable, and human-centered.' },
    { title: 'Vision', body: 'A world where every team operates at the speed of insight — not manual labor.' },
    { title: 'Values', body: 'Transparency, security, and outcomes over vanity metrics.' },
  ],
  team: {
    title: 'Expert-led delivery',
    body: 'Every engagement is led by solution architects and ML engineers with deep domain experience. We work as an extension of your team — not a black-box vendor.',
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
    { label: 'Phone', value: site.phone, icon: 'phone' },
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
  blurb: 'Intelligent automation for forward-thinking enterprises.',
  navigateTitle: 'Navigate',
  servicesTitle: 'Services',
  contactTitle: 'Contact',
} as const;

/** Service detail page shared copy */
export const serviceDetail = {
  ctaTitle: (name: string) => `Ready to deploy ${name}?`,
  ctaBody:
    'Schedule a discovery session — we will map your workflows and define measurable outcomes.',
  ctaButton: 'Book a Call',
} as const;
