'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ServiceRecord } from '@/lib/services';
import ServiceIcon from './ServiceIcon';
import ServiceVisual from './ServiceVisual';

interface ServiceCardProps {
  service: ServiceRecord;
  index?: number;
  variant?: 'bento' | 'list';
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className="card-premium group flex h-full flex-col p-6 sm:p-7"
      >
        <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden />

        <ServiceVisual
          name={service.icon}
          className="pointer-events-none absolute right-0 top-0 h-28 w-40 opacity-[0.16] transition-opacity duration-500 group-hover:opacity-[0.34]"
        />

        <span className="icon-tile relative">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </span>

        <h3 className="relative mt-6 font-display text-lg font-semibold text-white">{service.title}</h3>
        <p className="relative mt-1.5 text-sm text-brand-light">{service.short}</p>
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-zinc-500">{service.description}</p>

        <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-white">
          Learn more
          <span className="transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5">&rarr;</span>
        </span>
      </Link>
    </motion.article>
  );
}
