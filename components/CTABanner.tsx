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
    <section className="section-pad border-t border-white/[0.06]">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          title={title}
          highlight={highlight}
          description={description}
          align="center"
        />
        <Link href={href} className="btn-primary inline-flex">
          {button}
        </Link>
      </div>
    </section>
  );
}
