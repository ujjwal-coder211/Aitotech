"use client";

import type { RouteResult } from '@/lib/sairaRouting';
import RoutingBadge from './RoutingBadge';

export type ChatMsg = {
  role: 'user' | 'omni';
  text: string;
  routing?: RouteResult;
  streaming?: boolean;
};

export default function OmniPanel({
  messages,
  input,
  onInputChange,
  onSend,
  busy,
  starterChips,
}: {
  messages: ChatMsg[];
  input: string;
  onInputChange: (v: string) => void;
  onSend: (text?: string) => void;
  busy: boolean;
  starterChips: string[];
}) {
  return (
    <section className="flex h-full min-h-0 flex-col bg-[#050508]">
      <div className="border-b border-zinc-800 px-3 py-2.5">
        <p className="text-xs font-semibold text-white">Omni</p>
        <p className="text-[10px] text-zinc-500">Conductor · route · synthesize</p>
      </div>
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : ''}>
            {m.role === 'omni' && m.routing && (
              <div className="mb-1">
                <RoutingBadge routing={m.routing} compact />
              </div>
            )}
            <div
              className={`inline-block max-w-[95%] rounded-xl px-3 py-2 text-left text-[12px] leading-relaxed ${
                m.role === 'user' ? 'bg-violet-600 text-white' : 'border border-zinc-800 bg-[#0a0a0f] text-zinc-200'
              }`}
            >
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                {m.role === 'user' ? 'You' : 'Omni'}
              </p>
              <p className="whitespace-pre-wrap">{m.text || (m.streaming ? '…' : '')}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-zinc-800 p-3">
        <div className="mb-2 flex flex-wrap gap-1">
          {starterChips.map((chip) => (
            <button
              key={chip}
              type="button"
              disabled={busy}
              onClick={() => onSend(chip)}
              className="rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-400 hover:border-violet-500/50 hover:text-violet-200 disabled:opacity-50"
            >
              {chip}
            </button>
          ))}
        </div>
        <textarea
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          rows={3}
          placeholder="Describe a coding task…"
          className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-[12px] text-white placeholder:text-zinc-600"
        />
        <button
          type="button"
          disabled={busy || !input.trim()}
          onClick={() => onSend()}
          className="mt-2 w-full rounded-lg bg-violet-600 py-2 text-xs font-semibold text-white hover:bg-violet-500 disabled:opacity-50"
        >
          {busy ? 'Omni thinking…' : 'Send to Omni'}
        </button>
      </div>
    </section>
  );
}
