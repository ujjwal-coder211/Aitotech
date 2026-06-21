import type { Metadata } from 'next';
import { routely, site } from '@/data/siteContent';
import { defaultOgImage, siteUrl } from '@/lib/seo/siteUrl';

export const metadata: Metadata = {
  title: 'Routely — AI coding tool | AitoTech',
  description: routely.heroLead,
  alternates: { canonical: `${siteUrl}/aksh` },
  openGraph: {
    url: `${siteUrl}/routely`,
    title: 'Routely — AI coding tool',
    description: routely.heroLead,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: 'Routely by AitoTech' }],
    siteName: site.name,
  },
};

/** Legacy /aksh/* routes — same dark shell as /routely */
export default function AkshLegacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="routely-dark relative min-h-screen bg-[#030712] text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.35), transparent)',
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
