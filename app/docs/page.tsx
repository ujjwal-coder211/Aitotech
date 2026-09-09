import Link from 'next/link';
import { docsHub } from '@/data/sairaDocs';
import { routely } from '@/data/siteContent';

export default function DocsHubPage() {
  return (
    <div className="space-y-12">
      <div className="rounded-2xl border border-azure/30 bg-azure-wash p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-azure-deep">Overview</p>
        <p className="mt-3 text-base font-medium leading-relaxed text-ink sm:text-lg">{docsHub.headline}</p>
        <p className="mt-4 text-sm leading-relaxed text-quiet sm:text-base">{docsHub.intro}</p>
        <p className="mt-4 rounded-lg border border-hairline bg-white px-4 py-3 text-sm text-quiet">
          {docsHub.strengthsNote}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {docsHub.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                l.href.startsWith('/docs')
                  ? 'ap-btn ap-btn-pri text-sm'
                  : 'ap-btn ap-btn-sec border-hairline text-sm text-ink'
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">Guides</h2>
        <p className="mt-2 text-sm text-quiet-soft">One page per topic. Full details inside.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {docsHub.quickLinks.map((link) => (
            <Link
              key={link.slug}
              href={`/docs/${link.slug}`}
              className="ap-card group block p-6 transition"
            >
              <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-azure-deep">
                {link.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-quiet">{link.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-azure-deep">Read full guide →</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">Why Routely</h2>
        <p className="mt-2 text-sm text-quiet-soft">{routely.elevatorPitch}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {routely.features.map((item) => (
            <li key={item.title} className="rounded-xl border border-hairline bg-white p-5">
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-quiet">{item.body}</p>
            </li>
          ))}
        </ul>
        <Link href="/routely" className="mt-6 inline-block text-sm text-azure-deep hover:underline">
          See Routely launch page →
        </Link>
      </div>

      <div className="rounded-2xl border border-hairline bg-white p-6 sm:p-8">
        <h2 className="font-heading text-lg font-semibold text-ink">Product code on GitHub</h2>
        <p className="mt-3 text-sm leading-relaxed text-quiet">
          Run Routely on your own server from GitHub. Server setup guide:{' '}
          <code className="rounded bg-wash px-1.5 py-0.5 text-quiet">docs/E2E_DEPLOY.md</code>{' '}
          (E2E Networks — Delhi, Chennai GPU).
        </p>
        <a
          href="https://github.com/ujjwal-coder211/Saas"
          target="_blank"
          rel="noopener noreferrer"
          className="ap-btn ap-btn-sec mt-5 inline-flex text-sm"
        >
          github.com/ujjwal-coder211/Saas
        </a>
      </div>
    </div>
  );
}
