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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={cn(
        'group relative min-h-[200px] overflow-hidden rounded-2xl border border-line bg-surface-card transition-all duration-300',
        'col-span-1 row-span-1',
        variant === 'bento' && service.bentoLg,
        'hover:border-line-strong hover:bg-surface-hover'
      )}
    >
      <Link
        href={`/services/${service.slug}`}
        className="flex h-full min-h-[200px] flex-col p-5 sm:min-h-[220px] sm:p-6 md:p-8"
      >
        {service.comingSoon && (
          <span className="absolute right-4 top-4 z-20 rounded-md border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
            Preview
          </span>
        )}

        <div className="relative z-10 flex flex-1 flex-col">
          <div
            className={cn(
              'mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-brand-soft text-brand-light transition-colors group-hover:bg-brand/20 sm:mb-5 sm:h-12 sm:w-12',
              service.accent
            )}
          >
            <ServiceIcon name={service.icon} />
          </div>

          <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-light sm:text-xl lg:text-2xl">
            {service.title}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-zinc-400">{service.short}</p>

          {showDescription && (
            <p className="mt-3 hidden flex-1 text-sm leading-relaxed text-zinc-500 sm:block">
              {service.description}
            </p>
          )}

          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-light sm:mt-6">
            Learn more
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
