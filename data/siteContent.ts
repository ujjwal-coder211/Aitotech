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
    // Handles confirmed by founder (2026-08)
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

