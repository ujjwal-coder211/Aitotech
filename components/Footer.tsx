import Link from 'next/link';
import { site, navLinks, services, footer, productLinks } from '@/data/siteContent';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line bg-surface-raised/30">
      <div className="container-page py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-display text-lg font-bold text-white">
              {site.name}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
              {site.tagline} — {footer.blurb}
            </p>
            <p className="mt-2 text-xs text-zinc-600">{site.address}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">{footer.navigateTitle}</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-brand-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">{footer.productsTitle}</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              {productLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-brand-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">{footer.servicesTitle}</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-brand-light">
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
              className="block text-sm text-zinc-500 transition-colors hover:text-brand-light"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="mt-1 block text-sm text-zinc-500 transition-colors hover:text-brand-light"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-brand-light transition-colors hover:text-white"
            >
              Book a Call &rarr;
            </Link>
          </div>
        </div>

        <div className="divider-fade mt-10 sm:mt-12" />
        <div className="mt-8 text-center text-sm text-zinc-600">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
