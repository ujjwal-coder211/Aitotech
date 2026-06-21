'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { routely } from '@/data/siteContent';

export default function AkshWaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('developer');
  const [interest, setInterest] = useState('both');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/aksh-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role, interest, product: 'routely' }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || routely.form.error);
      }
      setDone(true);
      setName('');
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : routely.form.error);
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-strong rounded-2xl border border-emerald-500/30 p-8 text-center"
      >
        <p className="text-3xl mb-2">✓</p>
        <p className="font-display text-lg font-semibold text-white">{routely.form.success}</p>
        <p className="mt-2 text-sm text-zinc-400">Team AitoTech · Routely</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6 shadow-xl shadow-black/40 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-zinc-400">Name</label>
            <input
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={routely.form.namePlaceholder}
              className="w-full rounded-lg border border-zinc-800 bg-[#030712] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-zinc-400">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={routely.form.emailPlaceholder}
              className="w-full rounded-lg border border-zinc-800 bg-[#030712] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-zinc-400">{routely.form.roleLabel}</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg border border-zinc-800 bg-[#030712] px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none"
          >
            {routely.form.roles.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-zinc-400">{routely.form.interestLabel}</label>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full rounded-lg border border-zinc-800 bg-[#030712] px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none"
          >
            {routely.form.interests.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      <button type="submit" disabled={loading} className="mt-6 w-full rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:opacity-50">
        {loading ? 'Joining…' : routely.cta}
      </button>
      <p className="mt-3 text-center text-xs text-zinc-500">{routely.ctaHint}</p>
    </form>
  );
}
