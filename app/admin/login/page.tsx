'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

/**
 * Admin login — Supabase email/password auth.
 * Create the user in Supabase Auth and set app_metadata.role = "admin".
 */
export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

      if (authError) {
        setError(authError.message);
        setLoading(false);
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch {
      setError('Login failed. Check your Supabase configuration.');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 block text-center font-display text-2xl font-bold text-white">
          Aito<span className="text-cyan-400">Tech.</span>
        </Link>

        <form onSubmit={handleSubmit} className="glass-strong space-y-5 rounded-3xl border border-cyan-500/20 p-6 sm:p-8">
          <div className="text-center">
            <h1 className="font-display text-xl font-bold text-white sm:text-2xl">Admin Login</h1>
            <p className="mt-1 text-sm text-slate-500">Sign in to manage leads & content</p>
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-600/50 bg-abyss/80 px-4 py-3 text-white placeholder-slate-600 transition-all focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              placeholder="admin@aitotech.in"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-600/50 bg-abyss/80 px-4 py-3 text-white placeholder-slate-600 transition-all focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300" role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <p className="text-center text-xs text-slate-600">
            <Link href="/" className="hover:text-cyan-400">
              ← Back to website
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
