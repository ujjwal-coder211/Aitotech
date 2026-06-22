import type { Metadata } from 'next';
import Link from 'next/link';
import { outreachProduct, site } from '@/data/siteContent';
import OutreachDownloadCard from '@/components/OutreachDownloadCard';

export const metadata: Metadata = {
  title: 'Download Outreach APK',
  description: 'Download the Outreach Android app — AI sales pilot for bank teams. OTA updates included.',
};

export default function OutreachDownloadPage() {
  const { download, currentVersion, otaChannel } = outreachProduct;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page max-w-2xl">
        <Link href="/products/outreach" className="text-sm font-medium text-brand-light hover:underline">
          ← Back to Outreach docs
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">{download.title}</h1>
        <p className="mt-3 text-zinc-500">{download.subtitle}</p>
        <p className="mt-2 text-sm text-zinc-600">
          Version v{currentVersion} · OTA channel: {otaChannel}
        </p>

        <div className="mt-10">
          <OutreachDownloadCard showQr />
        </div>

        <section className="card mt-10 p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-white">Install steps</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-zinc-500">
            {download.installSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="card mt-6 border-cyan-500/20 bg-cyan-500/5 p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-cyan-300">Automatic updates (OTA)</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{download.otaNote}</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-500">
            <li>Popup on app open: &quot;Update available → Download → Restart&quot;</li>
            <li>Manual check: Profile → App Version → Check for Updates</li>
            <li>Requires APK v1.0.11+ with preview channel embedded</li>
          </ul>
        </section>

        <p className="mt-8 text-center text-xs text-zinc-600">
          Share this page: {site.website}/products/outreach/download
        </p>
      </div>
    </div>
  );
}
