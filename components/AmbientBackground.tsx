/**
 * Ambient depth layer — soft brand glows + a faint grid so pages feel
 * atmospheric and premium rather than flat black.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* faint grid */}
      <div className="absolute inset-0 bg-hero-grid bg-[size:56px_56px] opacity-[0.35] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,black,transparent_75%)]" />
      {/* top brand glow */}
      <div className="absolute inset-x-0 -top-40 h-[560px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(94,106,210,0.16),transparent_70%)]" />
      {/* side accents */}
      <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.10),transparent_70%)] blur-2xl" />
      <div className="absolute -right-40 top-1/2 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.08),transparent_70%)] blur-2xl" />
    </div>
  );
}
