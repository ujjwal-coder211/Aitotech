import Link from 'next/link';
import { aksh } from '@/data/siteContent';

/** Home page promo strip → Aksh launch / waitlist */
export default function AkshLaunchBanner() {
  return (
    <div className="border-b border-violet-500/20 bg-gradient-to-r from-violet-950/80 via-surface-raised to-surface">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-3 sm:flex-row sm:py-3.5">
        <p className="text-center text-sm text-zinc-300 sm:text-left">
          <span className="font-semibold text-white">{aksh.title}</span>
          <span className="text-zinc-500"> — </span>
          {aksh.subtitle}. Launching soon on E2E Networks.
        </p>
        <Link
          href="/aksh#waitlist"
          className="shrink-0 rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-500"
        >
          Join waitlist →
        </Link>
      </div>
    </div>
  );
}
