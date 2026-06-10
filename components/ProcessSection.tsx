'use client';

import { motion } from 'framer-motion';
import { home, servicesPage } from '@/data/siteContent';
import SectionHeading from './SectionHeading';

export default function ProcessSection() {
  const { process } = home;
  const steps = servicesPage.processSteps;

  return (
    <section className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          highlight={process.highlight}
          description={process.description}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="card-hover relative p-6 sm:p-7"
            >
              <span className="font-display text-2xl font-bold text-brand-light/70">{step.step}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-white sm:text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.body}</p>
              {i < steps.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-full bg-line-strong lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
