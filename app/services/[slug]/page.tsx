import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceDetail } from '@/data/siteContent';
import { getService } from '@/lib/services';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import { ComingSoonBlock } from '@/components/PageHero';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return { title: 'Service Not Found' };
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const { comingSoon, ctaTitle, ctaBody, ctaButton } = serviceDetail;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page">
        <nav className="mb-6 text-sm text-zinc-600 sm:mb-8">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-400">{service.title}</span>
        </nav>

        <ServiceDetailHero service={service} />

        {service.comingSoon && (
          <ComingSoonBlock title={comingSoon.badge} body={comingSoon.body} ctaLabel={comingSoon.cta} />
        )}

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {service.features.map((feature, i) => (
            <div key={feature} className="card-hover p-5 sm:p-6">
              <span className="font-display text-sm font-bold text-brand-light/70">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-2 font-medium text-white">{feature}</p>
            </div>
          ))}
        </div>

        <div className="card mt-12 p-8 text-center sm:mt-16 sm:p-10 md:p-14">
          <h2 className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
            {ctaTitle(service.title)}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-500 sm:text-base">{ctaBody}</p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex sm:mt-8">
            {ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
