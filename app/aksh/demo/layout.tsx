import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/siteUrl';

export const metadata: Metadata = {
  title: 'Try Aksh Studio — Interactive demo | AitoTech',
  description:
    'Interactive Aksh Studio demo — run the 90s vision tour, chat with Omni, preview apps, and see deploy to India. Pitch-ready product preview.',
  alternates: { canonical: `${siteUrl}/aksh/demo` },
  robots: { index: true, follow: true },
};

export default function AkshDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
