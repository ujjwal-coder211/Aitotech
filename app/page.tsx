import Link from 'next/link';
import Hero from '@/components/Hero';
import BentoServices from '@/components/BentoServices';
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

      <section className="hidden border-y border-slate-800/60 bg-abyss-50/30 py-12 sm:py-16 lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedStats />
        </div>
      </section>

      <BentoServices services={services} />
      <WhyChooseUs />

      <section className="section-pad">
        <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-500/25 glass-strong p-8 text-center sm:rounded-3xl sm:p-10 md:p-14">
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
      </section>
    </>
  );
}
