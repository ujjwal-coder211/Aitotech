'use client';

type Thread = { id: string; title: string; active?: boolean };

const DEMO_THREADS: Thread[] = [
  { id: '1', title: 'Todo app scaffold', active: true },
  { id: '2', title: 'Null check fix' },
  { id: '3', title: 'Deploy to Delhi' },
];

export default function HermesSidebar({
  skills,
  activeThreadId = '1',
  onSelectThread,
}: {
  skills: string[];
  activeThreadId?: string;
  onSelectThread?: (id: string) => void;
}) {
  return (
    <aside className="flex h-full min-h-0 flex-col border-r border-zinc-800 bg-[#050508]">
      <div className="border-b border-zinc-800 px-3 py-2.5">
        <p className="text-xs font-semibold text-white">Hermes</p>
        <p className="text-[10px] text-zinc-500">Threads · skills · memory</p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Threads</p>
        <ul className="space-y-0.5">
          {DEMO_THREADS.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => onSelectThread?.(t.id)}
                className={`w-full rounded-lg px-2.5 py-2 text-left text-[11px] transition ${
                  (activeThreadId ?? t.id) === t.id
                    ? 'bg-violet-500/20 text-violet-200'
                    : 'text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200'
                }`}
              >
                {t.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-zinc-800 p-2">
        <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Extracted skills</p>
        <div className="flex flex-wrap gap-1">
          {skills.length === 0 && <span className="px-1 text-[10px] text-zinc-600">Ask Omni to extract skills…</span>}
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-[10px] text-violet-200"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
