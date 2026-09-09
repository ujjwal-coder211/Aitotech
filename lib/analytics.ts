'use client';

import { track as vercelTrack } from '@vercel/analytics';

/**
 * Conversion events we care about. Keeping them in one union means a typo
 * shows up at build time instead of quietly producing an unreportable event.
 */
export type AnalyticsEvent =
  | 'cta_click'
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'lead_submit'
  | 'lead_submit_failed'
  | 'roi_calculated';

type Props = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

/**
 * Fans a conversion event out to whichever analytics are configured.
 *
 * - Vercel Web Analytics always receives it (cookieless). Custom events are
 *   only reported on paid Vercel plans; on Hobby the call is simply ignored.
 * - Google Analytics receives it only when NEXT_PUBLIC_GA_ID is set.
 *
 * With nothing configured this is a no-op, so instrumenting a component
 * never risks breaking it.
 */
export function track(event: AnalyticsEvent, props?: Props) {
  if (typeof window === 'undefined') return;

  try {
    vercelTrack(event, props);
  } catch {
    // Analytics must never break a user action.
  }

  try {
    window.gtag?.('event', event, props ?? {});
  } catch {
    /* same */
  }
}

/** Convenience wrapper for CTA buttons, so the label is always recorded. */
export function trackCta(label: string, location: string) {
  track('cta_click', { label, location });
}
