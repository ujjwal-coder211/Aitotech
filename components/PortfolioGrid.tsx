'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ServiceIcon from '@/components/ServiceIcon';
import ServiceVisual from '@/components/ServiceVisual';
import SectionHeading from '@/components/SectionHeading';
import { portfolio } from '@/data/siteContent';

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function PortfolioGrid() {
  return (
    <section id="work" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow={portfolio.eyebrow}
          title={portfolio.title}
          highlight={portfolio.highlight}
          description={portfolio.description}
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolio.items.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              className={project.featured ? 'sm:col-span-2 lg:col-span-2' : ''}
            >
              <Link
                href={project.href}
                className="card-premium group flex h-full flex-col p-6 sm:p-7"
              >
                {/* hover glow */}
                <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden />

                {/* branded illustration */}
                <ServiceVisual
                  name={project.icon}
                  className="pointer-events-none absolute bottom-3 right-2 h-24 w-36 opacity-[0.13] transition-opacity duration-500 group-hover:opacity-[0.3]"
                />

                <div className="relative flex items-center justify-between">
                  <span className="icon-tile">
                    <ServiceIcon name={project.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-600">
                    {project.kind}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-lg font-semibold text-white">{project.title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{project.body}</p>

                <div className="relative mt-6 flex items-center justify-between">
                  <span className="text-xs text-zinc-600">{project.tags.join(' · ')}</span>
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all duration-200 ease-out-expo group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand-light"
                    aria-hidden
                  >
                    <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.div variants={card}>
            <Link
              href="/contact"
              className="group flex h-full min-h-[160px] flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.06] p-6 text-center transition-colors duration-200 ease-out-expo hover:border-white/[0.14] hover:bg-white/[0.02]"
            >
              <p className="text-sm font-medium text-zinc-500 transition-colors duration-200 group-hover:text-white">
                Something different in mind?
              </p>
              <p className="text-sm text-zinc-600 transition-colors duration-200 group-hover:text-zinc-400">
                Start a project &rarr;
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
