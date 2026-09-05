import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getIndustry, industryDetails } from '@/data/industries';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import WorkflowStrip from '@/components/ap/WorkflowStrip';
import FinalCta from '@/components/ap/FinalCta';

export function generateStaticParams() {
  return industryDetails.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return {
    title: `${industry.name} Automation`,
    description: `${industry.headline} ${industry.intro}`.slice(0, 155),
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <PageShell>
      <PageIntro
        eyebrow={`Industries · ${industry.name}`}
        title={industry.headline}
        description={industry.intro}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="ap-btn ap-btn-pri">
            Book Free Automation Audit
          </Link>
          <Link href="/industries" className="ap-btn ap-btn-sec">
            All industries
          </Link>
        </div>
      </PageIntro>

      <section className="ap-sec border-y border-hairline bg-wash">
        <div className="ap-wrap">
          <Reveal className="mb-9 max-w-[44ch]">
            <p className="ap-eyebrow mb-3">Where it breaks today</p>
            <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold">{industry.pain}</h2>
          </Reveal>

          <Reveal y={18}>
            <div className="ap-card p-6 sm:p-7">
              <p className="ap-lane mb-4">What it looks like automated</p>
              <WorkflowStrip nodes={industry.workflow} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ap-sec">
        <div className="ap-wrap">
          <Reveal className="mb-9 max-w-[36ch]">
            <p className="ap-eyebrow mb-3">What we automate</p>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold">
              Built for {industry.name.toLowerCase()}.
            </h2>
          </Reveal>

          <Reveal stagger={0.05} y={16} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.automations.map((a) => (
              <div
                key={a.title}
                className="ap-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec]"
              >
                <h3 className="mb-2.5 text-[17px] font-bold">{a.title}</h3>
                <p className="text-sm text-quiet">{a.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
