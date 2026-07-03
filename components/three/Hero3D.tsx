'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/** Static violet orb shown while the WebGL bundle loads (and as the SSR frame). */
function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-64 w-64 rounded-full bg-brand/20 blur-3xl sm:h-80 sm:w-80" />
    </div>
  );
}

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <SceneFallback />,
});

/**
 * Client boundary for the hero 3D scene. Renders nothing on the server,
 * pauses the render loop when scrolled out of view, and freezes the scene
 * entirely for users with prefers-reduced-motion.
 */
export default function Hero3D({ className }: { className?: string }) {
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
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.05,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn('pointer-events-none', className)} aria-hidden>
      <HeroScene animate={inView && !reducedMotion} />
    </div>
  );
}
