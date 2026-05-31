import type { Metadata } from 'next';
import Link from 'next/link';
import { services, servicesPage, site } from '@/data/siteContent';
import PageHero, { ComingSoonBlock } from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Services',
  description: 'AitoTech AI automation services — data, workflows, invoices, and custom AI.',
};

export default function ServicesPage() {
  const { hero, placeholder, processSteps } = servicesPage;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <PageHero
          eyebrow={hero.badge}
          title={hero.title}
          highlight={hero.highlight}
          description={hero.description}
          comingSoon
          comingSoonLabel="Case studies expanding"
        >
          <p className="mt-4 text-sm text-slate-500">{hero.comingSoonNote}</p>
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

        {/* How we deliver — sample process layout */}
        <section className="mt-16 sm:mt-20">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            How We <span className="text-gradient">Deliver</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
            A proven four-phase methodology — placeholder copy you can refine in{' '}
            <code className="text-cyan-400">data/siteContent.ts</code>.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="glass rounded-2xl p-5 sm:p-6">
                <span className="font-display text-2xl font-bold text-cyan-400/80">{step.step}</span>
                <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 glass-strong rounded-2xl border border-cyan-500/20 p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-10">
          <p className="text-sm text-slate-400">Questions? Reach us at</p>
          <a href={`mailto:${site.email}`} className="mt-2 inline-block font-display text-lg text-cyan-400 hover:underline sm:text-xl">
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
