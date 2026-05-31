'use client';

import { motion } from 'framer-motion';
import type { services } from '@/data/siteContent';
import ServiceIcon from './ServiceIcon';
import { cn } from '@/lib/utils';

type Service = (typeof services)[number];

interface ServiceDetailHeroProps {
  service: Service;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Service
          </span>
          {service.comingSoon && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
              Coming Soon
            </span>
          )}
        </div>
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          <span className={cn(service.accent)}>{service.title}</span>
        </h1>
        <p className="mt-3 text-base font-medium text-slate-400 sm:text-lg">{service.short}</p>
        <p className="mt-5 text-sm leading-relaxed text-slate-500 sm:text-base">{service.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={cn(
          'glass-strong flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-cyan-500/20 bg-gradient-to-br p-8 sm:min-h-[320px] sm:rounded-3xl sm:p-10',
          service.gradient
        )}
      >
        <div className={cn('mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 sm:h-20 sm:w-20', service.accent)}>
          <ServiceIcon name={service.icon} className="h-8 w-8 sm:h-10 sm:w-10" />
        </div>
        <p className="max-w-xs text-center text-sm text-slate-400">
          Enterprise-grade delivery · Dedicated pod · SLA-backed
        </p>
      </motion.div>
    </div>
  );
}
