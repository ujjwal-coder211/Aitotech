import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';
import { serviceGroups } from '@/data/services';
import { getServicesByGroup } from '@/lib/services';
import Reveal from './Reveal';

export default async function ServicesOverview() {
  const grouped = await getServicesByGroup();

  return (
    <section id="services" className="ap-sec">
      <div className="ap-wrap">
        <Reveal className="mb-12 max-w-[44ch]">
          <p className="ap-eyebrow mb-3.5">What we do</p>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold">
            Everything a growing business needs, built in one place.
          </h2>
          <p className="ap-lead mt-5">
            Twelve services across three areas — and because the same team builds all of them,
            your website, your software and your automation are designed to work together.
          </p>
        </Reveal>

        <div className="grid gap-12">
          {serviceGroups.map((group) => {
            const services = grouped[group.id];
            if (!services.length) return null;

            return (
              <div key={group.id}>
                <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-4 border-t border-hairline pt-6">
                  <div className="max-w-[46ch]">
                    <p className="ap-eyebrow mb-2">{group.label}</p>
                    <h3 className="text-[22px] font-bold sm:text-[25px]">{group.title}</h3>
                    <p className="mt-2 text-[15px] text-quiet">{group.blurb}</p>
                  </div>
                </Reveal>

                <Reveal
                  stagger={0.05}
                  y={16}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="ap-card group flex flex-col p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
                    >
                      <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-azure-wash text-azure-deep transition-colors duration-300 group-hover:bg-azure group-hover:text-white">
                        <ServiceIcon name={service.icon} className="h-5 w-5" />
                      </span>

                      <h4 className="mb-2 text-[17px] font-bold">{service.title}</h4>
                      <p className="mb-5 flex-1 text-sm leading-relaxed text-quiet">
                        {service.short}
                      </p>

                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure-deep">
                        Learn more
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </Link>
                  ))}
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
