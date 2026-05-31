'use client';

import { useState, useTransition } from 'react';
import { updateLeadStatus, deleteLead } from './actions';

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  status: string;
  created_at: string;
}

const STATUS_STYLES: Record<string, string> = {
  new: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  read: 'bg-slate-500/15 text-slate-300 border-slate-500/30',
  archived: 'bg-amber-500/10 text-amber-300/80 border-amber-500/20',
};

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="space-y-3">
      {leads.map((lead) => {
        const isOpen = expanded === lead.id;
        return (
          <div key={lead.id} className="glass overflow-hidden rounded-2xl">
            <button
              onClick={() => setExpanded(isOpen ? null : lead.id)}
              className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-white/[0.02] sm:gap-4"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-white">{lead.name}</span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      STATUS_STYLES[lead.status] ?? STATUS_STYLES.read
                    }`}
                  >
                    {lead.status}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-sm text-slate-500">
                  {lead.email}
                  {lead.company ? ` · ${lead.company}` : ''}
                </p>
              </div>
              <span className="shrink-0 text-xs text-slate-600">
                {new Date(lead.created_at).toLocaleDateString()}
              </span>
              <span className={`shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {isOpen && (
              <div className="border-t border-slate-800/70 p-4">
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300">{lead.message}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href={`mailto:${lead.email}?subject=Re: Your AitoTech inquiry`}
                    className="rounded-lg bg-cyan-500/15 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-500/25"
                  >
                    Reply by email
                  </a>

                  {lead.status !== 'read' && (
                    <button
                      disabled={isPending}
                      onClick={() => startTransition(() => updateLeadStatus(lead.id, 'read'))}
                      className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 disabled:opacity-50"
                    >
                      Mark read
                    </button>
                  )}
                  {lead.status !== 'archived' && (
                    <button
                      disabled={isPending}
                      onClick={() => startTransition(() => updateLeadStatus(lead.id, 'archived'))}
                      className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:border-amber-500/40 hover:text-amber-300 disabled:opacity-50"
                    >
                      Archive
                    </button>
                  )}
                  <button
                    disabled={isPending}
                    onClick={() => {
                      if (confirm('Delete this lead permanently?')) {
                        startTransition(() => deleteLead(lead.id));
                      }
                    }}
                    className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:border-red-500/40 hover:text-red-400 disabled:opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
