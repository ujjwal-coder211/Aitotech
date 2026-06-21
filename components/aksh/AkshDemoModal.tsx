'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import AkshStudioDemo from './AkshStudioDemo';

export default function AkshDemoModal({
  open,
  initialPrompt,
  onClose,
}: {
  open: boolean;
  initialPrompt: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close demo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="aksh-demo-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-3 top-[4.5rem] z-[101] mx-auto flex max-h-[calc(100vh-6rem)] max-w-6xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#030712] shadow-2xl shadow-violet-950/50 sm:inset-x-6 lg:top-16"
          >
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-zinc-800 px-4 py-3 sm:px-5">
              <div>
                <p id="aksh-demo-title" className="font-display text-lg font-bold text-white sm:text-xl">
                  Aksh Studio — product demo
                </p>
                <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
                  Interactive preview for investors and experts. Run the 90s vision tour or chat with Omni.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Link
                  href="/aksh/demo?tour=1"
                  className="hidden rounded-lg border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white sm:inline-flex"
                >
                  Vision tour
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-auto p-3 sm:p-4">
              <AkshStudioDemo key={initialPrompt || 'default'} initialPrompt={initialPrompt} compact showPitchControls={false} />
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-zinc-800 bg-[#050508]/90 px-4 py-3 sm:px-5">
              <p className="text-[11px] text-zinc-500 sm:text-xs">
                Share{' '}
                <Link href="/aksh/demo?tour=1" className="text-violet-300 hover:underline">
                  aitotech.in/aksh/demo?tour=1
                </Link>{' '}
                for pitch-ready guided demo.
              </p>
              <Link
                href="#waitlist"
                onClick={onClose}
                className="inline-flex rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-500 sm:text-sm"
              >
                Join waitlist
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
