'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'border-b border-hairline shadow-[0_1px_0_rgba(13,33,84,0.04)]' : 'border-b border-transparent'
      }`}
    >
      <div className="ap-wrap flex h-[74px] items-center gap-7">
        <Link href="/" className="mr-auto flex items-center gap-2.5">
          <Image
            src="/images/logo-mark-v2.png"
            alt="AitoTech"
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain"
            priority
          />
          <span className="font-heading text-[19px] font-extrabold text-ink">AitoTech</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14.5px] text-quiet transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="ap-btn ap-btn-pri hidden h-[42px] px-[18px] text-sm lg:inline-flex">
          Book Free Audit
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-hairline lg:hidden"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
            {open ? (
              <path d="M1 1l16 12M17 1L1 13" stroke="#0b1729" strokeWidth="1.7" strokeLinecap="round" />
            ) : (
              <path d="M0 1h18M0 7h18M0 13h18" stroke="#0b1729" strokeWidth="1.7" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-white lg:hidden">
          <nav className="ap-wrap flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-3.5 text-[15px] font-medium text-ink last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="ap-btn ap-btn-pri mt-4 w-full"
            >
              Book Free Audit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
