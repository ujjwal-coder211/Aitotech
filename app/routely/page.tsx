'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import SairaStudio from '@/components/saira/SairaStudio';
import JsonLdScript from '@/components/seo/JsonLdScript';
import { routely, site } from '@/data/siteContent';
import { siteUrl } from '@/lib/seo/siteUrl';

const LAYERS = [
  { name: 'Omni', desc: '30B conductor — classify, route, synthesize' },
  { name: 'Harness', desc: 'Code, shell, git, browser tools' },
  { name: 'Hermes', desc: 'Memory, skills, training data' },
];

export default function RoutelyPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('developer');
  const [interest, setInterest] = useState('both');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Routely',
      applicationCategory: 'DeveloperApplication',
      description: routely.heroLead,
      url: `${siteUrl}/routely`,
    },
  ];

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
      if (!res.ok || !data.success) throw new Error(data.error || routely.form.error);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : routely.form.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <div className="pt-16 sm:pt-20">
        <section className="section-pad pb-12">
          <div className="container-page max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">{routely.badge}</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">{routely.headline}</h1>
            <p className="mt-4 text-lg text-zinc-300">{routely.subtitle}</p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">{routely.heroLead}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/routely/demo?tour=1" className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500">
                Try live demo
              </Link>
              <Link href="#waitlist" className="btn-secondary border-zinc-700 text-zinc-200">
                {routely.cta}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-800/80 bg-[#050508]/90 py-12">
          <div className="container-page">
            <h2 className="text-center font-display text-2xl font-bold text-white">SAIRA architecture</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {LAYERS.map((l) => (
                <article key={l.name} className="rounded-xl border border-zinc-800 bg-[#0a0a0f] p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-violet-300">{l.name}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{l.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-page max-w-6xl">
            <h2 className="mb-6 text-center font-display text-2xl font-bold text-white">See the interface</h2>
            <SairaStudio compact showTourControls={false} />
            <p className="mt-4 text-center text-sm text-zinc-500">
              <Link href="/routely/demo" className="text-violet-300 hover:underline">
                Open full-screen demo →
              </Link>
            </p>
          </div>
        </section>

        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page">
            <div className="grid gap-6 sm:grid-cols-2">
              {routely.features.map((f) => (
                <article key={f.title} className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-8">
                  <h3 className="font-display text-xl font-semibold text-violet-300">{f.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="section-pad border-t border-zinc-800/80 bg-violet-950/20">
          <div className="container-page max-w-xl">
            <h2 className="text-center font-display text-2xl font-bold text-white">{routely.cta}</h2>
            <p className="mx-auto mt-4 max-w-md text-center text-zinc-300">{routely.waitlistSubtitle}</p>
            {done ? (
              <p className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-sm text-emerald-200">
                {routely.form.success}
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6">
                <input required placeholder={routely.form.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white" />
                <input required type="email" placeholder={routely.form.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white" />
                <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white">
                  {routely.form.roles.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
                <select value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white">
                  {routely.form.interests.map((i) => (
                    <option key={i.value} value={i.value}>{i.label}</option>
                  ))}
                </select>
                {error && <p className="text-sm text-red-400">{error}</p>}
                <button type="submit" disabled={loading} className="w-full rounded-lg bg-violet-600 py-2.5 text-sm font-semibold text-white hover:bg-violet-500 disabled:opacity-50">
                  {loading ? 'Sending…' : routely.cta}
                </button>
              </form>
            )}
          </div>
        </section>

        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page max-w-3xl">
            <h2 className="text-center font-display text-2xl font-bold text-white">FAQ</h2>
            <dl className="mt-10 space-y-5">
              {routely.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-zinc-800 bg-[#0a0a0f] p-6">
                  <dt className="font-semibold text-white">{f.q}</dt>
                  <dd className="mt-3 text-sm text-zinc-400">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </>
  );
}
