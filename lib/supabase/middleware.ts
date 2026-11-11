import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { isAdmin } from './admin-auth';

/**
 * Refreshes the Supabase auth session and protects /admin routes.
 * Called from the root middleware.ts.
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // If Supabase isn't configured, auth cannot be checked — so fail CLOSED on
  // the admin area rather than letting it render unauthenticated. Everything
  // else is public and passes through.
  if (!url || !key) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
      return new NextResponse('Admin is unavailable: authentication is not configured.', {
        status: 503,
      });
    }
    return response;
  }

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isAdminArea = path.startsWith('/admin');
  const isLoginPage = path === '/admin/login';

  // Not logged in + trying to access protected admin page → redirect to login
  if (isAdminArea && !isLoginPage && !user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/admin/login';
    return NextResponse.redirect(redirectUrl);
  }

  // Logged in, but not an admin. Being signed in to Supabase is NOT the same
  // as being allowed in here, and this is the check whose absence let any
  // authenticated account read and delete every lead.
  //
  // A plain 403, not a redirect to /admin/login: they are already signed in,
  // so bouncing them to the login page would send them straight back here and
  // spin. It also tells the truth -- the problem is the account, not the
  // session.
  //
  // This runs for server actions too. Next.js posts them to the page's own
  // route, so middleware sees them; that matters because the actions in
  // app/admin/actions.ts are independently invocable endpoints, not just
  // buttons on a page. They re-check anyway, because one gate in front of a
  // write is one gate too few.
  if (isAdminArea && !isLoginPage && user && !isAdmin(user)) {
    return new NextResponse('Not authorised for the admin area.', { status: 403 });
  }

  // Already logged in + on login page → send to dashboard. Only for an actual
  // admin; otherwise a non-admin bounces to /admin, gets the 403 above, and
  // never sees a way out.
  if (isLoginPage && user && isAdmin(user)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/admin';
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}
