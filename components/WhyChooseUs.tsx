'use client';

import { motion } from 'framer-motion';
import { home } from '@/data/siteContent';
import SectionHeading from './SectionHeading';

export default function WhyChooseUs() {
  const { whyChooseUs } = home;

  return (
    <section className="section-pad border-t border-line bg-surface-raised/30">
      <div className="container-page">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="card-hover p-6 lg:p-7"
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-brand-soft font-display text-xs font-bold text-brand-light">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-base font-semibold text-white sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
