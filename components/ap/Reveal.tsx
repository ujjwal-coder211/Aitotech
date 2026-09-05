'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { initGsap, prefersReducedMotion } from '@/lib/motion';

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait after the element enters view. */
  delay?: number;
  /** Distance in px the content rises from. */
  y?: number;
  /** Stagger direct children instead of moving the wrapper as one block. */
  stagger?: number;
  className?: string;
}

/**
 * Scroll-triggered entrance. Content renders visible by default and GSAP
 * takes it from the hidden state on mount, so nothing disappears if JS
 * never runs. Honours prefers-reduced-motion by simply doing nothing.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  stagger,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const gsap = initGsap();
    if (!gsap) return;

    const ctx = gsap.context(() => {
      const targets = stagger ? Array.from(el.children) : el;
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.7,
        delay,
        ease: 'power3.out',
        stagger: stagger ?? 0,
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, y, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
