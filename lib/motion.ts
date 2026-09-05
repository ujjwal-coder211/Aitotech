'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/** Registers ScrollTrigger once and hands back gsap (null on the server). */
export function initGsap() {
  if (typeof window === 'undefined') return null;
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

/** True when the visitor has asked the OS for less motion. */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Phones get a lighter version of the same story. */
export function isCompact() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
}

export { gsap, ScrollTrigger };
