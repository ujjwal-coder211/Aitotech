import { departments } from '@/data/automation';
import CardGrid from './CardGrid';
import Reveal from './Reveal';

export default function AutomateSection() {
  return (
    <section className="ap-sec border-y border-hairline bg-wash">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[42ch] sm:mb-12">
          <p className="ap-eyebrow mb-3.5">Coverage</p>
          <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold">What can we automate?</h2>
          <p className="ap-lead mt-4">
            If it is repeatable, rule-based, or currently living in someone&rsquo;s head — it is a
            candidate.
          </p>
        </Reveal>

        <CardGrid items={departments} className="lg:grid-cols-4" />
      </div>
    </section>
  );
}
