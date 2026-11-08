import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { industryDetails, industryImage } from '@/data/industries';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Websites, applications, custom software and AI automation built for real estate, automobile, retail, manufacturing, wholesale, healthcare, education, hospitality and professional services.',
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
        description="The website that wins a property buyer is not the system that keeps a factory floor moving. We start from how your trade actually operates — then build the site, the software and the automation around it."
      />

      <section className="ap-sec pt-4">
        <div className="ap-wrap">
          <Reveal stagger={0.05} y={16} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryDetails.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="ap-card group flex flex-col overflow-hidden transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-hairline bg-wash">
                  <Image
                    src={industryImage(ind.slug)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
                    loading={i < 3 ? 'eager' : 'lazy'}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-2.5 text-[17px] font-bold">{ind.name}</h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-quiet">{ind.headline}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure-deep">
                    See what we build
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
