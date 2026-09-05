import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';

const COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'Customer automation', href: '/solutions' },
      { label: 'Operations automation', href: '/solutions' },
      { label: 'AI agents', href: '/solutions' },
      { label: 'Websites & apps', href: '/services' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'WhatsApp automation', href: '/solutions' },
      { label: 'AI voice calling', href: '/solutions' },
      { label: 'Lead qualification', href: '/solutions' },
      { label: 'Approvals & reports', href: '/solutions' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Real estate', href: '/industries' },
      { label: 'Automobile', href: '/industries' },
      { label: 'Retail & wholesale', href: '/industries' },
      { label: 'Healthcare', href: '/industries' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Contact', href: '/contact' },
      { label: 'info@aitotech.in', href: 'mailto:info@aitotech.in' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="ap-wrap py-14 sm:py-16">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-5">
          <div className="max-w-[30ch]">
            <p className="mb-3 font-heading text-xl font-extrabold">
              <span className="text-white">Aito</span>
              <span className="text-azure">Tech</span>
            </p>
            <p className="mb-5 text-sm text-[#8fa3c0]">
              Building digital solutions that grow businesses.
            </p>
            <WhatsAppLink className="ap-btn ap-btn-ghost h-11 text-sm">
              Chat on WhatsApp
            </WhatsAppLink>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#6f86a8]">
                {col.heading}
              </p>
              <ul className="grid gap-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[#c2d0e4] transition-colors duration-200 hover:text-azure"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-9 h-px bg-white/10" />

        <div className="flex flex-wrap justify-between gap-4">
          <p className="text-[12.5px] text-[#6f86a8]">© 2026 AitoTech · Delhi, India</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[12.5px] text-[#6f86a8] hover:text-azure">
              Privacy
            </Link>
            <Link href="/terms" className="text-[12.5px] text-[#6f86a8] hover:text-azure">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
