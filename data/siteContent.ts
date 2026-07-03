/**
 * ═══════════════════════════════════════════════════════════════════
 *  AitoTech — SINGLE SOURCE OF TRUTH FOR ALL WEBSITE CONTENT
 *  Edit text, contact info, and image paths here only.
 * ═══════════════════════════════════════════════════════════════════
 */

/** Brand & contact */
export const site = {
  name: 'AitoTech',
  tagline: 'AI · ML · Business Automation',
  email: 'info@aitotech.in',
  address: 'Delhi, India',
  website: 'https://aitotech.in',
  responseTime: 'Within 24 hours on business days',
  founder: {
    name: 'Ujjwal',
    role: 'Founder & CEO',
    photo: '/images/founder.svg',
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
    subheadline: 'Building the Future of Automation.',
    description:
      'Websites, apps, AI tools, and workflow automation — engineered end to end for small businesses and enterprises alike.',
    ctaPrimary: 'Start a Project',
    ctaSecondary: 'View Work',
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
  products: {
    eyebrow: 'Our Product',
    title: 'Outreach',
    highlight: 'AI Sales Pilot',
    description:
      'AitoTech\'s Android app for bank sales teams — daily MCA/GST leads by PIN code and AI-powered WhatsApp outreach.',
    outreach: {
      badge: 'Live · Android App',
      summary:
        'Outreach delivers fresh MCA/GST company data by PIN code, writes professional cold messages with AI, and opens WhatsApp ready to send — built for BDMs and sales officers.',
      downloadCta: 'Download APK',
      learnMore: 'Learn more',
      requestAccess: 'Request access',
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
  title: 'Everything your business needs,',
  highlight: 'engineered',
  description:
    'Websites, apps, AI tools, and automation — for small businesses and enterprises alike.',
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
      title: 'WhatsApp & Workflow Automation',
      kind: 'Automation',
      body: 'Auto-replies, lead follow-ups, and approvals that run on WhatsApp and the tools you already use.',
      tags: ['WhatsApp API', 'CRM', 'n8n'],
      href: '/services/workflow-automation',
      icon: 'workflow',
      featured: false,
    },
    {
      title: 'Mobile Apps',
      kind: 'Android & iOS',
      body: 'Booking, ordering, and field-team apps — from idea to Play Store, with updates delivered over the air.',
      tags: ['React Native', 'Play Store', 'OTA'],
      href: '/demos',
      icon: 'mobile',
      featured: true,
    },
    {
      title: 'AI Tools & Chatbots',
      kind: 'Custom AI',
      body: 'Chatbots trained on your business, private knowledge bases, and AI agents inside your environment.',
      tags: ['RAG', 'Agents', 'Fine-tuning'],
      href: '/services/custom-ai',
      icon: 'ai',
      featured: false,
    },
    {
      title: 'Invoice Intelligence',
      kind: 'Automation Engine',
      body: 'OCR + NLP extraction with 3-way PO matching — thousands of invoices into ERP at 99% accuracy.',
      tags: ['OCR', 'NLP', 'ERP'],
      href: '/services/invoice-intelligence',
      icon: 'invoice',
      featured: false,
    },
    {
      title: 'Data Pipelines',
      kind: 'Data Engineering',
      body: 'Self-healing, real-time pipelines with schema intelligence, quality scoring, and lineage.',
      tags: ['CDC', 'ETL', 'Quality'],
      href: '/services/data-automation',
      icon: 'database',
      featured: false,
    },
  ],
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
  slug: 'outreach',
  name: 'Outreach',
  tagline: 'AI Sales Pilot for Banks & NBFCs',
  poweredBy: 'Aitotech',
  currentVersion: '1.0.15',
  runtimeVersion: '1.0.15',
  otaChannel: 'preview',
  apkDownloadUrl:
    'https://expo.dev/artifacts/eas/5vx4hakpNhcCPFgfBj1NFbmAOzEplInraAP1cJh8HdM.apk',
  backendUrl: 'https://outreachapp-production-b5e8.up.railway.app',
  adminPanelUrl: 'https://aitotech.in/products/outreach/admin',
  requestAccessUrl: 'https://aitotech.in/products/outreach/request',
  privacyPolicyUrl: 'https://aitotech.in/products/outreach/privacy',
  contactEmail: site.email,
  hero: {
    eyebrow: 'Aitotech Product',
    title: 'Outreach',
    highlight: 'Sales Pilot',
    description:
      'Daily MCA & GST company data by PIN code, AI-written cold messages, and one-tap WhatsApp or email — built for bank sales teams across India.',
  },
  download: {
    title: 'Download Outreach',
    subtitle: 'Android APK · Free pilot for colleagues & bank teams',
    installSteps: [
      'Tap Download APK and allow install from browser if prompted.',
      'Request access or use login ID/password from your Aitotech admin.',
      'Set PIN codes in Profile for your catchment area.',
      'Browse MCA/GST leads, save as lead, then send AI outreach.',
      'When an update is available, tap Download, then Restart.',
    ],
    otaNote:
      'After installing the APK, smaller updates arrive over-the-air. Open the app and accept the update popup.',
    qrCaption: 'Scan to open download page on your phone',
  },
  features: [
    { title: 'Daily MCA / GST feed', body: 'Fresh registered companies by PIN code and date.' },
    { title: 'AI cold messages', body: 'Upload bank brochure once; AI writes professional outreach options per lead.' },
    { title: 'Human-in-the-loop send', body: 'Opens WhatsApp or mail with pre-filled text — you tap Send.' },
    { title: 'Lead tracking', body: 'Status pipeline: new → contacted → interested → converted.' },
    { title: 'Branch-ready (roadmap)', body: 'Banks get provisioned logins per branch during pilot.' },
    { title: 'Auto updates (OTA)', body: 'New features deploy without reinstalling the APK.' },
  ],
  demoSteps: [
    { step: '01', title: 'Profile setup', body: 'PIN codes, products, bank brochure PDF for AI context.' },
    { step: '02', title: 'Browse MCA/GST', body: 'Leads tab → select PIN + registration date.' },
    { step: '03', title: 'Pick a company', body: 'See name, mobile, email, address — tap to open lead.' },
    { step: '04', title: 'Generate AI message', body: 'Choose tone & language — Hindi, English, or Hinglish.' },
    { step: '05', title: 'Send outreach', body: 'WhatsApp or Email opens with message ready — you send.' },
  ],
  docs: {
    title: 'Documentation',
    sections: [
      {
        heading: 'Who is it for?',
        bullets: [
          'Bank sales officers, RMs, and BDMs doing SME/corporate outreach',
          'BSMs managing teams across PIN-based catchment areas',
          'Aitotech client banks during pilot programs',
        ],
      },
      {
        heading: 'Support',
        bullets: ['Email: info@aitotech.in', 'WhatsApp support during bank pilots (business hours)'],
      },
    ],
  },
  faq: [
    {
      q: 'Why APK instead of Play Store?',
      a: 'Pilot builds are distributed directly while we onboard bank partners.',
    },
    {
      q: 'Will the app update automatically?',
      a: 'Yes — after installing the APK, OTA pushes JS updates when available.',
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


