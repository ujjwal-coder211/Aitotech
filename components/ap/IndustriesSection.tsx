import Link from 'next/link';
import { industries } from '@/data/automation';
import CardGrid from './CardGrid';
import Reveal from './Reveal';

export default function IndustriesSection() {
  return (
    <section className="ap-sec">
      <div className="ap-wrap">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-12">
          <div className="max-w-[36ch]">
            <p className="ap-eyebrow mb-3.5">Industries</p>
            <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold">
              Built around how your industry actually works.
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-[14.5px] font-semibold text-azure-deep hover:text-azure"
          >
            See all industries →
          </Link>
        </Reveal>

        <CardGrid items={industries} />
      </div>
    </section>
  );
}
