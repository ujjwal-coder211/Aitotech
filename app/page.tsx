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

      <section className="relative border-y border-white/[0.06] py-14 sm:py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/[0.06]">
            {home.facts.map((fact) => (
              <div key={fact.label} className="px-2 text-center">
                <p className="text-gradient-brand font-display text-3xl font-bold sm:text-4xl">{fact.value}</p>
                <p className="mt-2 text-xs text-zinc-500 sm:text-sm">{fact.label}</p>
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
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {caseStudies.items.map((cs) => (
              <Link
                key={cs.name}
                href={cs.href}
                className="card-premium group flex h-full flex-col p-6 sm:p-8"
              >
                <span className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden />

                <div className="relative flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="icon-tile font-display text-base font-bold">{cs.name[0]}</span>
                    <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{cs.name}</h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-brand-light">
                    {cs.status}
                  </span>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-zinc-500">{cs.summary}</p>
                <ul className="relative mt-5 flex-1 space-y-2.5">
                  {cs.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-light transition-colors duration-200 group-hover:text-white">
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
