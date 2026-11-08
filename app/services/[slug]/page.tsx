import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getService, getServices } from '@/lib/services';
import { getServiceDetail, serviceGroups } from '@/data/services';
import { site } from '@/data/siteContent';
import ServiceIcon from '@/components/ServiceIcon';
import WhatsAppLink from '@/components/WhatsAppLink';
import JsonLdScript from '@/components/seo/JsonLdScript';
import PageShell from '@/components/ap/PageShell';
import Reveal from '@/components/ap/Reveal';
import TrackedLink from '@/components/ap/TrackedLink';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} — ${service.short}`,
    description: service.description.slice(0, 300),
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const detail = getServiceDetail(service.slug);
  const group = serviceGroups.find((g) => g.id === service.group);
  const cta = detail?.cta ?? 'Book a Free Consultation';
  const enquiryHref = `/contact?service=${service.slug}`;

  // Sibling services in the same group, so the page is a step and not a dead end.
  const all = await getServices();
  const related = all
    .filter((s) => s.group === service.group && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <PageShell>
      <JsonLdScript
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.description,
            serviceType: service.title,
            provider: { '@type': 'Organization', name: 'AitoTech', url: site.website },
            areaServed: { '@type': 'Country', name: 'India' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: site.website },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.website}/services` },
              {
                '@type': 'ListItem',
                position: 3,
                name: service.title,
                item: `${site.website}/services/${service.slug}`,
              },
            ],
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfdff] to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 60% at 88% 0%, rgba(46,163,232,0.11), transparent 70%)',
          }}
        />
        <div className="ap-wrap relative pb-14 pt-10 sm:pb-16 sm:pt-14">
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-quiet-soft">
            <Link href="/" className="hover:text-azure-deep">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-azure-deep">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-quiet">{service.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <Reveal stagger={0.08}>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-azure-wash text-azure-deep">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </span>
                {group && <span className="ap-eyebrow">{group.label}</span>}
              </div>

              <h1 className="mb-5 text-[clamp(30px,4.4vw,50px)] font-extrabold leading-[1.08] text-balance">
                {service.title}
              </h1>

              <p className="mb-6 max-w-[46ch] text-[clamp(18px,2vw,22px)] font-semibold leading-snug text-azure-deep">
                {service.short}
              </p>

              <p className="ap-lead mb-9 max-w-[56ch]">{service.description}</p>

              <div className="flex flex-wrap gap-3">
                <TrackedLink
                  href={enquiryHref}
                  event={cta}
                  location={`service_hero:${service.slug}`}
                  className="ap-btn ap-btn-pri"
                >
                  {cta}
                </TrackedLink>
                <WhatsAppLink className="ap-btn ap-btn-sec">Ask a quick question</WhatsAppLink>
              </div>
            </Reveal>

            <Reveal delay={0.12} y={24}>
              <div className="ap-card p-7 sm:p-8">
                <p className="ap-eyebrow mb-5">What&rsquo;s included</p>
                <ul className="grid gap-4">
                  {service.features.map((feature, i) => (
                    <li
                      key={feature}
                      className="flex gap-4 border-t border-hairline pt-4 first:border-t-0 first:pt-0"
                    >
                      <span className="font-heading text-xs font-bold text-azure-deep">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[15px] font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits — what the customer gains */}
      {detail && detail.benefits.length > 0 && (
        <section className="ap-sec border-y border-hairline bg-wash">
          <div className="ap-wrap">
            <Reveal className="mb-10 max-w-[42ch]">
              <p className="ap-eyebrow mb-3.5">What you get out of it</p>
              <h2 className="text-[clamp(25px,3.2vw,38px)] font-extrabold">
                The difference it makes to your business.
              </h2>
            </Reveal>

            <Reveal stagger={0.06} y={16} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {detail.benefits.map((benefit) => (
                <div key={benefit.title} className="ap-card p-7">
                  <h3 className="mb-2.5 text-[17px] font-bold">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-quiet">{benefit.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Use cases + process */}
      {detail && (
        <section className="ap-sec">
          <div className="ap-wrap">
            <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <Reveal>
                <p className="ap-eyebrow mb-3.5">When businesses come to us for this</p>
                <h2 className="mb-7 text-[clamp(23px,2.8vw,32px)] font-extrabold">
                  Situations this is built for.
                </h2>
                <ul className="grid gap-5">
                  {detail.useCases.map((useCase) => (
                    <li
                      key={useCase}
                      className="flex gap-4 border-t border-hairline pt-5 text-[15px] leading-relaxed text-quiet"
                    >
                      <span className="mt-2.5 h-0.5 w-4 flex-none bg-azure" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="ap-eyebrow mb-3.5">How the work runs</p>
                <h2 className="mb-7 text-[clamp(23px,2.8vw,32px)] font-extrabold">
                  Four steps, and you approve each one.
                </h2>
                <ol className="grid gap-4">
                  {detail.process.map((step) => (
                    <li key={step.step} className="ap-card flex gap-5 p-6">
                      <span className="font-heading text-[13px] font-bold text-azure-deep">
                        {step.step}
                      </span>
                      <span>
                        <span className="mb-1.5 block text-[16.5px] font-bold">{step.title}</span>
                        <span className="block text-sm leading-relaxed text-quiet">{step.body}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Enquiry CTA — worded for this service */}
      <section className="relative overflow-hidden bg-navy">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 15% 0%, rgba(46,163,232,0.22), transparent 65%)',
          }}
        />
        <div className="ap-wrap relative py-16 sm:py-20">
          <Reveal className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <h2 className="mb-4 text-[clamp(26px,3.4vw,40px)] font-extrabold text-white">
                Talk to us about {service.title.toLowerCase()}.
              </h2>
              <p className="max-w-[50ch] text-[17px] leading-relaxed text-[#a9bdd8]">
                Tell us what you need and we will tell you honestly whether this is the right place
                to start — with a scope and a price, not a sales call.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <TrackedLink
                href={enquiryHref}
                event={cta}
                location={`service_footer:${service.slug}`}
                className="ap-btn ap-btn-pri"
              >
                {cta}
              </TrackedLink>
              <WhatsAppLink className="ap-btn ap-btn-ghost">Chat on WhatsApp</WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related services in the same group */}
      {related.length > 0 && (
        <section className="ap-sec">
          <div className="ap-wrap">
            <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[22px] font-extrabold sm:text-[26px]">
                Often built alongside this
              </h2>
              <Link
                href="/services"
                className="text-[14.5px] font-semibold text-azure-deep hover:text-azure"
              >
                All services →
              </Link>
            </Reveal>

            <Reveal stagger={0.06} y={16} className="grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="ap-card group flex flex-col p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec]"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-azure-wash text-azure-deep">
                    <ServiceIcon name={item.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="mb-1.5 text-[16.5px] font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-quiet">{item.short}</p>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </PageShell>
  );
}
