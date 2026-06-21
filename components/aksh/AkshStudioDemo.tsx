'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DEMO_PROJECT_FILES,
  PITCH_TOUR_STEPS,
  WORK_MODES,
  fetchOmniReply,
  resolveMockDemo,
  streamText,
  type DemoFile,
  type WorkMode,
} from '@/lib/akshDemo';

type ChatMsg = { role: 'user' | 'omni'; text: string; streaming?: boolean };
type Panel = 'code' | 'preview' | 'terminal';

type Todo = { id: string; text: string; done: boolean };

const STARTER_CHIPS = [
  'Build a todo app with add and delete',
  'Fix the null check in App.tsx',
  'Deploy to E2E Networks in Delhi',
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

function TodoPreview({ todos, onChange }: { todos: Todo[]; onChange: (t: Todo[]) => void }) {
  const [text, setText] = useState('');

  function addTodo() {
    if (!text.trim()) return;
    onChange([...todos, { id: crypto.randomUUID(), text: text.trim(), done: false }]);
    setText('');
  }

  return (
    <div className="flex h-full flex-col bg-white p-6 text-zinc-900">
      <h2 className="text-xl font-bold">My Todos</h2>
      <p className="mt-1 text-xs text-zinc-500">Live preview · built by Routely</p>
      <div className="mt-4 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
          placeholder="New todo"
        />
        <button
          type="button"
          onClick={addTodo}
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500"
        >
          Add
        </button>
      </div>
      <ul className="mt-4 space-y-2 overflow-y-auto">
        {todos.length === 0 && (
          <li className="rounded-lg border border-dashed border-zinc-300 px-4 py-8 text-center text-sm text-zinc-400">
            Ask Routely to build a todo app — then try it here.
          </li>
        )}
        {todos.map((t) => (
          <li key={t.id} className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2">
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => onChange(todos.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)))}
            />
            <span className={`flex-1 text-sm ${t.done ? 'line-through opacity-60' : ''}`}>{t.text}</span>
            <button
              type="button"
              onClick={() => onChange(todos.filter((x) => x.id !== t.id))}
              className="text-xs font-medium text-rose-500 hover:text-rose-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AkshStudioDemo({
  initialPrompt = '',
  compact = false,
  autoPitchTour = false,
  showPitchControls = true,
}: {
  initialPrompt?: string;
  compact?: boolean;
  autoPitchTour?: boolean;
  showPitchControls?: boolean;
}) {
  const [files, setFiles] = useState<DemoFile[]>(DEMO_PROJECT_FILES);
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [panel, setPanel] = useState<Panel>('code');
  const [workMode, setWorkMode] = useState<WorkMode>('auto');
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: 'omni',
      text: 'Hi — I am Routely, your coding agent. I ship features, fix bugs, scan security, and deploy to India — browser or desktop.',
    },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [liveMode, setLiveMode] = useState<boolean | null>(null);
  const [previewReady, setPreviewReady] = useState(false);
  const [previewTodos, setPreviewTodos] = useState<Todo[]>([]);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    'Routely terminal · connected to cloud project',
    'Type a command or ask Routely to deploy.',
  ]);
  const [narration, setNarration] = useState('');
  const [tourRunning, setTourRunning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const seeded = useRef(false);
  const tourStarted = useRef(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const appendTerminal = useCallback(async (lines: string[]) => {
    for (const line of lines) {
      await new Promise((r) => setTimeout(r, 350));
      setTerminalLines((prev) => [...prev, line]);
    }
  }, []);

  const runPrompt = useCallback(
    async (text: string, opts?: { skipUserBubble?: boolean }) => {
      const trimmed = text.trim();
      if (!trimmed || busy) return;

      if (!opts?.skipUserBubble) {
        setMessages((m) => [...m, { role: 'user', text: trimmed }]);
      }
      setInput('');
      setBusy(true);
      setMessages((m) => [...m, { role: 'omni', text: '', streaming: true }]);

      const mock = resolveMockDemo(trimmed);
      const { answer, live } = await fetchOmniReply(trimmed);
      setLiveMode(live);

      let fileUpdates: Partial<Record<string, string>> = {};
      if (!live) {
        fileUpdates = mock.fileUpdates;
        if (Object.keys(fileUpdates).length) {
          setFiles((prev) => mergeFiles(prev, fileUpdates));
          const first = Object.keys(fileUpdates)[0];
          if (first) setActiveFile(first);
        }
        if (/todo|build|app|scaffold/i.test(trimmed)) {
          setPreviewReady(true);
          setPreviewTodos([
            { id: '1', text: 'Ship Routely launch', done: false },
            { id: '2', text: 'Demo for investors', done: true },
          ]);
        }
        if (/deploy|e2e|india|host|launch/i.test(trimmed)) {
          setPanel('terminal');
          await appendTerminal([
            '$ routely deploy --region delhi-ncr',
            'Building Docker image…',
            '✓ nginx + SSL configured',
            '✓ Live at https://demo.aitotech.in (E2E Networks · India)',
          ]);
        }
        if (/security|scan|guard|vuln/i.test(trimmed)) {
          setPanel('terminal');
          await appendTerminal(['$ routely scan --mode guard', '✓ 12 files · 0 critical · 1 low (auto-fixed)']);
        }
      }

      await streamText(live ? answer : mock.reply, (partial) => {
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
    },
    [appendTerminal, busy]
  );

  const runPitchTour = useCallback(async () => {
    if (tourRunning || busy) return;
    setTourRunning(true);
    setFiles(DEMO_PROJECT_FILES);
    setActiveFile('App.tsx');
    setPreviewReady(false);
    setPreviewTodos([]);
    setTerminalLines(['Routely terminal · vision demo started']);
    setMessages([
      {
        role: 'omni',
        text: 'Starting the Routely vision tour — build, fix, secure, and deploy from one coding workspace.',
      },
    ]);

    for (const step of PITCH_TOUR_STEPS) {
      setWorkMode(step.mode);
      setNarration(step.narration);
      if (step.panel) setPanel(step.panel);
      setMessages((m) => [...m, { role: 'user', text: step.prompt }]);
      setBusy(true);
      setMessages((m) => [...m, { role: 'omni', text: '', streaming: true }]);

      const mock = resolveMockDemo(step.prompt);
      setFiles((prev) => mergeFiles(prev, mock.fileUpdates));
      if (step.showPreview) {
        setPreviewReady(true);
        setPreviewTodos([
          { id: '1', text: 'Ship Routely launch', done: false },
          { id: '2', text: 'Demo for investors', done: true },
        ]);
        setTimeout(() => setPanel('preview'), 1200);
      }
      if (step.terminalLines?.length) {
        await appendTerminal(step.terminalLines);
      }

      await streamText(mock.reply, (partial) => {
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
      await new Promise((r) => setTimeout(r, step.delayAfterMs));
    }

    setNarration(
      'Vision tour complete. Routely = smart model routing + persistent memory + agent workflows + India hosting. Share this demo with investors or try your own prompts.'
    );
    setTourRunning(false);
  }, [appendTerminal, busy, tourRunning]);

  useEffect(() => {
    if (initialPrompt && !seeded.current) {
      seeded.current = true;
      void runPrompt(initialPrompt);
    }
  }, [initialPrompt, runPrompt]);

  useEffect(() => {
    if (autoPitchTour && !tourStarted.current) {
      tourStarted.current = true;
      void runPitchTour();
    }
  }, [autoPitchTour, runPitchTour]);

  const current = files.find((f) => f.name === activeFile) ?? files[0];

  return (
    <div className="flex flex-col gap-3">
      {showPitchControls && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-violet-500/25 bg-violet-950/20 px-4 py-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">Product demo</p>
            <p className="mt-1 text-sm text-zinc-300">
              {narration ||
                'Show investors and experts how Routely works — smart routing, memory, git, and India deploy in one flow.'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => void runPitchTour()}
            disabled={tourRunning || busy}
            className="shrink-0 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {tourRunning ? 'Running vision tour…' : '▶ Run 90s vision tour'}
          </button>
        </div>
      )}

      <div
        className={`flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#0a0a0f] ${
          compact ? 'h-full min-h-[420px]' : 'min-h-[min(78vh,720px)]'
        }`}
      >
        {/* Title bar */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-zinc-800 px-3 py-2 sm:px-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-medium text-zinc-400">Routely</span>
            <span className="hidden text-xs text-zinc-600 sm:inline">· cloud project · autosave on</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {liveMode !== null && (
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  liveMode ? 'bg-emerald-500/15 text-emerald-300' : 'bg-violet-500/15 text-violet-300'
                }`}
              >
                {liveMode ? 'Live Routely' : 'Pitch demo · free'}
              </span>
            )}
            <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300">
              Smart model routing
            </span>
          </div>
        </div>

        {/* Work modes */}
        <div className="flex shrink-0 gap-1 overflow-x-auto border-b border-zinc-800 bg-[#050508] px-2 py-2">
          {WORK_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              title={m.hint}
              onClick={() => setWorkMode(m.id)}
              className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] font-semibold transition ${
                workMode === m.id
                  ? 'bg-violet-600 text-white'
                  : 'text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)]">
          {/* Main panel */}
          <div className="flex min-h-[240px] min-w-0 flex-col border-b border-zinc-800 lg:border-b-0 lg:border-r">
            <div className="flex shrink-0 border-b border-zinc-800 bg-[#050508]">
              {(['code', 'preview', 'terminal'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setPanel(tab)}
                  disabled={tab === 'preview' && !previewReady}
                  className={`px-4 py-2 text-[11px] font-semibold capitalize transition ${
                    panel === tab
                      ? 'border-b-2 border-violet-500 text-violet-200'
                      : 'text-zinc-500 hover:text-zinc-300 disabled:opacity-40'
                  }`}
                >
                  {tab}
                  {tab === 'preview' && previewReady && (
                    <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  )}
                </button>
              ))}
            </div>

            {panel === 'code' && (
              <>
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
              </>
            )}

            {panel === 'preview' && (
              <div className="min-h-0 flex-1 overflow-auto">
                {previewReady ? (
                  <TodoPreview todos={previewTodos} onChange={setPreviewTodos} />
                ) : (
                  <div className="grid h-full place-items-center p-8 text-center text-sm text-zinc-500">
                    Run the vision tour or ask Routely to build an app to see the live preview.
                  </div>
                )}
              </div>
            )}

            {panel === 'terminal' && (
              <pre className="min-h-0 flex-1 overflow-auto bg-[#030712] p-4 font-mono text-[11px] leading-relaxed text-emerald-400/90 sm:text-xs">
                {terminalLines.map((line, i) => (
                  <div key={i} className={line.startsWith('✓') ? 'text-emerald-400' : 'text-zinc-400'}>
                    {line}
                  </div>
                ))}
              </pre>
            )}

            <div className="hidden shrink-0 border-t border-zinc-800 bg-[#050508] px-3 py-2 text-[10px] text-zinc-600 sm:flex sm:items-center sm:justify-between">
              <span>Mode: {workMode} · E2E Networks India ready</span>
              <span>Memory · cloud sync on</span>
            </div>
          </div>

          {/* Routely chat panel */}
          <div className="flex min-h-[300px] min-w-0 flex-col bg-[#050508]">
            <div className="flex shrink-0 items-center gap-2 border-b border-zinc-800 px-3 py-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600 text-[10px] font-bold text-white">
                R
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Routely</p>
                <p className="text-[10px] text-zinc-500">Best free model, picked for you</p>
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
                    disabled={busy || tourRunning}
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
                  placeholder="Tell Routely what to build, fix, or deploy…"
                  disabled={tourRunning}
                  className="max-h-24 flex-1 resize-none bg-transparent text-xs text-white placeholder:text-zinc-600 focus:outline-none disabled:opacity-50 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => void runPrompt(input)}
                  disabled={busy || tourRunning || !input.trim()}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send to Routely"
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
    </div>
  );
}
