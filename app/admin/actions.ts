'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

/** Sign the admin out and return to login. */
export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}

/** Update a lead's status (new | read | archived). */
export async function updateLeadStatus(id: string, status: string) {
  const supabase = await createClient();
  await supabase.from('leads').update({ status }).eq('id', id);
  revalidatePath('/admin');
}

/** Delete a lead. */
export async function deleteLead(id: string) {
  const supabase = await createClient();
  await supabase.from('leads').delete().eq('id', id);
  revalidatePath('/admin');
}

/** Create or update a service (CMS). */
export async function saveService(formData: FormData) {
  const supabase = await createClient();

  const id = (formData.get('id') as string) || null;
  const featuresRaw = (formData.get('features') as string) || '';
  const features = featuresRaw
    .split('\n')
    .map((f) => f.trim())
    .filter(Boolean);

  const record = {
    slug: (formData.get('slug') as string)?.trim(),
    title: (formData.get('title') as string)?.trim(),
    short: (formData.get('short') as string)?.trim(),
    description: (formData.get('description') as string)?.trim(),
    features,
    icon: (formData.get('icon') as string) || 'ai',
    accent: (formData.get('accent') as string) || 'text-cyan-400',
    gradient:
      (formData.get('gradient') as string) || 'from-cyan-500/20 via-sky-500/10 to-transparent',
    sort_order: Number(formData.get('sort_order') || 0),
    published: formData.get('published') === 'on',
  };

  if (id) {
    await supabase.from('services').update(record).eq('id', id);
  } else {
    await supabase.from('services').insert(record);
  }

  revalidatePath('/admin/services');
  revalidatePath('/services');
  revalidatePath('/');
  redirect('/admin/services');
}

/** Delete a service. */
export async function deleteService(id: string) {
  const supabase = await createClient();
  await supabase.from('services').delete().eq('id', id);
  revalidatePath('/admin/services');
  revalidatePath('/services');
}
