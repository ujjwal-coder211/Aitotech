'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ServiceRecord } from '@/lib/services';
import { cn } from '@/lib/utils';
import ServiceIcon from './ServiceIcon';

interface ServiceCardProps {
  service: ServiceRecord;
  index?: number;
  variant?: 'bento' | 'list';
}

export default function ServiceCard({ service, index = 0, variant = 'bento' }: ServiceCardProps) {
  const showDescription =
    variant === 'list' || (variant === 'bento' && Boolean(service.bentoLg?.includes('row-span-2')));

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        'group relative min-h-[200px] overflow-hidden rounded-2xl glass transition-all duration-500',
        'col-span-1 row-span-1',
        variant === 'bento' && service.bentoLg,
        'hover:border-cyan-400/35 hover:shadow-neon'
      )}
    >
      <Link
        href={`/services/${service.slug}`}
        className="flex h-full min-h-[200px] flex-col p-5 sm:min-h-[220px] sm:p-6 md:p-8"
      >
        <div
          className={cn(
            'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100',
            service.gradient
          )}
        />

        <div className="relative z-10 flex flex-1 flex-col">
          <div
            className={cn(
              'mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/25 bg-cyan-500/10 transition-transform duration-500 group-hover:scale-110 sm:mb-5 sm:h-12 sm:w-12',
              service.accent
            )}
          >
            <ServiceIcon name={service.icon} />
          </div>

          <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-cyan-400 sm:text-xl lg:text-2xl">
            {service.title}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-slate-400">{service.short}</p>

          {showDescription && (
            <p className="mt-3 hidden flex-1 text-sm leading-relaxed text-slate-500 sm:block">
              {service.description}
            </p>
          )}

          <span className={cn('mt-4 inline-flex items-center gap-1 text-sm font-medium sm:mt-6', service.accent)}>
            Learn more
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
