'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ServiceRecord } from '@/lib/services';
import ServiceIcon from './ServiceIcon';

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
        className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-200 ease-out-expo hover:border-white/[0.14] hover:bg-white/[0.04] sm:p-7"
      >
        <span className="text-zinc-500 transition-colors duration-200 group-hover:text-zinc-300">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </span>

        <h3 className="mt-6 font-display text-lg font-semibold text-white">{service.title}</h3>
        <p className="mt-1.5 text-sm text-zinc-500">{service.short}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">{service.description}</p>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-white">
          Learn more
          <span className="transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5">&rarr;</span>
        </span>
      </Link>
    </motion.article>
  );
}
