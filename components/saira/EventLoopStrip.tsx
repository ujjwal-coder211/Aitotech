import type { EventPhase } from '@/lib/sairaDemo';

const PHASES: { id: EventPhase; label: string }[] = [
  { id: 'PERCEIVE', label: 'Perceive' },
  { id: 'DECIDE', label: 'Decide' },
  { id: 'ACT', label: 'Act' },
  { id: 'REMEMBER', label: 'Remember' },
  { id: 'IMPROVE', label: 'Improve' },
];

export default function EventLoopStrip({ activePhase }: { activePhase?: EventPhase }) {
  const activeIdx = activePhase ? PHASES.findIndex((p) => p.id === activePhase) : -1;

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-lg border border-zinc-800 bg-[#050508] px-2 py-2">
      {PHASES.map((phase, i) => {
        const isActive = phase.id === activePhase;
        const isPast = activeIdx >= 0 && i < activeIdx;
        return (
          <div key={phase.id} className="flex items-center gap-1">
            <span
              className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide transition ${
                isActive
                  ? 'animate-pulse bg-violet-600 text-white'
                  : isPast
                    ? 'bg-violet-500/20 text-violet-300'
                    : 'text-zinc-600'
              }`}
            >
              {phase.label}
            </span>
            {i < PHASES.length - 1 && <span className="text-[10px] text-zinc-700">→</span>}
          </div>
        );
      })}
    </div>
  );
}
