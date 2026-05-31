'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { home } from '@/data/siteContent';
import AnimatedStats from './AnimatedStats';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { hero } = home;

  return (
    <section className="section-pad relative flex min-h-[85vh] items-center pt-20 sm:min-h-[90vh] sm:pt-24 lg:pt-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-cyan-400 sm:mb-6 sm:px-4">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            {hero.badge}
          </motion.div>

          <motion.h1 variants={item} className="font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl xl:text-6xl">
            {hero.title}
            <span className="mt-1 block text-gradient sm:mt-2">{hero.titleHighlight}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
            {hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-10 sm:flex-row sm:gap-4">
            <Link href="/contact" className="btn-primary w-full justify-center sm:w-auto">
              {hero.ctaPrimary}
            </Link>
            <Link href="/services" className="btn-ghost w-full justify-center sm:w-auto">
              {hero.ctaSecondary}
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-10 lg:hidden">
            <AnimatedStats compact />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-strong relative rounded-2xl border border-cyan-500/25 p-6 shadow-neon sm:rounded-3xl sm:p-8"
          >
            <div className="mb-4 flex items-center justify-between sm:mb-6">
              <span className="text-xs text-slate-500 sm:text-sm">{hero.dashboardLabel}</span>
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70 sm:h-3 sm:w-3" />
              </span>
            </div>

            <div className="mb-4 flex h-28 items-end gap-1.5 sm:mb-6 sm:h-36 sm:gap-2">
              {[45, 72, 58, 90, 65, 78].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500/90 to-cyan-500/20 sm:rounded-t-lg"
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="glass rounded-lg p-3 sm:rounded-xl sm:p-4">
                <p className="text-xl font-bold text-cyan-400 sm:text-2xl">98.7%</p>
                <p className="text-[10px] text-slate-500 sm:text-xs">Pipeline uptime</p>
              </div>
              <div className="glass rounded-lg p-3 sm:rounded-xl sm:p-4">
                <p className="text-xl font-bold text-sky-400 sm:text-2xl">4.2s</p>
                <p className="text-[10px] text-slate-500 sm:text-xs">Avg. task time</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-4 left-2 glass rounded-xl border border-cyan-500/30 px-3 py-2 text-xs text-cyan-400 sm:-bottom-6 sm:left-0 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
          >
            <span className="text-emerald-400">●</span> {hero.liveBadge}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
