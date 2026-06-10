'use client';

import { motion } from 'framer-motion';
import type { ServiceRecord } from '@/lib/services';
import ServiceIcon from './ServiceIcon';

interface ServiceDetailHeroProps {
  service: ServiceRecord;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="eyebrow">Service</span>
          {service.comingSoon && (
            <span className="inline-flex items-center rounded-md border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
              Preview
            </span>
          )}
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {service.title}
        </h1>
        <p className="mt-3 text-base font-medium text-zinc-400 sm:text-lg">{service.short}</p>
        <p className="mt-5 text-sm leading-relaxed text-zinc-500 sm:text-base">{service.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card flex min-h-[280px] flex-col items-center justify-center p-8 sm:min-h-[320px] sm:p-10"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-line-strong bg-brand-soft text-brand-light sm:h-20 sm:w-20">
          <ServiceIcon name={service.icon} className="h-8 w-8 sm:h-10 sm:w-10" />
        </div>
        <p className="max-w-xs text-center text-sm text-zinc-500">
          Enterprise-grade delivery · Dedicated pod · SLA-backed
        </p>
      </motion.div>
    </div>
  );
}
