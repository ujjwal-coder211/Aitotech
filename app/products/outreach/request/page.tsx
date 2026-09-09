import type { Metadata } from 'next';
import Link from 'next/link';
import { outreachProduct, site } from '@/data/siteContent';
import WhatsAppLink from '@/components/WhatsAppLink';
import PageShell from '@/components/ap/PageShell';

export const metadata: Metadata = {
  title: 'SalesConnect early access',
  description:
    'Request early access to SalesConnect by AitoTech — the AI sales assistant for local businesses. In development.',
};

export default function SalesConnectRequestPage() {
  const { waitlist, status } = outreachProduct;

  return (
    <PageShell>
      <section className="ap-sec">
      <div className="ap-wrap max-w-lg">
        <span className="inline-flex items-center gap-2 rounded-full border border-azure/30 bg-azure-wash px-3 py-1 text-xs font-medium text-azure-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {status}
        </span>

        <h1 className="mt-4 font-heading text-3xl font-bold text-ink">{waitlist.title}</h1>
        <p className="mt-3 text-quiet-soft">{waitlist.subtitle}</p>

        <div className="card mt-8 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-quiet">
            SalesConnect is in active development. Tell us a little about your business and we will email
            you the moment early access opens.
          </p>
          <Link href="/contact" className="ap-btn ap-btn-pri mt-6 flex w-full justify-center">
            Join the waitlist
          </Link>
          <WhatsAppLink
            className="mt-3 flex w-full justify-center text-sm font-medium text-quiet transition-colors hover:text-ink"
            message="Hi AitoTech! I'd like early access to SalesConnect."
          >
            or chat with us on WhatsApp
          </WhatsAppLink>
        </div>

        <p className="mt-6 text-center text-sm text-quiet-soft">
          Questions? Email{' '}
          <a href={`mailto:${site.email}`} className="text-azure-deep hover:underline">
            {site.email}
          </a>
        </p>
      </div>
      </section>
    </PageShell>
  );
}
