import { blueprints } from '@/data/automation';
import Reveal from './Reveal';
import WorkflowStrip from './WorkflowStrip';

export default function BlueprintsSection() {
  return (
    <section className="ap-sec">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[40ch] sm:mb-12">
          <p className="ap-eyebrow mb-3.5">Automation blueprints</p>
          <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold">
            What a workflow looks like before and after.
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {blueprints.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} y={22}>
              <div className="ap-card h-full p-7">
                <h3 className="mb-6 text-[18px] font-bold">{b.title}</h3>

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

        <Reveal className="mt-7">
          <p className="border-l-2 border-hairline pl-4 text-[13.5px] text-quiet-soft">
            Client outcomes and named case studies will be added here once live deployments are
            complete and the client approves.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
