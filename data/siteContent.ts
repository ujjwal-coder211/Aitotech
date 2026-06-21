/**
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 *  AitoTech â€” SINGLE SOURCE OF TRUTH FOR ALL WEBSITE CONTENT
 *  Edit text, contact info, and image paths here only.
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 */

/** Brand & contact â€” update email, phone, socials here */
export const site = {
  name: 'AitoTech',
  tagline: 'AI tools for business Â· Routely for coding',
  email: 'info@aitotech.in',
  // Personal mobile number website se hata diya gaya (privacy/spam se bachne ke liye).
  // Public site pe phone dikhana ho to ek business/virtual number (Google Voice,
  // WhatsApp Business) yahan daalo aur Footer + contact infoCards me wapas add karo.
  // phone: '+91 XXXXX XXXXX',
  address: 'Delhi, India',
  website: 'https://aitotech.in',
  responseTime: 'Within 24 hours on business days',
  /** Founder â€” header & about page. Apna photo: public/images/founder.jpg (same name se replace karo) */
  founder: {
    name: 'Ujjwal',
    role: 'Founder & CEO',
    photo: '/images/founder.svg',
    /** Jab photo nahi ho tab initials dikhenge */
    initials: 'UC',
  },
  /**
   * Social links â€” apni IDs / URLs yahan daalo, clickable ho jayenge.
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
  /** Office location â€” used for the Google Map embed on the Contact page */
  map: {
    lat: 28.7041,
    lng: 77.1025,
    /** Keyless Google Maps embed (no API key required) */
    embedUrl: 'https://maps.google.com/maps?q=28.7041,77.1025&z=12&output=embed',
    /** Opens full Google Maps in a new tab */
    directionsUrl: 'https://www.google.com/maps?q=28.7041,77.1025',
  },
} as const;

