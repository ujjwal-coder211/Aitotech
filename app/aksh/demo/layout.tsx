import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/siteUrl';

export const metadata: Metadata = {
  title: 'Try Aksh Studio — Interactive demo | AitoTech',
  description:
    'Preview Aksh Studio and chat with Omni. Build apps, fix bugs, and explore code in an interactive marketing demo.',
  alternates: { canonical: `${siteUrl}/aksh/demo` },
  robots: { index: true, follow: true },
};

export default function AkshDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
