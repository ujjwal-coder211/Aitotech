import type { Metadata } from 'next';
import Link from 'next/link';
import { outreachProduct, site } from '@/data/siteContent';
import WhatsAppLink from '@/components/WhatsAppLink';

export const metadata: Metadata = {
  title: 'SalesConnect — Coming soon',
  description:
    'SalesConnect by AitoTech is in development. Join the waitlist to get early access when it launches.',
};

export default function SalesConnectDownloadPage() {
  const { waitlist, status } = outreachProduct;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page max-w-2xl">
        <Link href="/products/outreach" className="text-sm font-medium text-brand-light hover:underline">
          ← Back to SalesConnect
        </Link>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand-light">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {status}
        </span>

        <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">{waitlist.title}</h1>
        <p className="mt-3 text-zinc-500">{waitlist.note}</p>

        <div className="card mt-10 p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-white">Get early access</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            SalesConnect is being built right now. Leave your details and we will email you the moment
            early access opens — no spam, just one message when it is ready.
          </p>
          <Link href="/contact" className="btn-primary mt-6 flex w-full justify-center text-base">
            Join the waitlist
          </Link>
          <WhatsAppLink
            className="mt-3 flex w-full justify-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            message="Hi AitoTech! I'd like early access to SalesConnect."
          >
            or chat with us on WhatsApp
          </WhatsAppLink>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-600">
          Questions? Email {site.email}
        </p>
      </div>
    </div>
  );
}
