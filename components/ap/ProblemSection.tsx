import { problems } from '@/data/automation';
import Reveal from './Reveal';

export default function ProblemSection() {
  return (
    <section className="ap-sec border-y border-hairline bg-wash">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[34ch] sm:mb-12">
          <p className="ap-eyebrow mb-3.5">The real bottleneck</p>
          <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold">
            Your business doesn&rsquo;t have a people problem. It has a process problem.
          </h2>
        </Reveal>

        <Reveal
          stagger={0.06}
          y={16}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {problems.map((p) => (
            <div
              key={p.title}
              className="ap-card p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
            >
              <h3 className="mb-2 text-[16.5px] font-bold">{p.title}</h3>
              <p className="text-sm text-quiet">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
