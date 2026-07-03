'use client';

import { motion } from 'framer-motion';
import type { ServiceRecord } from '@/lib/services';
import ServiceIcon from './ServiceIcon';

interface ServiceDetailHeroProps {
  service: ServiceRecord;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow mb-4">Service</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {service.title}
        </h1>
        <p className="mt-3 text-base text-zinc-400 sm:text-lg">{service.short}</p>
        <p className="mt-5 text-sm leading-relaxed text-zinc-500 sm:text-base">{service.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:min-h-[280px] sm:p-10"
      >
        <span className="mb-4 text-zinc-400">
          <ServiceIcon name={service.icon} className="h-9 w-9 sm:h-10 sm:w-10" />
        </span>
        <p className="max-w-xs text-center text-sm text-zinc-500">
          End-to-end delivery · Clear timelines · Measurable outcomes
        </p>
      </motion.div>
    </div>
  );
}
