import { redirect } from 'next/navigation';
import { isSupabaseAdmin } from '@/lib/supabase/admin-auth';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';

export async function requireAdminClient() {
  if (!isSupabaseConfigured()) redirect('/admin/login');

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isSupabaseAdmin(user)) redirect('/admin/login');

  return supabase;
}
