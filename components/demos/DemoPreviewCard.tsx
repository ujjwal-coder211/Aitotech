'use client';

import Link from 'next/link';
import type { DemoTemplate } from '@/data/demoTemplates';

/**
 * A realistic, scaled thumbnail of the actual demo template (not a grey
 * skeleton) rendered from the template's palette + content, inside a browser
 * frame. Links to the full live preview.
 */
export default function DemoPreviewCard({
  t,
  requestCta,
  onRequest,
}: {
  t: DemoTemplate;
  requestCta: string;
  onRequest: (name: string) => void;
}) {
  const p = t.palette;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 ease-out-expo hover:border-white/[0.16] hover:shadow-elevated">
      {/* browser frame */}
      <div className="border-b border-line" style={{ background: '#0c0c0f' }}>
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="ml-2 flex-1 truncate rounded-full bg-zinc-800/80 px-2 py-0.5 text-[9px] text-zinc-500">
            {t.brand.toLowerCase().replace(/\s+/g, '')}.com
          </span>
        </div>
      </div>

      {/* live mini render */}
      <Link
        href={`/demos/preview/${t.slug}`}
        className="relative block h-52 overflow-hidden"
        style={{ background: p.bg, color: p.text }}
        aria-label={`Open ${t.card.name} live preview`}
      >
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl"
          style={{ background: `${p.primary}44` }}
        />
        {/* mini nav */}
        <div className="relative flex items-center justify-between px-4 py-2.5" style={{ borderBottom: `1px solid ${p.primary}22` }}>
          <div className="flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded text-[8px] font-bold text-white" style={{ background: p.primary }}>
              {t.brand[0]}
            </span>
            <span className="text-[10px] font-bold">{t.brand}</span>
          </div>
          <div className="flex gap-2">
            {t.nav.slice(0, 3).map((n) => (
              <span key={n} className="text-[8px]" style={{ color: p.muted }}>{n}</span>
            ))}
          </div>
        </div>
        {/* mini hero */}
        <div className="relative px-4 py-4">
          <span className="inline-block rounded-full px-2 py-0.5 text-[7px] font-medium" style={{ background: `${p.primary}22`, color: p.accent }}>
            {t.hero.eyebrow}
          </span>
          <div className="mt-2 text-[15px] font-extrabold leading-tight" style={{ maxWidth: '80%' }}>
            {t.hero.heading}
          </div>
          <div className="mt-2 flex gap-1.5">
            <span className="rounded px-2.5 py-1 text-[8px] font-bold text-white" style={{ background: p.primary }}>{t.hero.cta}</span>
            <span className="rounded px-2.5 py-1 text-[8px] font-semibold" style={{ border: `1px solid ${p.primary}55`, color: p.text }}>{t.hero.ctaAlt}</span>
          </div>
          {/* mini cards */}
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md p-2" style={{ background: p.surface, border: `1px solid ${p.primary}22` }}>
                <div className="h-1.5 w-3/4 rounded-full" style={{ background: `${p.accent}88` }} />
                <div className="mt-1 h-1 w-full rounded-full" style={{ background: `${p.muted}33` }} />
                <div className="mt-0.5 h-1 w-2/3 rounded-full" style={{ background: `${p.muted}33` }} />
              </div>
            ))}
          </div>
        </div>

        {/* hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
          <span className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-zinc-900 shadow-lg">
            Open live preview →
          </span>
        </div>
      </Link>

      {/* meta */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold text-white">{t.card.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-500">{t.card.blurb}</p>
        <p className="mt-3 text-xs text-zinc-600">{t.card.tags.join(' · ')}</p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link
            href={`/demos/preview/${t.slug}`}
            className="btn-primary justify-center px-3 py-2.5 text-xs"
          >
            Live preview
          </Link>
          <button
            type="button"
            onClick={() => onRequest(t.card.name)}
            className="btn-glass cursor-pointer justify-center px-3 py-2.5 text-xs"
          >
            {requestCta}
          </button>
        </div>
      </div>
    </div>
  );
}
