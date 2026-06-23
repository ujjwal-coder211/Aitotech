'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { home } from '@/data/siteContent';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { hero } = home;

  return (
    <section className="section-pad relative flex min-h-[85vh] items-center pt-20 sm:min-h-[88vh] sm:pt-24 lg:pt-28">
      <div className="container-page grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow mb-4 sm:mb-6">
            {hero.badge}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl xl:text-[3.25rem]"
          >
            {hero.title}
            <span className="mt-2 block text-gradient">{hero.titleHighlight}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
            {hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link href="/contact" className="btn-primary w-full justify-center sm:w-auto">
              {hero.ctaPrimary}
            </Link>
            <Link href="/services" className="btn-secondary w-full justify-center sm:w-auto">
              {hero.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:48px_48px] opacity-40" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between sm:mb-6">
                <span className="text-xs font-medium text-zinc-500 sm:text-sm">{hero.dashboardLabel}</span>
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </span>
              </div>

              <div className="mb-5 flex h-28 items-end gap-2 sm:mb-6 sm:h-32">
                {[45, 72, 58, 90, 65, 78].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.55 }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand to-brand/20"
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-surface-raised p-3 sm:p-4">
                  <p className="text-xl font-bold text-brand-light sm:text-2xl">98.7%</p>
                  <p className="text-[10px] text-zinc-500 sm:text-xs">Pipeline uptime</p>
                </div>
                <div className="rounded-xl border border-line bg-surface-raised p-3 sm:p-4">
                  <p className="text-xl font-bold text-white sm:text-2xl">4.2s</p>
                  <p className="text-[10px] text-zinc-500 sm:text-xs">Avg. task time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 left-3 rounded-lg border border-line bg-surface-raised px-3 py-2 text-xs text-zinc-400 shadow-card sm:-bottom-4 sm:left-0 sm:px-4 sm:text-sm">
            <span className="text-emerald-400">●</span> {hero.liveBadge}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
