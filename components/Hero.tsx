'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { home } from '@/data/siteContent';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { hero, trust } = home;

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16 sm:pt-32">
      {/* layered glow backdrop — slowly drifts for a living, atmospheric feel */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-24 -translate-x-1/2">
          <div
            className="animate-aurora h-[520px] w-[820px] max-w-[95vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(94,106,210,0.22),transparent_65%)] blur-2xl"
            style={{ animationDuration: '28s' }}
          />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
          <div
            className="animate-aurora h-[280px] w-[560px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.10),transparent_70%)] blur-2xl"
            style={{ animationDuration: '34s', animationDelay: '-10s' }}
          />
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.span variants={item} className="badge-pill">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-light opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-light" />
          </span>
          {hero.badge}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-7 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]"
        >
          Software & automation that{' '}
          <span className="text-gradient-brand">actually works</span> for your business
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {hero.description}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary w-full px-7 py-3.5 text-base sm:w-auto">
            {hero.ctaPrimary}
          </Link>
          <Link href="/demos" className="btn-secondary w-full px-7 py-3.5 text-base sm:w-auto">
            {hero.ctaSecondary}
          </Link>
        </motion.div>

        {/* tools strip */}
        <motion.div variants={item} className="mt-12 w-full">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600">{trust.label}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {trust.clients.map((name) => (
              <span key={name} className="font-display text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-300">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* product mock — adds depth like a SaaS hero shot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-16 w-full max-w-5xl"
      >
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-2 shadow-[0_40px_120px_-40px_rgba(94,106,210,0.5)] backdrop-blur-sm">
          <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-surface-raised">
            {/* window bar */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-3 h-4 w-48 rounded-full bg-white/[0.04]" />
            </div>
            {/* dashboard body */}
            <div className="grid gap-4 p-5 sm:grid-cols-[180px_1fr]">
              <div className="hidden space-y-2.5 sm:block">
                {['Dashboard', 'Leads', 'Automations', 'Messages', 'Settings'].map((l, i) => (
                  <div
                    key={l}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${i === 0 ? 'bg-brand/15 text-brand-light' : 'text-zinc-500'}`}
                  >
                    <span className={`h-2 w-2 rounded-sm ${i === 0 ? 'bg-brand-light' : 'bg-zinc-700'}`} />
                    {l}
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: '1,284', l: 'Leads', g: 'from-brand/25' },
                    { v: '92%', l: 'Replied', g: 'from-sky-500/25' },
                    { v: '18h', l: 'Saved/wk', g: 'from-violet-500/25' },
                  ].map((s) => (
                    <div key={s.l} className={`rounded-xl border border-white/[0.06] bg-gradient-to-b ${s.g} to-transparent p-3`}>
                      <div className="font-display text-lg font-bold text-white">{s.v}</div>
                      <div className="mt-0.5 text-[10px] text-zinc-500">{s.l}</div>
                    </div>
                  ))}
                </div>
                {/* chart */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="flex items-end gap-1.5 h-24">
                    {[40, 55, 45, 70, 60, 85, 75, 95, 80, 100, 90, 78].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-brand/40 to-brand-light/80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[0, 1].map((i) => (
                    <div key={i} className="space-y-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                      <div className="h-2 w-2/3 rounded-full bg-white/[0.08]" />
                      <div className="h-2 w-full rounded-full bg-white/[0.05]" />
                      <div className="h-2 w-4/5 rounded-full bg-white/[0.05]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fade the mock into the page */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </motion.div>
    </section>
  );
}
