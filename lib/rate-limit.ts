import type { NextRequest } from 'next/server';

/**
 * Lightweight in-memory rate limiter for API routes.
 * Per-instance only (resets on deploy/restart) — good enough to stop
 * casual spam and scripted floods without external infrastructure.
 */
const buckets = new Map<string, { count: number; resetAt: number }>();
const MAX_BUCKETS = 5000;

function prune(now: number) {
  if (buckets.size < MAX_BUCKETS) return;
  for (const [key, row] of buckets) {
    if (now > row.resetAt) buckets.delete(key);
  }
}

/** Returns true when the request is allowed, false when over the limit. */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  prune(now);

  const row = buckets.get(key);
  if (!row || now > row.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  row.count += 1;
  return row.count <= limit;
}

export function clientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}
