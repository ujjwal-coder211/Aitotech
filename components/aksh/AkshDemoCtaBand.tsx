'use client';

import Link from 'next/link';
import TryAkshDemoButton from './TryAkshDemoButton';

export default function AkshDemoCtaBand() {
  return (
    <section className="section-pad border-t border-zinc-800/80 bg-gradient-to-b from-violet-950/30 to-transparent">
      <div className="container-page max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Ready to code with Routely?</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          Try the interactive Routely demo now. Join the waitlist for browser beta, desktop download, and full memory when we launch.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/routely/demo?tour=1" className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500">
            Run 90s vision tour
          </Link>
          <TryAkshDemoButton>Try in modal</TryAkshDemoButton>
          <Link href="/routely#waitlist" className="btn-secondary border-zinc-700 text-zinc-200">
            Join the waitlist
          </Link>
        </div>
        <p className="mt-6 text-xs text-zinc-500">
          Routely is built by AitoTech in India — smart routing, memory, git, browser + desktop.
        </p>
      </div>
    </section>
  );
}
