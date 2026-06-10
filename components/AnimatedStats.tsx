'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { home } from '@/data/siteContent';

interface AnimatedStatsProps {
  compact?: boolean;
}

export default function AnimatedStats({ compact = false }: AnimatedStatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [counts, setCounts] = useState<number[]>(home.stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;

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
  }, [inView]);

  const format = (index: number) => {
    const stat = home.stats[index];
    const val = counts[index];
    if (stat.id === 'hours' && val >= 1000) return `${(val / 1000).toFixed(0)}K${stat.suffix}`;
    if (stat.id === 'roi') return `${val}${stat.suffix}`;
    return `${val}${stat.suffix}`;
  };

  return (
    <div
      ref={ref}
      className={
        compact
          ? 'grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4'
          : 'grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4'
      }
    >
      {home.stats.map((stat, i) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className={compact ? 'text-left' : 'card px-5 py-5 text-center sm:px-6 sm:py-6'}
        >
          <p
            className={`font-display font-bold text-white ${compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl md:text-4xl'}`}
          >
            {inView ? format(i) : '0'}
          </p>
          <p className={`mt-1 text-zinc-500 ${compact ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm'}`}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
