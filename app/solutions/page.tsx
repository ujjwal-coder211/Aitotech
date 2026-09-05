import type { Metadata } from 'next';
import Link from 'next/link';
import { engines } from '@/data/automation';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import WorkflowStrip from '@/components/ap/WorkflowStrip';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'Solutions — Customer & Operations Automation',
  description:
    'Two automation engines: customer and growth (WhatsApp, AI qualification, voice calls, follow-ups, CRM) and internal operations (tasks, approvals, inventory, reports, dashboards).',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Solutions"
        title={
          <>
            Two engines that cover{' '}
            <span className="text-azure-deep">the whole business.</span>
          </>
        }
        description="Most automation stops at a chatbot. We automate how customers reach you and how the work gets done afterwards — as one connected system."
      />

      {engines.map((engine, i) => (
        <section
          key={engine.tag}
          className={`ap-sec ${i % 2 === 1 ? 'border-y border-hairline bg-wash' : ''}`}
        >
          <div className="ap-wrap">
            <Reveal className="mb-9 max-w-[46ch]">
              <p className="ap-eyebrow mb-3">{engine.tag}</p>
              <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold">{engine.title}</h2>
              <p className="ap-lead mt-4">{engine.summary}</p>
            </Reveal>

            <Reveal y={18} className="mb-10">
              <div className="ap-card p-6 sm:p-7">
                <p className="ap-lane mb-4">The workflow</p>
                <WorkflowStrip nodes={[...engine.workflow]} />
              </div>
            </Reveal>

            <Reveal stagger={0.04} y={14} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {engine.capabilities.map((c) => (
                <div
                  key={c}
                  className="ap-card flex items-center gap-3 px-5 py-4 transition-colors duration-300 hover:border-[#cfdcec]"
                >
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-azure" />
                  <span className="text-[15px] font-medium">{c}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="ap-sec">
        <div className="ap-wrap">
          <Reveal className="ap-card p-8 sm:p-10">
            <h2 className="mb-3 text-[clamp(22px,2.6vw,30px)] font-extrabold">
              Not sure which half you need?
            </h2>
            <p className="ap-lead mb-7 max-w-[52ch]">
              Most businesses start with whichever one is losing them the most time. The audit tells
              you which that is.
            </p>
            <Link href="/contact" className="ap-btn ap-btn-pri">
              Book Free Automation Audit
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
