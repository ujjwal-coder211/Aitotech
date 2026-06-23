import { NextRequest, NextResponse } from 'next/server';
import {
  clearSessionCookie,
  isPanelConfigured,
  setSessionCookie,
  verifyPanelPassword,
} from '@/lib/outreach-admin-session.server';

const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

function clientKey(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const row = loginAttempts.get(key);
  if (!row || now > row.resetAt) {
    loginAttempts.set(key, { count: 0, resetAt: now + WINDOW_MS });
    return false;
  }
  return row.count >= MAX_ATTEMPTS;
}

function recordAttempt(key: string) {
  const now = Date.now();
  const row = loginAttempts.get(key);
  if (!row || now > row.resetAt) {
    loginAttempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return;
  }
  row.count += 1;
}

export async function POST(request: NextRequest) {
  let body: { action?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (body.action === 'logout') {
    const res = NextResponse.json({ ok: true });
    return clearSessionCookie(res);
  }

  if (body.action !== 'login') {
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  }

  if (!isPanelConfigured()) {
    return NextResponse.json(
      { error: 'Admin login not configured on server' },
      { status: 503 }
    );
  }

  const key = clientKey(request);
  if (isRateLimited(key)) {
    return NextResponse.json(
      { error: 'Too many attempts. Wait 15 minutes.' },
      { status: 429 }
    );
  }

  const password = typeof body.password === 'string' ? body.password : '';
  if (!verifyPanelPassword(password)) {
    recordAttempt(key);
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  loginAttempts.delete(key);
  const res = NextResponse.json({ ok: true });
  return setSessionCookie(res);
}
