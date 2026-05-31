'use client';

import Link from 'next/link';
import { home, services, cta } from '@/data/siteContent';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';

/**
 * Bento grid — 1 col mobile, 2 cols tablet, 4 cols desktop with asymmetric spans.
 */
export default function BentoServices() {
  const { bento } = home;

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-0 sm:px-0">
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
