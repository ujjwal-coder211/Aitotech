'use client';

import { usePathname } from 'next/navigation';
import WhatsAppLink from '@/components/WhatsAppLink';

/**
 * Site-wide floating WhatsApp button. The number is never rendered — WhatsAppLink
 * assembles it only on click (anti-scrape). Hidden on the admin area.
 */
export default function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;

  return (
    <WhatsAppLink
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
      label="Chat with AitoTech on WhatsApp"
      message="Hi AitoTech! I have a project enquiry."
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor" aria-hidden>
        <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.593 4.462 1.72 6.404L3.2 28.8l6.57-1.72a12.74 12.74 0 006.233 1.61h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.052A12.716 12.716 0 0016.003 3.2zm0 23.36h-.004a10.56 10.56 0 01-5.383-1.474l-.386-.229-3.9 1.022 1.04-3.803-.251-.39a10.56 10.56 0 01-1.62-5.646c0-5.866 4.774-10.64 10.647-10.64 2.843 0 5.514 1.108 7.523 3.12a10.57 10.57 0 013.116 7.527c0 5.867-4.774 10.641-10.646 10.641zm5.84-7.968c-.32-.16-1.893-.934-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.573-1.588-.951-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.492.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.735-.986-2.375-.26-.624-.524-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.669 0 1.574 1.146 3.095 1.306 3.308.16.213 2.253 3.44 5.46 4.824.763.33 1.358.527 1.822.674.766.244 1.463.21 2.014.127.614-.092 1.893-.774 2.16-1.521.267-.747.267-1.387.187-1.52-.08-.134-.293-.214-.613-.374z" />
      </svg>
    </WhatsAppLink>
  );
}
