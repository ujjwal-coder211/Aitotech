import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import SocialLinks from '@/components/SocialLinks';
import { site } from '@/data/siteContent';
import { catalogue, serviceGroups } from '@/data/services';

/**
 * Compliance links live here rather than in the main nav: /business carries
 * the registered details Meta checks against the Udyam certificate, and the
 * SalesConnect policies are served by the app itself.
 */
/** The pages that are not in the four-item nav but still deserve a way in. */
const COMPANY_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Live demos', href: '/demos' },
  { label: 'SalesConnect', href: '/products/outreach' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Business information', href: '/business' },
  { label: 'SalesConnect privacy', href: '/salesconnect/privacy' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="ap-wrap py-14 sm:py-16">
        <div className="grid gap-11 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="max-w-[34ch]">
            <p className="mb-3 font-heading text-xl font-extrabold">
              <span className="text-white">Aito</span>
              <span className="text-azure">Tech</span>
            </p>
            <p className="mb-6 text-sm leading-relaxed text-[#8fa3c0]">
              Building digital solutions that grow businesses — websites, applications, AI and
              automation, built and supported from Delhi.
            </p>
            <WhatsAppLink className="ap-btn ap-btn-ghost h-11 text-sm">
              Chat on WhatsApp
            </WhatsAppLink>
            <div className="mt-6">
              <SocialLinks size="sm" />
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {serviceGroups.map((group) => (
              <div key={group.id}>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#6f86a8]">
                  {group.label}
                </p>
                <ul className="grid gap-2.5 text-sm">
                  {catalogue
                    .filter((s) => s.group === group.id)
                    .sort((a, b) => a.order - b.order)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-[#c2d0e4] transition-colors duration-200 hover:text-azure"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-11 border-t border-white/10 pt-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#6f86a8]">
            Company
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {COMPANY_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[#c2d0e4] transition-colors duration-200 hover:text-azure"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="my-9 h-px bg-white/10" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          {/* Registered details, worded exactly as on the Udyam certificate. */}
          <div className="max-w-[44ch] text-[12.5px] leading-relaxed text-[#6f86a8]">
            <p className="font-semibold text-[#8fa3c0]">{site.legal.legalName}</p>
            <p className="mt-1">{site.legal.registeredAddress}</p>
            <p className="mt-1">Udyam Registration No. {site.legal.udyamNumber}</p>
            <p className="mt-2">
              <a href={`tel:${site.legal.phone.replace(/\s/g, '')}`} className="hover:text-azure">
                {site.legal.phone}
              </a>
              {' · '}
              <a href={`mailto:${site.email}`} className="hover:text-azure">
                {site.email}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-x-6 gap-y-3">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] text-[#8fa3c0] transition-colors hover:text-azure"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-9 text-[12.5px] text-[#6f86a8]">
          © {new Date().getFullYear()} {site.legal.legalName} · Delhi, India
        </p>
      </div>
    </footer>
  );
}
