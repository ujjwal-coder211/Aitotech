import { growthPillars } from '@/data/homepage';
import Reveal from './Reveal';

/**
 * Section 4 — the mechanism: four stages, in order, from a stranger finding
 * you to the business absorbing more volume. Dark panel so it reads as the
 * structural centre of the page rather than another card grid.
 */
export default function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 20% -10%, rgba(46,163,232,0.20), transparent 68%)',
        }}
      />

      <div className="ap-wrap relative py-16 sm:py-20 lg:py-[92px]">
        <Reveal className="mb-12 max-w-[48ch] sm:mb-14">
          <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.16em] text-azure">
            How we help you grow
          </p>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold text-white">
            Four stages, one connected system.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-[#a9bdd8]">
            Most agencies hand you one piece and leave the gaps to you. We build the whole path —
            from someone finding you, to them becoming a customer, to the work getting done.
          </p>
        </Reveal>

        <Reveal stagger={0.08} y={18} className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {growthPillars.map((pillar, i) => (
            <div key={pillar.stage} className="bg-navy-deep p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-azure/15 font-heading text-[13px] font-bold text-azure">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-azure">
                  {pillar.stage}
                </span>
              </div>

              <h3 className="mb-3 text-[19px] font-bold leading-snug text-white">{pillar.title}</h3>
              <p className="mb-6 text-[14.5px] leading-relaxed text-[#a9bdd8]">{pillar.body}</p>

              <ul className="grid gap-2.5 border-t border-white/10 pt-5">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[13.5px] text-[#c2d0e4]">
                    <span className="mt-[9px] h-0.5 w-3 flex-none bg-azure" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
