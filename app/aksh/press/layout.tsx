import type { Metadata } from 'next';
import { aksh } from '@/data/siteContent';
import { siteUrl } from '@/lib/seo/siteUrl';

export const metadata: Metadata = {
  title: 'Press kit — Aksh | AitoTech',
  description: aksh.press.pageDescription,
  alternates: { canonical: `${siteUrl}/aksh/press` },
  openGraph: {
    title: 'Aksh Press Kit — AitoTech',
    description: aksh.press.short,
    url: `${siteUrl}/aksh/press`,
  },
};

export default function AkshPressLayout({ children }: { children: React.ReactNode }) {
  return children;
}
