import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesPage, site, processSteps, cta } from '@/data/siteContent';
import { getServices } from '@/lib/services';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Services',
  description: 'AitoTech AI automation services — data, workflows, invoices, and custom AI.',
};

export default async function ServicesPage() {
  const { hero, process } = servicesPage;
  const services = await getServices();

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <PageHero
          eyebrow={hero.badge}
          title={hero.title}
          highlight={hero.highlight}
          description={hero.description}
        />

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} variant="bento" />
          ))}
        </div>

        <ProcessSection
          eyebrow={process.eyebrow}
          title={process.title}
          highlight={process.highlight}
          description={process.description}
          steps={processSteps}
          className="px-0 pt-0"
        />

        <div className="mt-12 glass-strong rounded-2xl border border-cyan-500/20 p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-10">
          <p className="text-sm text-slate-400">Questions? Reach us at</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block font-display text-lg text-cyan-400 hover:underline sm:text-xl"
          >
            {site.email}
          </a>
          <Link href="/contact" className="btn-primary mt-6 inline-flex text-sm">
            {cta.primary}
          </Link>
        </div>
      </div>
    </div>
  );
}
