'use client';

import type { ReactNode } from 'react';

/**
 * Anti-spam WhatsApp link: the number never appears in server-rendered HTML
 * or as a plain string — it is assembled from parts only when the user
 * clicks, so scrapers harvesting mailto:/tel:/wa.me links don't pick it up.
 */
const NUMBER_PARTS = ['91', '9354', '4590', '46'];

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
