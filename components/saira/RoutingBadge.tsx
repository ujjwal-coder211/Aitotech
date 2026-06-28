import type { RouteResult } from '@/lib/sairaRouting';

export default function RoutingBadge({ routing, compact = false }: { routing: RouteResult; compact?: boolean }) {
  const shortModel = routing.model.split('/').pop()?.replace(':free', '') ?? routing.model;

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-1.5 rounded-lg border border-violet-500/30 bg-violet-950/40 ${
        compact ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-[11px]'
      }`}
      title={routing.rationale}
    >
      <span className="font-semibold uppercase tracking-wide text-violet-300">{routing.taskClass.replace(/_/g, ' ')}</span>
      <span className="text-zinc-600">→</span>
      <span className="font-mono text-violet-200">{shortModel}</span>
      {!compact && <span className="text-zinc-500">· {routing.provider}</span>}
    </div>
  );
}
