import Link from 'next/link';
import { industryDetails } from '@/data/industries';
import Reveal from './Reveal';

/**
 * Section 5 — industries. Reads from data/industries so the homepage cards
 * and the industry pages can never drift apart, and every card is a link
 * into the page that actually covers that trade.
 */
export default function IndustriesSection() {
  return (
    <section className="ap-sec">
      <div className="ap-wrap">
        <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[42ch]">
            <p className="ap-eyebrow mb-3.5">Industries we serve</p>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold">
              Built around how your industry actually works.
            </h2>
            <p className="ap-lead mt-5">
              A clinic, a dealership and a wholesaler do not need the same website or the same
              automation. We start from your trade, not from a template.
            </p>
          </div>
          <Link
            href="/industries"
            className="text-[14.5px] font-semibold text-azure-deep transition-colors hover:text-azure"
          >
            See all industries →
          </Link>
        </Reveal>

        <Reveal stagger={0.05} y={16} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="ap-card group flex flex-col p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
            >
              <h3 className="mb-2.5 text-[17px] font-bold">{industry.name}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-quiet">{industry.headline}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure-deep">
                See what we build
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
