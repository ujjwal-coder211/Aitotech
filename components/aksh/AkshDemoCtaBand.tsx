'use client';

import Link from 'next/link';
import TryAkshDemoButton from './TryAkshDemoButton';

export default function AkshDemoCtaBand() {
  return (
    <section className="section-pad border-t border-zinc-800/80 bg-gradient-to-b from-violet-950/30 to-transparent">
      <div className="container-page max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Ready to code with Omni?</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          Try the interactive Aksh Studio demo now. Join the waitlist for cloud projects, memory, and the full editor when we launch.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/aksh/demo?tour=1" className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500">
            Run 90s vision tour
          </Link>
          <TryAkshDemoButton>Try in modal</TryAkshDemoButton>
          <Link href="#waitlist" className="btn-secondary border-zinc-700 text-zinc-200">
            Join the waitlist
          </Link>
        </div>
        <p className="mt-6 text-xs text-zinc-500">
          Aksh is built by AitoTech in India — browser editor, one AI, cloud projects.
        </p>
      </div>
    </section>
  );
}
