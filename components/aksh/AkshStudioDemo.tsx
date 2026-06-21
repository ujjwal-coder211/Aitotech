'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DEMO_PROJECT_FILES,
  fetchOmniReply,
  resolveMockDemo,
  streamText,
  type DemoFile,
} from '@/lib/akshDemo';

type ChatMsg = { role: 'user' | 'omni'; text: string; streaming?: boolean };

const STARTER_CHIPS = [
  'Build a todo app with add and delete',
  'Fix the null check in App.tsx',
  'Add unit tests for TodoItem',
];

function mergeFiles(base: DemoFile[], updates: Partial<Record<string, string>>): DemoFile[] {
  const names = new Set(Object.keys(updates));
  const merged = base.map((f) => (updates[f.name] ? { ...f, content: updates[f.name]! } : f));
  for (const name of names) {
    if (!merged.some((f) => f.name === name)) {
      merged.push({ name, language: name.endsWith('.md') ? 'md' : 'tsx', content: updates[name]! });
    }
  }
  return merged;
}

export default function AkshStudioDemo({
  initialPrompt = '',
  compact = false,
}: {
  initialPrompt?: string;
  compact?: boolean;
}) {
  const [files, setFiles] = useState<DemoFile[]>(DEMO_PROJECT_FILES);
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: 'omni',
      text: 'Hi — I am Omni. Ask me to build, fix, or refactor code. I work inside Aksh Studio with your project files and memory.',
    },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [liveMode, setLiveMode] = useState<boolean | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const seeded = useRef(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const runPrompt = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setInput('');
    setBusy(true);
    setMessages((m) => [...m, { role: 'omni', text: '', streaming: true }]);

    const { answer, live } = await fetchOmniReply(trimmed);
    setLiveMode(live);

    let fileUpdates: Partial<Record<string, string>> = {};
    if (!live) {
      fileUpdates = resolveMockDemo(trimmed).fileUpdates;
      if (Object.keys(fileUpdates).length) {
        setFiles((prev) => mergeFiles(prev, fileUpdates));
        const first = Object.keys(fileUpdates)[0];
        if (first) setActiveFile(first);
      }
    }

    await streamText(answer, (partial) => {
      setMessages((m) => {
        const next = [...m];
        const last = next[next.length - 1];
        if (last?.role === 'omni' && last.streaming) {
          next[next.length - 1] = { ...last, text: partial };
        }
        return next;
      });
    });

    setMessages((m) => {
      const next = [...m];
      const last = next[next.length - 1];
      if (last?.role === 'omni') {
        next[next.length - 1] = { ...last, streaming: false };
      }
      return next;
    });
    setBusy(false);
  }, [busy]);

  useEffect(() => {
    if (initialPrompt && !seeded.current) {
      seeded.current = true;
      void runPrompt(initialPrompt);
    }
  }, [initialPrompt, runPrompt]);

  const current = files.find((f) => f.name === activeFile) ?? files[0];

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#0a0a0f] ${
        compact ? 'h-full min-h-[420px]' : 'min-h-[min(72vh,640px)]'
      }`}
    >
      {/* Title bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-zinc-800 px-3 py-2 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="hidden text-xs text-zinc-500 sm:inline">Aksh Studio · demo project</span>
        </div>
        <div className="flex items-center gap-2">
          {liveMode !== null && (
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                liveMode ? 'bg-emerald-500/15 text-emerald-300' : 'bg-violet-500/15 text-violet-300'
              }`}
            >
              {liveMode ? 'Live Omni' : 'Demo mode'}
            </span>
          )}
          <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300">
            Powered by Omni
          </span>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)]">
        {/* Editor column */}
        <div className="flex min-h-[220px] min-w-0 flex-col border-b border-zinc-800 lg:border-b-0 lg:border-r">
          <div className="flex shrink-0 gap-1 overflow-x-auto border-b border-zinc-800 bg-[#050508] px-2 py-1.5">
            {files.map((f) => (
              <button
                key={f.name}
                type="button"
                onClick={() => setActiveFile(f.name)}
                className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                  activeFile === f.name
                    ? 'bg-violet-500/20 text-violet-200'
                    : 'text-zinc-500 hover:bg-zinc-800/80 hover:text-zinc-300'
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
          <pre className="min-h-0 flex-1 overflow-auto bg-[#030712] p-3 font-mono text-[11px] leading-relaxed text-zinc-400 sm:p-4 sm:text-xs">
            <code>{current.content}</code>
          </pre>
          <div className="hidden shrink-0 border-t border-zinc-800 bg-[#050508] px-3 py-2 text-[10px] text-zinc-600 sm:block">
            Cloud project · autosave on · India hosting ready
          </div>
        </div>

        {/* Omni panel */}
        <div className="flex min-h-[280px] min-w-0 flex-col bg-[#050508]">
          <div className="flex shrink-0 items-center gap-2 border-b border-zinc-800 px-3 py-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600 text-[10px] font-bold text-white">
              O
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Omni</p>
              <p className="text-[10px] text-zinc-500">Your coding agent in Aksh</p>
            </div>
          </div>

          <div ref={scrollRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[92%] whitespace-pre-wrap rounded-lg px-3 py-2 text-xs leading-relaxed sm:text-[13px] ${
                    m.role === 'user'
                      ? 'bg-violet-600 text-white'
                      : 'border border-zinc-800 bg-[#0a0a0f] text-zinc-300'
                  }`}
                >
                  {m.text}
                  {m.streaming && (
                    <span className="ml-0.5 inline-block h-3 w-1 animate-pulse bg-violet-400 align-middle" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="shrink-0 border-t border-zinc-800 p-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {STARTER_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  disabled={busy}
                  onClick={() => void runPrompt(chip)}
                  className="rounded-full border border-zinc-800 bg-[#0a0a0f] px-2.5 py-1 text-[10px] text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-200 disabled:opacity-50"
                >
                  {chip}
                </button>
              ))}
            </div>
            <div className="flex items-end gap-2 rounded-lg border border-zinc-800 bg-[#0a0a0f] p-2 focus-within:border-violet-500/50 focus-within:ring-2 focus-within:ring-violet-500/20">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    void runPrompt(input);
                  }
                }}
                rows={2}
                placeholder="Tell Omni what to build…"
                className="max-h-24 flex-1 resize-none bg-transparent text-xs text-white placeholder:text-zinc-600 focus:outline-none sm:text-sm"
              />
              <button
                type="button"
                onClick={() => void runPrompt(input)}
                disabled={busy || !input.trim()}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send to Omni"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
