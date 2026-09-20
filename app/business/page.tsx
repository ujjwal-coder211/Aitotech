import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import { site } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Business information',
  description: 'The registered business behind AitoTech and SalesConnect, and how to reach it.',
  alternates: { canonical: '/business' },
};

/**
 * Who AitoTech is, on the record: the registered name, Udyam registration,
 * address and contact details, as on the Udyam certificate. Meta (and anyone
 * else) checks the business against this page.
 */
export default function BusinessInformationPage() {
  const rows: { label: string; value: string; href?: string }[] = [
    { label: 'Registered name', value: site.legal.legalName },
    { label: 'Type', value: 'Proprietorship (Micro enterprise)' },
    { label: 'Udyam Registration No.', value: site.legal.udyamNumber },
    { label: 'Registered address', value: site.legal.registeredAddress },
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Phone', value: site.legal.phone, href: `tel:${site.legal.phone.replace(/\s/g, '')}` },
    { label: 'Website', value: site.website, href: site.website },
  ];

  return (
    <PageShell>
      <PageIntro
        eyebrow="Company"
        title="Business information"
        description="AitoTech builds software for small businesses, including SalesConnect, which helps businesses answer and follow up with their customers on WhatsApp."
      />
      <section className="pb-20">
        <div className="ap-wrap max-w-3xl">
          <dl className="divide-y divide-slate-200 border-y border-slate-200">
            {rows.map((r) => (
              <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm text-slate-500">{r.label}</dt>
                <dd className="text-sm font-medium text-slate-900 sm:col-span-2">
                  {r.href ? (
                    <a href={r.href} className="hover:text-azure">
                      {r.value}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-12 text-xl font-bold text-slate-900">SalesConnect policies</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><a className="text-azure hover:underline" href="/salesconnect/privacy">Privacy policy</a></li>
            <li><a className="text-azure hover:underline" href="/salesconnect/terms">Terms of service</a></li>
            <li><a className="text-azure hover:underline" href="/salesconnect/data-deletion">Deleting your data</a></li>
          </ul>

          <p className="mt-10 text-sm text-slate-500">
            Website policies: <Link href="/privacy" className="text-azure hover:underline">privacy</Link> ·{' '}
            <Link href="/terms" className="text-azure hover:underline">terms</Link>. Questions:{' '}
            <Link href="/contact" className="text-azure hover:underline">contact us</Link>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
