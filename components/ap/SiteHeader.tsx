'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { trackCta } from '@/lib/analytics';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
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

  // Close the mobile menu when navigation actually changes the route.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? 'border-b border-hairline shadow-[0_1px_0_rgba(13,33,84,0.04)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="ap-wrap flex h-[78px] items-center gap-8">
        <Link href="/" className="mr-auto flex items-center gap-2.5" aria-label="AitoTech home">
          <Image
            src="/images/logo-mark-v2.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-heading text-[20px] font-extrabold tracking-tight text-ink">
            AitoTech
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative text-[15px] transition-colors duration-200 ${
                isActive(item.href)
                  ? 'font-semibold text-ink'
                  : 'text-quiet hover:text-ink'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-[6px] left-0 h-0.5 w-full rounded-full bg-azure" />
              )}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={() => trackCta('Get Started', 'header')}
          className="ap-btn ap-btn-pri hidden h-[44px] px-5 text-[14.5px] lg:inline-flex"
        >
          Get Started
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
          <nav aria-label="Main" className="ap-wrap flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`border-b border-hairline py-4 text-[16px] last:border-0 ${
                  isActive(item.href) ? 'font-semibold text-azure-deep' : 'font-medium text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => trackCta('Get Started', 'mobile_menu')}
              className="ap-btn ap-btn-pri mt-4 w-full"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
