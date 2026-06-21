import Link from 'next/link';
import { docsHub } from '@/data/akshDocs';
import { routely } from '@/data/siteContent';

export default function DocsHubPage() {
  return (
    <div className="space-y-12">
      <div className="rounded-2xl border border-brand/25 bg-brand-soft/40 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-light">Overview</p>
        <p className="mt-3 text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">{docsHub.headline}</p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">{docsHub.intro}</p>
        <p className="mt-4 rounded-lg border border-line bg-surface/80 px-4 py-3 text-sm text-zinc-300">
          {docsHub.strengthsNote}
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

      <div>
        <h2 className="font-display text-xl font-bold text-white sm:text-2xl">Why Routely</h2>
        <p className="mt-2 text-sm text-zinc-500">{routely.elevatorPitch}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {routely.features.map((item) => (
            <li key={item.title} className="rounded-xl border border-line bg-surface-card p-5">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
            </li>
          ))}
        </ul>
        <Link href="/routely" className="mt-6 inline-block text-sm text-brand-light hover:underline">
          See Routely launch page →
        </Link>
      </div>

      <div className="rounded-2xl border border-line bg-surface-card p-6 sm:p-8">
        <h2 className="font-display text-lg font-semibold text-white">Product code on GitHub</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Run Routely on your own server from GitHub. Server setup guide:{' '}
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
