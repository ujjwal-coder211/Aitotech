import type { Metadata } from 'next';
import Link from 'next/link';
import { outreachProduct, site } from '@/data/siteContent';
import WhatsAppLink from '@/components/WhatsAppLink';
import PageShell from '@/components/ap/PageShell';

export const metadata: Metadata = {
  title: 'SalesConnect — Coming soon',
  description:
    'SalesConnect by AitoTech is in development. Join the waitlist to get early access when it launches.',
};

export default function SalesConnectDownloadPage() {
  const { waitlist, status } = outreachProduct;

  return (
    <PageShell>
      <section className="ap-sec">
      <div className="ap-wrap max-w-2xl">
        <Link href="/products/outreach" className="text-sm font-medium text-azure-deep hover:underline">
          ← Back to SalesConnect
        </Link>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-azure/30 bg-azure-wash px-3 py-1 text-xs font-medium text-azure-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {status}
        </span>

        <h1 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">{waitlist.title}</h1>
        <p className="mt-3 text-quiet-soft">{waitlist.note}</p>

        <div className="card mt-10 p-6 sm:p-8">
          <h2 className="font-heading text-lg font-semibold text-ink">Get early access</h2>
          <p className="mt-3 text-sm leading-relaxed text-quiet-soft">
            SalesConnect is being built right now. Leave your details and we will email you the moment
            early access opens — no spam, just one message when it is ready.
          </p>
          <Link href="/contact" className="ap-btn ap-btn-pri mt-6 flex w-full justify-center text-base">
            Join the waitlist
          </Link>
          <WhatsAppLink
            className="mt-3 flex w-full justify-center text-sm font-medium text-quiet transition-colors hover:text-ink"
            message="Hi AitoTech! I'd like early access to SalesConnect."
          >
            or chat with us on WhatsApp
          </WhatsAppLink>
        </div>

        <p className="mt-8 text-center text-xs text-quiet-soft">
          Questions? Email {site.email}
        </p>
      </div>
      </section>
    </PageShell>
  );
}
