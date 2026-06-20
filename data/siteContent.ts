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
  /** Founder — header & about page. Apna photo: public/images/founder.jpg (same name se replace karo) */
  founder: {
    name: 'Ujjwal',
    role: 'Founder & CEO',
    photo: '/images/founder.svg',
    /** Jab photo nahi ho tab initials dikhenge */
    initials: 'UC',
  },
  /**
   * Social links — apni IDs / URLs yahan daalo, clickable ho jayenge.
   * Khali chhodo = icon dikhega par "coming soon" (link disabled).
   * Example: instagram: 'https://instagram.com/yourhandle'
   */
  social: {
    instagram: '',
    facebook: '',
    x: '', // Twitter / X
    linkedin: '',
    discord: '',
    youtube: '',
    github: 'https://github.com/ujjwal-coder211',
  },
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
  founder: '/images/founder.svg',
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
  { href: '/aksh', label: 'Aksh' },
  { href: '/docs', label: 'Docs' },
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
  docsTitle: 'Aksh Docs',
  servicesTitle: 'Services',
  contactTitle: 'Contact',
  socialTitle: 'Follow us',
  legal: ['Privacy', 'Terms'],
  docLinks: [
    { href: '/docs/getting-started', label: 'Getting Started' },
    { href: '/docs/installation', label: 'Installation' },
    { href: '/docs/cursor-connect', label: 'Cursor Connect' },
    { href: '/docs/api', label: 'API Reference' },
  ],
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

