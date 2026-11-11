'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { isAdmin } from '@/lib/supabase/admin-auth';

/**
 * Prove the caller is an admin before anything is written.
 *
 * Every action below used to go straight to the database and rely on two
 * things that were both wrong: that middleware had already vetted the caller
 * (it only checked they were signed in at all), and that RLS would stop a
 * non-admin (it granted the whole `authenticated` role delete on
 * contact_messages and ALL on services).
 *
 * A server action is its own endpoint, not a button. Anyone who can reach the
 * route can invoke it, so the check belongs here as well as in middleware --
 * and `getUser()` is used rather than `getSession()` because it revalidates
 * the token against the auth server instead of trusting a cookie's contents.
 *
 * Throws rather than returning a flag so a new action cannot forget to look at
 * the result. An uncaught throw in a server action is a failed request, which
 * is the correct outcome for an unauthorised write.
 */
async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isAdmin(user)) {
    // Deliberately identical whether they are signed out, signed in as
    // somebody else, or signed in without the claim. The caller learns only
    // that they may not do this.
    throw new Error('Not authorised.');
  }
  return supabase;
}

/**
 * Sign the admin out and return to login.
 *
 * No admin check: signing out is the one action that must work for anybody
 * holding a session, including a non-admin who needs a way out of the 403.
 */
export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}

/** Update a contact message's status (new | read | archived). */
export async function updateLeadStatus(id: string, status: string) {
  const supabase = await requireAdmin();
  await supabase.from('contact_messages').update({ status }).eq('id', id);
  revalidatePath('/admin');
}

/** Delete a contact message. */
export async function deleteLead(id: string) {
  const supabase = await requireAdmin();
  await supabase.from('contact_messages').delete().eq('id', id);
  revalidatePath('/admin');
}

/** Create or update a service (CMS). */
export async function saveService(formData: FormData) {
  const supabase = await requireAdmin();

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
  const supabase = await requireAdmin();
  await supabase.from('services').delete().eq('id', id);
  revalidatePath('/admin/services');
  revalidatePath('/services');
}
