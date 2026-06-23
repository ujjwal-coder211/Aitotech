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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="glass relative rounded-2xl p-6 sm:p-7"
            >
              <span className="font-display text-3xl font-bold text-cyan-400/30">{step.step}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
