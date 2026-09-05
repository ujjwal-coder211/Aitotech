'use client';

import { useEffect, useRef } from 'react';
import { initGsap, prefersReducedMotion, isCompact, ScrollTrigger } from '@/lib/motion';

const SOURCES = ['Website', 'Ads', 'WhatsApp', 'Calls'];
const CHAIN = ['Lead qualification', 'Follow-up', 'CRM', 'Sales', 'Conversion'];

/** Four intake curves converging on the engine. */
const WIRE_PATHS = [
  'M60 0 C60 28 240 18 240 46',
  'M180 0 C180 28 240 18 240 46',
  'M300 0 C300 28 240 18 240 46',
  'M420 0 C420 28 240 18 240 46',
];

function Arrow() {
  return (
    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" aria-hidden>
      <path
        d="M0 5h12M9 1.5 12.5 5 9 8.5"
        stroke="#a9bad2"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The AitoTech automation engine: intake channels converge into the AI
 * engine, then the qualified lead moves down the chain to conversion.
 * Nodes activate in sequence so the flow reads as one continuous story.
 */
export default function AutomationEngine() {
  const rootRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLElement[]>([]);
  const engineRef = useRef<HTMLDivElement>(null);

  const register = (i: number) => (el: HTMLElement | null) => {
    if (el) nodesRef.current[i] = el;
  };

  useEffect(() => {
    const root = rootRef.current;
    const engine = engineRef.current;
    if (!root || !engine) return;

    const nodes = nodesRef.current.filter(Boolean);
    const lastIndex = nodes.length - 1;

    // Reduced motion: show the finished state, no movement at all.
    if (prefersReducedMotion()) {
      nodes.forEach((n, i) => n.classList.add(i === lastIndex ? 'is-ok' : 'is-on'));
      return;
    }

    const gsap = initGsap();
    if (!gsap) return;

    const compact = isCompact();

    const ctx = gsap.context(() => {
      // Wires: a slow current running toward the engine (skipped on phones).
      if (!compact) {
        gsap.to(root.querySelectorAll('.ap-wire'), {
          strokeDashoffset: -18,
          duration: 1.1,
          repeat: -1,
          ease: 'none',
        });
      }

      // Engine breathes — transform only, so it stays on the GPU.
      gsap.to(engine, {
        scale: 1.025,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // The sequence: each node lights, holds, then hands over to the next.
      const step = compact ? 0.5 : 0.42;
      const hold = compact ? 1.4 : 1.7;

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.1, paused: true });
      nodes.forEach((node, i) => {
        const on = i === lastIndex ? 'is-ok' : 'is-on';
        const at = i * step;
        tl.call(() => node.classList.add(on), undefined, at);
        tl.call(() => node.classList.remove(on), undefined, at + hold);
      });
      // Keep the timeline long enough for the last node to finish its hold.
      tl.to({}, { duration: lastIndex * step + hold });

      // Only run while the diagram is actually on screen.
      ScrollTrigger.create({
        trigger: root,
        start: 'top 85%',
        end: 'bottom 15%',
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="ap-card relative overflow-hidden p-6 shadow-[0_30px_70px_-42px_rgba(13,33,84,0.45)] sm:p-7"
    >
      {/* faint grid so the diagram reads as a system, not a slide */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(#eef3f9 1px, transparent 1px), linear-gradient(90deg, #eef3f9 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 78%)',
        }}
      />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <span className="ap-lane">AitoTech automation engine</span>
          <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-ok">
            <span className="block h-[7px] w-[7px] rounded-full bg-ok" />
            Live
          </span>
        </div>

        {/* intake channels */}
        <div className="grid grid-cols-4 gap-2">
          {SOURCES.map((label, i) => (
            <span
              key={label}
              ref={register(i)}
              className="ap-node justify-center px-1.5 text-[12.5px]"
            >
              {label}
            </span>
          ))}
        </div>

        {/* converging wires */}
        <svg
          viewBox="0 0 480 46"
          preserveAspectRatio="none"
          className="block h-[46px] w-full"
          fill="none"
          aria-hidden
        >
          {WIRE_PATHS.map((d) => (
            <path
              key={d}
              className="ap-wire"
              d={d}
              stroke="#bed0e4"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/* the engine */}
        <div className="flex justify-center">
          <div
            ref={engineRef}
            className="inline-flex items-center gap-2.5 rounded-[13px] bg-gradient-to-br from-navy to-navy-soft px-6 py-3.5 text-white will-change-transform"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 3v3.4M12 17.6V21M3 12h3.4M17.6 12H21M6.3 6.3l2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4"
                stroke="#2ea3e8"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="3.3" stroke="#fff" strokeWidth="1.7" />
            </svg>
            <span className="font-heading text-base font-extrabold">AI Engine</span>
          </div>
        </div>

        {/* handoff */}
        <svg viewBox="0 0 24 30" className="mx-auto block h-[30px] w-6" fill="none" aria-hidden>
          <path className="ap-wire" d="M12 2V21" stroke="#bed0e4" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M8.2 17.6 12 21.4l3.8-3.8"
            stroke="#bed0e4"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* downstream chain */}
        <div className="ap-flow justify-center">
          {CHAIN.map((label, i) => (
            <span key={label} className="contents">
              {i > 0 && <Arrow />}
              <span ref={register(SOURCES.length + i)} className="ap-node">
                {label}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-7 border-t border-hairline pt-5">
          <div>
            <p className="mb-0.5 text-[11.5px] text-quiet-soft">Runs</p>
            <p className="font-heading text-[17px] font-bold">24 / 7</p>
          </div>
          <div>
            <p className="mb-0.5 text-[11.5px] text-quiet-soft">Human approval</p>
            <p className="font-heading text-[17px] font-bold">Always on</p>
          </div>
          <div>
            <p className="mb-0.5 text-[11.5px] text-quiet-soft">Built on</p>
            <p className="font-heading text-[17px] font-bold">Your tools</p>
          </div>
        </div>
      </div>
    </div>
  );
}
