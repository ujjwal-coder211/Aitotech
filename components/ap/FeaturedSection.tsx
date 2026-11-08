import Link from 'next/link';
import { featured } from '@/data/homepage';
import Reveal from './Reveal';

/**
 * Section 6 — what we can honestly show today: our own product and the
 * browsable industry demos. No client logos or outcome numbers until real,
 * approved ones exist.
 *
 * Each card carries its own visual rather than a shared abstract graphic,
 * because a chat assistant and a set of site templates do not look alike.
 */

/** SalesConnect: an enquiry answered and approved before it is sent. */
function ChatVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 px-7" aria-hidden>
      <span className="w-fit max-w-[62%] rounded-[12px_12px_12px_4px] border border-hairline bg-white px-3 py-2 text-[11.5px] leading-snug text-ink shadow-[0_4px_14px_-10px_rgba(13,33,84,0.5)]">
        Do you deliver to Dwarka?
      </span>
      <span className="ml-auto w-fit max-w-[66%] rounded-[12px_12px_4px_12px] bg-azure-deep px-3 py-2 text-[11.5px] leading-snug text-white shadow-[0_6px_18px_-10px_rgba(30,115,196,0.9)]">
        Yes — same day before 6 PM. Shall I book it?
      </span>
      <span className="mt-1 flex w-fit items-center gap-1.5 rounded-full border border-ok/40 bg-ok-wash px-2.5 py-1 text-[10.5px] font-semibold text-[#127d3a]">
        <span className="h-1.5 w-1.5 rounded-full bg-ok" />
        Approved by you, then sent
      </span>
    </div>
  );
}

/** Demo templates: a row of browser windows you can actually open. */
function TemplatesVisual() {
  return (
    <div className="flex h-full items-center gap-3 px-7" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex-1 overflow-hidden rounded-lg border border-hairline bg-white shadow-[0_8px_22px_-14px_rgba(13,33,84,0.5)]"
          style={{ transform: `translateY(${[6, -4, 2, -6][i]}px)` }}
        >
          <div className="flex gap-1 border-b border-hairline bg-wash px-2 py-1.5">
            <span className="h-1 w-1 rounded-full bg-[#cfdcec]" />
            <span className="h-1 w-1 rounded-full bg-[#cfdcec]" />
          </div>
          <div className="space-y-1.5 p-2.5">
            <span className="block h-4 w-full rounded bg-azure-wash" />
            <span className="block h-1 w-3/4 rounded-full bg-[#e8eef6]" />
            <span className="block h-1 w-1/2 rounded-full bg-[#eef3f9]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FeaturedSection() {
  return (
    <section className="ap-sec border-y border-hairline bg-wash">
      <div className="ap-wrap">
        <Reveal className="mb-11 max-w-[42ch]">
          <p className="ap-eyebrow mb-3.5">See it working</p>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold">
            Things you can open right now.
          </h2>
          <p className="ap-lead mt-5">
            Rather than a portfolio of screenshots, here is working software you can click
            through — our own product, and the industry templates we build demos from.
          </p>
        </Reveal>

        <Reveal stagger={0.1} y={20} className="grid gap-5 lg:grid-cols-2">
          {featured.map((item) => (
            <article
              key={item.title}
              className="ap-card flex flex-col overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_-32px_rgba(13,33,84,0.4)]"
            >
              <div className="relative h-[152px] border-b border-hairline bg-gradient-to-br from-[#eef6fd] via-white to-[#f3f7fc]">
                {item.visual === 'chat' ? <ChatVisual /> : <TemplatesVisual />}
                <span className="absolute left-7 top-4 inline-flex items-center rounded-full bg-navy px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                  {item.kind}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="mb-3 text-[22px] font-extrabold">{item.title}</h3>
                <p className="mb-6 text-[15px] leading-relaxed text-quiet">{item.body}</p>

                <ul className="mb-7 grid gap-2.5 border-t border-hairline pt-6">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[14px] text-quiet">
                      <span className="mt-[10px] h-0.5 w-3.5 flex-none bg-azure" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link href={item.href} className="ap-btn ap-btn-sec mt-auto h-11 self-start text-sm">
                  {item.linkLabel}
                </Link>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
