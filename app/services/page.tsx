import type { Metadata } from 'next';
import Link from 'next/link';
import { getServicesByGroup } from '@/lib/services';
import { serviceGroups } from '@/data/services';
import ServiceIcon from '@/components/ServiceIcon';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import AutomationEngine from '@/components/ap/AutomationEngine';
import RoiSection from '@/components/ap/RoiSection';
import ProcessSection from '@/components/ap/ProcessSection';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'Services — Websites, Apps, Software, AI & Automation',
  description:
    'Twelve services under one roof: business websites, landing pages, e-commerce, web and mobile apps, custom software, CRM and ERP, AI chatbots, WhatsApp automation, AI voice agents, process automation and API integrations.',
  alternates: { canonical: '/services' },
};

export default async function ServicesPage() {
  const grouped = await getServicesByGroup();

  return (
    <PageShell>
      <PageIntro
        eyebrow="Services"
        title={
          <>
            Twelve services. One{' '}
            <span className="text-azure-deep">team that joins them up.</span>
          </>
        }
        description="Most businesses end up with a website from one vendor, software from another and automation from nobody. We build all three, so they are designed to work together from day one."
      />

      {/* In-page jump list — twelve cards is a lot to scroll past blind. */}
      <section className="ap-wrap pb-2">
        <Reveal className="flex flex-wrap gap-2.5 border-y border-hairline py-5">
          {serviceGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="ap-chip hover:border-azure hover:text-azure-deep">
              {group.label}
            </a>
          ))}
        </Reveal>
      </section>

      {serviceGroups.map((group, index) => {
        const services = grouped[group.id];
        if (!services.length) return null;

        return (
          <section
            key={group.id}
            id={group.id}
            className={
              index % 2 === 1
                ? 'ap-sec border-y border-hairline bg-wash scroll-mt-24'
                : 'ap-sec scroll-mt-24'
            }
          >
            <div className="ap-wrap">
              <Reveal className="mb-9 max-w-[48ch]">
                <p className="ap-eyebrow mb-3">
                  {String(index + 1).padStart(2, '0')} · {group.label}
                </p>
                <h2 className="text-[clamp(25px,3.2vw,38px)] font-extrabold">{group.title}</h2>
                <p className="ap-lead mt-4">{group.blurb}</p>
              </Reveal>

              <Reveal stagger={0.06} y={18} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="ap-card group flex flex-col p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
                  >
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-azure-wash text-azure-deep transition-colors duration-300 group-hover:bg-azure group-hover:text-white">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </span>

                    <h3 className="mb-2 text-[18px] font-bold">{service.title}</h3>
                    <p className="mb-4 text-sm font-medium text-azure-deep">{service.short}</p>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-quiet">
                      {service.description}
                    </p>

                    <ul className="mb-6 flex flex-wrap gap-1.5">
                      {service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full border border-hairline px-2.5 py-1 text-[11.5px] font-medium text-quiet"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure-deep">
                      Learn more
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </Link>
                ))}
              </Reveal>

              {/* The automation group is the one you can actually show moving. */}
              {group.id === 'automation' && (
                <Reveal y={22} className="mt-14 border-t border-hairline pt-12">
                  <p className="ap-eyebrow mb-3.5">How the pieces connect</p>
                  <h3 className="mb-9 max-w-[38ch] text-[clamp(21px,2.6vw,30px)] font-extrabold">
                    Every enquiry, from wherever it arrives, through one flow.
                  </h3>
                  <AutomationEngine />
                </Reveal>
              )}
            </div>
          </section>
        );
      })}

      <RoiSection />
      <ProcessSection />
      <FinalCta />
    </PageShell>
  );
}
