'use client';

import Link from 'next/link';
import { saveService } from '../actions';

interface ServiceFormProps {
  service?: {
    id: string;
    slug: string;
    title: string;
    short: string;
    description: string;
    features: string[];
    icon: string;
    accent: string;
    gradient: string;
    sort_order: number;
    published: boolean;
  };
}

const ICONS = ['database', 'workflow', 'invoice', 'ai'];
const ACCENTS = [
  { label: 'Cyan', value: 'text-cyan-400' },
  { label: 'Sky', value: 'text-sky-400' },
  { label: 'Violet', value: 'text-violet-400' },
  { label: 'Emerald', value: 'text-emerald-400' },
];

const inputClass =
  'w-full rounded-xl border border-slate-600/50 bg-abyss/80 px-4 py-2.5 text-white placeholder-slate-600 transition-all focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20';

/** Reusable create/edit form — submits to the saveService server action. */
export default function ServiceForm({ service }: ServiceFormProps) {
  const isEdit = Boolean(service);

  return (
    <form action={saveService} className="glass-strong space-y-5 rounded-3xl border border-cyan-500/20 p-6 sm:p-8">
      {service && <input type="hidden" name="id" value={service.id} />}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">Title</label>
          <input name="title" required defaultValue={service?.title} className={inputClass} placeholder="Data Automation" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">Slug (URL)</label>
          <input name="slug" required defaultValue={service?.slug} className={inputClass} placeholder="data-automation" />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">Short tagline</label>
        <input name="short" required defaultValue={service?.short} className={inputClass} placeholder="Unify pipelines. Eliminate manual ETL." />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">Description</label>
        <textarea name="description" required rows={4} defaultValue={service?.description} className={`${inputClass} resize-y`} placeholder="Full service description..." />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">Features (one per line)</label>
        <textarea
          name="features"
          rows={4}
          defaultValue={service?.features?.join('\n')}
          className={`${inputClass} resize-y`}
          placeholder={'Real-time CDC sync\nSchema intelligence\nQuality scoring'}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">Icon</label>
          <select name="icon" defaultValue={service?.icon ?? 'ai'} className={inputClass}>
            {ICONS.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">Accent colour</label>
          <select name="accent" defaultValue={service?.accent ?? 'text-cyan-400'} className={inputClass}>
            {ACCENTS.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">Sort order</label>
          <input name="sort_order" type="number" defaultValue={service?.sort_order ?? 0} className={inputClass} />
        </div>
      </div>

      <input type="hidden" name="gradient" value={service?.gradient ?? 'from-cyan-500/20 via-sky-500/10 to-transparent'} />

      <label className="flex items-center gap-3 text-sm text-slate-300">
        <input type="checkbox" name="published" defaultChecked={service?.published ?? true} className="h-4 w-4 accent-cyan-500" />
        Published (visible on website)
      </label>

      <div className="flex gap-3 pt-2">
        <button type="submit" className="btn-primary text-sm">
          {isEdit ? 'Save Changes' : 'Create Service'}
        </button>
        <Link href="/admin/services" className="btn-ghost text-sm">
          Cancel
        </Link>
      </div>
    </form>
  );
}
