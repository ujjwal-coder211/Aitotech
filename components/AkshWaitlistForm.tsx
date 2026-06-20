'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { aksh } from '@/data/siteContent';

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
        body: JSON.stringify({ name, email, role, interest }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || aksh.form.error);
      }
      setDone(true);
      setName('');
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : aksh.form.error);
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
        <p className="font-display text-lg font-semibold text-white">{aksh.form.success}</p>
        <p className="mt-2 text-sm text-zinc-400">Team Aitotech · Aksh by Omni</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-2xl border border-line-strong p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-zinc-400">Name</label>
            <input
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={aksh.form.namePlaceholder}
              className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-light focus:outline-none focus:ring-1 focus:ring-brand-light"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-zinc-400">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={aksh.form.emailPlaceholder}
              className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-light focus:outline-none focus:ring-1 focus:ring-brand-light"
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-zinc-400">{aksh.form.roleLabel}</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-white focus:border-brand-light focus:outline-none"
          >
            {aksh.form.roles.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-zinc-400">{aksh.form.interestLabel}</label>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-white focus:border-brand-light focus:outline-none"
          >
            {aksh.form.interests.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary mt-6 w-full disabled:opacity-50">
        {loading ? 'Joining…' : aksh.cta}
      </button>
      <p className="mt-3 text-center text-xs text-zinc-500">{aksh.ctaHint}</p>
    </form>
  );
}
