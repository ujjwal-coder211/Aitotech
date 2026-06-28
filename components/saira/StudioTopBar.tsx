export default function StudioTopBar({
  onStartTour,
  tourRunning,
  showTourControls,
}: {
  onStartTour?: () => void;
  tourRunning?: boolean;
  showTourControls?: boolean;
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 bg-[#030308] px-3 py-2">
      <div className="flex items-center gap-3">
        <span className="font-display text-sm font-bold text-white">Routely</span>
        <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-200">
          Demo mode · no backend
        </span>
        <span className="hidden text-[10px] text-zinc-600 sm:inline">Omni · Harness · Hermes</span>
      </div>
      {showTourControls && (
        <button
          type="button"
          onClick={onStartTour}
          disabled={tourRunning}
          className="rounded-lg border border-violet-500/40 bg-violet-500/10 px-3 py-1.5 text-[11px] font-semibold text-violet-200 hover:bg-violet-500/20 disabled:opacity-50"
        >
          {tourRunning ? 'Tour running…' : 'Run Phase 1 tour'}
        </button>
      )}
    </header>
  );
}
