import type { Metadata } from 'next';
import { aksh, site } from '@/data/siteContent';
import { defaultOgImage, siteUrl } from '@/lib/seo/siteUrl';

const title = 'Aksh — India AI Coding Platform | Aksh Studio & Omni';
const description =
  'Aksh by AitoTech: browser IDE (Aksh Studio), AI coder powered by Omni, cloud projects, Hinglish support. Join waitlist — launching on E2E Networks India. No download needed.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Aksh',
    'Aksh Studio',
    'Aksh Coder',
    'AI coding India',
    'Omni AI',
    'AitoTech',
    'browser IDE',
    'AI code assistant',
    'Hinglish coding',
    'India AI platform',
    'waitlist',
  ],
  alternates: { canonical: `${siteUrl}/aksh` },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${siteUrl}/aksh`,
    siteName: site.name,
    title: 'Aksh — Launching Soon | AitoTech',
    description: aksh.description,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: 'Aksh by AitoTech' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aksh — India AI Coding Platform',
    description: aksh.description,
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
