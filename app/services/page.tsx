import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesPage, site } from '@/data/siteContent';
import { getServices } from '@/lib/services';
import PageHero, { ComingSoonBlock } from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Enterprise AI automation services — data, workflows, invoices, and custom intelligent systems.',
};

export default async function ServicesPage() {
  const { hero, placeholder, processSteps } = servicesPage;
  const services = await getServices();

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page">
        <PageHero
          eyebrow={hero.badge}
          title={hero.title}
          highlight={hero.highlight}
          description={hero.description}
          comingSoon
          comingSoonLabel="Case studies expanding"
        >
          <p className="mt-4 text-sm text-zinc-600">{hero.comingSoonNote}</p>
        </PageHero>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} variant="bento" />
          ))}
        </div>

        <ComingSoonBlock
          title={placeholder.title}
          body={placeholder.body}
          ctaLabel={placeholder.cta}
        />

        <section className="mt-16 border-t border-line pt-16 sm:mt-20 sm:pt-20">
          <SectionHeading
            eyebrow="Methodology"
            title="How we"
            highlight="deliver"
            description="A proven four-phase engagement model with clear milestones and measurable outcomes."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="card-hover p-5 sm:p-6">
                <span className="font-display text-2xl font-bold text-brand-light/70">{step.step}</span>
                <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="card mt-12 p-6 text-center sm:mt-16 sm:p-10">
          <p className="text-sm text-zinc-500">Questions? Reach us at</p>
          <a href={`mailto:${site.email}`} className="mt-2 inline-block font-display text-lg text-brand-light hover:underline sm:text-xl">
            {site.email}
          </a>
          <Link href="/contact" className="btn-primary mt-6 inline-flex text-sm">
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
