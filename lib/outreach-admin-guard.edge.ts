import { type NextRequest, NextResponse } from 'next/server';

/** Edge-safe — uses Web Crypto (no Node.js crypto; middleware runs on Edge). */
export const OUTREACH_ADMIN_COOKIE = 'outreach_admin_session';

function sessionSecret(): string {
  return (
    process.env.OUTREACH_SESSION_SECRET?.trim() ||
    process.env.OUTREACH_PANEL_PASSWORD?.trim() ||
    ''
  );
}

/**
 * Verifies the HMAC-signed session token created by
 * lib/outreach-admin-session.server.ts, using Web Crypto so it runs on Edge.
 * Token format: base64url(`${jsonPayload}.${hexHmacSha256}`).
 */
async function verifyTokenEdge(token: string): Promise<boolean> {
  try {
    const secret = sessionSecret();
    if (!secret) return false;

    const b64 = token.replace(/-/g, '+').replace(/_/g, '/');
    const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4);
    const decoded = atob(padded);
    const dot = decoded.lastIndexOf('.');
    if (dot < 0) return false;

    const payload = decoded.slice(0, dot);
    const sig = decoded.slice(dot + 1);

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    const mac = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
    const expected = Array.from(new Uint8Array(mac))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    if (expected.length !== sig.length) return false;
    let diff = 0;
    for (let i = 0; i < expected.length; i++) {
      diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
    }
    if (diff !== 0) return false;

    const parsed = JSON.parse(payload) as { exp?: number };
    return typeof parsed.exp === 'number' && parsed.exp > Date.now();
  } catch {
    return false;
  }
}

export async function guardOutreachAdminEdge(request: NextRequest): Promise<NextResponse | null> {
  const path = request.nextUrl.pathname;
  const isLoginPage = path === '/products/outreach/admin/login';
  const isAdminPage = path.startsWith('/products/outreach/admin');
  const isAdminApi = path === '/api/outreach-admin';
  const isAuthApi = path === '/api/outreach-admin/auth';

  if (!isAdminPage && !isAdminApi) return null;
  if (isAuthApi) return null;

  const token = request.cookies.get(OUTREACH_ADMIN_COOKIE)?.value;
  const hasValidSession = token ? await verifyTokenEdge(token) : false;

  if (isAdminApi) {
    const action = request.nextUrl.searchParams.get('action');
    const isPublicRequest = request.method === 'POST' && action === 'request-access';
    if (isPublicRequest) return null;
    if (!hasValidSession) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return null;
  }

  if (isAdminPage) {
    if (isLoginPage) {
      if (hasValidSession) {
        return NextResponse.redirect(new URL('/products/outreach/admin', request.url));
      }
      return null;
    }
    if (!hasValidSession) {
      return NextResponse.redirect(new URL('/products/outreach/admin/login', request.url));
    }
  }

  return null;
}
