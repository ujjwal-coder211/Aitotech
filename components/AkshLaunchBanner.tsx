import Link from 'next/link';
import { aksh } from '@/data/siteContent';

/** Home page promo strip → Aksh launch / waitlist */
export default function AkshLaunchBanner() {
  return (
    <div className="border-b border-violet-950/50 bg-[#030712]">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-3 sm:flex-row">
        <p className="text-center text-sm text-zinc-400 sm:text-left">
          <span className="font-semibold text-white">{aksh.title}</span>
          <span className="text-zinc-600"> — </span>
          {aksh.subtitle}. Launching on E2E Networks.
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
