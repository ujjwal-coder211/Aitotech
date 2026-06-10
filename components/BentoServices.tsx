'use client';

import Link from 'next/link';
import { home } from '@/data/siteContent';
import type { ServiceRecord } from '@/lib/services';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';

/**
 * Bento grid — 1 col mobile, 2 cols tablet, 4 cols desktop with asymmetric spans.
 * Services are passed in from the server (DB-backed with static fallback).
 */
export default function BentoServices({ services }: { services: ServiceRecord[] }) {
  const { bento } = home;

  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow={bento.eyebrow}
          title={bento.title}
          highlight={bento.highlight}
          description={bento.description}
        />

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} variant="bento" />
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link href="/services" className="btn-ghost inline-flex text-sm">
            {bento.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
