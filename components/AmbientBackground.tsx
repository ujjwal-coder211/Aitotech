'use client';

import { usePathname } from 'next/navigation';

/**
 * Ambient depth layer for the dark pages — softly drifting brand glows, a
 * faint grid, and a fine film grain. Skipped on the light marketing pages
 * so they don't pay for work that is painted over anyway.
 */
export default function AmbientBackground() {
  const pathname = usePathname();
  if (pathname === '/' || pathname.startsWith('/connect')) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* faint grid */}
      <div className="absolute inset-0 bg-hero-grid bg-[size:56px_56px] opacity-[0.35] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,black,transparent_75%)]" />

      {/* top brand glow */}
      <div className="absolute inset-x-0 -top-40 h-[560px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(94,106,210,0.28),transparent_70%)]" />

      {/* drifting side accents — each animates on its own rhythm */}
      <div
        className="animate-aurora absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.26),transparent_70%)] blur-2xl"
        style={{ animationDuration: '18s' }}
      />
      <div
        className="animate-aurora absolute -right-40 top-1/2 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.22),transparent_70%)] blur-2xl"
        style={{ animationDuration: '22s', animationDelay: '-8s' }}
      />
      <div
        className="animate-aurora absolute left-1/3 top-[80%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.2),transparent_70%)] blur-2xl"
        style={{ animationDuration: '20s', animationDelay: '-12s' }}
      />

      {/* fine film grain */}
      <div className="grain-overlay absolute inset-0" />
    </div>
  );
}
