import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceDetail } from '@/data/siteContent';
import { getService } from '@/lib/services';
import ServiceDetailHero from '@/components/ServiceDetailHero';

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

  const { ctaTitle, ctaBody, ctaButton } = serviceDetail;

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

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {service.features.map((feature, i) => (
            <div key={feature} className="border-t border-white/[0.08] pt-5">
              <span className="text-xs font-medium tracking-wider text-zinc-600">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-2 text-sm font-medium text-white">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/[0.06] pt-14 text-center sm:mt-20 sm:pt-16">
          <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
            {ctaTitle(service.title)}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-500">{ctaBody}</p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex">
            {ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
