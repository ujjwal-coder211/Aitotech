import Link from 'next/link';
import SectionHeading from './SectionHeading';

interface CTABannerProps {
  title: string;
  highlight: string;
  description: string;
  button: string;
  href?: string;
}

/** Reusable bottom call-to-action block. */
export default function CTABanner({
  title,
  highlight,
  description,
  button,
  href = '/contact',
}: CTABannerProps) {
  return (
    <section className="section-pad pt-0">
      <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-500/25 glass-strong p-8 text-center sm:rounded-3xl sm:p-10 md:p-14">
        <SectionHeading
          title={title}
          highlight={highlight}
          description={description}
          align="center"
        />
        <Link href={href} className="btn-primary mt-2 inline-flex">
          {button}
        </Link>
      </div>
    </section>
  );
}
