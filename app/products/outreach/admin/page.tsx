import type { Metadata } from 'next';
import Link from 'next/link';
import OutreachAdminConsole from '@/components/OutreachAdminConsole';

export const metadata: Metadata = {
  title: 'Outreach Admin — Aitotech',
  robots: { index: false, follow: false },
};

export default function OutreachAdminPage() {
  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page max-w-3xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Internal only</p>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Outreach Admin Console</h1>
            <p className="mt-3 text-zinc-500">
              Approve requests → popup (Email + Password) → Send mail. MCA/GST Excel → server upload.
            </p>
          </div>
          <Link href="/products/outreach/admin/login" className="text-sm text-zinc-500 hover:text-zinc-300">
            Switch account
          </Link>
        </div>

        <div className="mt-10">
          <OutreachAdminConsole />
        </div>

        <p className="mt-10 text-center text-sm text-zinc-600">
          <Link href="/products/outreach" className="text-brand-light hover:underline">
            ← Back to Outreach product
          </Link>
        </p>
      </div>
    </div>
  );
}
