'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { home } from '@/data/siteContent';

/** Animated stat counters — shows final values before animation to avoid "0" flash. */
export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [counts, setCounts] = useState<number[]>(() => home.stats.map((s) => s.value));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!inView || hasAnimated) return;

    setHasAnimated(true);
    setCounts(home.stats.map(() => 0));

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        home.stats.map((stat) => {
          const decimals = stat.decimals ?? 0;
          const raw = stat.value * eased;
          return decimals ? Math.round(raw * 10) / 10 : Math.floor(raw);
        })
      );

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, hasAnimated]);

  const format = (index: number) => {
    const stat = home.stats[index];
    const val = counts[index];
    if (stat.id === 'hours' && val >= 1000) return `${(val / 1000).toFixed(0)}K${stat.suffix}`;
    if (stat.id === 'roi') return `${val}${stat.suffix}`;
    return `${val}${stat.suffix}`;
  };

  return (
    <div ref={ref} className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/[0.06]">
      {home.stats.map((stat, i) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="font-display text-2xl font-semibold text-white sm:text-3xl">{format(i)}</p>
          <p className="mt-1.5 text-xs text-zinc-600 sm:text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
