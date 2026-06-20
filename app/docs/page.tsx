import Link from 'next/link';
import { docsHub } from '@/data/akshDocs';

export default function DocsHubPage() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {docsHub.quickLinks.map((link) => (
          <Link
            key={link.slug}
            href={`/docs/${link.slug}`}
            className="card-hover group block p-6 transition"
          >
            <h2 className="font-display text-lg font-semibold text-white group-hover:text-brand-light">{link.title}</h2>
            <p className="mt-2 text-sm text-zinc-500">{link.desc}</p>
            <span className="mt-4 inline-block text-sm font-medium text-brand-light">Read guide →</span>
          </Link>
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-line bg-surface-card p-6">
        <h2 className="font-display text-lg font-semibold text-white">Product repo</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Self-host aur deploy ke liye source code GitHub par hai. Operators:{' '}
          <code className="rounded bg-surface-hover px-1.5 py-0.5 text-zinc-400">docs/E2E_DEPLOY.md</code>
        </p>
        <a
          href="https://github.com/ujjwal-coder211/Saas"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-4 inline-flex text-sm"
        >
          github.com/ujjwal-coder211/Saas
        </a>
      </div>
    </div>
  );
}
