'use client';

import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { trackCta } from '@/lib/analytics';

type TrackedLinkProps = ComponentProps<typeof Link> & {
  /** Human-readable button label, e.g. "Book Free Automation Audit". */
  event: string;
  /** Where on the site it was clicked, e.g. "hero" or "final_cta". */
  location: string;
  children: ReactNode;
};

/**
 * A Link that reports a conversion click. Lets server-rendered sections keep
 * their CTAs instrumented without turning the whole section into a client
 * component.
 */
export default function TrackedLink({
  event,
  location,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackCta(event, location);
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
