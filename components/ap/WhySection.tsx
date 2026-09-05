import { whyPoints } from '@/data/automation';
import CardGrid from './CardGrid';
import Reveal from './Reveal';

export default function WhySection() {
  return (
    <section className="ap-sec border-y border-hairline bg-wash">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[34ch] sm:mb-12">
          <p className="ap-eyebrow mb-3.5">Why AitoTech</p>
          <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold">
            Automation built around your business, not a template.
          </h2>
        </Reveal>

        <CardGrid items={whyPoints} />
      </div>
    </section>
  );
}
