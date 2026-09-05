import type { Metadata } from 'next';
import Image from 'next/image';
import { dataPrinciples, stack } from '@/data/automation';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'About AitoTech',
  description:
    'AitoTech is a founder-led automation studio in Delhi. We build customer and operations automation for small and growing businesses — and our own products alongside.',
  alternates: { canonical: '/about' },
};

const letter = [
  'I started AitoTech in Delhi with one goal: give small and growing businesses the kind of software and automation that usually only large companies can afford.',
  'We are small and engineering-first, and we build our own products too. Building them keeps us honest — every client project gets the same discipline we apply to our own.',
  'No slide decks, no outsourcing chains. You talk to the people who build your system, and every engagement starts with a working demo of your own workflow, so you see exactly what you are getting before you commit.',
];

const pillars = [
  {
    title: 'Mission',
    body: 'Make automation accessible, measurable and human-centred for businesses of any size.',
  },
  {
    title: 'Vision',
    body: 'Teams that operate at the speed of insight instead of manual labour.',
  },
  {
    title: 'Values',
    body: 'Transparency, security, and outcomes over vanity metrics.',
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="About"
        title={
          <>
            A small studio that ships,{' '}
            <span className="text-azure-deep">and answers the phone.</span>
          </>
        }
        description="AitoTech was founded on a simple belief: software should remove friction, not add complexity."
      />

      <section className="ap-sec pt-4">
        <div className="ap-wrap">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-14">
            <Reveal y={20}>
              <div className="overflow-hidden rounded-2xl border border-hairline">
                <Image
                  src="/images/founder.jpg"
                  alt="Ujjwal — Founder and CEO, AitoTech"
                  width={640}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-quiet-soft">
                Ujjwal · Founder &amp; CEO · Delhi, India
              </p>
            </Reveal>

            <Reveal stagger={0.08} y={18}>
              <h2 className="mb-6 text-[clamp(22px,2.8vw,32px)] font-extrabold">
                A note from the founder
              </h2>
              {letter.map((para) => (
                <p key={para} className="mb-4 max-w-[58ch] text-[15px] leading-[1.75] text-quiet">
                  {para}
                </p>
              ))}
              <p className="mt-5 text-sm font-semibold text-azure-deep">— Ujjwal, Founder &amp; CEO</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ap-sec border-y border-hairline bg-wash">
        <div className="ap-wrap">
          <Reveal stagger={0.07} y={16} className="grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="mb-2.5 text-[19px] font-bold">{p.title}</h3>
                <p className="text-sm text-quiet">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="ap-sec">
        <div className="ap-wrap">
          <Reveal stagger={0.08} y={18} className="grid gap-11 lg:grid-cols-2">
            <div>
              <p className="ap-eyebrow mb-3.5">Built on</p>
              <h2 className="mb-5 text-[23px] font-extrabold">
                Production-grade tools, not experiments.
              </h2>
              <div className="flex flex-wrap gap-2">
                {stack.map((tool) => (
                  <span key={tool} className="ap-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="ap-eyebrow mb-3.5">How we handle your data</p>
              <h2 className="mb-5 text-[23px] font-extrabold">Your systems stay yours.</h2>
              <ul className="grid gap-3">
                {dataPrinciples.map((line) => (
                  <li key={line} className="flex gap-3 text-[14.5px] text-quiet">
                    <span className="mt-[11px] h-0.5 w-3.5 flex-none bg-azure" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
