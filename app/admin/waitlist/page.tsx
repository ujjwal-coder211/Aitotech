import { isSupabaseConfigured } from '@/lib/supabase/server';
import { requireAdminClient } from '@/lib/supabase/admin.server';
import AdminBar from '../AdminBar';

export const dynamic = 'force-dynamic';

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  role: string;
  interest: string;
  status: string;
  created_at: string;
}

export default async function AdminWaitlistPage() {
  if (!isSupabaseConfigured()) {
    return (
      <>
        <AdminBar active="waitlist" />
        <p className="glass rounded-2xl p-6 text-sm text-slate-400">
          Configure Supabase and run <code className="text-cyan-400">supabase/schema.sql</code> (aksh_waitlist table).
        </p>
      </>
    );
  }

  const supabase = await requireAdminClient();
  const { data, error } = await supabase
    .from('aksh_waitlist')
    .select('*')
    .order('created_at', { ascending: false });

  const list = (data ?? []) as WaitlistEntry[];

  return (
    <>
      <AdminBar active="waitlist" />
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-white">Routely Waitlist</h1>
        <p className="mt-1 text-sm text-slate-500">Signups from /routely launch page</p>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Stat label="Total" value={list.length} accent />
        <Stat label="Studio interest" value={list.filter((e) => e.interest === 'studio' || e.interest === 'both').length} />
        <Stat label="Developers" value={list.filter((e) => e.role === 'developer').length} />
      </div>
      {error ? (
        <p className="text-red-300">Error: {error.message}</p>
      ) : list.length === 0 ? (
        <p className="glass rounded-2xl p-8 text-center text-slate-500">No waitlist signups yet.</p>
      ) : (
        <div className="glass overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-slate-800 text-slate-500">
              <tr>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Email</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Interest</th>
                <th className="p-4 font-medium">When</th>
              </tr>
            </thead>
            <tbody>
              {list.map((e) => (
                <tr key={e.id} className="border-b border-slate-800/50 text-slate-300">
                  <td className="p-4 text-white">{e.name}</td>
                  <td className="p-4">{e.email}</td>
                  <td className="p-4 capitalize">{e.role}</td>
                  <td className="p-4 capitalize">{e.interest}</td>
                  <td className="p-4 text-slate-500">{new Date(e.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="glass rounded-2xl p-4">
      <p className={`font-display text-2xl font-bold ${accent ? 'text-cyan-400' : 'text-white'}`}>{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}

