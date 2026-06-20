import Link from 'next/link';
import { docsHub } from '@/data/akshDocs';
import { aksh } from '@/data/siteContent';

export default function DocsHubPage() {
  return (
    <div className="space-y-12">
      {/* Overview — visible description (not grey small text) */}
      <div className="rounded-2xl border border-brand/25 bg-brand-soft/40 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-light">Overview</p>
        <p className="mt-3 text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">{docsHub.headline}</p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">{docsHub.intro}</p>
        <p className="mt-4 rounded-lg border border-line bg-surface/80 px-4 py-3 text-sm text-zinc-300">
          {docsHub.compareNote}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {docsHub.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                l.href.startsWith('/docs')
                  ? 'btn-primary text-sm'
                  : 'btn-secondary border-line text-sm text-zinc-200'
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* All guides — 6 cards, rich descriptions */}
      <div>
        <h2 className="font-display text-xl font-bold text-white sm:text-2xl">Guides</h2>
        <p className="mt-2 text-sm text-zinc-500">One page per topic. Full details inside.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {docsHub.quickLinks.map((link) => (
            <Link
              key={link.slug}
              href={`/docs/${link.slug}`}
              className="card-hover group block p-6 transition"
            >
              <h3 className="font-display text-lg font-semibold text-white group-hover:text-brand-light">
                {link.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{link.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand-light">Read full guide →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Cursor vs Aksh — docs context */}
      <div>
        <h2 className="font-display text-xl font-bold text-white sm:text-2xl">{aksh.comparison.title}</h2>
        <p className="mt-2 text-sm text-zinc-500">{aksh.comparison.subtitle}</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-surface-card">
                {aksh.comparison.columns.map((col, i) => (
                  <th
                    key={col}
                    className={`px-4 py-3 font-semibold ${i === 2 ? 'text-brand-light' : 'text-zinc-400'}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {aksh.comparison.rows.slice(0, 5).map((row) => (
                <tr key={row.feature} className="border-b border-line/80 last:border-0">
                  <td className="px-4 py-3 text-zinc-300">{row.feature}</td>
                  <td className="px-4 py-3 text-zinc-500">{row.cursor}</td>
                  <td className="px-4 py-3 text-brand-light/90">{row.aksh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/aksh" className="mt-4 inline-block text-sm text-brand-light hover:underline">
          See full comparison on the launch page →
        </Link>
      </div>

      {/* Product repo */}
      <div className="rounded-2xl border border-line bg-surface-card p-6 sm:p-8">
        <h2 className="font-display text-lg font-semibold text-white">Product source code</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Self-host and deploy from GitHub. Ops guide:{' '}
          <code className="rounded bg-surface-hover px-1.5 py-0.5 text-zinc-300">docs/E2E_DEPLOY.md</code>{' '}
          (E2E Networks — Delhi, Chennai GPU).
        </p>
        <a
          href="https://github.com/ujjwal-coder211/Saas"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-5 inline-flex text-sm"
        >
          github.com/ujjwal-coder211/Saas
        </a>
      </div>
    </div>
  );
}
