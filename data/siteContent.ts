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

/** ─── AKSH LAUNCH PAGE (pre-launch / waitlist / India media) ─── */
export const aksh = {
  badge: 'Public Launch · Made in India',
  title: 'Aksh',
  /** Main headline — media & SEO */
  headline: 'India ka Cursor alternative.',
  subtitle: 'AI coding platform — browser IDE, Hinglish, data India mein',
  tagline: 'Aksh Studio + Omni — likho, bolo, build karo. Download optional.',
  /** Hero par badi, clear description — ye media copy bhi hai */
  heroLead:
    'Aksh ek AI-powered coding platform hai jo Cursor jaisa kaam karta hai — par India ke developers ke liye bana hai: browser mein full IDE, Hinglish mein instructions, cloud par projects, aur production data E2E Networks India par. Cursor foreign SaaS hai; Aksh sovereign, thin-client, aur Omni ek hi AI brain.',
  description:
    'AitoTech ka Aksh — India\'s AI coding platform. Cursor alternative: Aksh Studio (browser IDE), Omni AI, cloud projects, thread memory. Pre-launch waitlist open; E2E Networks par deploy hone wala hai.',
  elevatorPitch:
    'Aksh Cursor ki tarah code likhwata, debug karta, aur apps banata hai — lekin browser se, Hinglish se, aur India cloud par. Students, startups, aur enterprises ke liye — bina heavy laptop ke.',
  cta: 'Join the Waitlist',
  ctaSecondary: 'Media & Press Kit',
  ctaHint: 'Early access · launch updates · India developers first',
  status: 'Pre-launch — Studio beta jald · waitlist ab khuli hai',

  /** Journalists / Indian media — copy-paste blocks */
  press: {
    pageTitle: 'Press & Media Kit',
    pageDescription: 'Aksh launch ke liye official description, facts, aur contact — Indian media & tech press.',
    contactEmail: site.email,
    contactLabel: 'Press inquiries',
    short:
      'Aksh is AitoTech\'s AI coding platform — positioned as India\'s Cursor alternative with browser IDE (Aksh Studio), Omni AI, Hinglish support, and India-hosted cloud on E2E Networks.',
    medium:
      'Delhi-based AitoTech is launching Aksh, an AI-native coding platform built for Indian developers as an alternative to Cursor. Aksh Studio runs in the browser with Monaco editor, cloud project storage, and persistent chat memory via Omni — a single user-facing AI brain. Users can code in English or Hinglish; compute runs in the cloud so low-RAM laptops work fine. Production targets E2E Networks for data residency in India. Public waitlist is open at aitotech.in/aksh.',
    long:
      'AitoTech (aitotech.in), an enterprise AI automation company based in Delhi, India, announces Aksh — a full-stack AI coding platform designed as India\'s answer to Cursor and other Western AI IDEs. Aksh combines Aksh Studio (browser-based IDE with Monaco editor, file tree, and preview), Aksh Coder (AI-assisted development), and Omni (one unified AI brain — no model picker for users). Unlike desktop-heavy tools, Aksh uses a thin-client architecture: the browser is the IDE; AI inference and project storage run on cloud infrastructure, with production deployment on E2E Networks for sovereign, in-country data handling. Developers can describe apps in Hinglish or English; Omni generates and edits code across threads with persistent memory. Optional Cursor IDE integration uses the same Omni API (model: omni). Target users include students, indie developers, startups, and enterprise teams seeking an India-first AI coding stack. Waitlist: aitotech.in/aksh. Press: info@aitotech.in.',
    facts: [
      { label: 'Product', value: 'Aksh — AI coding platform (Studio + Coder + Omni)' },
      { label: 'Positioning', value: 'India\'s Cursor alternative — browser-first, India cloud' },
      { label: 'Company', value: 'AitoTech, Delhi, India' },
      { label: 'Launch status', value: 'Pre-launch; public waitlist open' },
      { label: 'Infrastructure', value: 'E2E Networks India (production target)' },
      { label: 'Languages', value: 'English + Hinglish natural language coding' },
      { label: 'Website', value: 'https://aitotech.in/aksh' },
      { label: 'Press contact', value: 'info@aitotech.in' },
    ],
    quote:
      'Indian developers deserve a Cursor-class AI IDE that runs in the browser, understands Hinglish, and keeps data in India. That is Aksh — powered by Omni.',
    quoteAttribution: 'AitoTech Founding Team',
  },

  /** Cursor vs Aksh — clear comparison for users & press */
  comparison: {
    title: 'Cursor vs Aksh',
    subtitle: 'Dono AI coding tools hain — farq India ke liye design mein hai',
    columns: ['Feature', 'Cursor', 'Aksh'],
    rows: [
      { feature: 'AI code assistant & chat', cursor: 'Yes', aksh: 'Yes — Omni' },
      { feature: 'Full IDE experience', cursor: 'Desktop app (VS Code fork)', aksh: 'Aksh Studio — browser IDE' },
      { feature: 'Works on 4GB RAM laptop', cursor: 'Heavy local install', aksh: 'Yes — thin client, cloud compute' },
      { feature: 'Hinglish instructions', cursor: 'Limited', aksh: 'Native — "React app banao"' },
      { feature: 'Data hosted in India', cursor: 'US / global SaaS', aksh: 'E2E Networks (production)' },
      { feature: 'Single AI face (no model chaos)', cursor: 'Multiple models', aksh: 'Omni only — experts hidden' },
      { feature: 'Cloud project save & sync', cursor: 'Mostly local', aksh: 'Built-in cloud projects' },
      { feature: 'Persistent thread memory', cursor: 'Session-based', aksh: 'Omni Memory per thread' },
      { feature: 'Optional Cursor connect', cursor: '—', aksh: 'Omni API — model: omni' },
    ],
  },

  whyIndia: {
    title: 'Kyoon India ke liye alag?',
    items: [
      {
        title: 'Data India mein',
        body: 'Production stack E2E Networks par — API, DB, storage sovereign India target. Enterprise aur startups ko foreign-only SaaS ki dependency kam.',
      },
      {
        title: 'Hinglish se code',
        body: '"Mujhe login page banao", "bug fix karo" — Omni samajhta hai. Angrezi force nahi; Indian developers ki natural language.',
      },
      {
        title: 'Browser = poora IDE',
        body: 'Cursor jaisa feel, par download optional. Cyber café, college lab, purana laptop — Chrome kholo, Studio chalu.',
      },
      {
        title: 'Made by AitoTech',
        body: 'Delhi se — enterprise automation background ke saath. Aksh sirf chatbot nahi; production-grade platform roadmap.',
      },
    ],
  },

  audiences: {
    title: 'Kiske liye hai Aksh?',
    items: [
      { title: 'Developers', body: 'Cursor use karte ho par India cloud / Hinglish chahiye — Aksh Studio + Omni.' },
      { title: 'Students', body: 'Free-tier roadmap; browser IDE — hostel laptop par bhi project banao.' },
      { title: 'Startups', body: 'Fast MVP — Omni se app generate, cloud par save, team threads.' },
      { title: 'Enterprise', body: 'Data residency, private deploy, E2E VPC — automation partner AitoTech.' },
    ],
  },

  features: [
    {
      title: 'Aksh Studio',
      body: 'Cursor jaisa IDE — par browser mein. Monaco editor, file tree, multi-tab, cloud projects, zip upload. Preview tab se app dekho. 4GB RAM par smooth — processing cloud par.',
    },
    {
      title: 'Omni',
      body: 'Ek hi AI jo user ko dikhe — coding, debugging, full app build, Hinglish chat. Andar expert models chalte hain; bahar sirf "Omni". Cursor ke model dropdown ka confusion nahi.',
    },
    {
      title: 'Omni Memory',
      body: 'Har thread alag conversation yaad rakhta hai — jaise Cursor chat history, par project-linked. Naya thread = fresh context; purana wapas = poori coding history.',
    },
    {
      title: 'India Cloud',
      body: 'Projects aur SaaS data E2E Networks India par deploy hone ka plan — Delhi NCR API/DB, sovereign stack. Foreign IDE par data export ki tension kam.',
    },
  ],

  roadmap: [
    { phase: 'Now', label: 'Public waitlist + docs live', done: true },
    { phase: 'Next', label: 'Aksh Studio beta on E2E Networks', done: false },
    { phase: 'Later', label: 'INR plans · desktop bundle · enterprise VPC', done: false },
  ],

  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@company.com',
    roleLabel: 'I am a…',
    roles: [
      { value: 'developer', label: 'Developer' },
      { value: 'student', label: 'Student' },
      { value: 'founder', label: 'Founder / Startup' },
      { value: 'enterprise', label: 'Enterprise team' },
      { value: 'other', label: 'Other' },
    ],
    interestLabel: 'Interested in',
    interests: [
      { value: 'studio', label: 'Aksh Studio (IDE)' },
      { value: 'coder', label: 'Aksh Coder (AI coding)' },
      { value: 'both', label: 'Both' },
    ],
    success: 'You\'re on the list! Launch par pehle access milega.',
    error: 'Something went wrong. Try again or email info@aitotech.in',
  },
  docsCta: {
    title: 'Documentation',
    description: 'Install, self-host, Cursor connect, API — har step likha hai jaise Python ya kisi bade software launch par hota hai.',
    button: 'Read the Docs',
    href: '/docs',
  },
  quickStart: [
    { step: '01', title: 'Waitlist / Account', body: 'aitotech.in/aksh par join karo → launch par API key milegi' },
    { step: '02', title: 'Aksh Studio', body: 'Browser IDE kholo — Cursor jaisa, download optional' },
    { step: '03', title: 'Omni se build', body: 'Hinglish mein bolo — code, files, memory auto-save' },
  ],
  faqs: [
    {
      q: 'Kya Aksh Cursor jaisa hai?',
      a: 'Haan — core use case same hai: AI se code likhwana, edit karna, debug karna, apps banana. Farq ye hai: Aksh browser-first hai, Hinglish native hai, cloud projects built-in hain, aur production India (E2E Networks) par target hai. Cursor desktop-heavy US SaaS hai; Aksh India ke developers ke liye alternative.',
    },
    {
      q: 'What is Aksh?',
      a: 'Aksh is AitoTech\'s AI coding platform — India\'s Cursor alternative. It includes Aksh Studio (browser IDE), Aksh Coder, and Omni (single AI brain). Code in English or Hinglish; no heavy download required.',
    },
    {
      q: 'Do I need to download Aksh?',
      a: 'No for most users — Aksh Studio runs in the browser like a full IDE. Optional: keep using Cursor desktop but point it to Omni API (model: omni) for the same AI brain.',
    },
    {
      q: 'When will Aksh launch?',
      a: 'Public pre-launch is live now. Join the waitlist at aitotech.in/aksh for early Studio beta on E2E Networks India.',
    },
    {
      q: 'What is Omni?',
      a: 'Omni is the only AI name users see — one brain for coding, apps, and Hinglish. Expert models run internally; no model picker like Cursor.',
    },
    {
      q: 'Will Aksh work on a low-end laptop?',
      a: 'Yes. Thin-client design — browser UI only; AI and storage run in cloud. Ideal for students and tier-2/3 India where hardware is limited.',
    },
    {
      q: 'Indian media / press contact?',
      a: 'Press kit: aitotech.in/aksh/press. Email info@aitotech.in for interviews, demos, and launch coverage.',
    },
  ],
} as const;
