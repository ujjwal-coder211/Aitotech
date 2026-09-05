import { engines } from '@/data/automation';
import Reveal from './Reveal';
import WorkflowStrip from './WorkflowStrip';

export default function EnginesSection() {
  return (
    <section className="ap-sec bg-navy text-white">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[40ch] sm:mb-14">
          <p className="ap-eyebrow mb-3.5 text-azure">What we build</p>
          <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold text-white">
            Two engines. One connected system.
          </h2>
          <p className="mt-4 max-w-[52ch] text-[17px] text-[#a9bdd8]">
            Most automation stops at chatbots. We automate the full loop — how customers reach you,
            and how the work gets done after.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {engines.map((engine, i) => (
            <Reveal key={engine.tag} delay={i * 0.1} y={24}>
              <div className="h-full rounded-[18px] border border-white/[0.13] bg-white/[0.055] p-7 sm:p-8">
                <span className="inline-flex rounded-full bg-azure/[0.16] px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-azure">
                  {engine.tag}
                </span>

                <h3 className="mb-2.5 mt-[18px] text-[25px] font-extrabold text-white">
                  {engine.title}
                </h3>
                <p className="mb-6 text-[15px] text-[#a9bdd8]">{engine.summary}</p>

                <p className="ap-lane mb-3 text-[#7f97b8]">The workflow</p>
                <WorkflowStrip nodes={[...engine.workflow]} dark className="mb-7 gap-[7px]" />

                <div className="flex flex-wrap gap-2">
                  {engine.capabilities.map((c) => (
                    <span
                      key={c}
                      className="ap-chip border-white/[0.14] bg-white/[0.06] text-[#e6eefa]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
