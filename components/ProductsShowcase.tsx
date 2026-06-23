'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { home, routely, outreachProduct } from '@/data/siteContent';
import { routelyAppUrl } from '@/lib/routelyAppUrl';
import SectionHeading from './SectionHeading';

/**
 * Home page — showcases Routely & Outreach as first-class AitoTech products.
 */
export default function ProductsShowcase() {
  const { products } = home;

  return (
    <section id="products" className="section-pad border-y border-line bg-surface-raised/40 scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow={products.eyebrow}
          title={products.title}
          highlight={products.highlight}
          description={products.description}
          align="left"
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Routely — AI coding */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-surface-card p-6 shadow-card sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                    {products.routely.badge}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">{routely.title}</h3>
                  <p className="mt-1 text-sm font-medium text-violet-300">{routely.subtitle}</p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white">
                  R
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{products.routely.summary}</p>

              <ul className="mt-5 space-y-2">
                {routely.features.slice(0, 3).map((f) => (
                  <li key={f.title} className="flex gap-2 text-sm text-zinc-500">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      <span className="font-medium text-zinc-300">{f.title}</span>
                      {' — '}
                      {f.body}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={routelyAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                  {routely.ctaTryBrowser}
                </a>
                <Link
                  href="/routely"
                  className="rounded-lg border border-line-strong px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-violet-500/40 hover:text-white"
                >
                  {products.routely.learnMore}
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Outreach — sales pilot app */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-surface-card p-6 shadow-card sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                    {products.outreach.badge}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">{outreachProduct.name}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-300">{outreachProduct.tagline}</p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white">
                  O
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{products.outreach.summary}</p>

              <ul className="mt-5 space-y-2">
                {outreachProduct.features.slice(0, 3).map((f) => (
                  <li key={f.title} className="flex gap-2 text-sm text-zinc-500">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                    <span>
                      <span className="font-medium text-zinc-300">{f.title}</span>
                      {' — '}
                      {f.body}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="/products/outreach/download"
                  className="rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-500"
                >
                  {products.outreach.downloadCta}
                </Link>
                <Link
                  href="/products/outreach"
                  className="rounded-lg border border-line-strong px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-500/40 hover:text-white"
                >
                  {products.outreach.learnMore}
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
