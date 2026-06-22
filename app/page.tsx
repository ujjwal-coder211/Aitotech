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

      <section className="border-b border-line py-16 sm:py-20">
        <div className="container-page">
          <div className="card-hover flex flex-col gap-8 border-cyan-500/20 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-xl">
              <p className="eyebrow">Aitotech Product</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                Outreach — AI Sales Pilot
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
                Daily MCA/GST leads by PIN, AI WhatsApp outreach for bank sales teams. Download the Android app or
                read full documentation.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:items-end">
              <Link href="/products/outreach/download" className="btn-primary">
                Download APK
              </Link>
              <Link href="/products/outreach" className="btn-secondary text-sm">
                Docs & demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

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
