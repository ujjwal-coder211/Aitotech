/**
 * Real, viewable demo website templates — one per industry.
 * Each renders as a full sample site at /demos/preview/[slug] and as a
 * realistic thumbnail on the /demos page. Content is representative sample
 * copy so a client can picture their own site.
 */

export type DemoSection =
  | { type: 'features'; title: string; items: { icon: string; title: string; body: string }[] }
  | { type: 'menu'; title: string; items: { name: string; price: string; note: string }[] }
  | { type: 'listings'; title: string; items: { title: string; price: string; meta: string }[] }
  | { type: 'gallery'; title: string; items: string[] }
  | { type: 'services'; title: string; items: { title: string; body: string }[] };

export interface DemoTemplate {
  slug: string;
  category: string;
  /** the sample brand shown inside the demo */
  brand: string;
  tagline: string;
  /** palette — hex so we can inline-style each demo distinctly */
  palette: {
    primary: string;
    primaryDark: string;
    accent: string;
    bg: string;
    surface: string;
    text: string;
    muted: string;
  };
  nav: string[];
  hero: {
    eyebrow: string;
    heading: string;
    sub: string;
    cta: string;
    ctaAlt: string;
  };
  stats: { value: string; label: string }[];
  sections: DemoSection[];
  testimonial: { quote: string; name: string; role: string };
  cta: { heading: string; sub: string; button: string };
  /** short description + tags for the /demos card */
  card: { name: string; blurb: string; tags: string[] };
}

