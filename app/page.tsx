import Link from 'next/link';
import Hero from '@/components/Hero';
import RoutelyLaunchBanner from '@/components/RoutelyLaunchBanner';
import LogoCloud from '@/components/LogoCloud';
import BentoServices from '@/components/BentoServices';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AnimatedStats from '@/components/AnimatedStats';
import SectionHeading from '@/components/SectionHeading';
import { home } from '@/data/siteContent';
import { getServices } from '@/lib/services';

export default async function HomePage() {
  const { cta: ctaSection } = home;
  const services = await getServices();

  return (
    <>
      <Hero />
      <RoutelyLaunchBanner />
      <LogoCloud />

      <section className="hidden border-b border-line py-12 sm:py-14 lg:block">
        <div className="container-page">
          <AnimatedStats />
        </div>
      </section>

      <BentoServices services={services} />
      <ProcessSection />
      <WhyChooseUs />

      <section className="section-pad">
        <div className="container-page">
          <div className="card mx-auto max-w-4xl border-line-strong p-8 text-center sm:p-10 md:p-14">
            <SectionHeading
              title={ctaSection.title}
              highlight={ctaSection.highlight}
              description={ctaSection.description}
              align="center"
            />
            <Link href="/contact" className="btn-primary mt-2 inline-flex">
              {ctaSection.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
