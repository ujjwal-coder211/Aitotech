import { processSteps } from '@/data/automation';
import Reveal from './Reveal';

export default function ProcessSection() {
  return (
    <section className="ap-sec border-y border-hairline bg-wash">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[36ch] sm:mb-12">
          <p className="ap-eyebrow mb-3.5">How it works</p>
          <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold">
            From first conversation to a system that runs itself.
          </h2>
        </Reveal>

        <Reveal
          stagger={0.06}
          y={16}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {processSteps.map((s) => (
            <div key={s.step}>
              <div
                className="mb-4 h-0.5"
                style={{
                  background:
                    'linear-gradient(to right, #2ea3e8 0 28px, #e3e9f1 28px 100%)',
                }}
              />
              <p className="mb-2 font-heading text-xs font-bold text-azure-deep">{s.step}</p>
              <h3 className="mb-2 text-[17.5px] font-bold">{s.title}</h3>
              <p className="text-[13.5px] text-quiet">{s.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
