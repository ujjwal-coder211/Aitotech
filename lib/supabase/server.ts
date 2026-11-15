import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

/**
 * Server-side Supabase client (Server Components, Route Handlers, Server Actions).
 * Reads/writes the auth session via cookies.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component — safe to ignore; middleware refreshes the session.
          }
        },
      },
    }
  );
}

/*
 * There was a createAdminClient() here, built on SUPABASE_SERVICE_ROLE_KEY.
 * It was exported and never called once: every page, route and action on this
 * site uses createClient() above, which holds the anon key and the visitor's
 * own session.
 *
 * Removed rather than left in place, because its only effect was to require
 * the service-role key as an environment variable on this deployment. That key
 * bypasses row-level security on every table - contacts, conversations,
 * invoices, payments - so a website build is the last place it should sit. One
 * mistake importing this into a client component would have exposed all of it,
 * and an unused export is exactly the kind of thing somebody reaches for later
 * because it is already there.
 *
 * If this site ever genuinely needs to bypass RLS, that belongs behind the
 * agent's API, which already authenticates with INGEST_API_KEY - not in the
 * Next.js bundle.
 */

/** True only when all required Supabase env vars are present. */
export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
