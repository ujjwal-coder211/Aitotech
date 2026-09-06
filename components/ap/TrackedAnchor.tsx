'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { track, type AnalyticsEvent } from '@/lib/analytics';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: AnalyticsEvent;
  children: ReactNode;
};

/** Plain anchor (tel:, mailto:) that reports the click before navigating. */
export default function TrackedAnchor({ event, children, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
