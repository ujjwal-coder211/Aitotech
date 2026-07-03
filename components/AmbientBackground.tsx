'use client';

/**
 * Subtle ambient layer — enterprise sites use restraint, not floating orbs.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(94,106,210,0.08),transparent)]" />
    </div>
  );
}