export const demoTemplates: DemoTemplate[] = [
  {
    slug: 'business',
    category: 'Business',
    brand: 'Northwind Consulting',
    tagline: 'Strategy that moves your business forward',
    palette: {
      primary: '#4f46e5', primaryDark: '#3730a3', accent: '#818cf8',
      bg: '#0b1020', surface: '#141a2e', text: '#eef1fb', muted: '#9aa3c7',
    },
    nav: ['Home', 'Services', 'About', 'Case Studies', 'Contact'],
    hero: {
      eyebrow: 'Trusted by 120+ growing companies',
      heading: 'Consulting that turns ideas into measurable growth',
      sub: 'We help ambitious businesses plan, launch, and scale — with clear strategy and hands-on execution.',
      cta: 'Book a consultation',
      ctaAlt: 'Our services',
    },
    stats: [
      { value: '120+', label: 'Clients served' },
      { value: '15 yrs', label: 'Experience' },
      { value: '4.9★', label: 'Client rating' },
      { value: '32%', label: 'Avg. growth' },
    ],
    sections: [
      {
        type: 'services',
        title: 'What we do',
        items: [
          { title: 'Business Strategy', body: 'Market research, positioning, and a roadmap your team can act on.' },
          { title: 'Operations', body: 'Streamline processes and cut costs without cutting quality.' },
          { title: 'Digital Growth', body: 'Websites, funnels, and campaigns that bring real customers.' },
        ],
      },
      {
        type: 'features',
        title: 'Why choose us',
        items: [
          { icon: '🎯', title: 'Outcome-focused', body: 'We measure success by your results, not hours billed.' },
          { icon: '🤝', title: 'Senior team', body: 'You work directly with experienced consultants.' },
          { icon: '⚡', title: 'Fast delivery', body: 'Clear milestones and no endless meetings.' },
        ],
      },
    ],
    testimonial: {
      quote: 'Northwind gave us a plan we could actually follow. Revenue is up 30% in six months.',
      name: 'Priya Menon', role: 'Founder, Bloom Retail',
    },
    cta: { heading: 'Ready to grow?', sub: 'Book a free 30-minute strategy call today.', button: 'Get in touch' },
    card: { name: 'Business Website', blurb: 'Company profile, services, enquiry forms, and WhatsApp chat.', tags: ['5–7 pages', 'SEO-ready', 'Enquiry form'] },
  },
  {
    slug: 'ecommerce',
    category: 'E-commerce',
    brand: 'Lumen Store',
    tagline: 'Everyday essentials, delivered',
    palette: {
      primary: '#0ea5e9', primaryDark: '#0369a1', accent: '#38bdf8',
      bg: '#071019', surface: '#0f1e2b', text: '#eaf6ff', muted: '#8fb3c9',
    },
    nav: ['Shop', 'New', 'Deals', 'Track order', 'Cart'],
    hero: {
      eyebrow: 'Free delivery over ₹499',
      heading: 'Shop the essentials you actually love',
      sub: 'Handpicked products, secure UPI & card payments, and order tracking on WhatsApp.',
      cta: 'Shop now',
      ctaAlt: 'View deals',
    },
    stats: [
      { value: '2,400+', label: 'Products' },
      { value: '50k+', label: 'Orders shipped' },
      { value: '4.8★', label: 'Buyer rating' },
      { value: '24h', label: 'Dispatch' },
    ],
    sections: [
      {
        type: 'listings',
        title: 'Bestsellers',
        items: [
          { title: 'Wireless Earbuds', price: '₹1,299', meta: 'In stock' },
          { title: 'Cotton T-Shirt', price: '₹499', meta: '5 colours' },
          { title: 'Steel Water Bottle', price: '₹649', meta: 'Bestseller' },
          { title: 'Desk Lamp', price: '₹899', meta: 'New' },
        ],
      },
      {
        type: 'features',
        title: 'Why shop with us',
        items: [
          { icon: '🚚', title: 'Fast delivery', body: 'Dispatched within 24 hours, pan-India.' },
          { icon: '🔒', title: 'Secure payments', body: 'UPI, cards, and cash on delivery.' },
          { icon: '↩️', title: 'Easy returns', body: '7-day no-questions returns.' },
        ],
      },
    ],
    testimonial: {
      quote: 'Ordering was smooth and the WhatsApp order updates are so convenient.',
      name: 'Rahul Verma', role: 'Verified buyer',
    },
    cta: { heading: 'New here?', sub: 'Get 10% off your first order with code HELLO10.', button: 'Start shopping' },
    card: { name: 'E-commerce Store', blurb: 'Product catalog, cart, UPI/card payments, order tracking.', tags: ['Payments', 'Inventory', 'WhatsApp updates'] },
  },
  {
    slug: 'restaurant',
    category: 'Restaurant',
    brand: 'Saffron Table',
    tagline: 'Modern Indian kitchen',
    palette: {
      primary: '#f59e0b', primaryDark: '#b45309', accent: '#fbbf24',
      bg: '#1a1206', surface: '#2a1e0c', text: '#fdf6ea', muted: '#d0b487',
    },
    nav: ['Menu', 'Book a table', 'Order', 'Gallery', 'Contact'],
    hero: {
      eyebrow: 'Open today · 12pm – 11pm',
      heading: 'Bold flavours, warm hospitality',
      sub: 'Freshly cooked classics with a modern twist. Book a table or order online in seconds.',
      cta: 'Book a table',
      ctaAlt: 'View menu',
    },
    stats: [
      { value: '4.7★', label: 'Google rating' },
      { value: '80+', label: 'Dishes' },
      { value: '12', label: 'Years serving' },
      { value: '30 min', label: 'Avg. delivery' },
    ],
    sections: [
      {
        type: 'menu',
        title: 'Signature dishes',
        items: [
          { name: 'Butter Chicken', price: '₹340', note: 'Chef’s special' },
          { name: 'Paneer Tikka', price: '₹280', note: 'Veg' },
          { name: 'Hyderabadi Biryani', price: '₹320', note: 'Bestseller' },
          { name: 'Gulab Jamun', price: '₹120', note: 'Dessert' },
        ],
      },
      {
        type: 'features',
        title: 'Why dine with us',
        items: [
          { icon: '🍽️', title: 'Table booking', body: 'Reserve online in a few taps.' },
          { icon: '📱', title: 'QR ordering', body: 'Scan, order, and pay from your table.' },
          { icon: '⭐', title: 'Loved locally', body: 'Rated 4.7 by hundreds of guests.' },
        ],
      },
    ],
    testimonial: {
      quote: 'Best butter chicken in town and booking a table online was effortless.',
      name: 'Sneha Kapoor', role: 'Regular guest',
    },
    cta: { heading: 'Hungry?', sub: 'Reserve your table or order online now.', button: 'Book a table' },
    card: { name: 'Restaurant & Café', blurb: 'Digital menu, table booking, QR ordering, and reviews.', tags: ['QR menu', 'Booking', 'Google Maps'] },
  },
  {
    slug: 'clinic',
    category: 'Healthcare',
    brand: 'SmileCare Dental',
    tagline: 'Gentle, modern dentistry',
    palette: {
      primary: '#10b981', primaryDark: '#047857', accent: '#34d399',
      bg: '#04140f', surface: '#0b2018', text: '#eafff6', muted: '#8fc9b3',
    },
    nav: ['Home', 'Treatments', 'Doctors', 'Book appointment', 'Contact'],
    hero: {
      eyebrow: 'Now accepting new patients',
      heading: 'A healthier smile starts here',
      sub: 'Painless treatments, experienced doctors, and easy online appointment booking with reminders.',
      cta: 'Book appointment',
      ctaAlt: 'Our treatments',
    },
    stats: [
      { value: '10k+', label: 'Happy patients' },
      { value: '4.9★', label: 'Patient rating' },
      { value: '6', label: 'Specialists' },
      { value: '18 yrs', label: 'Experience' },
    ],
    sections: [
      {
        type: 'services',
        title: 'Treatments',
        items: [
          { title: 'General Dentistry', body: 'Check-ups, cleaning, and fillings in a calm setting.' },
          { title: 'Braces & Aligners', body: 'Straighten your smile with modern, low-visibility options.' },
          { title: 'Implants', body: 'Permanent, natural-looking tooth replacement.' },
        ],
      },
      {
        type: 'features',
        title: 'Why patients trust us',
        items: [
          { icon: '📅', title: 'Easy booking', body: 'Book online and get WhatsApp reminders.' },
          { icon: '🦷', title: 'Painless care', body: 'Modern equipment and gentle specialists.' },
          { icon: '💚', title: 'Trusted', body: 'Rated 4.9 by thousands of patients.' },
        ],
      },
    ],
    testimonial: {
      quote: 'The reminders meant I never missed an appointment, and the team is wonderful.',
      name: 'Aman Gupta', role: 'Patient',
    },
    cta: { heading: 'Book your visit', sub: 'Appointments available this week.', button: 'Book appointment' },
    card: { name: 'Clinic & Healthcare', blurb: 'Doctor profiles, appointment booking, patient reminders.', tags: ['Appointments', 'Reminders', 'WhatsApp alerts'] },
  },
  {
    slug: 'realestate',
    category: 'Real Estate',
    brand: 'Prime Estates',
    tagline: 'Find a place to call home',
    palette: {
      primary: '#ec4899', primaryDark: '#be185d', accent: '#f472b6',
      bg: '#180712', surface: '#280f1f', text: '#fff0f7', muted: '#d29ab7',
    },
    nav: ['Buy', 'Rent', 'Projects', 'Book a visit', 'Contact'],
    hero: {
      eyebrow: '500+ verified listings',
      heading: 'Your next home, made simple',
      sub: 'Browse verified properties with filters, book a site visit, and get instant callbacks.',
      cta: 'Book a site visit',
      ctaAlt: 'Browse listings',
    },
    stats: [
      { value: '500+', label: 'Listings' },
      { value: '1,200', label: 'Happy families' },
      { value: '12', label: 'Cities' },
      { value: '4.8★', label: 'Rating' },
    ],
    sections: [
      {
        type: 'listings',
        title: 'Featured properties',
        items: [
          { title: '3 BHK Apartment', price: '₹85 L', meta: 'Whitefield · 1,450 sqft' },
          { title: '2 BHK Flat', price: '₹52 L', meta: 'HSR Layout · 1,100 sqft' },
          { title: 'Villa', price: '₹1.8 Cr', meta: 'Sarjapur · 2,800 sqft' },
          { title: 'Plot', price: '₹40 L', meta: 'Devanahalli · 1,200 sqft' },
        ],
      },
      {
        type: 'features',
        title: 'Why buy with us',
        items: [
          { icon: '✅', title: 'Verified only', body: 'Every listing is checked by our team.' },
          { icon: '🗺️', title: 'Map view', body: 'Explore neighbourhoods before you visit.' },
          { icon: '📞', title: 'Instant callback', body: 'Talk to an agent within minutes.' },
        ],
      },
    ],
    testimonial: {
      quote: 'Filtered exactly what I wanted and booked a visit the same day. Found our home!',
      name: 'Divya & Karthik', role: 'Home buyers',
    },
    cta: { heading: 'Looking to move?', sub: 'Book a free site visit with a local expert.', button: 'Book a visit' },
    card: { name: 'Real Estate', blurb: 'Property listings with filters, site-visit booking, lead capture.', tags: ['Listings', 'Lead capture', 'Map view'] },
  },
  {
    slug: 'portfolio',
    category: 'Portfolio',
    brand: 'Aarav Sharma',
    tagline: 'Product designer & creative',
    palette: {
      primary: '#8b5cf6', primaryDark: '#6d28d9', accent: '#a78bfa',
      bg: '#0d0a1a', surface: '#171130', text: '#f2effc', muted: '#a99fce',
    },
    nav: ['Work', 'About', 'Services', 'Blog', 'Contact'],
    hero: {
      eyebrow: 'Available for freelance',
      heading: 'I design products people love to use',
      sub: 'A product designer helping startups turn ideas into clean, usable digital experiences.',
      cta: 'Start a project',
      ctaAlt: 'View my work',
    },
    stats: [
      { value: '60+', label: 'Projects' },
      { value: '8 yrs', label: 'Experience' },
      { value: '20+', label: 'Happy clients' },
      { value: '3', label: 'Awards' },
    ],
    sections: [
      {
        type: 'gallery',
        title: 'Selected work',
        items: ['Fintech app', 'Brand identity', 'SaaS dashboard', 'E-commerce redesign', 'Mobile game UI', 'Design system'],
      },
      {
        type: 'features',
        title: 'What I offer',
        items: [
          { icon: '🎨', title: 'UI/UX Design', body: 'Web and mobile app design end to end.' },
          { icon: '🧩', title: 'Design systems', body: 'Consistent, scalable component libraries.' },
          { icon: '✍️', title: 'Branding', body: 'Logos, identity, and visual language.' },
        ],
      },
    ],
    testimonial: {
      quote: 'Aarav understood our vision instantly and delivered a design that users adore.',
      name: 'Meera Nair', role: 'Founder, Tapstack',
    },
    cta: { heading: 'Have a project?', sub: 'Let’s build something great together.', button: 'Get in touch' },
    card: { name: 'Portfolio & Personal Brand', blurb: 'Showcase your work with testimonials, blog, and bookings.', tags: ['Showcase', 'Blog', 'Booking'] },
  },
];

export function getDemoTemplate(slug: string) {
  return demoTemplates.find((t) => t.slug === slug);
}
