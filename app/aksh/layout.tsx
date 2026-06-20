import type { Metadata } from 'next';
import { aksh, site } from '@/data/siteContent';
import { defaultOgImage, siteUrl } from '@/lib/seo/siteUrl';

const title = 'Aksh — AI Coding Platform | AitoTech';
const description = aksh.heroLead;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Aksh',
    'AI coding platform',
    'India AI IDE',
    'Aksh Studio',
    'Omni AI',
    'AitoTech',
    'browser IDE',
    'cloud coding',
    'E2E Networks',
    'waitlist',
  ],
  alternates: { canonical: `${siteUrl}/aksh` },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${siteUrl}/aksh`,
    siteName: site.name,
    title: 'Aksh — AI Coding Platform | AitoTech',
    description: aksh.heroLead,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: 'Aksh by AitoTech' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aksh — AI Coding Platform',
    description: aksh.heroLead,
    images: [defaultOgImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  category: 'technology',
};

/** Full-dark immersive shell for Aksh launch page */
export default function AkshLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="aksh-dark relative min-h-screen bg-[#030712] text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(88, 28, 135, 0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(37, 99, 235, 0.12), transparent)',
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
