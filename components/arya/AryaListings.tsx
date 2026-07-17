'use client';

import { useState } from 'react';
import { arya } from '@/data/aryaHomes';

const FILTERS = ['All', '1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Plot'] as const;

/** Filterable property grid — the core browse experience for a property site. */
export default function AryaListings() {
  const [active, setActive] = useState<string>('All');

  const list =
    active === 'All' ? arya.properties : arya.properties.filter((p) => p.type === active);

  return (
    <>
      {/* filter chips */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
              active === f
                ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article
            key={p.title + p.location}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(15,23,42,0.25)]"
          >
            {/* photo slot — replace with the client's real photos */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />
              <svg className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
              </svg>
              <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-2.5 py-1 text-[11px] font-bold text-slate-900">
                {p.type}
              </span>
              <span className="absolute bottom-3 right-3 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-900">
                {p.area}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <svg className="h-4 w-4 shrink-0 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {p.location}
              </p>

              <p className="mt-3 font-display text-xl font-extrabold text-slate-900">{p.price}</p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/${arya.whatsapp}?text=${encodeURIComponent(
                  `Hi Arya Homes! I'm interested in the ${p.title} (${p.area}) at ${p.location}. Please share details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
              >
                Book a site visit
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
