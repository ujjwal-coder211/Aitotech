'use client';

import Link from 'next/link';
import { useTransition } from 'react';
import { deleteService } from '../actions';

interface ServiceRowProps {
  service: { id: string; slug: string; title: string; short: string; published: boolean };
}

export default function ServiceRow({ service }: ServiceRowProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="glass flex items-center gap-4 rounded-2xl p-4">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-white">{service.title}</span>
          <span
            className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
              service.published
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                : 'border-slate-500/30 bg-slate-500/10 text-slate-400'
            }`}
          >
            {service.published ? 'Published' : 'Draft'}
          </span>
        </div>
        <p className="mt-0.5 truncate text-sm text-slate-500">/{service.slug} — {service.short}</p>
      </div>

      <Link
        href={`/admin/services/${service.id}`}
        className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400"
      >
        Edit
      </Link>
      <button
        disabled={isPending}
        onClick={() => {
          if (confirm(`Delete "${service.title}"?`)) {
            startTransition(() => deleteService(service.id));
          }
        }}
        className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:border-red-500/40 hover:text-red-400 disabled:opacity-50"
      >
        Delete
      </button>
    </div>
  );
}
