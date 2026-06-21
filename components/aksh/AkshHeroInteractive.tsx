'use client';

import Link from 'next/link';
import { routely } from '@/data/siteContent';
import TryAkshDemoButton from './TryAkshDemoButton';
import { useAkshDemo } from './AkshDemoProvider';

export function AkshHeroActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <TryAkshDemoButton>Try Routely</TryAkshDemoButton>
      <Link href="/routely/demo?tour=1" className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500">
        Run vision tour
      </Link>
      <Link href="/routely#waitlist" className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500">
        {routely.cta}
      </Link>
      <Link href="/docs" className="btn-secondary border-zinc-700 text-zinc-200">
        Documentation
      </Link>
    </div>
  );
}

export function AkshHeroMockup() {
  const { openDemo } = useAkshDemo();

  return (
    <div className="relative lg:sticky lg:top-24">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/25 via-indigo-600/10 to-transparent blur-2xl" />
      <button
        type="button"
        onClick={() => openDemo()}
        className="group w-full text-left"
        aria-label="Open Routely demo"
      >
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0a0a0f] shadow-2xl shadow-violet-950/40 transition group-hover:border-violet-500/40 group-hover:shadow-violet-900/30">
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>
            <span className="text-xs text-zinc-500">Routely · smart model routing</span>
            <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300">
              Click to demo
            </span>
          </div>
          <div className="grid min-h-[280px] grid-cols-[100px_1fr_120px] text-xs sm:min-h-[300px] sm:grid-cols-[120px_1fr_140px]">
            <div className="border-r border-zinc-800 bg-[#050508] p-3 text-zinc-500">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Chats</p>
              <div className="mb-1 rounded bg-violet-500/15 px-2 py-1 text-violet-300">Todo app</div>
              <div className="px-2 py-1">Bug fix</div>
            </div>
            <div className="border-r border-zinc-800 bg-[#030712] p-4 font-mono text-zinc-400">
              <span className="text-violet-400">export</span> function App() {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-sky-400">return</span> &lt;Todo /&gt;;
              <br />
              {'}'}
            </div>
            <div className="bg-[#050508] p-3">
              <p className="mb-2 text-[10px] font-semibold text-zinc-600">ROUTELY</p>
              <div className="rounded-lg border border-zinc-800 bg-[#0a0a0f] p-2 text-[11px] text-zinc-400">
                Todo app is ready. Files saved.
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 bg-violet-950/30 px-4 py-2 text-center text-xs font-medium text-violet-200 opacity-0 transition group-hover:opacity-100">
            Open interactive demo
          </div>
        </div>
      </button>
    </div>
  );
}
