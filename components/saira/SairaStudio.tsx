'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DEMO_FILES,
  SAIRA_PHASE1_TOUR,
  STARTER_CHIPS,
  resolveDemo,
  streamText,
  type DemoFile,
  type EventPhase,
} from '@/lib/sairaDemo';
import type { TaskClass } from '@/lib/sairaRouting';
import ColdStartTable from './ColdStartTable';
import EventLoopStrip from './EventLoopStrip';
import HarnessPanel from './HarnessPanel';
import HermesSidebar from './HermesSidebar';
import OmniPanel, { type ChatMsg } from './OmniPanel';
import StudioTopBar from './StudioTopBar';

type Panel = 'code' | 'preview' | 'terminal';

function mergeFiles(base: DemoFile[], updates: Partial<Record<string, string>>): DemoFile[] {
  const merged = base.map((f) => (updates[f.name] ? { ...f, content: updates[f.name]! } : f));
  for (const name of Object.keys(updates)) {
    if (!merged.some((f) => f.name === name)) {
      merged.push({ name, language: 'tsx', content: updates[name]! });
    }
  }
  return merged;
}

const PREVIEW_HTML = '<h2 style="font-family:system-ui">My Todos</h2><p style="color:#666;font-size:14px">Live preview · built by Routely Harness</p><ul><li>Ship SAIRA Phase 1 UI</li><li>Demo for customers</li></ul>';

export default function SairaStudio({
  initialPrompt = '',
  autoTour = false,
  showTourControls = true,
  compact = false,
}: {
  initialPrompt?: string;
  autoTour?: boolean;
  showTourControls?: boolean;
  compact?: boolean;
}) {
  const [files, setFiles] = useState<DemoFile[]>(DEMO_FILES);
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [panel, setPanel] = useState<Panel>('code');
  const [terminalLines, setTerminalLines] = useState<string[]>([
    'Harness terminal · demo project',
    'Ask Omni to deploy or scan security.',
  ]);
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: 'omni',
      text: 'Hi — I am Omni, the SAIRA conductor. I classify your task, route to the best model, and Harness executes. Hermes remembers everything.',
    },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [skills, setSkills] = useState<string[]>(['react-todo-patterns']);
  const [activeClass, setActiveClass] = useState<TaskClass | undefined>();
  const [activePhase, setActivePhase] = useState<EventPhase | undefined>();
  const [narration, setNarration] = useState('');
  const [tourRunning, setTourRunning] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const tourStarted = useRef(false);
  const seeded = useRef(false);

  const runPrompt = useCallback(
    async (text: string, opts?: { skipUserBubble?: boolean; tourPhase?: EventPhase }) => {
      const trimmed = text.trim();
      if (!trimmed || busy) return;

      if (!opts?.skipUserBubble) {
        setMessages((m) => [...m, { role: 'user', text: trimmed }]);
      }
      setInput('');
      setBusy(true);

      const result = resolveDemo(trimmed);
      setActiveClass(result.routing.taskClass);

      for (const phase of result.phases) {
        setActivePhase(phase);
        await new Promise((r) => setTimeout(r, 450));
      }
      if (opts?.tourPhase) setActivePhase(opts.tourPhase);

      setMessages((m) => [...m, { role: 'omni', text: '', routing: result.routing, streaming: true }]);

      if (Object.keys(result.fileUpdates).length) {
        setFiles((prev) => mergeFiles(prev, result.fileUpdates));
        const first = Object.keys(result.fileUpdates)[0];
        if (first) setActiveFile(first);
      }
      if (/todo|build|app|scaffold/i.test(trimmed)) setShowPreview(true);
      if (result.terminalLines.length) {
        setPanel('terminal');
        for (const line of result.terminalLines) {
          await new Promise((r) => setTimeout(r, 300));
          setTerminalLines((prev) => [...prev, line]);
        }
      }
      if (result.skillExtracted) {
        setSkills((prev) => (prev.includes(result.skillExtracted!) ? prev : [...prev, result.skillExtracted!]));
      }

      await streamText(result.reply, (partial) => {
        setMessages((m) => {
          const copy = [...m];
          const last = copy[copy.length - 1];
          if (last?.role === 'omni') copy[copy.length - 1] = { ...last, text: partial, streaming: true };
          return copy;
        });
      });

      setMessages((m) => {
        const copy = [...m];
        const last = copy[copy.length - 1];
        if (last?.role === 'omni') copy[copy.length - 1] = { ...last, streaming: false };
        return copy;
      });
      setBusy(false);
      setActivePhase(undefined);
    },
    [busy]
  );

  const runTour = useCallback(async () => {
    if (tourRunning) return;
    setTourRunning(true);
    for (const step of SAIRA_PHASE1_TOUR) {
      setNarration(step.narration);
      if (step.panel) setPanel(step.panel);
      if (step.showPreview) setShowPreview(true);
      await runPrompt(step.prompt, { skipUserBubble: false, tourPhase: step.phase });
      if (step.terminalLines?.length) {
        setTerminalLines((prev) => [...prev, ...step.terminalLines!]);
      }
      if (step.skillExtracted) setSkills((prev) => [...new Set([...prev, step.skillExtracted!])]);
      await new Promise((r) => setTimeout(r, step.delayAfterMs));
    }
    setNarration('');
    setTourRunning(false);
  }, [runPrompt, tourRunning]);

  useEffect(() => {
    if (initialPrompt && !seeded.current) {
      seeded.current = true;
      runPrompt(initialPrompt);
    }
  }, [initialPrompt, runPrompt]);

  useEffect(() => {
    if (autoTour && !tourStarted.current && !initialPrompt) {
      tourStarted.current = true;
      runTour();
    }
  }, [autoTour, initialPrompt, runTour]);

  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#030308] ${compact ? 'h-[520px]' : 'h-[min(78vh,820px)]'}`}>
      <StudioTopBar onStartTour={runTour} tourRunning={tourRunning} showTourControls={showTourControls} />
      {narration && (
        <p className="border-b border-violet-500/20 bg-violet-950/30 px-4 py-2 text-[11px] leading-relaxed text-violet-200">{narration}</p>
      )}
      <div className="border-b border-zinc-800 p-2">
        <EventLoopStrip activePhase={activePhase} />
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[200px_1fr_320px]">
        <HermesSidebar skills={skills} />
        <HarnessPanel
          files={files}
          activeFile={activeFile}
          onSelectFile={setActiveFile}
          panel={panel}
          onPanelChange={setPanel}
          terminalLines={terminalLines}
          previewHtml={showPreview ? PREVIEW_HTML : undefined}
        />
        <OmniPanel
          messages={messages}
          input={input}
          onInputChange={setInput}
          onSend={(t) => runPrompt(t ?? input)}
          busy={busy}
          starterChips={STARTER_CHIPS}
        />
      </div>
      {!compact && (
        <div className="border-t border-zinc-800 p-3">
          <ColdStartTable activeClass={activeClass} />
        </div>
      )}
    </div>
  );
}

