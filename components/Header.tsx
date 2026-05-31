'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, site, cta } from '@/data/siteContent';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/10">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-transform group-hover:scale-105 sm:h-10 sm:w-10 sm:text-sm">
            AI
          </span>
          <span className="truncate font-display text-lg font-bold text-white sm:text-xl">
            {site.name}
            <span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop nav — lg and up */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors xl:px-4',
                  isActive(href)
                    ? 'bg-cyan-500/10 text-cyan-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-cyan-400'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn-primary hidden shrink-0 text-sm lg:inline-flex">
          {cta.primary}
        </Link>

        {/* Hamburger — below lg */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-300 hover:bg-white/5 hover:text-cyan-400 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-cyan-500/10 glass-strong lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4 pb-6">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium',
                      isActive(href) ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-white/5 hover:text-cyan-400'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
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
