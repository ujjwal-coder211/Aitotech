'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { home } from '@/data/siteContent';
import AnimatedStats from './AnimatedStats';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function ProductPreview() {
  const { hero } = home;
  const rows = [
    { name: 'Invoice pipeline', status: 'Healthy', load: '94%' },
    { name: 'CRM sync', status: 'Healthy', load: '88%' },
    { name: 'Approval workflow', status: 'Review', load: '72%' },
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface-raised shadow-elevated">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </div>
          <span className="text-xs text-zinc-500">{hero.dashboardLabel}</span>
          <span className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live
          </span>
        </div>

        <div className="grid grid-cols-[140px_1fr] min-h-[340px]">
          {/* Sidebar */}
          <div className="border-r border-line bg-surface p-3">
            <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Modules</p>
            {['Overview', 'Workflows', 'Integrations', 'Reports'].map((m, i) => (
              <div
                key={m}
                className={`mb-1 rounded-md px-2 py-1.5 text-xs ${i === 0 ? 'bg-brand-soft text-brand-light font-medium' : 'text-zinc-500'}`}
              >
                {m}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="p-4 sm:p-5">
            <div className="mb-4 grid grid-cols-3 gap-3">
              {[
                { label: 'Tasks automated', value: '12.4K' },
                { label: 'Error rate', value: '0.3%' },
                { label: 'Hours saved', value: '840/mo' },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-lg border border-line bg-surface-card px-3 py-2.5">
                  <p className="text-[10px] text-zinc-500">{kpi.label}</p>
                  <p className="mt-0.5 font-display text-lg font-semibold text-white">{kpi.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-line overflow-hidden">
              <div className="grid grid-cols-3 border-b border-line bg-surface-card px-3 py-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                <span>Workflow</span>
                <span>Status</span>
                <span className="text-right">Health</span>
              </div>
              {rows.map((r) => (
                <div key={r.name} className="grid grid-cols-3 border-b border-line px-3 py-2.5 text-xs last:border-0">
                  <span className="text-zinc-300">{r.name}</span>
                  <span className={r.status === 'Healthy' ? 'text-emerald-400' : 'text-amber-400'}>{r.status}</span>
                  <span className="text-right text-zinc-400">{r.load}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 left-6 hidden rounded-lg border border-line-strong bg-surface-raised px-3 py-2 text-xs text-zinc-400 shadow-card sm:block">
        <span className="text-emerald-400">●</span> {hero.liveBadge}
      </div>
    </div>
  );
}

export default function Hero() {
  const { hero } = home;

  return (
    <section className="section-pad relative pt-28 sm:pt-32 lg:pt-36">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow mb-5">
            {hero.badge}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[3.25rem]"
          >
            {hero.title}
            <span className="mt-1 block text-zinc-400">{hero.titleHighlight}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn-primary justify-center">
              {hero.ctaPrimary}
            </Link>
            <Link href="/services" className="btn-secondary justify-center">
              {hero.ctaSecondary}
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-12 border-t border-line pt-8 lg:hidden">
            <AnimatedStats compact />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full"
        >
          <ProductPreview />
        </motion.div>
      </div>
    </section>
  );
}
