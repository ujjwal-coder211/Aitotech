import type { Metadata } from 'next';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import LegalBody, { type LegalSection } from '@/components/ap/LegalBody';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How AitoTech collects, uses, stores and protects the information you share through our website, contact form and WhatsApp.',
  alternates: { canonical: '/privacy' },
};

const sections: LegalSection[] = [
  {
    heading: 'Who we are',
    paragraphs: [
      'AitoTech is a software and automation studio based in Delhi, India. This policy explains what we do with information you share through aitotech.in. If you have any question about it, write to info@aitotech.in.',
    ],
  },
  {
    heading: 'What we collect',
    paragraphs: ['We only collect what you choose to send us:'],
    list: [
      'Contact form: your name, email address, business name (optional) and the message you write.',
      'Waitlist and product forms: your name, email address, and the role or interest you select.',
      'WhatsApp: if you start a WhatsApp conversation with us, that conversation and your phone number sit in WhatsApp, which is operated by Meta under its own terms.',
      'Standard server logs kept by our hosting provider, which can include your IP address and browser type.',
    ],
  },
  {
    heading: 'Why we use it',
    paragraphs: [
      'To reply to your enquiry, prepare a proposal, deliver work you have asked for, and keep a record of our correspondence. We do not sell your information, and we do not use it for advertising.',
    ],
  },
  {
    heading: 'Where it is stored',
    paragraphs: [
      'Enquiries are stored in our own database hosted on Supabase, with row-level security so records are only readable by an authenticated member of our team. The website is hosted on Vercel. If we have enabled email notifications, a copy of your enquiry is also delivered to us by email.',
    ],
  },
  {
    heading: 'Analytics and cookies',
    paragraphs: [
      'We use two tools to understand how this site is used. Vercel Web Analytics reports aggregate figures such as page views and does not set cookies. Google Analytics sets its own cookies (named _ga) so it can count returning visits and see which pages and buttons are used. Google processes that data under its own privacy policy.',
      'We use this only to improve the site. We do not use advertising cookies, and we do not send your name, email or phone number to analytics. Apart from analytics, the only cookies this site sets are the session cookies that keep our own team signed in to the private admin area.',
      'You can block or delete cookies in your browser settings, or install Google’s opt-out browser add-on at tools.google.com/dlpage/gaoptout.',
    ],
  },
  {
    heading: 'How long we keep it',
    paragraphs: [
      'We keep enquiries for as long as they are useful for the conversation or the working relationship they belong to, and delete them when they are not. You can ask us to delete yours sooner.',
    ],
  },
  {
    heading: 'Your choices',
    paragraphs: [
      'You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Email info@aitotech.in and we will action it.',
    ],
  },
  {
    heading: 'Security',
    paragraphs: [
      'Traffic to this site is encrypted in transit. Access to enquiry data requires an authenticated account, and permissions are enforced at the database level rather than only in the interface. No system is perfect, so if you believe you have found a security issue, please tell us at info@aitotech.in.',
    ],
  },
  {
    heading: 'Changes',
    paragraphs: [
      'If this policy changes we will update this page and the date below. Continued use of the site after a change means you accept the updated policy.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Legal"
        title="Privacy Policy"
        description="What we collect, why we collect it, and what you can ask us to do about it."
      />
      <LegalBody updated="12 September 2026" sections={sections} />
    </PageShell>
  );
}
