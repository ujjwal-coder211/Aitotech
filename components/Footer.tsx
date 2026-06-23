import Link from 'next/link';
import { site, navLinks, services, footer } from '@/data/siteContent';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-abyss-50/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-display text-lg font-bold text-white">
              {site.name}
              <span className="text-cyan-400">.</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
              {site.tagline} — {footer.blurb}
            </p>
            <p className="mt-2 text-xs text-slate-600">{site.address}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">{footer.navigateTitle}</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-cyan-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">{footer.servicesTitle}</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-cyan-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">{footer.contactTitle}</h4>
            <a
              href={`mailto:${site.email}`}
              className="block text-sm text-slate-500 transition-colors hover:text-cyan-400"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="mt-1 block text-sm text-slate-500 transition-colors hover:text-cyan-400"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Book a Call &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/60 pt-8 text-center text-sm text-slate-600 sm:mt-12">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
