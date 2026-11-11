/**
 * Who is allowed into /admin.
 *
 * The bug this file closes: being signed in to Supabase was treated as being
 * an admin. The middleware checked `user` was truthy and nothing else, every
 * server action trusted that check, and the RLS policies granted the whole
 * `authenticated` role read/update/delete on contact_messages and ALL on
 * services. So any account that could log in -- including one created through
 * public signup or an OAuth provider -- could read every lead, delete them,
 * and rewrite the public services CMS.
 *
 * Authentication is not authorization. This is the authorization half.
 *
 * The claim lives in `app_metadata`, which is the important detail:
 *
 *   app_metadata  -- only writable with the service-role key or from the
 *                    Supabase dashboard. A user cannot change their own.
 *   user_metadata -- writable by the user themselves via updateUser().
 *
 * Checking `user_metadata` would be no check at all: anyone could promote
 * themselves to admin with one API call. Nothing here reads it.
 *
 * To grant admin, set the claim on the account (Dashboard -> Authentication ->
 * the user -> App Metadata, or the Admin API):
 *
 *   { "role": "admin" }
 *
 * `roles: ["admin"]` and `is_admin: true` are accepted too, so an existing
 * convention does not have to be renamed.
 */

import type { User } from '@supabase/supabase-js';

/**
 * Does this user carry a non-self-editable admin claim?
 *
 * Fails closed on every shape it does not recognise: no user, no metadata, a
 * string where an array was expected. An unreadable claim is not an admin.
 */
export function isAdmin(user: User | null | undefined): boolean {
  if (!user) return false;

  // Deliberately app_metadata only. See the note above.
  const meta = user.app_metadata as Record<string, unknown> | undefined;
  if (!meta || typeof meta !== 'object') return false;

  if (meta.is_admin === true) return true;

  if (typeof meta.role === 'string' && meta.role.toLowerCase() === 'admin') return true;

  if (Array.isArray(meta.roles)) {
    return meta.roles.some(
      (r) => typeof r === 'string' && r.toLowerCase() === 'admin'
    );
  }

  return false;
}

/** The claim shape, for the setup docs and for error messages. */
export const ADMIN_CLAIM_HINT =
  'Set app_metadata to {"role":"admin"} on the account in Supabase ' +
  'Authentication -> Users. user_metadata is NOT accepted: a user can edit ' +
  'their own, which would let anyone grant themselves admin.';
