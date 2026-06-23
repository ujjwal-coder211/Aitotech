'use client';

import { motion } from 'framer-motion';

interface TrustBarProps {
  label: string;
  clients: readonly string[];
}

/** Subtle client-trust strip — industry names as social proof. */
export default function TrustBar({ label, clients }: TrustBarProps) {
  return (
    <section className="border-y border-slate-800/60 bg-abyss-50/30 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-500"
        >
          {label}
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {clients.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-display text-sm font-medium text-slate-500 transition-colors hover:text-slate-300 sm:text-base"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
