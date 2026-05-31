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

/**
 * Reusable page hero — used on Services, About, Contact for consistent layout.
 */
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-cyan-500/20 glass-strong p-6 sm:rounded-3xl sm:p-10 lg:p-12 mb-10 sm:mb-14',
        className
      )}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              {eyebrow}
            </span>
          )}
          {comingSoon && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
              {comingSoonLabel}
            </span>
          )}
        </div>

        <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
          {highlight && (
            <>
              {' '}
              <span className="text-gradient">{highlight}</span>
            </>
          )}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>
        {children}
      </div>
    </motion.section>
  );
}

/** Inline coming-soon callout block */
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
    <div className="glass mt-8 rounded-2xl border border-dashed border-cyan-500/30 p-6 sm:p-8 text-center sm:text-left">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">Coming Soon</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">{body}</p>
      <Link href={ctaHref} className="btn-primary mt-6 inline-flex text-sm">
        {ctaLabel}
      </Link>
    </div>
  );
}
