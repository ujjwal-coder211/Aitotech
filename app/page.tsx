import Link from 'next/link';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import SectionHeading from '@/components/SectionHeading';
import ProcessSection from '@/components/ProcessSection';
import CTABanner from '@/components/CTABanner';
import { home, caseStudies, processSteps } from '@/data/siteContent';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-white/[0.06] py-14 sm:py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/[0.06]">
            {home.facts.map((fact) => (
              <div key={fact.label} className="text-center">
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">{fact.value}</p>
                <p className="mt-1.5 text-xs text-zinc-600 sm:text-sm">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid />

      <section className="section-pad border-t border-white/[0.06]">
        <div className="container-page">
          <SectionHeading
            eyebrow={caseStudies.eyebrow}
            title={caseStudies.title}
            highlight={caseStudies.highlight}
            description={caseStudies.description}
          />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {caseStudies.items.map((cs) => (
              <Link
                key={cs.name}
                href={cs.href}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-200 ease-out-expo hover:border-white/[0.14] hover:bg-white/[0.04] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{cs.name}</h3>
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-600">
                    {cs.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{cs.summary}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {cs.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-white">
                  View project
                  <span className="transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        eyebrow={home.process.eyebrow}
        title={home.process.title}
        highlight={home.process.highlight}
        description={home.process.description}
        steps={processSteps}
      />

      <CTABanner
        title={home.cta.title}
        highlight={home.cta.highlight}
        description={home.cta.description}
        button={home.cta.button}
      />
    </>
  );
}
