import crypto from 'crypto';
import type { NextRequest, NextResponse } from 'next/server';
import { OUTREACH_ADMIN_COOKIE } from './outreach-admin-guard.edge';

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
  const token = request.cookies.get(OUTREACH_ADMIN_COOKIE)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}

export function setSessionCookie(response: NextResponse): NextResponse {
  response.cookies.set(OUTREACH_ADMIN_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE_SEC,
  });
  return response;
}

export function clearSessionCookie(response: NextResponse): NextResponse {
  response.cookies.set(OUTREACH_ADMIN_COOKIE, '', {
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

  const a = Buffer.from(input, 'utf8');
  const b = Buffer.from(expected, 'utf8');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
