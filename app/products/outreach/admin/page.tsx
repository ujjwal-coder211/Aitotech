import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import OutreachAdminConsole from '@/components/OutreachAdminConsole';
import {
  isPanelConfigured,
  verifySessionToken,
} from '@/lib/outreach-admin-session';

export const metadata = {
  title: 'Outreach Admin — Aitotech',
  robots: { index: false, follow: false },
};

export default async function OutreachAdminPage() {
  if (!isPanelConfigured()) {
    return (
      <div className="section-pad pt-24">
        <div className="container-page max-w-lg">
          <h1 className="font-display text-2xl font-bold text-white">Admin not configured</h1>
          <p className="mt-4 text-sm text-zinc-500">
            Vercel env set karein: <code className="text-zinc-400">OUTREACH_PANEL_PASSWORD</code> aur{' '}
            <code className="text-zinc-400">OUTREACH_SESSION_SECRET</code> (min 8 chars each).
          </p>
        </div>
      </div>
    );
  }

  const cookieStore = await cookies();
  const token = cookieStore.get('outreach_admin_session')?.value;
  if (!token || !verifySessionToken(token)) {
    redirect('/products/outreach/admin/login');
  }

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page max-w-3xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Internal only — authenticated</p>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Outreach Admin Console</h1>
            <p className="mt-3 text-zinc-500">
              Approve requests → popup (Email + Password) → Send mail. MCA/GST Excel → Railway database.
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
