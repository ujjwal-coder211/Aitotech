'use client';

import { motion } from 'framer-motion';
import { aboutPage, images } from '@/data/siteContent';

export default function FounderSection() {
  const { founder } = aboutPage;

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto w-full max-w-sm lg:col-span-2 lg:max-w-none"
      >
        <div className="card overflow-hidden">
          <div
            className="flex aspect-[4/5] flex-col items-center justify-end bg-surface-hover p-8"
            style={{
              backgroundImage: `url(${images.founder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="w-full rounded-lg border border-line bg-surface-raised/95 p-4 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand font-display text-sm font-bold text-white">
                {founder.initials}
              </div>
              <p className="mt-3 font-display text-base font-semibold text-white">{founder.role}</p>
              <p className="text-sm text-zinc-500">{founder.company}</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-3 right-4 rounded-lg border border-line bg-surface-raised px-3 py-2 text-xs text-zinc-400 shadow-card sm:-bottom-4 sm:right-0 sm:px-4 sm:py-2.5 sm:text-sm">
          {founder.established}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="lg:col-span-3"
      >
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {founder.letterTitle}{' '}
          <span className="text-zinc-500">{founder.letterHighlight}</span>
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
          {founder.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <p className="mt-8 font-display text-sm text-zinc-300 sm:text-base">{founder.signature}</p>
      </motion.div>
    </div>
  );
}
