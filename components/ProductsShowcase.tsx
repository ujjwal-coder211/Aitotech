'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { home, outreachProduct } from '@/data/siteContent';
import SectionHeading from './SectionHeading';

/** Home page — featured Outreach app product. */
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

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="group relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-cyan-500/20 bg-surface-card p-6 shadow-card sm:p-8"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                  {products.outreach.badge}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">{outreachProduct.name}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-300">{outreachProduct.tagline}</p>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white">
                O
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">{products.outreach.summary}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {outreachProduct.features.slice(0, 4).map((f) => (
                <li key={f.title} className="flex gap-2 rounded-lg border border-line bg-surface-raised/60 p-3 text-sm text-zinc-500">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    <span className="font-medium text-zinc-300">{f.title}</span>
                    {' — '}
                    {f.body}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products/outreach/download"
                className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-500"
              >
                {products.outreach.downloadCta}
              </Link>
              <Link
                href="/products/outreach"
                className="rounded-lg border border-line-strong px-5 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-500/40 hover:text-white"
              >
                {products.outreach.learnMore}
              </Link>
              <Link
                href="/products/outreach/request"
                className="rounded-lg border border-line-strong px-5 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-500/40 hover:text-white"
              >
                {products.outreach.requestAccess}
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
