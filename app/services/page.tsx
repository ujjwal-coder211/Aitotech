import type { Metadata } from 'next';
import Link from 'next/link';
import { getServices } from '@/lib/services';
import ServiceIcon from '@/components/ServiceIcon';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'Services — Websites, Apps, AI & Automation',
  description:
    'AitoTech services: business websites, mobile apps, AI tools and chatbots, and WhatsApp and workflow automation — designed, built and maintained end to end.',
  alternates: { canonical: '/services' },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <PageShell>
      <PageIntro
        eyebrow="Services"
        title={
          <>
            Websites, apps, AI and <span className="text-azure-deep">automation.</span>
          </>
        }
        description="Everything a business needs to go digital and run on autopilot — built by the people you talk to."
      />

      <section className="ap-sec pt-4">
        <div className="ap-wrap">
          <Reveal stagger={0.06} y={18} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="ap-card group flex flex-col p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-azure-wash text-azure-deep">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>

                <h2 className="mb-1.5 text-[18px] font-bold">{service.title}</h2>
                <p className="mb-3 text-sm font-medium text-azure-deep">{service.short}</p>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-quiet">{service.description}</p>

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure-deep">
                  Learn more
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
