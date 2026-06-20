import Link from 'next/link';
import { aksh } from '@/data/siteContent';

export default function AkshLaunchBanner() {
  return (
    <div className="border-b border-violet-950/50 bg-[#030712]">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">
            {aksh.title} — <span className="text-violet-300">{aksh.headline.replace(/\.$/, '')}</span>
          </p>
          <p className="mt-1 max-w-xl text-xs leading-relaxed text-zinc-500 sm:text-sm">{aksh.elevatorPitch}</p>
        </div>
        <div className="flex shrink-0 flex-wrap justify-center gap-2">
          <Link
            href="/aksh#waitlist"
            className="rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-500"
          >
            Join waitlist
          </Link>
          <Link
            href="/aksh/press"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:border-zinc-500"
          >
            Press kit
          </Link>
        </div>
      </div>
    </div>
  );
}
