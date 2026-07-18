'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gradient progress bar that tracks page scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300"
      aria-hidden
    />
  );
}