/** Image placeholders â€” replace paths when you add real assets to /public/images */
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
  { href: '/routely', label: 'Routely' },
  { href: '/docs', label: 'Docs' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const cta = {
  primary: 'Book a call',
  secondary: 'See services',
  contact: 'Contact us',
} as const;

/** â”€â”€â”€ HOME PAGE â”€â”€â”€ */
export const home = {
  hero: {
    badge: 'AI for business',
    title: 'Work smarter,',
    titleHighlight: 'not harder.',
    description:
      'AitoTech helps teams stop doing the same manual work again and again. We use AI to save time, cut mistakes, and get clear results. Our coding product is Routely — try it from the banner below.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'See our services',
    dashboardLabel: 'Your work dashboard',
    liveBadge: '12 jobs running',
  },
  logoCloud: {
    title: 'Built for teams that need things to stay online',
    logos: ['FinServ', 'Logistics Co.', 'HealthTech', 'Retail Group', 'SaaS Scale-up', 'Manufacturing'],
  },
  stats: [
    { id: 'hours', label: 'Hours saved', suffix: '+', value: 12000, decimals: 0 },
    { id: 'processes', label: 'Jobs automated', suffix: '+', value: 340, decimals: 0 },
    { id: 'clients', label: 'Company clients', suffix: '+', value: 85, decimals: 0 },
    { id: 'roi', label: 'Average return', suffix: 'Ã—', value: 3.2, decimals: 1 },
  ],
  bento: {
    eyebrow: 'What we do',
    title: 'Automation',
    highlight: 'that grows with you',
    description: 'Four main ways we help â€” each with a clear plan and support.',
    viewAll: 'See all services â†’',
  },
  whyChooseUs: {
    eyebrow: 'Why AitoTech',
    title: 'We focus on',
    highlight: 'real results',
    description: 'We are a partner who stays with you â€” not a company that sells and leaves.',
    items: [
      {
        title: 'Results first',
        body: 'We start with clear goals: hours saved, fewer errors, lower cost â€” not long slide decks.',
      },
      {
        title: 'Safe by design',
        body: 'We build with strong security and clear rules for who can see your data.',
      },
      {
        title: 'We work with you',
        body: 'Our team works side by side with yours from day one through growth.',
      },
      {
        title: 'Gets better over time',
        body: 'Our systems learn from your work and get more accurate without rebuilding everything.',
      },
    ],
  },
  cta: {
    title: 'Ready to improve',
    highlight: 'how you work?',
    description: 'Talk to our team. We will map your work and set clear goals before we write any code.',
    button: 'Book a call',
  },
  process: {
    eyebrow: 'How we work',
    title: 'A clear path from',
    highlight: 'start to results',
    description: 'Fixed steps, clear dates, and results you can measure.',
  },
} as const;

/** â”€â”€â”€ SERVICES PAGE â”€â”€â”€ */
export const servicesPage = {
  hero: {
    badge: 'What we do',
    title: 'Smart',
    highlight: 'automation services',
    description:
      'Each service comes with a dedicated team â€” engineers and support staff focused on your goals.',
    comingSoonNote:
      'Some service pages will get case studies and demos soon. See the previews below or contact us for early access.',
  },
  placeholder: {
    title: 'More content coming soon',
    body: 'We are adding case studies, pricing guides, and demos for each service. Check back soon or contact us for a walkthrough.',
    cta: 'Ask for early access',
  },
  processSteps: [
    { step: '01', title: 'Discover', body: 'We learn how you work today and set clear goals with your team.' },
    { step: '02', title: 'Design', body: 'We plan safe systems, connections to your tools, and AI where it helps.' },
    { step: '03', title: 'Launch', body: 'We go live with monitoring, support, and training for your team.' },
    { step: '04', title: 'Grow', body: 'We keep improving as your volume and needs grow.' },
  ],
} as const;

/** Service catalog â€” used on home bento, services page, and detail routes */
export const services = [
  {
    slug: 'data-automation',
    title: 'Data Automation',
    short: 'Connect your data. Stop copy-paste.',
    description:
      'AI moves data between your tools in real time. It maps fields for you. When something changes, the pipeline fixes itself â€” so your team trusts every report.',
    features: ['Live sync', 'Smart field mapping', 'Data quality checks', 'See where data came from'],
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
    short: 'Connect tools. Remove bottlenecks.',
    description:
      'We connect your apps, route approvals, and trigger AI decisions â€” from invoice intake to customer onboarding.',
    features: ['Connect many apps', 'Smart routing', 'Full change history', 'Deadline alerts'],
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
      'Scan and read invoices with AI. Match to orders. Catch errors. Process many invoices with high accuracy and send to your business system.',
    features: ['High read accuracy', 'Match orders to invoices', 'Business system links', 'Spend reports'],
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
    short: 'AI built for your business.',
    description:
      'Custom AI models, knowledge bases, and agents that run on your servers â€” not generic chatbots pasted onto your tools.',
    features: ['Custom training', 'Private knowledge base', 'Agent workflows', 'Human review when needed'],
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

/** â”€â”€â”€ ABOUT PAGE â”€â”€â”€ */
export const aboutPage = {
  hero: {
    eyebrow: 'Our story',
    title: 'Building the',
    highlight: 'future of work',
    description:
      'AitoTech started with one idea: AI should make work easier, not harder.',
    comingSoonBadge: 'Team profiles coming soon',
  },
  founder: {
    initials: 'AT',
    role: 'Founder & CEO',
    company: 'AitoTech',
    established: 'Est. 2022',
    letterTitle: 'A letter from our',
    letterHighlight: 'founder',
    paragraphs: [
      'I started AitoTech after watching smart teams waste hours on repeat work â€” copying data between systems, chasing invoice approvals, answering the same support tickets. The tech to fix this existed. The right partner did not.',
      'We built AitoTech to be the partner I wished I had: engineers who understand business, who measure success in hours returned to your people, and who treat security as a must. Every project has clear goals and a path to grow.',
      'Today we work with finance, logistics, and healthcare leaders who refuse to accept "that is how we have always done it." If that sounds like you â€” let us build something great together.',
    ],
    signature: 'â€” The AitoTech team',
    imageAlt: 'AitoTech founder â€” replace with your photo in siteContent.images.founder',
  },
  pillars: [
    { title: 'Mission', body: 'Make automation easy to use, easy to measure, and good for people.' },
    { title: 'Vision', body: 'Every team works fast with AI â€” not hours of copy-paste.' },
    { title: 'Values', body: 'Honesty, security, and real results over vanity numbers.' },
  ],
  teamPlaceholder: {
    title: 'Meet the team',
    comingSoon: 'Coming soon',
    body: 'We are preparing team profiles, leader bios, and office photos. Contact us â€” tell us what you want to build.',
    cta: 'Contact us',
  },
  ctaButton: 'Work with us',
} as const;

/** â”€â”€â”€ CONTACT PAGE â”€â”€â”€ */
export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    title: "Let's",
    highlight: 'build together',
    description:
      'Tell us what you want to build or fix. We reply within one business day.',
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
      message: 'Tell us about your goals, team size, and timeline...',
    },
  },
  mapPlaceholder: {
    title: 'Visit Us',
    body: 'Delhi, India Â· 28.7041Â° N, 77.1025Â° E',
    directions: 'Get directions',
  },
} as const;

