import crypto from 'crypto';
import type { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'outreach_admin_session';
const MAX_AGE_SEC = 8 * 60 * 60;

function sessionSecret(): string {
  return (
    process.env.OUTREACH_SESSION_SECRET?.trim() ||
    process.env.OUTREACH_PANEL_PASSWORD?.trim() ||
    ''
  );
}

export function getPanelPassword(): string {
  return process.env.OUTREACH_PANEL_PASSWORD?.trim() || '';
}

export function isPanelConfigured(): boolean {
  return getPanelPassword().length >= 8 && sessionSecret().length >= 8;
}

export function createSessionToken(): string {
  const secret = sessionSecret();
  const exp = Date.now() + MAX_AGE_SEC * 1000;
  const payload = JSON.stringify({ v: 1, exp });
  const sig = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return Buffer.from(`${payload}.${sig}`).toString('base64url');
}

export function verifySessionToken(token: string): boolean {
  try {
    const secret = sessionSecret();
    if (!secret) return false;

    const decoded = Buffer.from(token, 'base64url').toString('utf8');
    const dot = decoded.lastIndexOf('.');
    if (dot < 0) return false;

    const payload = decoded.slice(0, dot);
    const sig = decoded.slice(dot + 1);
    const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');

    const sigBuf = Buffer.from(sig, 'hex');
    const expBuf = Buffer.from(expected, 'hex');
    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return false;
    }

    const parsed = JSON.parse(payload) as { exp?: number };
    return typeof parsed.exp === 'number' && parsed.exp > Date.now();
  } catch {
    return false;
  }
}

export function verifySession(request: NextRequest): boolean {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}

export function setSessionCookie(response: NextResponse): NextResponse {
  response.cookies.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE_SEC,
  });
  return response;
}

export function clearSessionCookie(response: NextResponse): NextResponse {
  response.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return response;
}

export function verifyPanelPassword(input: string): boolean {
  const expected = getPanelPassword();
  if (!expected || expected.length < 8) return false;

  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

/** Returns redirect/401/503 response if blocked, or null if allowed. */
export function guardOutreachAdmin(request: NextRequest): NextResponse | null {
  const path = request.nextUrl.pathname;
  const isLoginPage = path === '/products/outreach/admin/login';
  const isAdminPage = path.startsWith('/products/outreach/admin');
  const isAdminApi = path === '/api/outreach-admin';
  const isAuthApi = path === '/api/outreach-admin/auth';

  if (!isAdminPage && !isAdminApi) return null;
  if (isAuthApi) return null;

  if (isAdminApi) {
    const action = request.nextUrl.searchParams.get('action');
    const isPublicRequest =
      request.method === 'POST' && action === 'request-access';
    if (isPublicRequest) return null;

    if (!isPanelConfigured()) {
      return NextResponse.json({ error: 'Admin not configured on server' }, { status: 503 });
    }
    if (!verifySession(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return null;
  }

  if (isAdminPage) {
    if (!isPanelConfigured()) {
      if (isLoginPage) return null;
      const url = request.nextUrl.clone();
      url.pathname = '/products/outreach/admin/login';
      return NextResponse.redirect(url);
    }

    if (isLoginPage) {
      if (verifySession(request)) {
        return NextResponse.redirect(new URL('/products/outreach/admin', request.url));
      }
      return null;
    }

    if (!verifySession(request)) {
      return NextResponse.redirect(new URL('/products/outreach/admin/login', request.url));
    }
  }

  return null;
}
