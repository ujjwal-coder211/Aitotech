import Link from 'next/link';
import { site, navLinks, services, footer } from '@/data/siteContent';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line bg-surface-raised/40">
      <div className="container-page py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-xs font-bold">AT</span>
              {site.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              {site.tagline} — {footer.blurb}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">{footer.navigateTitle}</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">{footer.servicesTitle}</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">{footer.contactTitle}</h4>
            <a href={`mailto:${site.email}`} className="block text-sm text-zinc-500 transition-colors hover:text-white">
              {site.email}
            </a>
            <p className="mt-2 text-sm text-zinc-500">{site.address}</p>
          </div>
        </div>

        <div className="divider-fade mt-10 sm:mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-600 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {footer.legal.map((item) => (
              <span key={item} className="cursor-default transition-colors hover:text-zinc-400">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
