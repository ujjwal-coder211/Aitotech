'use client';

import { motion } from 'framer-motion';
import { aboutPage, images } from '@/data/siteContent';

export default function FounderSection() {
  const { founder } = aboutPage;

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto w-full max-w-sm lg:col-span-2 lg:max-w-none"
      >
        <div className="glass-strong aspect-[4/5] overflow-hidden rounded-2xl border border-cyan-500/20 sm:rounded-3xl">
          {/* Replace images.founder in data/siteContent.ts with your photo path */}
          <div
            className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-cyan-500/10 via-abyss-100 to-violet-500/10 p-8"
            style={{
              backgroundImage: `url(${images.founder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-cyan-500/30 bg-abyss/80 font-display text-3xl font-bold text-cyan-400 backdrop-blur sm:h-28 sm:w-28">
              {founder.initials}
            </div>
            <p className="mt-4 font-display text-lg font-semibold text-white">{founder.role}</p>
            <p className="text-sm text-slate-500">{founder.company}</p>
            <p className="mt-2 text-xs text-slate-600">Photo: {images.founder}</p>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -bottom-3 right-4 glass rounded-xl border border-cyan-500/30 px-3 py-2 text-xs text-cyan-400 sm:-bottom-4 sm:right-0 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
        >
          {founder.established}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="lg:col-span-3"
      >
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          {founder.letterTitle} <span className="text-gradient">{founder.letterHighlight}</span>
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-400 sm:mt-6 sm:text-base">
          {founder.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <p className="mt-6 font-display text-white sm:mt-8">{founder.signature}</p>
      </motion.div>
    </div>
  );
}
