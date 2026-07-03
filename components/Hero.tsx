'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero3D from '@/components/three/Hero3D';
import { home } from '@/data/siteContent';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { hero } = home;

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
      {/* 3D scene — dimmed and vignetted so it reads as atmosphere, not decoration */}
      <Hero3D className="absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.6)_60%,#09090b_100%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page relative z-10 flex flex-col items-center px-4 pt-24 text-center"
      >
        <motion.p
          variants={item}
          className="mb-8 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500"
        >
          <span className="h-1 w-1 rounded-full bg-brand" />
          {hero.badge}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p variants={item} className="mt-5 text-lg font-normal text-zinc-300 sm:text-xl">
          {hero.subheadline}
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
          {hero.description}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            {hero.ctaPrimary}
          </Link>
          <Link
            href="/#work"
            className="group text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            {hero.ctaSecondary}
            <span className="ml-1.5 inline-block transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
