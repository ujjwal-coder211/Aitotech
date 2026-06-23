'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OutreachAdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/outreach-admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ action: 'login', password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      router.push('/products/outreach/admin');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  if (!ready) {
    return (
      <div className="section-pad flex min-h-[50vh] items-center justify-center pt-24">
        <p className="text-zinc-500">Loading…</p>
      </div>
    );
  }

  return (
    <div className="section-pad flex min-h-[70vh] items-center justify-center pt-24">
      <div className="container-page max-w-md">
        <p className="eyebrow mb-3">Internal</p>
        <h1 className="font-display text-2xl font-bold text-white">Outreach Admin Login</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Aitotech admin password (Vercel env: OUTREACH_PANEL_PASSWORD)
        </p>

        <form onSubmit={submit} className="card mt-8 space-y-4 p-6">
          {error ? (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
              {error}
              {error.includes('not configured') ? (
                <p className="mt-2 text-xs text-red-300/80">
                  Vercel → Settings → Environment Variables → OUTREACH_PANEL_PASSWORD + OUTREACH_SESSION_SECRET
                </p>
              ) : null}
            </div>
          ) : null}
          <label className="block text-sm">
            <span className="text-zinc-400">Admin password</span>
            <input
              className="input-field mt-1 w-full"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </label>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-600">
          <Link href="/products/outreach" className="text-brand-light hover:underline">
            ← Back to Outreach
          </Link>
        </p>
      </div>
    </div>
  );
}
