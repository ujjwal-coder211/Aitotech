/**
 * Arya Homes and Builder — client site content.
 *
 * REAL data (from the business's Google Business Profile): name, address,
 * phone, rating/review count, hours, Instagram.
 * SAMPLE data (must be replaced with the client's real inventory before
 * going live): the property listings and their photos/prices.
 */

export const arya = {
  name: 'Arya Homes and Builder',
  nameHi: 'आर्य होम्स एंड बिल्डर',
  category: 'Real estate developer',
  tagline: 'Your dream home in Uttam Nagar',
  /** real — Google Business Profile */
  rating: '4.8',
  reviewCount: '40',
  phone: '085868 45072',
  phoneIntl: '+918586845072',
  whatsapp: '918586845072',
  address: 'B-22, G/F, Rama Park, Uttam Nagar, Delhi 110059',
  hours: 'Open today · Closes 7 pm',
  hoursDetail: 'Mon – Sun · 9:00 am – 7:00 pm',
  instagram: 'https://instagram.com/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Arya+Homes+and+Builder+Rama+Park+Uttam+Nagar+Delhi',
  mapEmbed:
    'https://maps.google.com/maps?q=Rama%20Park%2C%20Uttam%20Nagar%2C%20Delhi%20110059&z=15&output=embed',

  hero: {
    badge: 'Uttam Nagar · Rama Park',
    heading: 'Your dream home in',
    headingAccent: 'Uttam Nagar',
    sub: 'Ready-to-move flats, builder floors, and plots — handpicked by a local team that knows every lane of Uttam Nagar. Visit before you decide.',
    ctaPrimary: 'Book a free site visit',
    ctaSecondary: 'WhatsApp us',
  },

  /** real, verifiable trust facts only */
  trust: [
    { value: '4.8★', label: 'Google rating' },
    { value: '40+', label: 'Verified reviews' },
    { value: 'Uttam Nagar', label: 'Local specialists' },
    { value: 'Free', label: 'Site visits' },
  ],

  /** SAMPLE inventory — replace with the client's live listings */
  properties: [
    { title: '2 BHK Builder Floor', price: '₹24 – 27 Lakh', area: '74 Gaj', location: 'Rama Park, Uttam Nagar', tags: ['Lift', 'Parking', 'Ready to move'], type: '2 BHK' },
    { title: '3 BHK Independent Floor', price: '₹38 – 42 Lakh', area: '100 Gaj', location: 'Mohan Garden, Uttam Nagar', tags: ['Corner', 'Park facing', 'Loan available'], type: '3 BHK' },
    { title: '1 BHK Apartment', price: '₹15 – 18 Lakh', area: '45 Gaj', location: 'Nawada, Uttam Nagar', tags: ['Metro nearby', 'Ready to move'], type: '1 BHK' },
    { title: '2 BHK Apartment', price: '₹22 – 25 Lakh', area: '65 Gaj', location: 'Dwarka Mor', tags: ['Lift', 'Metro 5 min'], type: '2 BHK' },
    { title: '4 BHK Luxury Floor', price: '₹55 – 65 Lakh', area: '150 Gaj', location: 'Uttam Nagar West', tags: ['Modular kitchen', 'Covered parking'], type: '4 BHK' },
    { title: 'Residential Plot', price: '₹18 – 22 Lakh', area: '50 Gaj', location: 'Rama Park', tags: ['Clear title', 'Build to suit'], type: 'Plot' },
  ],

  services: [
    { icon: 'home', title: 'Buy a home', body: 'Flats, builder floors, and plots across Uttam Nagar — shortlisted to your budget.' },
    { icon: 'tag', title: 'Sell your property', body: 'Fair valuation and genuine buyers from our local network. No time wasted.' },
    { icon: 'key', title: 'Rent & lease', body: 'Verified tenants and landlords, paperwork handled end to end.' },
    { icon: 'build', title: 'Construction & collaboration', body: 'Builder collaborations and construction on your plot, delivered on schedule.' },
    { icon: 'bank', title: 'Home loan assistance', body: 'We help you compare banks and get your loan approved without the runaround.' },
    { icon: 'doc', title: 'Paperwork & registry', body: 'Agreement, registry, and mutation — guided at every step.' },
  ],

  why: [
    { title: 'We only deal in Uttam Nagar', body: 'One area, known deeply — pricing, builders, and which lanes are worth it.' },
    { title: 'See it before you decide', body: 'Free site visits, no pressure. Visit as many properties as you need.' },
    { title: 'Straight answers on price', body: 'What it costs, what it needs, and what it is worth — told honestly.' },
    { title: 'Rated 4.8 by 40+ families', body: 'Our Google reviews come from real buyers in the neighbourhood.' },
  ],

  steps: [
    { step: '01', title: 'Tell us what you need', body: 'Budget, BHK, and preferred area — a quick call or WhatsApp is enough.' },
    { step: '02', title: 'We shortlist for you', body: 'Only properties that match. No endless irrelevant options.' },
    { step: '03', title: 'Visit for free', body: 'We take you to each site and answer everything on the spot.' },
    { step: '04', title: 'Paperwork & handover', body: 'Loan, agreement, registry — we stay with you until you get the keys.' },
  ],

  /** SAMPLE video posts — replace `href` with the client's real Instagram reel links */
  videos: [
    { caption: '2 BHK builder floor tour · Rama Park', tag: 'Property tour', duration: '0:45', accent: '#0f172a' },
    { caption: 'Inside a 3 BHK · Mohan Garden', tag: 'Walkthrough', duration: '1:12', accent: '#7c2d12' },
    { caption: 'New project launch · Uttam Nagar West', tag: 'Launch', duration: '0:30', accent: '#134e4a' },
    { caption: 'Happy family handover 🏡', tag: 'Client story', duration: '0:22', accent: '#4c1d95' },
    { caption: 'Plot in Rama Park · walkthrough', tag: 'Plot', duration: '0:38', accent: '#1e3a8a' },
  ],

  faq: [
    { q: 'Do you charge for site visits?', a: 'No. Site visits are completely free and there is no obligation to buy.' },
    { q: 'Which areas do you cover?', a: 'We specialise in Uttam Nagar and nearby — Rama Park, Mohan Garden, Nawada, Dwarka Mor, and Uttam Nagar West.' },
    { q: 'Can you help with a home loan?', a: 'Yes. We help you compare banks and guide the paperwork until approval.' },
    { q: 'Do you deal in rentals too?', a: 'Yes — buying, selling, and renting, plus construction and builder collaborations.' },
    { q: 'How do I start?', a: 'Call or WhatsApp us with your budget and requirement. We will shortlist and arrange visits.' },
  ],
} as const;
