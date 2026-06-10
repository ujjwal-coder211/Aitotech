'use client';

import { motion } from 'framer-motion';
import { home } from '@/data/siteContent';

export default function LogoCloud() {
  const { logoCloud } = home;

  return (
    <section className="border-y border-line bg-surface-raised/50 py-12 sm:py-14">
      <div className="container-page">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
          {logoCloud.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {logoCloud.logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="font-display text-sm font-semibold tracking-wide text-zinc-600 transition-colors hover:text-zinc-400 sm:text-base"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
