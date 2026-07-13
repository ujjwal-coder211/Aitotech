import type { Metadata } from 'next';
import Link from 'next/link';
import { outreachProduct, site } from '@/data/siteContent';
import WhatsAppLink from '@/components/WhatsAppLink';

export const metadata: Metadata = {
  title: 'SalesConnect early access',
  description:
    'Request early access to SalesConnect by AitoTech — the AI sales assistant for local businesses. In development.',
};

export default function SalesConnectRequestPage() {
  const { waitlist, status } = outreachProduct;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page max-w-lg">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand-light">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {status}
        </span>

        <h1 className="mt-4 font-display text-3xl font-bold text-white">{waitlist.title}</h1>
        <p className="mt-3 text-zinc-500">{waitlist.subtitle}</p>

        <div className="card mt-8 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-zinc-400">
            SalesConnect is in active development. Tell us a little about your business and we will email
            you the moment early access opens.
          </p>
          <Link href="/contact" className="btn-primary mt-6 flex w-full justify-center">
            Join the waitlist
          </Link>
          <WhatsAppLink
            className="mt-3 flex w-full justify-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            message="Hi AitoTech! I'd like early access to SalesConnect."
          >
            or chat with us on WhatsApp
          </WhatsAppLink>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-600">
          Questions? Email{' '}
          <a href={`mailto:${site.email}`} className="text-brand-light hover:underline">
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
