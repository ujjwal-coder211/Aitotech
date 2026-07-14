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

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" aria-hidden />
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-surface font-display text-sm font-bold text-brand-light shadow-[0_8px_24px_-10px_rgba(94,106,210,0.5)]">
                {step.step}
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
