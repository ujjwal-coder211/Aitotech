/**
 * ═══════════════════════════════════════════════════════════════════
 *  AitoTech — SINGLE SOURCE OF TRUTH FOR ALL WEBSITE CONTENT
 *  Edit text, contact info, and image paths here only.
 * ═══════════════════════════════════════════════════════════════════
 */

/** Brand & contact — update email, phone, socials here */
export const site = {
  name: 'AitoTech',
  tagline: 'Enterprise AI Automation',
  email: 'info@aitotech.in',
  // Personal mobile number website se hata diya gaya (privacy/spam se bachne ke liye).
  // Public site pe phone dikhana ho to ek business/virtual number (Google Voice,
  // WhatsApp Business) yahan daalo aur Footer + contact infoCards me wapas add karo.
  // phone: '+91 XXXXX XXXXX',
  address: 'Delhi, India',
  website: 'https://aitotech.in',
  responseTime: 'Within 24 hours on business days',
  /** Office location — used for the Google Map embed on the Contact page */
  map: {
    lat: 28.7041,
    lng: 77.1025,
    /** Keyless Google Maps embed (no API key required) */
    embedUrl: 'https://maps.google.com/maps?q=28.7041,77.1025&z=12&output=embed',
    /** Opens full Google Maps in a new tab */
    directionsUrl: 'https://www.google.com/maps?q=28.7041,77.1025',
  },
} as const;

/** Image placeholders — replace paths when you add real assets to /public/images */
export const images = {
  logo: '/images/logo-placeholder.svg',
  founder: '/images/founder-placeholder.jpg',
  heroDashboard: '/images/hero-dashboard-placeholder.jpg',
  office: '/images/office-placeholder.jpg',
  ogImage: '/images/og-placeholder.jpg',
  /** Per-service card thumbnails (optional) */
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
  primary: 'Schedule a Call',
  secondary: 'View Services',
  contact: 'Contact Sales',
} as const;

/** ─── HOME PAGE ─── */
export const home = {
  hero: {
    badge: 'Enterprise AI Automation',
    title: 'Operational excellence,',
    titleHighlight: 'engineered at scale.',
    description:
      'AitoTech partners with finance, logistics, and operations teams to design automation systems that reduce manual work, improve accuracy, and deliver measurable ROI — with enterprise security and SLAs.',
    ctaPrimary: 'Schedule a Strategy Call',
    ctaSecondary: 'Explore Services',
    dashboardLabel: 'Operations Command Center',
    liveBadge: '12 workflows active',
  },
  logoCloud: {
    title: 'Built for teams that cannot afford downtime',
    logos: ['FinServ', 'Logistics Co.', 'HealthTech', 'Retail Group', 'SaaS Scale-up', 'Manufacturing'],
  },
  stats: [
    { id: 'hours', label: 'Hours Saved', suffix: '+', value: 12000, decimals: 0 },
    { id: 'processes', label: 'Processes Automated', suffix: '+', value: 340, decimals: 0 },
    { id: 'clients', label: 'Enterprise Clients', suffix: '+', value: 85, decimals: 0 },
    { id: 'roi', label: 'Avg. ROI Delivered', suffix: '×', value: 3.2, decimals: 1 },
  ],
  bento: {
    eyebrow: 'Capabilities',
    title: 'Automation',
    highlight: 'Architected for Scale',
    description:
      'Four pillars of intelligent operations — each with dedicated expertise and SLAs.',
    viewAll: 'View all services →',
  },
  whyChooseUs: {
    eyebrow: 'Why AitoTech',
    title: 'Built for',
    highlight: 'Outcomes, Not Hype',
    description: "We're an automation partner — not a vendor shipping shelfware.",
    items: [
      {
        title: 'Outcome-First Delivery',
        body: 'Every engagement starts with measurable KPIs — hours saved, error rates, cost per transaction — not slide decks.',
      },
      {
        title: 'Security by Design',
        body: 'SOC 2-aligned architecture, VPC deployments, and strict data boundaries for regulated industries.',
      },
      {
        title: 'Embedded Partnership',
        body: 'Dedicated solution architects work alongside your team from discovery through scale — not handoff-and-vanish.',
      },
      {
        title: 'Adaptive Intelligence',
        body: 'Systems that learn from your workflows and improve accuracy over time without constant re-engineering.',
      },
    ],
  },
  cta: {
    title: 'Ready to modernize',
    highlight: 'your operations?',
    description: 'Speak with our solutions team — we will map your workflows and define clear KPIs before a single line of code is written.',
    button: 'Book a Discovery Call',
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'A proven path from',
    highlight: 'discovery to ROI',
    description: 'Structured engagements with dedicated architects, clear milestones, and outcomes you can measure.',
  },
} as const;

