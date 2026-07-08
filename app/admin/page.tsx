import { isSupabaseConfigured } from '@/lib/supabase/server';
import { requireAdminClient } from '@/lib/supabase/admin.server';
import AdminBar from './AdminBar';
import LeadsTable from './LeadsTable';

export const dynamic = 'force-dynamic';

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  status: string;
  created_at: string;
}

/**
 * Admin dashboard — list of contact form leads.
 */
export default async function AdminDashboard() {
  if (!isSupabaseConfigured()) {
    return (
      <>
        <AdminBar active="leads" />
        <SetupNotice />
      </>
    );
  }

  const supabase = await requireAdminClient();
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  const list = (leads ?? []) as Lead[];
  const newCount = list.filter((l) => l.status === 'new').length;

  return (
    <>
      <AdminBar active="leads" />

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Total Leads" value={list.length} />
        <Stat label="New" value={newCount} accent />
        <Stat label="Read" value={list.filter((l) => l.status === 'read').length} />
        <Stat label="Archived" value={list.filter((l) => l.status === 'archived').length} />
      </div>

      {error ? (
        <p className="glass rounded-2xl p-6 text-sm text-red-300">
          Could not load leads: {error.message}. Make sure you ran the SQL schema.
        </p>
      ) : list.length === 0 ? (
        <p className="glass rounded-2xl p-8 text-center text-slate-500">
          No leads yet. Submissions from the contact form will appear here.
        </p>
      ) : (
        <LeadsTable leads={list} />
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

function SetupNotice() {
  return (
    <div className="glass rounded-2xl border border-amber-500/30 p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold text-white">Supabase not configured yet</h2>
      <p className="mt-2 text-sm text-slate-400">
        Add your Supabase environment variables (see <code className="text-cyan-400">.env.example</code>) and run the SQL in{' '}
        <code className="text-cyan-400">supabase/schema.sql</code>, then refresh this page.
      </p>
    </div>
  );
}
