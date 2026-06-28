import Link from 'next/link';
import { signOut } from './actions';

/** Shared admin top bar with nav + logout. */
export default function AdminBar({ active }: { active: 'leads' | 'services' | 'waitlist' }) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-slate-800/70 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <Link href="/admin" className="font-display text-lg font-bold text-white">
          Aito<span className="text-cyan-400">Tech.</span>{' '}
          <span className="text-sm font-normal text-slate-500">Admin</span>
        </Link>
        <nav className="flex gap-1">
          <Link
            href="/admin"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              active === 'leads' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
            }`}
          >
            Leads
          </Link>
          <Link
            href="/admin/services"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              active === 'services' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
            }`}
          >
            Services
          </Link>
          <Link
            href="/admin/waitlist"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              active === 'waitlist' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
            }`}
          >
            Routely Waitlist
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/" className="text-sm text-slate-500 hover:text-cyan-400">
          View site â†—
        </Link>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-red-500/50 hover:text-red-400"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}

