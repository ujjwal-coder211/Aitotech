'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import AkshStudioDemo from '@/components/aksh/AkshStudioDemo';
import { aksh } from '@/data/siteContent';

const VISION_PILLARS = [
  {
    title: 'Browser editor',
    body: 'Aksh Studio — files, preview, terminal, and git in one tab. No heavy download.',
  },
  {
    title: 'One AI: Omni',
    body: 'Ship, fix, extend, guard, deploy — one agent, no model picker.',
  },
  {
    title: 'Cloud projects',
    body: 'Code and memory live online. Open from any laptop with 4 GB RAM.',
  },
  {
    title: 'India hosting',
    body: 'Live plan on E2E Networks — API, storage, and deploy in India.',
  },
];

function DemoPageInner() {
  const params = useSearchParams();
  const prompt = params.get('prompt') ?? '';
  const autoTour = params.get('tour') === '1';

  return (
    <div className="pt-16 sm:pt-20">
      <section className="section-pad pb-10">
        <div className="container-page max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">
                Interactive product demo
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Aksh Studio — live preview</h1>
              <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
                {aksh.elevatorPitch} Click <strong className="font-semibold text-violet-300">Run 90s vision tour</strong>{' '}
                for a guided walkthrough — ideal for investors, press, and expert reviews before launch.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/aksh/demo?tour=1"
                className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500"
              >
                Start vision tour
              </Link>
              <Link href="/aksh" className="btn-secondary border-zinc-700 text-zinc-200">
                ← Back to Aksh
              </Link>
            </div>
          </div>

          <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {VISION_PILLARS.map((p) => (
              <article key={p.title} className="rounded-xl border border-zinc-800 bg-[#0a0a0f]/80 p-4">
                <h2 className="font-display text-sm font-semibold text-violet-300">{p.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{p.body}</p>
              </article>
            ))}
          </div>

          <AkshStudioDemo initialPrompt={prompt} autoPitchTour={autoTour && !prompt} showPitchControls />

          <div className="mt-8 rounded-xl border border-zinc-800 bg-[#050508]/80 p-6 text-center sm:p-8">
            <p className="font-display text-lg font-semibold text-white">Share this demo in your pitch</p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
              Send <span className="text-violet-300">aitotech.in/aksh/demo?tour=1</span> to investors or experts. The
              tour shows build → fix → security → deploy in India — the full Aksh vision in under two minutes.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/aksh#waitlist" className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500">
                Join waitlist
              </Link>
              <Link href="/aksh/press" className="btn-secondary border-zinc-700 text-zinc-200">
                Press kit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AkshDemoPage() {
  return (
    <Suspense fallback={<div className="container-page py-32 text-zinc-500">Loading demo…</div>}>
      <DemoPageInner />
    </Suspense>
  );
}