/** ─── AKSH LAUNCH PAGE (pre-launch / waitlist / press) ─── */
export const aksh = {
  badge: 'Public launch · Made in India',
  title: 'Aksh',
  headline: 'India\'s Cursor alternative.',
  subtitle: 'AI coding platform — code in your browser, data in India',
  tagline: 'Aksh Studio + Omni. Write code. Build apps. No big download needed.',
  heroLead:
    'Aksh helps you write code with AI — like Cursor, but built for India. Use a full IDE in your browser. Save projects in the cloud. Talk to one AI called Omni. Your data can stay in India on E2E Networks. You do not need a powerful laptop.',
  description:
    'Aksh by AitoTech is an AI coding platform and Cursor alternative. It includes Aksh Studio, Omni AI, and cloud projects. Join the waitlist before public launch.',
  elevatorPitch:
    'Aksh does what Cursor does — write code, fix bugs, build apps — but in your browser, on Indian cloud, with one simple AI named Omni.',
  elevatorLabel: 'In one line',
  cta: 'Join the Waitlist',
  ctaSecondary: 'Press kit',
  ctaHint: 'Early access · launch news · no spam',
  status: 'Pre-launch — waitlist is open · Studio beta coming soon',
  waitlistSubtitle:
    'Join the waitlist for early access. We will email you when Aksh Studio opens.',
  platformTitle: 'What you get',
  platformSubtitle: 'Not just chat — a full product: IDE, AI, memory, and cloud storage.',
  quickStartTitle: 'After launch — 3 steps',
  faqTitle: 'Questions and answers',
  pressSectionTitle: 'Press and media',
  pressSectionCta: 'Full press kit',
  mockupOmniReply: 'Todo app is ready. Files saved.',

  press: {
    pageTitle: 'Press and media kit',
    pageDescription: 'Official text about Aksh for news sites and tech press. Copy and paste.',
    contactEmail: site.email,
    contactLabel: 'Press contact',
    short:
      'Aksh is AitoTech\'s AI coding platform — an alternative to Cursor for India, with a browser IDE (Aksh Studio), Omni AI, and cloud hosted in India on E2E Networks.',
    medium:
      'AitoTech, based in Delhi, India, is launching Aksh — an AI coding platform for Indian developers. Aksh Studio runs in the browser. Omni is one AI brain for all coding help. Projects save in the cloud. It works on low-RAM laptops because the heavy work runs online. Production will use E2E Networks in India. Waitlist: aitotech.in/aksh.',
    long:
      'AitoTech (aitotech.in) builds AI tools for businesses in Delhi, India. The company is launching Aksh — a coding platform made as India\'s answer to Cursor. Aksh Studio is a browser IDE with an editor, file list, and preview. Omni is the only AI users see — no confusing model list. Users type in plain English; Omni writes and edits code. Projects save in the cloud. The app uses a thin client: your browser is the UI; AI runs on servers. Production will run on E2E Networks for data in India. You can also connect the Cursor desktop app to Omni (model name: omni). Students, startups, and companies can join the waitlist at aitotech.in/aksh. Press: info@aitotech.in.',
    facts: [
      { label: 'Product', value: 'Aksh — AI coding (Studio + Coder + Omni)' },
      { label: 'What it is', value: 'Cursor alternative for India — browser first' },
      { label: 'Company', value: 'AitoTech, Delhi, India' },
      { label: 'Status', value: 'Pre-launch; waitlist open' },
      { label: 'Hosting', value: 'E2E Networks India (production plan)' },
      { label: 'Language', value: 'Plain English commands to Omni' },
      { label: 'Website', value: 'https://aitotech.in/aksh' },
      { label: 'Press email', value: 'info@aitotech.in' },
    ],
    quote:
      'Indian developers need a Cursor-class tool that runs in the browser and keeps data in India. That is Aksh — powered by Omni.',
    quoteAttribution: 'AitoTech team',
  },

  comparison: {
    title: 'Cursor vs Aksh',
    subtitle: 'Both are AI coding tools. Aksh is built for India.',
    columns: ['Feature', 'Cursor', 'Aksh'],
    rows: [
      { feature: 'AI code help', cursor: 'Yes', aksh: 'Yes — Omni' },
      { feature: 'Full IDE', cursor: 'Desktop app', aksh: 'Aksh Studio in browser' },
      { feature: 'Works on 4GB RAM laptop', cursor: 'Needs strong PC', aksh: 'Yes — work runs in cloud' },
      { feature: 'Simple English commands', cursor: 'Yes', aksh: 'Yes — plain English to Omni' },
      { feature: 'Data in India', cursor: 'Mostly US / global', aksh: 'E2E Networks (plan)' },
      { feature: 'One AI name (no model list)', cursor: 'Many models', aksh: 'Omni only' },
      { feature: 'Cloud project save', cursor: 'Mostly local files', aksh: 'Built in' },
      { feature: 'Chat memory per project', cursor: 'Limited', aksh: 'Omni Memory per thread' },
      { feature: 'Use Cursor app + Aksh AI', cursor: '—', aksh: 'Yes — Omni API' },
    ],
  },

  whyIndia: {
    title: 'Why Aksh for India?',
    items: [
      {
        title: 'Data stays in India',
        body: 'We plan to run production on E2E Networks — API, database, and storage in India. Good for companies that care where data lives.',
      },
      {
        title: 'Simple English works',
        body: 'Tell Omni what you want in plain English. Example: "Build a login page" or "Fix this bug." No need for perfect technical words.',
      },
      {
        title: 'Browser is the IDE',
        body: 'Open Chrome and start coding. No large download. Works on old laptops, college labs, and slow internet better than a heavy desktop app.',
      },
      {
        title: 'Built by AitoTech',
        body: 'We are a Delhi company that builds AI for business. Aksh is a real product roadmap — not a demo chatbot.',
      },
    ],
  },

  audiences: {
    title: 'Who is Aksh for?',
    items: [
      { title: 'Developers', body: 'You use Cursor but want India cloud and Omni — try Aksh Studio.' },
      { title: 'Students', body: 'Code in the browser on any laptop. Free tier planned.' },
      { title: 'Startups', body: 'Build an MVP fast with Omni. Save projects in the cloud.' },
      { title: 'Companies', body: 'Data in India, private deploy options, E2E hosting.' },
    ],
  },

  features: [
    {
      title: 'Aksh Studio',
      body: 'A full IDE in your browser — like Cursor, but online. Editor, files, tabs, cloud projects, zip upload, and preview. Runs smooth on 4GB RAM because AI work happens in the cloud.',
    },
    {
      title: 'Omni',
      body: 'One AI you talk to for everything — code, fixes, and full apps. You only see "Omni." Smart models run behind the scenes. No model dropdown like Cursor.',
    },
    {
      title: 'Omni Memory',
      body: 'Each chat thread remembers your project. Open an old thread and Omni still knows what you built. New thread = fresh start.',
    },
    {
      title: 'India cloud',
      body: 'Projects and app data will run on E2E Networks in India — Delhi region for API and database. Less worry about sending code to foreign servers.',
    },
  ],

  roadmap: [
    { phase: 'Now', label: 'Waitlist and docs are live', done: true },
    { phase: 'Next', label: 'Aksh Studio beta on E2E Networks', done: false },
    { phase: 'Later', label: 'India pricing · desktop option · company VPC', done: false },
  ],

  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@email.com',
    roleLabel: 'I am a…',
    roles: [
      { value: 'developer', label: 'Developer' },
      { value: 'student', label: 'Student' },
      { value: 'founder', label: 'Founder / startup' },
      { value: 'enterprise', label: 'Company team' },
      { value: 'other', label: 'Other' },
    ],
    interestLabel: 'I want',
    interests: [
      { value: 'studio', label: 'Aksh Studio (IDE)' },
      { value: 'coder', label: 'Aksh Coder (AI coding)' },
      { value: 'both', label: 'Both' },
    ],
    success: 'You are on the list! We will email you before launch.',
    error: 'Something went wrong. Try again or email info@aitotech.in',
  },
  docsCta: {
    title: 'Documentation',
    description: 'Step-by-step guides: install, connect Cursor, use the API.',
    button: 'Read the docs',
    href: '/docs',
  },
  quickStart: [
    { step: '01', title: 'Join waitlist', body: 'Sign up at aitotech.in/aksh. Get your API key when we launch.' },
    { step: '02', title: 'Open Aksh Studio', body: 'Use the IDE in your browser. No big install needed.' },
    { step: '03', title: 'Ask Omni', body: 'Type what you want in simple English. Omni writes the code.' },
  ],
  faqs: [
    {
      q: 'Is Aksh like Cursor?',
      a: 'Yes. Both help you write code with AI. Aksh runs in the browser, saves projects in the cloud, uses one AI named Omni, and plans to host data in India. Cursor is a desktop app with US-based services.',
    },
    {
      q: 'What is Aksh?',
      a: 'Aksh is AitoTech\'s AI coding platform. It includes Aksh Studio (browser IDE), Aksh Coder, and Omni (one AI brain). It is built as a Cursor alternative for India.',
    },
    {
      q: 'Do I need to download anything?',
      a: 'No for most people. Open Aksh Studio in your browser. Optional: keep using the Cursor desktop app but connect it to Omni (model name: omni).',
    },
    {
      q: 'When does Aksh launch?',
      a: 'We are in pre-launch now. Join the waitlist at aitotech.in/aksh for early access to Aksh Studio.',
    },
    {
      q: 'What is Omni?',
      a: 'Omni is the only AI name you see in Aksh. It handles coding, fixes, and app builds. You do not pick GPT vs Claude — you just talk to Omni.',
    },
    {
      q: 'Will it work on a weak laptop?',
      a: 'Yes. The browser shows the UI. AI and storage run online. A 4GB RAM laptop is enough.',
    },
    {
      q: 'Press or media contact?',
      a: 'Press kit: aitotech.in/aksh/press. Email info@aitotech.in for interviews and demos.',
    },
  ],
} as const;
