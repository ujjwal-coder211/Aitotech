import Hero from '@/components/Hero';
import BentoServices from '@/components/BentoServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import AnimatedStats from '@/components/AnimatedStats';
import ProcessSection from '@/components/ProcessSection';
import TrustBar from '@/components/TrustBar';
import CTABanner from '@/components/CTABanner';
import { home, processSteps } from '@/data/siteContent';
import { getServices } from '@/lib/services';

export default async function HomePage() {
  const services = await getServices();

  return (
    <>
      <Hero />

      <section className="border-y border-slate-800/60 bg-abyss-50/30 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedStats />
        </div>
      </section>

      <TrustBar label={home.trust.label} clients={home.trust.clients} />

      <BentoServices services={services} />

      <ProcessSection
        eyebrow={home.process.eyebrow}
        title={home.process.title}
        highlight={home.process.highlight}
        description={home.process.description}
        steps={processSteps}
      />

      <WhyChooseUs />

      <CTABanner
        title={home.cta.title}
        highlight={home.cta.highlight}
        description={home.cta.description}
        button={home.cta.button}
      />
    </>
  );
}
