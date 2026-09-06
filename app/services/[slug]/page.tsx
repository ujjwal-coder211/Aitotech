import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getService } from '@/lib/services';
import ServiceIcon from '@/components/ServiceIcon';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import FinalCta from '@/components/ap/FinalCta';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  return (
    <PageShell>
      <PageIntro eyebrow={`Services · ${service.title}`} title={service.short}>
        <nav aria-label="Breadcrumb" className="mt-6 text-sm text-quiet-soft">
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
      </PageIntro>

      <section className="ap-sec pt-4">
        <div className="ap-wrap">
          <Reveal y={20} className="ap-card p-7 sm:p-9">
            <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-azure-wash text-azure-deep">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h2 className="mb-4 text-[clamp(22px,2.6vw,30px)] font-extrabold">{service.title}</h2>
            <p className="max-w-[60ch] text-[15px] leading-[1.75] text-quiet">{service.description}</p>
          </Reveal>

          <Reveal
            stagger={0.06}
            y={16}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {service.features.map((feature, i) => (
              <div key={feature} className="border-t border-hairline pt-5">
                <span className="font-heading text-xs font-bold text-azure-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-2 text-[15px] font-semibold">{feature}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
