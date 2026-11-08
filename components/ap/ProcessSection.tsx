import { processSteps } from '@/data/homepage';
import Reveal from './Reveal';

export default function ProcessSection() {
  return (
    <section className="ap-sec border-y border-hairline bg-wash">
      <div className="ap-wrap">
        <Reveal className="mb-11 max-w-[44ch] sm:mb-12">
          <p className="ap-eyebrow mb-3.5">Our working process</p>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold">
            You always know what is happening next.
          </h2>
          <p className="ap-lead mt-5">
            Six steps, the same every time — no surprise invoices, no silent weeks, and nothing
            built before you have approved it.
          </p>
        </Reveal>

        <Reveal
          stagger={0.06}
          y={16}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {processSteps.map((s) => (
            <div key={s.step}>
              <div
                className="mb-4 h-0.5"
                style={{ background: 'linear-gradient(to right, #2ea3e8 0 28px, #e3e9f1 28px 100%)' }}
              />
              <p className="mb-2 font-heading text-xs font-bold text-azure-deep">{s.step}</p>
              <h3 className="mb-2 text-[17.5px] font-bold">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-quiet">{s.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
