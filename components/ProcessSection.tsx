'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

interface ProcessSectionProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  steps: readonly ProcessStep[];
  className?: string;
}

/** Four-phase delivery methodology — used on Home and Services. */
export default function ProcessSection({
  eyebrow,
  title,
  highlight,
  description,
  steps,
  className = '',
}: ProcessSectionProps) {
  return (
    <section className={`section-pad ${className}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          description={description}
          align="left"
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/[0.08] pt-6"
            >
              <span className="text-xs font-medium tracking-wider text-zinc-600">{step.step}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
