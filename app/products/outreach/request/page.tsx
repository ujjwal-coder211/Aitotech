'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RequestAccessPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    bankName: '',
    branchName: '',
    pinCodes: '',
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/outreach-admin?action=request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        const hint =
          data.error?.includes('not configured') || res.status === 503
            ? 'Server not configured — contact Aitotech admin.'
            : data.error || 'Submit failed';
        throw new Error(hint);
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submit failed');
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="section-pad pt-20 sm:pt-24">
        <div className="container-page max-w-lg text-center">
          <h1 className="font-display text-2xl font-bold text-white">Request submitted</h1>
          <p className="mt-4 text-zinc-500">
            Aitotech admin will review and email your login ID and password. You cannot sign in until approved.
          </p>
          <Link href="/products/outreach/download" className="btn-primary mt-8 inline-block">
            Download app
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page max-w-lg">
        <p className="eyebrow mb-3">Bank officers</p>
        <h1 className="font-display text-3xl font-bold text-white">Request Outreach access</h1>
        <p className="mt-3 text-zinc-500">
          Self-registration is off. Submit details — admin approves and sends credentials by email.
        </p>

        {error ? (
          <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">{error}</div>
        ) : null}

        <form onSubmit={submit} className="card mt-8 space-y-4 p-6">
          {(['name', 'email', 'phone', 'bankName', 'branchName'] as const).map((key) => (
            <label key={key} className="block text-sm">
              <span className="text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
              <input
                className="input-field mt-1 w-full"
                type={key === 'email' ? 'email' : 'text'}
                autoComplete={key === 'email' ? 'email' : key === 'name' ? 'name' : 'off'}
                required={key === 'name' || key === 'email'}
                value={form[key]}
                onChange={(ev) => setForm((f) => ({ ...f, [key]: ev.target.value }))}
              />
            </label>
          ))}
          <label className="block text-sm">
            <span className="text-zinc-400">PIN codes (optional, comma separated)</span>
            <input
              className="input-field mt-1 w-full"
              placeholder="400001, 400002"
              value={form.pinCodes}
              onChange={(ev) => setForm((f) => ({ ...f, pinCodes: ev.target.value }))}
            />
          </label>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'Submitting…' : 'Submit request'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-600">
          Already have login?{' '}
          <Link href="/products/outreach/download" className="text-brand-light hover:underline">
            Open app
          </Link>
        </p>
      </div>
    </div>
  );
}
