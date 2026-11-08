import { whyAitotech, dataPrinciples, stack } from '@/data/homepage';
import Reveal from './Reveal';

/**
 * Section 7 — why pick us. The trust band underneath carries the only claims
 * we can actually stand behind: the tools we build on and how we treat data.
 */
export default function WhySection() {
  return (
    <section className="ap-sec">
      <div className="ap-wrap">
        <Reveal className="mb-11 max-w-[44ch]">
          <p className="ap-eyebrow mb-3.5">Why AitoTech</p>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold">
            A studio small enough to care, built to work like an enterprise team.
          </h2>
        </Reveal>

        <Reveal stagger={0.05} y={16} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyAitotech.map((item) => (
            <div
              key={item.title}
              className="ap-card p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
            >
              <h3 className="mb-2.5 text-[17px] font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-quiet">{item.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal
          stagger={0.08}
          y={16}
          className="mt-14 grid gap-10 border-t border-hairline pt-12 lg:grid-cols-2"
        >
          <div>
            <p className="ap-eyebrow mb-3.5">Built on</p>
            <h3 className="mb-5 text-[21px] font-extrabold">
              Production-grade tools, not experiments.
            </h3>
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
            <h3 className="mb-5 text-[21px] font-extrabold">Your systems stay yours.</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {dataPrinciples.map((line) => (
                <li key={line} className="flex gap-3 text-[14px] text-quiet">
                  <span className="mt-[10px] h-0.5 w-3.5 flex-none bg-azure" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
