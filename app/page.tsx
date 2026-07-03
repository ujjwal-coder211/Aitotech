import Hero from '@/components/Hero';
import AnimatedStats from '@/components/AnimatedStats';
import PortfolioGrid from '@/components/PortfolioGrid';
import ProcessSection from '@/components/ProcessSection';
import CTABanner from '@/components/CTABanner';
import { home, processSteps } from '@/data/siteContent';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-white/[0.06] py-14 sm:py-16">
        <div className="container-page">
          <AnimatedStats />
        </div>
      </section>

      <PortfolioGrid />

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
