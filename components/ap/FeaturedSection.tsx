import Link from 'next/link';
import { featured } from '@/data/homepage';
import Reveal from './Reveal';

/**
 * Section 6 — what we can honestly show today: our own product and the
 * browsable industry demos. No client logos or outcome numbers until real,
 * approved ones exist.
 */
export default function FeaturedSection() {
  return (
    <section className="ap-sec border-y border-hairline bg-wash">
      <div className="ap-wrap">
        <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[42ch]">
            <p className="ap-eyebrow mb-3.5">See it working</p>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold">
              Things you can open right now.
            </h2>
            <p className="ap-lead mt-5">
              Rather than a portfolio of screenshots, here is working software you can click
              through — our own product, and the industry templates we build demos from.
            </p>
          </div>
        </Reveal>

        <Reveal stagger={0.1} y={20} className="grid gap-5 lg:grid-cols-2">
          {featured.map((item) => (
            <article
              key={item.title}
              className="ap-card flex flex-col overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_-32px_rgba(13,33,84,0.4)]"
            >
              <div
                aria-hidden
                className="relative h-[136px] border-b border-hairline bg-gradient-to-br from-[#eef6fd] via-white to-[#f3f7fc]"
              >
                <div className="absolute inset-0 flex items-center gap-2.5 px-7">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-md bg-white shadow-[0_6px_16px_-10px_rgba(13,33,84,0.45)] ring-1 ring-hairline"
                      style={{ height: `${34 + ((i * 17) % 52)}px` }}
                    />
                  ))}
                </div>
                <span className="absolute left-7 top-5 inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
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

                <Link
                  href={item.href}
                  className="ap-btn ap-btn-sec mt-auto self-start h-11 text-sm"
                >
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
