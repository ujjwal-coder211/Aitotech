'use client';

import { motion } from 'framer-motion';

/**
 * Fixed ambient layer — grid + floating orbs (does not block interaction).
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-glow-radial" />

      <motion.div
        className="absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-40 bottom-1/4 h-[360px] w-[360px] rounded-full bg-sky-500/10 blur-[90px]"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 h-[200px] w-[200px] rounded-full bg-violet-500/8 blur-[80px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
