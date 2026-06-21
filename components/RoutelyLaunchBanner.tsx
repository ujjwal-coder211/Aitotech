'use client';

import Link from 'next/link';
import { routely } from '@/data/siteContent';
import { routelyAppUrl } from '@/lib/routelyAppUrl';

export default function RoutelyLaunchBanner() {
  return (
    <div className="border-b border-violet-950/50 bg-[#030712]">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">
            {routely.title} — <span className="text-violet-300">{routely.headline.replace(/\.$/, '')}</span>
          </p>
          <p className="mt-1 max-w-xl text-xs leading-relaxed text-zinc-500 sm:text-sm">{routely.elevatorPitch}</p>
        </div>
        <div className="flex shrink-0 flex-wrap justify-center gap-2">
          <a
            href={routelyAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-500"
          >
            {routely.ctaTryBrowser}
          </a>
          <Link
            href="/routely/demo?tour=1"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:border-violet-500/50"
          >
            Try live demo
          </Link>
          <Link
            href="/routely#waitlist"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:border-violet-500/50"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
