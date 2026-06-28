'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SairaStudio from '@/components/saira/SairaStudio';
import { routely } from '@/data/siteContent';

const PILLARS = [
  { title: 'Omni', body: 'Classifies tasks and routes to the best model — no manual picker.' },
  { title: 'Harness', body: 'Runs code edits, terminal, git, and deploy tools.' },
  { title: 'Hermes', body: 'Remembers threads and extracts reusable skills.' },
];

function DemoInner() {
  const params = useSearchParams();
  const prompt = params.get('prompt') ?? '';
  const autoTour = params.get('tour') === '1';

  return (
    <div className="pt-16 sm:pt-20">
      <section className="section-pad pb-10">
        <div className="container-page max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">SAIRA Phase 1 preview</p>
              <h1 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Routely Studio — live demo</h1>
              <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">{routely.heroLead}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/routely/demo?tour=1" className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500">
                Start Phase 1 tour
              </Link>
              <Link href="/routely" className="btn-secondary border-zinc-700 text-zinc-200">
                ← Back to Routely
              </Link>
            </div>
          </div>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <article key={p.title} className="rounded-xl border border-zinc-800 bg-[#0a0a0f]/80 p-4">
                <h2 className="font-display text-sm font-semibold text-violet-300">{p.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{p.body}</p>
              </article>
            ))}
          </div>
          <SairaStudio initialPrompt={prompt} autoTour={autoTour && !prompt} showTourControls />
        </div>
      </section>
    </div>
  );
}

export default function RoutelyDemoPage() {
  return (
    <Suspense fallback={<div className="pt-24 text-center text-zinc-500">Loading demo…</div>}>
      <DemoInner />
    </Suspense>
  );
}
