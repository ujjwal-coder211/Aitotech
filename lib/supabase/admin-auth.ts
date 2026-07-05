import type { User } from '@supabase/supabase-js';

type AdminCandidate = Pick<User, 'app_metadata'> | null | undefined;

/**
 * Supabase "authenticated" only proves identity. Admin access requires a
 * non-user-editable app_metadata claim set by a Supabase owner/service role.
 */
export function isSupabaseAdmin(user: AdminCandidate) {
  const metadata = user?.app_metadata as Record<string, unknown> | undefined;
  if (!metadata) return false;

  if (metadata.role === 'admin' || metadata.is_admin === true) return true;

  const roles = metadata.roles;
  if (Array.isArray(roles)) return roles.includes('admin');
  if (typeof roles === 'string') {
    return roles
      .split(',')
      .map((role) => role.trim())
      .includes('admin');
  }

  return false;
}
