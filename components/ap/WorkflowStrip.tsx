'use client';

import { Fragment, useEffect, useRef } from 'react';
import { initGsap, prefersReducedMotion, ScrollTrigger } from '@/lib/motion';

interface WorkflowStripProps {
  nodes: string[];
  /** Render for a navy surface. */
  dark?: boolean;
  /** Mark the final node as a success state. */
  succeed?: boolean;
  className?: string;
}

function Arrow({ dark }: { dark?: boolean }) {
  return (
    <svg width="14" height="10" viewBox="0 0 15 10" fill="none" aria-hidden>
      <path
        d="M0 5h12M9 1.5 12.5 5 9 8.5"
        stroke={dark ? 'rgba(255,255,255,0.3)' : '#a9bad2'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A workflow that fills in as you scroll past it — the step you are level
 * with is the step that lights up, so the scroll itself tells the story.
 */
export default function WorkflowStrip({
  nodes,
  dark,
  succeed = true,
  className,
}: WorkflowStripProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-node]'));
    const last = els.length - 1;
    const onClass = (i: number) => (succeed && i === last ? 'is-ok' : 'is-on');

    if (prefersReducedMotion()) {
      els.forEach((el, i) => el.classList.add(onClass(i)));
      return;
    }

    const gsap = initGsap();
    if (!gsap) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: 'top 80%',
        end: 'bottom 55%',
        scrub: true,
        onUpdate: (self) => {
          const active = Math.round(self.progress * els.length);
          els.forEach((el, i) => el.classList.toggle(onClass(i), i < active));
        },
      });
    }, root);

    return () => ctx.revert();
  }, [succeed]);

  return (
    <div ref={rootRef} className={`ap-flow ${className ?? ''}`}>
      {nodes.map((label, i) => (
        <Fragment key={label}>
          {i > 0 && <Arrow dark={dark} />}
          <span data-node className={dark ? 'ap-node-d' : 'ap-node'}>
            {label}
          </span>
        </Fragment>
      ))}
    </div>
  );
}
