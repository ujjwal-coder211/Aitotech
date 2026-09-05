import Reveal from './Reveal';

interface Item {
  readonly title: string;
  readonly body: string;
}

interface CardGridProps {
  items: readonly Item[];
  /** Tailwind grid-column classes for the largest breakpoint. */
  className?: string;
}

/** The card pattern shared by the department, industry and reasons grids. */
export default function CardGrid({ items, className }: CardGridProps) {
  return (
    <Reveal
      stagger={0.05}
      y={16}
      className={`grid gap-4 sm:grid-cols-2 ${className ?? 'lg:grid-cols-3'}`}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="ap-card p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#cfdcec] hover:shadow-[0_18px_40px_-28px_rgba(13,33,84,0.35)]"
        >
          <h3 className="mb-2.5 text-[17px] font-bold">{item.title}</h3>
          <p className="text-sm text-quiet">{item.body}</p>
        </div>
      ))}
    </Reveal>
  );
}
