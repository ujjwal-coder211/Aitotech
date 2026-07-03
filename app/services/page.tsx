import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesPage, site, processSteps, cta } from '@/data/siteContent';
import { getServices } from '@/lib/services';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AitoTech services — business websites, mobile apps, AI tools & chatbots, and workflow automation for businesses of every size.',
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
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

        <div className="mt-12 border-t border-white/[0.06] pt-12 text-center sm:mt-16 sm:pt-16">
          <p className="text-sm text-zinc-500">
            Questions? Reach us at{' '}
            <a href={`mailto:${site.email}`} className="text-zinc-300 transition-colors hover:text-white">
              {site.email}
            </a>
          </p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex text-sm">
            {cta.primary}
          </Link>
        </div>
      </div>
    </div>
  );
}