/** ─── SERVICES PAGE ─── */
export const servicesPage = {
  hero: {
    badge: 'What We Do',
    title: 'Intelligent',
    highlight: 'Automation Services',
    description:
      'Each service is delivered by a dedicated pod — architects, ML engineers, and success managers aligned to your outcomes.',
    comingSoonNote:
      'Some service pages are being expanded with case studies and demos — explore the previews below or contact us for early access.',
  },
  placeholder: {
    title: 'More Content Coming Soon',
    body: 'We are adding detailed case studies, pricing guides, and interactive demos for each service line. Check back shortly or reach out for a personalized walkthrough.',
    cta: 'Request Early Access',
  },
  processSteps: [
    { step: '01', title: 'Discover', body: 'Map workflows and define automation KPIs with your stakeholders.' },
    { step: '02', title: 'Design', body: 'Architect secure pipelines, integrations, and AI models for your stack.' },
    { step: '03', title: 'Deploy', body: 'Ship to production with monitoring, SLAs, and team training.' },
    { step: '04', title: 'Scale', body: 'Optimize continuously as volume and use cases grow.' },
  ],
} as const;

/** Service catalog — used on home bento, services page, and detail routes */
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
    /** Bento span — mobile is always 1×1; lg applies asymmetric layout */
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
    comingSoon: true,
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
      'Fine-tuned LLMs, RAG knowledge bases, and autonomous agents deployed in your VPC — not generic chatbots stapled onto your stack.',
    features: ['Domain fine-tuning', 'Private RAG', 'Agent workflows', 'Human-in-the-loop'],
    gradient: 'from-emerald-500/15 via-cyan-500/10 to-transparent',
    accent: 'text-emerald-400',
    bentoLg: 'lg:col-span-2 lg:row-span-1',
    icon: 'ai',
    comingSoon: true,
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
    eyebrow: 'Our Story',
    title: 'Engineering the',
    highlight: 'Future of Work',
    description:
      'AitoTech was founded on a simple belief: AI should remove friction, not add complexity.',
    comingSoonBadge: 'Team profiles coming soon',
  },
  founder: {
    initials: 'AT',
    role: 'Founder & CEO',
    company: 'AitoTech',
    established: 'Est. 2022',
    letterTitle: 'A letter from our',
    letterHighlight: 'Founder',
    paragraphs: [
      'I started AitoTech after a decade watching brilliant teams drown in repetitive work — copying data between systems, chasing invoice approvals, answering the same support tickets. The technology to fix this existed; the delivery model did not.',
      'We built AitoTech to be the partner I wished I had: engineers who speak business, who measure success in hours returned to your people, and who treat security as non-negotiable. Every engagement ships with clear KPIs and a path to scale.',
      'Today we work with finance, logistics, and healthcare leaders who refuse to accept "that\'s how we\'ve always done it." If that sounds like you — let\'s build something remarkable together.',
    ],
    signature: '— The AitoTech Founding Team',
    imageAlt: 'AitoTech Founder — replace with your photo in siteContent.images.founder',
  },
  pillars: [
    { title: 'Mission', body: 'Make enterprise automation accessible, measurable, and human-centered.' },
    { title: 'Vision', body: 'A world where every team operates at the speed of insight — not manual labor.' },
    { title: 'Values', body: 'Transparency, security, and outcomes over vanity metrics.' },
  ],
  teamPlaceholder: {
    title: 'Meet the Team',
    comingSoon: 'Coming Soon',
    body: 'We are preparing full team profiles, leadership bios, and office gallery. Meanwhile, connect with us directly — we would love to hear about your automation goals.',
    cta: 'Contact Us',
  },
  ctaButton: 'Work With Us',
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
  mapPlaceholder: {
    title: 'Visit Us',
    body: 'Delhi, India · 28.7041° N, 77.1025° E',
    directions: 'Get directions',
  },
} as const;

/** ─── FOOTER ─── */
export const footer = {
  blurb: 'engineering intelligent automation for forward-thinking enterprises.',
  navigateTitle: 'Navigate',
  servicesTitle: 'Services',
  contactTitle: 'Contact',
  legal: ['Privacy', 'Terms'],
} as const;

/** Service detail page shared copy */
export const serviceDetail = {
  ctaTitle: (name: string) => `Ready to deploy ${name}?`,
  ctaBody:
    'Schedule a discovery session — we will map your workflows and define measurable outcomes.',
  ctaButton: 'Talk to Our Team',
  comingSoon: {
    badge: 'Coming Soon',
    body: 'Full case studies, pricing, and live demos for this service are on the way. Contact us for early access and pilot programs.',
    cta: 'Join Waitlist',
  },
} as const;
