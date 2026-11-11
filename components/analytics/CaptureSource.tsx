'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';

/**
 * Remember where this visitor came from, on arrival.
 *
 * It has to happen on the first page they land on, not when they open the
 * contact form. document.referrer belongs to the current document, so by the
 * time somebody has clicked through to /contact it reads as aitotech.in —
 * and the Instagram link that actually brought them is gone.
 *
 * Renders nothing, sets nothing on the server, and stores only in
 * sessionStorage: no cookie, no consent banner, nothing that outlives the
 * visit or follows anybody to another site.
 */
export default function CaptureSource() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
