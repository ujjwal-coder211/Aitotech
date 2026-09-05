import type { Metadata } from 'next';
import Link from 'next/link';
import { industryDetails } from '@/data/industries';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'Industries We Automate',
  description:
    'Automation built for real estate, automobile, retail, manufacturing, wholesale, healthcare, education, hospitality and professional services.',
  alternates: { canonical: '/industries' },
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Industries"
        title={
          <>
            Built around how <span className="text-azure-deep">your industry works.</span>
          </>
        }
        description="The workflow that wins a property buyer is not the one that keeps a factory floor moving. We start from how your trade actually operates."
      />

      <section className="ap-sec pt-4">
        <div className="ap-wrap">
          <Reveal stagger={0.05} y={16} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryDetails.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="ap-card group flex flex-col p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
              >
                <h2 className="mb-2.5 text-[17px] font-bold">{ind.name}</h2>
                <p className="mb-5 flex-1 text-sm text-quiet">{ind.headline}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure-deep">
                  See what we automate
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
