import Link from 'next/link';
import { isSupabaseConfigured } from '@/lib/supabase/server';
import { requireAdminClient } from '@/lib/supabase/admin.server';
import AdminBar from '../AdminBar';
import ServiceRow from './ServiceRow';

export const dynamic = 'force-dynamic';

interface ServiceRecord {
  id: string;
  slug: string;
  title: string;
  short: string;
  published: boolean;
  sort_order: number;
}

/**
 * Admin CMS — list & manage services (create / edit / delete / publish).
 */
export default async function AdminServicesPage() {
  if (!isSupabaseConfigured()) {
    return (
      <>
        <AdminBar active="services" />
        <p className="glass rounded-2xl border border-amber-500/30 p-6 text-sm text-slate-400">
          Configure Supabase and run the SQL schema to manage services here.
        </p>
      </>
    );
  }

  const supabase = await requireAdminClient();
  const { data } = await supabase.from('services').select('*').order('sort_order', { ascending: true });
  const services = (data ?? []) as ServiceRecord[];

  return (
    <>
      <AdminBar active="services" />

      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-xl font-semibold text-white">Services ({services.length})</h1>
        <Link href="/admin/services/new" className="btn-primary text-sm">
          + New Service
        </Link>
      </div>

      {services.length === 0 ? (
        <p className="glass rounded-2xl p-8 text-center text-slate-500">No services yet. Add one to get started.</p>
      ) : (
        <div className="space-y-3">
          {services.map((s) => (
            <ServiceRow key={s.id} service={s} />
          ))}
        </div>
      )}
    </>
  );
}
