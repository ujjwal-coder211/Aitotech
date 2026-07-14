'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  comingSoon?: boolean;
  comingSoonLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  comingSoon = false,
  comingSoonLabel = 'Coming Soon',
  className,
  children,
}: PageHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn('relative mb-10 sm:mb-14', className)}
    >
      {/* soft glow behind inner-page heroes */}
      <div className="pointer-events-none absolute -top-20 left-0 h-64 w-[36rem] max-w-full rounded-full bg-[radial-gradient(ellipse_at_left,rgba(94,106,210,0.14),transparent_70%)] blur-2xl" aria-hidden />

      <div className="relative max-w-3xl">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {eyebrow && (
            <span className="badge-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
              {eyebrow}
            </span>
          )}
          {comingSoon && (
            <span className="inline-flex items-center rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
              {comingSoonLabel}
            </span>
          )}
        </div>

        <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
          {highlight && (
            <>
              {' '}
              <span className="text-gradient-brand">{highlight}</span>
            </>
          )}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>
        {children}
      </div>
    </motion.section>
  );
}

export function ComingSoonBlock({
  title,
  body,
  ctaHref = '/contact',
  ctaLabel = 'Contact Us',
}: {
  title: string;
  body: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="card mt-10 border-dashed p-6 text-center sm:mt-12 sm:p-8 sm:text-left">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">In progress</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">{body}</p>
      <Link href={ctaHref} className="btn-primary mt-6 inline-flex text-sm">
        {ctaLabel}
      </Link>
    </div>
  );
}
