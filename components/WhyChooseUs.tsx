'use client';

import { motion } from 'framer-motion';
import { home } from '@/data/siteContent';
import SectionHeading from './SectionHeading';

export default function WhyChooseUs() {
  const { whyChooseUs } = home;

  return (
    <section className="section-pad bg-abyss-50/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          highlight={whyChooseUs.highlight}
          description={whyChooseUs.description}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {whyChooseUs.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass group rounded-2xl p-5 transition-colors hover:border-cyan-400/30 sm:p-6 lg:p-8"
            >
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 font-display text-xs font-bold text-cyan-400 sm:mb-4 sm:h-10 sm:w-10 sm:text-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-base font-semibold text-white sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
