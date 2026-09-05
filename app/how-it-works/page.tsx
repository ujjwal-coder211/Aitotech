import type { Metadata } from 'next';
import { processSteps } from '@/data/automation';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Discover, identify, design, build, launch, optimize — how an AitoTech automation project runs, from the free audit to a system that keeps improving.',
  alternates: { canonical: '/how-it-works' },
};

const expectations = [
  {
    title: 'You talk to the builder',
    body: 'No account managers relaying messages. The person on your first call designs the system.',
  },
  {
    title: 'Your tools stay your tools',
    body: 'We automate around WhatsApp, your CRM, your sheets and your billing — not a platform you have to move into.',
  },
  {
    title: 'A human stays in the loop',
    body: 'Anything sensitive waits for approval. Automation drafts and routes; people decide.',
  },
  {
    title: 'You see it before you commit',
    body: 'Every engagement starts with a working demo of your own workflow.',
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="How it works"
        title={
          <>
            From first conversation to{' '}
            <span className="text-azure-deep">a system that runs itself.</span>
          </>
        }
        description="Fixed phases, plain language, and a clear decision point before anything is built."
      />

      <section className="ap-sec pt-4">
        <div className="ap-wrap">
          <Reveal stagger={0.07} y={18} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s) => (
              <div key={s.step} className="ap-card p-7">
                <div
                  className="mb-5 h-0.5"
                  style={{ background: 'linear-gradient(to right, #2ea3e8 0 28px, #e3e9f1 28px 100%)' }}
                />
                <p className="mb-2 font-heading text-xs font-bold text-azure-deep">{s.step}</p>
                <h2 className="mb-2.5 text-[19px] font-bold">{s.title}</h2>
                <p className="text-sm text-quiet">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="ap-sec border-y border-hairline bg-wash">
        <div className="ap-wrap">
          <Reveal className="mb-9 max-w-[34ch]">
            <p className="ap-eyebrow mb-3">What to expect</p>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold">
              How we work, in practice.
            </h2>
          </Reveal>

          <Reveal stagger={0.06} y={16} className="grid gap-4 sm:grid-cols-2">
            {expectations.map((e) => (
              <div key={e.title} className="ap-card p-6">
                <h3 className="mb-2.5 text-[17px] font-bold">{e.title}</h3>
                <p className="text-sm text-quiet">{e.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
