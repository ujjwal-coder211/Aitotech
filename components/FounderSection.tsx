'use client';

import { motion } from 'framer-motion';
import FounderAvatar from '@/components/FounderAvatar';
import { aboutPage, site } from '@/data/siteContent';

export default function FounderSection() {
  const { founder } = aboutPage;

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto w-full max-w-sm lg:col-span-2 lg:max-w-none"
      >
        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
          <div className="flex flex-col items-center text-center">
            <FounderAvatar size="lg" linked={false} />
            <p className="mt-4 font-display text-lg font-semibold text-white">{site.founder.name}</p>
            <p className="text-sm text-zinc-400">{founder.role}</p>
            <p className="text-sm text-zinc-500">{founder.company}</p>
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] px-3.5 py-2 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
        <div className="absolute -bottom-3 right-4 rounded-lg border border-line bg-surface-raised px-3 py-2 text-xs text-zinc-400 shadow-card sm:-bottom-4 sm:right-0 sm:px-4 sm:py-2.5 sm:text-sm">
          {founder.established}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="lg:col-span-3"
      >
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {founder.letterTitle}{' '}
          <span className="text-zinc-500">{founder.letterHighlight}</span>
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
          {founder.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <p className="mt-8 font-display text-sm text-zinc-300 sm:text-base">{founder.signature}</p>
      </motion.div>
    </div>
  );
}
