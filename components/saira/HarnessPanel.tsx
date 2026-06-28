"use client";

import type { DemoFile } from '@/lib/sairaDemo';

type Panel = 'code' | 'preview' | 'terminal';

export default function HarnessPanel({
  files,
  activeFile,
  onSelectFile,
  panel,
  onPanelChange,
  terminalLines,
  previewHtml,
}: {
  files: DemoFile[];
  activeFile: string;
  onSelectFile: (name: string) => void;
  panel: Panel;
  onPanelChange: (p: Panel) => void;
  terminalLines: string[];
  previewHtml?: string;
}) {
  const current = files.find((f) => f.name === activeFile) ?? files[0];

  return (
    <section className="flex h-full min-h-0 flex-col border-r border-zinc-800 bg-[#0a0a0f]">
      <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
        <div>
          <p className="text-xs font-semibold text-white">Harness</p>
          <p className="text-[10px] text-zinc-500">Editor · preview · terminal</p>
        </div>
        <div className="flex gap-1">
          {(['code', 'preview', 'terminal'] as Panel[]).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onPanelChange(p)}
              className={`rounded-md px-2 py-1 text-[10px] font-semibold capitalize ${
                panel === p ? 'bg-violet-600 text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1">
        <div className="w-36 shrink-0 overflow-y-auto border-r border-zinc-800 p-2">
          {files.map((f) => (
            <button
              key={f.name}
              type="button"
              onClick={() => onSelectFile(f.name)}
              className={`mb-0.5 w-full truncate rounded px-2 py-1.5 text-left text-[10px] ${
                f.name === activeFile ? 'bg-violet-500/20 text-violet-200' : 'text-zinc-500 hover:bg-zinc-800'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          {panel === 'code' && (
            <pre className="h-full overflow-auto p-3 font-mono text-[11px] leading-relaxed text-zinc-300">{current?.content}</pre>
          )}
          {panel === 'preview' && (
            <div className="h-full overflow-auto bg-white p-4 text-zinc-900">
              {previewHtml ? (
                <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
              ) : (
                <p className="text-sm text-zinc-500">Ask Omni to build something — preview appears here.</p>
              )}
            </div>
          )}
          {panel === 'terminal' && (
            <pre className="h-full overflow-auto bg-black p-3 font-mono text-[11px] text-emerald-400/90">{terminalLines.join('\n')}</pre>
          )}
        </div>
      </div>
    </section>
  );
}