/** â”€â”€â”€ FOOTER â”€â”€â”€ */
export const footer = {
  blurb: 'smart AI for business and Routely for developers who code.',
  navigateTitle: 'Navigate',
  docsTitle: 'Routely docs',
  servicesTitle: 'Services',
  contactTitle: 'Contact',
  socialTitle: 'Follow us',
  legal: ['Privacy', 'Terms'],
  docLinks: [
    { href: '/docs/getting-started', label: 'Getting started' },
    { href: '/docs/installation', label: 'Installation' },
    { href: '/docs/cursor-connect', label: 'Desktop editor API' },
    { href: '/docs/api', label: 'API reference' },
  ],
} as const;

/** Service detail page shared copy */
export const serviceDetail = {
  ctaTitle: (name: string) => `Ready to start with ${name}?`,
  ctaBody:
    'Book a call â€” we will map your work and set clear goals.',
  ctaButton: 'Talk to our team',
  comingSoon: {
    badge: 'Coming soon',
    body: 'Full case studies, pricing, and demos for this service are on the way. Contact us for early access.',
    cta: 'Join waitlist',
  },
} as const;

/** ─── ROUTELY LAUNCH PAGE ─── */
export const routely = {
  badge: 'Coding AI · Made in India',
  title: 'Routely',
  headline: 'Code with AI. Best free model, picked for you.',
  subtitle: 'Routely — AI coding tool built in India',
  tagline: 'Browser or desktop. Memory that remembers. Git built in.',
  heroLead:
    'Tell Routely what to build or fix. It picks the best free AI model for that job, understands your codebase, and remembers your chat. Try in the browser or download for local projects.',
  description:
    'Routely by AitoTech — smart model routing, browser IDE, persistent memory, agent workflows, and git. Join the waitlist before public launch.',
  elevatorPitch:
    'One AI for coding — smart routing, persistent memory, agent workflows, and git — in your browser or on your machine.',
  elevatorLabel: 'In one line',
  cta: 'Join the waitlist',
  ctaSecondary: 'Try demo',
  ctaTryBrowser: 'Try in browser',
  tryBrowserHref: 'https://app.routely.aitotech.in',
  ctaHint: 'Early access · launch news · no spam',
  status: 'Building — waitlist open · browser beta next',
  waitlistSubtitle: 'Join the waitlist. We will email you when Routely opens.',
  roadmap: [
    { phase: 'Now', label: 'Waitlist, demo, and docs live on aitotech.in', done: true },
    { phase: 'Next', label: 'Browser IDE beta at app.routely.aitotech.in', done: false },
    { phase: 'Later', label: 'Desktop download · agent multitask · India E2E hosting', done: false },
  ],
  features: [
    {
      title: 'Smart model routing',
      body: 'You never pick a model. Routely routes each task to the best free OpenRouter model for coding, debug, git, or refactor.',
    },
    {
      title: 'Persistent memory',
      body: 'Full chat history per project. Pick up where you left off — Routely remembers context.',
    },
    {
      title: 'Agent workflows',
      body: 'Give multiple tasks. Routely runs agent workflows — fix code, pull from git, push changes — like a coding teammate.',
    },
    {
      title: 'Browser + desktop',
      body: 'Try online in Chrome with no install. Or download Routely for local folders and real git on your machine.',
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
      a: 'Routely is AitoTech\'s AI coding tool. You describe tasks in plain English. Routely picks the best free model, writes or fixes code, and remembers your project chat.',
    },
    {
      q: 'Do I choose an AI model?',
      a: 'No. Routely routes each task automatically — debug, build, git, refactor — to the best free model for that job.',
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
