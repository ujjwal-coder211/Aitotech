import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface PageIntroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}

/** The opening block every inner marketing page starts with. */
export default function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="bg-gradient-to-b from-[#fbfdff] to-white pb-12 pt-14 sm:pb-16 sm:pt-20">
      <div className="ap-wrap">
        <Reveal stagger={0.08}>
          <div className="mb-5 flex items-center gap-2.5">
            <span className="block h-0.5 w-[34px] bg-azure" />
            <span className="ap-eyebrow">{eyebrow}</span>
          </div>
          <h1 className="max-w-[24ch] text-[clamp(32px,4.6vw,54px)] font-extrabold text-balance">
            {title}
          </h1>
          {description && <p className="ap-lead mt-5 max-w-[54ch]">{description}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
