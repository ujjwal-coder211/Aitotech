'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import AkshStudioDemo from '@/components/aksh/AkshStudioDemo';

function DemoPageInner() {
  const params = useSearchParams();
  const prompt = params.get('prompt') ?? '';

  return (
    <div className="pt-16 sm:pt-20">
      <section className="section-pad pb-8">
        <div className="container-page max-w-6xl">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">Interactive demo</p>
              <h1 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Aksh Studio preview</h1>
              <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
                Chat with Omni, explore project files, and see how Aksh helps you build in the browser. This is a
                marketing preview — full Studio opens after launch.
              </p>
            </div>
            <Link href="/aksh" className="btn-secondary border-zinc-700 text-zinc-200">
              ← Back to Aksh
            </Link>
          </div>
          <AkshStudioDemo initialPrompt={prompt} />
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
