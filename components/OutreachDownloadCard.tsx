'use client';

import { outreachProduct, site } from '@/data/siteContent';

type Props = {
  showQr?: boolean;
};

export default function OutreachDownloadCard({ showQr = false }: Props) {
  const { apkDownloadUrl, currentVersion, runtimeVersion, otaChannel, download } = outreachProduct;

  const downloadPageUrl = `${site.website}/products/outreach/download`;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    downloadPageUrl
  )}`;

  return (
    <div className="card border-line-strong p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white">
          O
        </span>
        <div>
          <p className="font-display text-lg font-bold text-white">{outreachProduct.name}</p>
          <p className="text-xs text-zinc-500">{outreachProduct.tagline}</p>
        </div>
      </div>

      <dl className="mt-5 space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-500">App version</dt>
          <dd className="font-mono text-zinc-300">v{currentVersion}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-500">Runtime / OTA</dt>
          <dd className="font-mono text-zinc-300">
            {runtimeVersion} · {otaChannel}
          </dd>
        </div>
      </dl>

      <a
        href={apkDownloadUrl}
        download
        className="btn-primary mt-6 flex w-full justify-center text-base"
        rel="noopener noreferrer"
      >
        Download Android APK
      </a>

      <p className="mt-3 text-center text-[11px] leading-relaxed text-zinc-600">
        Android only · Enable &quot;Install unknown apps&quot; if prompted
      </p>

      {showQr ? (
        <div className="mt-8 flex flex-col items-center border-t border-line pt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={qrUrl} alt="QR code to download page" width={220} height={220} className="rounded-lg" />
          <p className="mt-3 text-center text-xs text-zinc-500">{download.qrCaption}</p>
        </div>
      ) : null}
    </div>
  );
}
