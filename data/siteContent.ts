/**
 * ═══════════════════════════════════════════════════════════════════
 *  AitoTech — SINGLE SOURCE OF TRUTH FOR ALL WEBSITE CONTENT
 *  Edit text, contact info, and image paths here only.
 * ═══════════════════════════════════════════════════════════════════
 */

/** Brand & contact — update email, phone, socials here */
export const site = {
  name: 'AitoTech',
  tagline: 'AI tools for business',
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
  primary: 'Book a call',
  secondary: 'See services',
  contact: 'Contact us',
} as const;

/** ─── HOME PAGE ─── */
export const home = {
  hero: {
    badge: 'AI for business',
    title: 'Work smarter,',
    titleHighlight: 'not harder.',
    description:
      'AitoTech helps teams stop doing the same manual work again and again. We use AI to save time, cut mistakes, and get clear results.',
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
    { id: 'roi', label: 'Average return', suffix: '×', value: 3.2, decimals: 1 },
  ],
  bento: {
    eyebrow: 'What we do',
    title: 'Automation',
    highlight: 'that grows with you',
    description: 'Four main ways we help — each with a clear plan and support.',
    viewAll: 'See all services →',
  },
  whyChooseUs: {
    eyebrow: 'Why AitoTech',
    title: 'We focus on',
    highlight: 'real results',
    description: 'We are a partner who stays with you — not a company that sells and leaves.',
    items: [
      {
        title: 'Results first',
        body: 'We start with clear goals: hours saved, fewer errors, lower cost — not long slide decks.',
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

/** ─── SERVICES PAGE ─── */
export const servicesPage = {
  hero: {
    badge: 'What we do',
    title: 'Smart',
    highlight: 'automation services',
    description:
      'Each service comes with a dedicated team — engineers and support staff focused on your goals.',
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

/** Service catalog — used on home bento, services page, and detail routes */
export const services = [
  {
    slug: 'data-automation',
    title: 'Data Automation',
    short: 'Connect your data. Stop copy-paste.',
    description:
      'AI moves data between your tools in real time. It maps fields for you. When something changes, the pipeline fixes itself — so your team trusts every report.',
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
      'We connect your apps, route approvals, and trigger AI decisions — from invoice intake to customer onboarding.',
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
      'Custom AI models, knowledge bases, and agents that run on your servers — not generic chatbots pasted onto your tools.',
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

/** ─── ABOUT PAGE ─── */
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
      'I started AitoTech after watching smart teams waste hours on repeat work — copying data between systems, chasing invoice approvals, answering the same support tickets. The tech to fix this existed. The right partner did not.',
      'We built AitoTech to be the partner I wished I had: engineers who understand business, who measure success in hours returned to your people, and who treat security as a must. Every project has clear goals and a path to grow.',
      'Today we work with finance, logistics, and healthcare leaders who refuse to accept "that is how we have always done it." If that sounds like you — let us build something great together.',
    ],
    signature: '— The AitoTech team',
    imageAlt: 'AitoTech founder — replace with your photo in siteContent.images.founder',
  },
  pillars: [
    { title: 'Mission', body: 'Make automation easy to use, easy to measure, and good for people.' },
    { title: 'Vision', body: 'Every team works fast with AI — not hours of copy-paste.' },
    { title: 'Values', body: 'Honesty, security, and real results over vanity numbers.' },
  ],
  teamPlaceholder: {
    title: 'Meet the team',
    comingSoon: 'Coming soon',
    body: 'We are preparing team profiles, leader bios, and office photos. Contact us — tell us what you want to build.',
    cta: 'Contact us',
  },
  ctaButton: 'Work with us',
} as const;

/** ─── CONTACT PAGE ─── */
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
    body: 'Delhi, India · 28.7041° N, 77.1025° E',
    directions: 'Get directions',
  },
} as const;

/** ─── FOOTER ─── */
export const footer = {
  blurb: 'building smart AI tools for growing companies.',
  navigateTitle: 'Navigate',
  docsTitle: 'Aksh docs',
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
    'Book a call — we will map your work and set clear goals.',
  ctaButton: 'Talk to our team',
  comingSoon: {
    badge: 'Coming soon',
    body: 'Full case studies, pricing, and demos for this service are on the way. Contact us for early access.',
    cta: 'Join waitlist',
  },
} as const;

/** ─── AKSH LAUNCH PAGE (coming soon / waitlist / press) ─── */
export const aksh = {
  badge: 'Public launch · Made in India',
  title: 'Aksh',
  headline: 'Code with AI in your browser.',
  subtitle: 'Aksh — AI coding tool built in India',
  tagline: 'Aksh Studio + Omni. Write code. Build apps. No big download.',
  heroLead:
    'Aksh helps you write code with AI. Open a full editor in your browser. Save projects online. Talk to one AI named Omni — no long model list. Data can stay in India on E2E Networks. Works on a normal laptop because hard work runs on our servers.',
  description:
    'Aksh by AitoTech — browser editor (Aksh Studio), Omni AI, cloud projects, and chat memory. Join the waitlist before public launch.',
  elevatorPitch:
    'Write code, fix bugs, and build apps with Omni — in your browser, on cloud projects, with memory that remembers your work.',
  elevatorLabel: 'In one line',
  cta: 'Join the waitlist',
  ctaSecondary: 'Press kit',
  ctaHint: 'Early access · launch news · no spam',
  status: 'Coming soon — waitlist is open · Studio beta next',
  waitlistSubtitle:
    'Join the waitlist for early access. We will email you when Aksh Studio opens.',
  platformTitle: 'What you get',
  platformSubtitle: 'Not just chat — a full product: editor, AI, memory, and cloud storage.',
  quickStartTitle: 'After launch — 3 steps',
  faqTitle: 'Questions and answers',
  pressSectionTitle: 'Press and media',
  pressSectionCta: 'Full press kit',
  mockupOmniReply: 'Todo app is ready. Files saved.',

  testimonials: {
    title: 'Early feedback on Aksh',
    items: [
      {
        quote:
          'The browser editor plus one AI is exactly what our team wanted. No model picker, no heavy install — we opened Studio and shipped a prototype the same day.',
        author: 'Product team',
        role: 'Delhi startup',
      },
      {
        quote:
          'Omni Memory is the difference. We picked up yesterday’s chat and Omni still knew our API routes. That is rare in browser tools.',
        author: 'Backend developer',
        role: 'Waitlist beta',
      },
      {
        quote:
          'India hosting matters for us. Aksh feels like a serious roadmap — editor, cloud projects, and Omni in one place.',
        author: 'Engineering lead',
        role: 'Enterprise pilot',
      },
    ],
  },

  press: {
    pageTitle: 'Press and media kit',
    pageDescription: 'Official text about Aksh for news sites and tech press. Copy and paste.',
    contactEmail: site.email,
    contactLabel: 'Press contact',
    short:
      'Aksh is AitoTech\'s AI coding tool for India — browser editor (Aksh Studio), one AI named Omni, cloud projects, and hosting on E2E Networks.',
    medium:
      'AitoTech, based in Delhi, India, is launching Aksh — an AI coding tool for developers. Aksh Studio is a full editor in the browser. Omni handles all coding help in one place. Projects save in the cloud. It runs on low-RAM laptops because AI work happens online. Live servers will use E2E Networks in India. Waitlist: aitotech.in/aksh.',
    long:
      'AitoTech (aitotech.in) builds AI tools for businesses in Delhi, India. The company is launching Aksh — a coding tool with Aksh Studio (browser editor with files and preview), Aksh Coder, and Omni (one AI for the user — no model picker). Projects live in the cloud. The browser is the app; servers do the heavy work. Live servers will run on E2E Networks so data can stay in India. Developers use plain English with Omni. You can connect a desktop coding tool through the API. Waitlist: aitotech.in/aksh. Press: info@aitotech.in.',
    facts: [
      { label: 'Product', value: 'Aksh — AI coding (Studio + Coder + Omni)' },
      { label: 'What it is', value: 'Browser-first AI coding tool for India' },
      { label: 'Company', value: 'AitoTech, Delhi, India' },
      { label: 'Status', value: 'Coming soon; waitlist open' },
      { label: 'Hosting', value: 'E2E Networks India (live plan)' },
      { label: 'Language', value: 'Plain English commands to Omni' },
      { label: 'Website', value: 'https://aitotech.in/aksh' },
      { label: 'Press email', value: 'info@aitotech.in' },
    ],
    quote:
      'Developers in India deserve a serious AI coding tool — browser editor, one clear AI, data at home. That is Aksh, powered by Omni.',
    quoteAttribution: 'AitoTech team',
  },

  differentiators: {
    title: 'What makes Aksh different',
    subtitle: 'Our own product. Features you get together in one place.',
    items: [
      {
        title: 'Works in your browser',
        body: 'Aksh Studio is a full editor in Chrome or Edge — files, preview, and AI in one tab. No 2 GB download.',
      },
      {
        title: 'One AI: Omni',
        body: 'You talk to Omni only. No long list of models. Omni picks the best engine behind the scenes.',
      },
      {
        title: 'Omni Memory',
        body: 'Each chat saves your project story. Come back tomorrow — Omni still knows your code.',
      },
      {
        title: 'Cloud projects',
        body: 'Code lives on the server. Upload a zip, edit online, open from anywhere. Built in, not an add-on.',
      },
      {
        title: 'Light on your laptop',
        body: 'UI in the browser; AI and storage online. A 4 GB RAM machine is enough for real work.',
      },
      {
        title: 'India hosting plan',
        body: 'Live servers will use E2E Networks — API, database, and storage in India for teams that care where code runs.',
      },
    ],
  },

  whyIndia: {
    title: 'Why Aksh for India?',
    items: [
      {
        title: 'Data stays in India',
        body: 'We plan to run live servers on E2E Networks — API, database, and storage in India. Good for companies that care where data lives.',
      },
      {
        title: 'Simple English works',
        body: 'Tell Omni what you want in plain English. Example: "Build a login page" or "Fix this bug." No need for perfect technical words.',
      },
      {
        title: 'Browser is the editor',
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
      { title: 'Developers', body: 'Ship faster with Omni, cloud projects, and a browser editor you can open anywhere.' },
      { title: 'Students', body: 'Code in the browser on any laptop. Free tier planned.' },
      { title: 'Startups', body: 'Build your first app fast with Omni. Save projects in the cloud.' },
      { title: 'Companies', body: 'Data in India, private server options, E2E hosting.' },
    ],
  },

  features: [
    {
      title: 'Aksh Studio',
      body: 'A full editor in your browser. Files, tabs, cloud projects, zip upload, and preview. Smooth on 4 GB RAM because AI runs in the cloud.',
    },
    {
      title: 'Omni',
      body: 'One AI for code, fixes, and full apps. You only see Omni. Smart engines run behind the scenes — you never manage a model list.',
    },
    {
      title: 'Omni Memory',
      body: 'Each chat remembers your project. Open an old chat and Omni still knows what you built. New chat = fresh start.',
    },
    {
      title: 'India cloud',
      body: 'Projects and app data will run on E2E Networks in India — Delhi region for API and database. Less worry about sending code to foreign servers.',
    },
  ],

  roadmap: [
    { phase: 'Now', label: 'Waitlist and docs are live', done: true },
    { phase: 'Next', label: 'Aksh Studio beta on E2E Networks', done: false },
    { phase: 'Later', label: 'India pricing · desktop option · company servers', done: false },
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
      { value: 'studio', label: 'Aksh Studio (editor)' },
      { value: 'coder', label: 'Aksh Coder (AI coding)' },
      { value: 'both', label: 'Both' },
    ],
    success: 'You are on the list! We will email you before launch.',
    error: 'Something went wrong. Try again or email info@aitotech.in',
  },
  docsCta: {
    title: 'Documentation',
    description: 'Step-by-step guides: install, desktop editor API, and web API.',
    button: 'Read the docs',
    href: '/docs',
  },
  quickStart: [
    { step: '01', title: 'Join waitlist', body: 'Sign up at aitotech.in/aksh. Get your API key when we launch.' },
    { step: '02', title: 'Open Aksh Studio', body: 'Use the editor in your browser. No big install needed.' },
    { step: '03', title: 'Ask Omni', body: 'Type what you want in simple English. Omni writes the code.' },
  ],
  faqs: [
    {
      q: 'What makes Aksh different?',
      a: 'Browser editor, one AI (Omni), cloud projects, chat memory, and India hosting — built together as one tool. You do not install a heavy desktop app or pick from many AI models.',
    },
    {
      q: 'What is Aksh?',
      a: 'Aksh is AitoTech\'s AI coding tool. It includes Aksh Studio (browser editor), Aksh Coder, and Omni. Write code in plain English and save work in the cloud.',
    },
    {
      q: 'Do I need to download anything?',
      a: 'No for most users. Open Aksh Studio in your browser. Advanced users can connect other tools through the Omni API (see docs).',
    },
    {
      q: 'When does Aksh launch?',
      a: 'We are coming soon. Join the waitlist at aitotech.in/aksh for early access to Aksh Studio.',
    },
    {
      q: 'What is Omni?',
      a: 'Omni is the only AI you use in Aksh. It writes code, fixes bugs, and builds apps. You do not choose separate models — Omni handles that for you.',
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
