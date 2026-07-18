'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-48 w-48 rounded-full bg-amber-500/25 blur-3xl" />
    </div>
  );
}

const AryaHouseScene = dynamic(() => import('./AryaHouseScene'), {
  ssr: false,
  loading: () => <SceneFallback />,
});

/**
 * Client boundary for the animated 3D house. Renders nothing on the server,
 * pauses when scrolled out of view, and freezes for prefers-reduced-motion.
 */
export default function AryaHouse3D({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden>
      <AryaHouseScene animate={inView && !reducedMotion} />
    </div>
  );
}
