import type { Metadata } from 'next';
import { routely, site } from '@/data/siteContent';
import { siteUrl } from '@/lib/seo/siteUrl';

const title = 'Routely — AI coding tool | AitoTech';
const description = routely.heroLead;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Routely',
    'AI coding tool',
    'India AI editor',
    'browser IDE',
    'OpenRouter',
    'AitoTech',
    'coding agent',
    'waitlist',
  ],
  alternates: { canonical: `${siteUrl}/routely` },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${siteUrl}/routely`,
    siteName: site.name,
    title,
    description,
    images: [{ url: '/images/og-routely.svg', width: 1200, height: 630, alt: 'Routely by AitoTech' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Routely — AI coding tool',
    description,
    images: ['/images/og-routely.svg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  category: 'technology',
};

/** Full-dark immersive shell for Routely product pages */
export default function RoutelyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="routely-dark relative min-h-screen bg-[#030712] text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(109, 40, 217, 0.12), transparent)',
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
