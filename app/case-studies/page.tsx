import type { Metadata } from 'next';
import { blueprints } from '@/data/automation';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import WorkflowStrip from '@/components/ap/WorkflowStrip';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'Automation Blueprints & Case Studies',
  description:
    'Before-and-after automation blueprints: how a property enquiry becomes a booked site visit, and how an order becomes a live dashboard.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Automation blueprints"
        title={
          <>
            What a workflow looks like{' '}
            <span className="text-azure-deep">before and after.</span>
          </>
        }
        description="These are the patterns we build most often. Named client results will be published here as deployments go live and clients approve them — we would rather show you the mechanism than a number you cannot verify."
      />

      <section className="ap-sec pt-4">
        <div className="ap-wrap">
          <div className="grid gap-5 lg:grid-cols-2">
            {blueprints.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} y={22}>
                <div className="ap-card h-full p-7">
                  <h2 className="mb-6 text-[18px] font-bold">{b.title}</h2>

                  <p className="ap-lane mb-3">Before</p>
                  <div className="ap-flow mb-6 opacity-70">
                    {b.before.map((label, n) => (
                      <span key={label} className="contents">
                        {n > 0 && (
                          <svg width="15" height="10" viewBox="0 0 15 10" fill="none" aria-hidden>
                            <path
                              d="M0 5h12M9 1.5 12.5 5 9 8.5"
                              stroke="#cfd9e6"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        <span className="ap-node bg-[#fbfcfe] text-quiet">{label}</span>
                      </span>
                    ))}
                  </div>

                  <p className="ap-lane mb-3">After</p>
                  <WorkflowStrip nodes={[...b.after]} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="ap-card p-7">
              <h2 className="mb-3 text-[19px] font-bold">Want the blueprint for your business?</h2>
              <p className="text-[15px] text-quiet">
                The free audit produces one: your current workflow mapped, the steps worth
                automating marked, and what it would take to build.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
