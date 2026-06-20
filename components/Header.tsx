'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import FounderAvatar from '@/components/FounderAvatar';
import { navLinks, site, cta } from '@/data/siteContent';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname.startsWith('/admin')) return null;

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-surface/90 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="container-page flex h-14 items-center justify-between gap-3 sm:h-16 lg:h-[4.25rem]">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white shadow-sm transition-transform group-hover:scale-[1.02] sm:h-10 sm:w-10 sm:text-sm">
            AT
          </span>
          <span className="truncate font-display text-lg font-bold tracking-tight text-white sm:text-xl">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors xl:px-4',
                  isActive(href)
                    ? 'bg-brand-soft text-brand-light'
                    : 'text-zinc-400 hover:bg-surface-hover hover:text-white'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <FounderAvatar size="sm" linked />
          <Link href="/contact" className="btn-primary shrink-0 text-sm">
            {cta.primary}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-zinc-400 hover:bg-surface-hover hover:text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-line bg-surface-raised lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4 pb-6">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium',
                      isActive(href) ? 'bg-brand-soft text-brand-light' : 'text-zinc-300 hover:bg-surface-hover'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 flex items-center gap-3">
                <FounderAvatar size="md" linked showName />
              </li>
              <li className="pt-3">
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary flex w-full justify-center text-sm">
                  {cta.primary}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
