import { scenarios } from '@/data/automation';
import Reveal from './Reveal';

export default function ScenariosSection() {
  return (
    <section className="ap-sec">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[36ch] sm:mb-12">
          <p className="ap-eyebrow mb-3.5">In practice</p>
          <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold">
            Imagine your business running like this.
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {scenarios.map((s, i) => (
            <Reveal key={s.when} delay={i * 0.08} y={22}>
              <div className="ap-card h-full p-7">
                <p className="mb-3.5 text-[12.5px] font-bold text-azure-deep">{s.when}</p>
                <h3 className="mb-5 text-[19px] font-bold">{s.title}</h3>
                <ol className="grid gap-2.5">
                  {s.steps.map((step, n) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-[22px] w-[22px] flex-none items-center justify-center rounded-md bg-azure-wash text-[11px] font-bold text-azure-deep">
                        {n + 1}
                      </span>
                      <span className="text-sm text-quiet">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
