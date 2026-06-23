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
    <div ref={ref} className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
      {home.stats.map((stat, i) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="glass rounded-xl p-4 text-center sm:rounded-2xl sm:p-6"
        >
          <p className="font-display text-2xl font-bold text-gradient sm:text-3xl md:text-4xl">
            {format(i)}
          </p>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
