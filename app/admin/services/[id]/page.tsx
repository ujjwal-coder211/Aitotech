import { notFound } from 'next/navigation';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';
import AdminBar from '../../AdminBar';
import ServiceForm from '../ServiceForm';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditServicePage({ params }: PageProps) {
  const { id } = await params;

  if (!isSupabaseConfigured()) notFound();

  const supabase = await createClient();
  const { data: service } = await supabase.from('services').select('*').eq('id', id).single();

  if (!service) notFound();

  return (
    <>
      <AdminBar active="services" />
      <h1 className="mb-6 font-display text-xl font-semibold text-white">Edit: {service.title}</h1>
      <ServiceForm service={service} />
    </>
  );
}
