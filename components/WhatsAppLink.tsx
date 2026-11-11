'use client';

import type { ReactNode } from 'react';
import { track } from '@/lib/analytics';
import { readAttribution } from '@/lib/attribution';

/**
 * Anti-spam WhatsApp link: the number never appears in server-rendered HTML
 * or as a plain string — it is assembled from parts only when the user
 * clicks, so scrapers harvesting mailto:/tel:/wa.me links don't pick it up.
 */
const NUMBER_PARTS = ['91', '7678', '3220', '20'];

type Props = {
  className?: string;
  children: ReactNode;
  message?: string;
  label?: string;
};

export default function WhatsAppLink({
  className,
  children,
  message = 'Hi AitoTech! I have a project enquiry.',
  label = 'Chat on WhatsApp',
}: Props) {
  const openChat = () => {
    track('whatsapp_click', { label });

    // Tell the business OS somebody came through from here, and from where.
    // Deliberately NOT a code in the prefilled message: that would be certain
    // attribution the customer has to look at, and a customer should not have
    // to read our bookkeeping. keepalive, because the tab is about to lose
    // focus to WhatsApp and a normal fetch would be cancelled.
    try {
      const body = JSON.stringify({ ...readAttribution(), label });
      fetch('/api/whatsapp-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* never let bookkeeping stand between a customer and WhatsApp */
    }

    const number = NUMBER_PARTS.join('');
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button type="button" onClick={openChat} className={className} aria-label={label} title={label}>
      {children}
    </button>
  );
}
