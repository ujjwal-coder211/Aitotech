import { type NextRequest, NextResponse } from 'next/server';

/** Edge-safe — no Node.js crypto (middleware runs on Edge). */
export const OUTREACH_ADMIN_COOKIE = 'outreach_admin_session';

export function guardOutreachAdminEdge(request: NextRequest): NextResponse | null {
  const path = request.nextUrl.pathname;
  const isLoginPage = path === '/products/outreach/admin/login';
  const isAdminPage = path.startsWith('/products/outreach/admin');
  const isAdminApi = path === '/api/outreach-admin';
  const isAuthApi = path === '/api/outreach-admin/auth';

  if (!isAdminPage && !isAdminApi) return null;
  if (isAuthApi) return null;

  const hasCookie = Boolean(request.cookies.get(OUTREACH_ADMIN_COOKIE)?.value);

  if (isAdminApi) {
    const action = request.nextUrl.searchParams.get('action');
    const isPublicRequest = request.method === 'POST' && action === 'request-access';
    if (isPublicRequest) return null;
    if (!hasCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return null;
  }

  if (isAdminPage) {
    if (isLoginPage) {
      if (hasCookie) {
        return NextResponse.redirect(new URL('/products/outreach/admin', request.url));
      }
      return null;
    }
    if (!hasCookie) {
      return NextResponse.redirect(new URL('/products/outreach/admin/login', request.url));
    }
  }

  return null;
}
