import Link from 'next/link';

interface CTABannerProps {
  title: string;
  highlight: string;
  description: string;
  button: string;
  href?: string;
}

/** Reusable bottom call-to-action — bold gradient panel. */
export default function CTABanner({
  title,
  highlight,
  description,
  button,
  href = '/contact',
}: CTABannerProps) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-16 text-center sm:py-20">
          {/* gradient wash */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/25 via-violet-500/10 to-sky-500/15" />
          <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] max-w-[90%] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />

          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title} <span className="text-gradient-brand">{highlight}</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-base leading-relaxed text-zinc-300">{description}</p>
          <Link href={href} className="btn-primary relative mt-8 inline-flex px-8 py-3.5 text-base">
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}
