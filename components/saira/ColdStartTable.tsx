import { COLD_START_TABLE, type TaskClass } from '@/lib/sairaRouting';

export default function ColdStartTable({ activeClass }: { activeClass?: TaskClass }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#050508]">
      <div className="border-b border-zinc-800 px-3 py-2">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-400">Cold-start table · §8.1</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] text-left text-[11px]">
          <thead className="border-b border-zinc-800 text-zinc-500">
            <tr>
              <th className="px-3 py-2 font-medium">Task class</th>
              <th className="px-3 py-2 font-medium">Model</th>
            </tr>
          </thead>
          <tbody>
            {COLD_START_TABLE.map((row) => {
              const active = row.taskClass === activeClass;
              return (
                <tr
                  key={row.taskClass}
                  className={`border-b border-zinc-800/50 transition ${
                    active ? 'bg-violet-500/15 ring-1 ring-inset ring-violet-500/40' : 'hover:bg-zinc-900/50'
                  }`}
                >
                  <td className="px-3 py-2">
                    <span className={`font-semibold ${active ? 'text-violet-200' : 'text-zinc-300'}`}>
                      {row.taskClass}
                    </span>
                    <p className="mt-0.5 text-[10px] text-zinc-500">{row.label}</p>
                  </td>
                  <td className="px-3 py-2 font-mono text-zinc-400">{row.model.replace(':free', '')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
