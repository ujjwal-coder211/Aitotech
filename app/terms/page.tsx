import type { Metadata } from 'next';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import LegalBody, { type LegalSection } from '@/components/ap/LegalBody';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms that apply when you use the AitoTech website, its demos and its contact forms.',
  alternates: { canonical: '/terms' },
};

const sections: LegalSection[] = [
  {
    heading: 'About these terms',
    paragraphs: [
      'These terms apply to your use of aitotech.in. AitoTech is a software and automation studio based in Delhi, India. By using this website you accept these terms.',
    ],
  },
  {
    heading: 'Using this website',
    paragraphs: [
      'You may read, share and reference this site freely. Please do not attempt to break into it, disrupt it, scrape it at a volume that degrades it for others, or use it to send unlawful or abusive content through our forms.',
    ],
  },
  {
    heading: 'Demos and examples',
    paragraphs: [
      'Demo pages, sample workflows, automation blueprints and template previews on this site are illustrative. They show how a system can be built; they are not a promise of a specific result for your business. Any figures you enter into the automation calculator produce an estimate from your own inputs, not a guarantee of savings.',
    ],
  },
  {
    heading: 'Enquiries are not a contract',
    paragraphs: [
      'Submitting a form, booking an audit or exchanging messages with us does not by itself create a binding engagement. Paid work is governed by a separate written proposal or agreement covering scope, timelines, fees and ownership.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'The content, design, code and brand assets on this site belong to AitoTech unless stated otherwise. Third-party names and logos referenced on the site belong to their respective owners. Please do not reproduce our material as your own.',
    ],
  },
  {
    heading: 'Third-party services and links',
    paragraphs: [
      'This site links to and integrates with services we do not control, including WhatsApp, and links to profiles on platforms such as Instagram and LinkedIn. Their own terms and privacy policies apply when you use them.',
    ],
  },
  {
    heading: 'Availability and accuracy',
    paragraphs: [
      'We work to keep the site accurate and available, but we provide it on an as-is basis. Content may change without notice, and we do not warrant that the site will be uninterrupted or error free.',
    ],
  },
  {
    heading: 'Liability',
    paragraphs: [
      'To the extent permitted by law, AitoTech is not liable for indirect or consequential loss arising from your use of this website. Nothing in these terms limits liability that cannot be limited under applicable law.',
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of India, and the courts at Delhi have jurisdiction over any dispute relating to this website.',
    ],
  },
  {
    heading: 'Changes',
    paragraphs: [
      'We may update these terms. The current version is always the one published on this page, with the date shown below.',
    ],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Legal"
        title="Terms of Use"
        description="The ground rules for using this website, its demos and its forms."
      />
      <LegalBody updated="5 September 2026" sections={sections} />
    </PageShell>
  );
}
