import { problems } from '@/data/homepage';
import Reveal from './Reveal';

export default function ProblemSection() {
  return (
    <section className="ap-sec border-y border-hairline bg-wash">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[44ch] sm:mb-12">
          <p className="ap-eyebrow mb-3.5">Problems we solve</p>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold">
            Growth rarely stops for lack of effort. It stops here.
          </h2>
          <p className="ap-lead mt-5">
            If two or three of these sound like your week, the fix is not working harder — it is
            putting the right system behind the work.
          </p>
        </Reveal>

        <Reveal stagger={0.05} y={16} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="ap-card p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
            >
              <h3 className="mb-2 text-[16.5px] font-bold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-quiet">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
