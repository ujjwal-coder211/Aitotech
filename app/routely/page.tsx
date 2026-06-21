'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';
import AkshAgentFleet from '@/components/aksh/AkshAgentFleet';
import AkshDemoCtaBand from '@/components/aksh/AkshDemoCtaBand';
import { AkshDemoProvider } from '@/components/aksh/AkshDemoProvider';
import { AkshHeroActions, AkshHeroMockup } from '@/components/aksh/AkshHeroInteractive';
import JsonLdScript from '@/components/seo/JsonLdScript';
import { routely, site } from '@/data/siteContent';
import { routelyAppUrl } from '@/lib/routelyAppUrl';
import { siteUrl } from '@/lib/seo/siteUrl';

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
      operatingSystem: 'Web, Windows',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      description: routely.heroLead,
      url: `${siteUrl}/routely`,
      provider: { '@type': 'Organization', name: site.name, url: siteUrl },
      featureList: routely.features.map((f) => f.title).join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: routely.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
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
      if (!res.ok || !data.success) {
        throw new Error(data.error || routely.form.error);
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : routely.form.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AkshDemoProvider>
      <JsonLdScript data={jsonLd} />
      <div className="pt-16 sm:pt-20">
        {/* HERO */}
        <section className="section-pad pb-12">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">
                  {routely.badge}
                </p>
                <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                  {routely.headline}
                </h1>
                <p className="mt-3 text-xl font-semibold text-violet-300 sm:text-2xl">{routely.subtitle}</p>
                <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">{routely.heroLead}</p>
                <p className="mt-4 text-sm font-medium text-zinc-400">{routely.tagline}</p>
                <AkshHeroActions />
                <p className="mt-4 text-xs text-zinc-500">{routely.ctaHint}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                  {routely.status}
                </p>
              </div>
              <AkshHeroMockup />
            </div>
          </div>
        </section>

        {/* Elevator pitch */}
        <section className="border-y border-zinc-800/80 bg-[#050508]/90 py-10">
          <div className="container-page max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{routely.elevatorLabel}</p>
            <p className="mt-3 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
              {routely.elevatorPitch}
            </p>
          </div>
        </section>

        <AkshAgentFleet />

        {/* Features */}
        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">
              The Routely platform
            </p>
            <h2 className="mt-3 text-center font-display text-2xl font-bold text-white sm:text-3xl">
              One AI for coding — routing, memory, git.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {routely.features.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-8 transition hover:border-violet-500/30"
                >
                  <h3 className="font-display text-xl font-semibold text-violet-300">{f.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AkshDemoCtaBand />

        {/* Waitlist */}
        <section id="waitlist" className="section-pad border-t border-zinc-800/80 bg-violet-950/20">
          <div className="container-page max-w-xl">
            <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">{routely.cta}</h2>
            <p className="mx-auto mt-4 max-w-md text-center text-base text-zinc-300">{routely.waitlistSubtitle}</p>
            {done ? (
              <p className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-sm text-emerald-200">
                {routely.form.success}
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6 sm:p-8">
                <input
                  required
                  placeholder={routely.form.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white"
                />
                <input
                  required
                  type="email"
                  placeholder={routely.form.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white"
                />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white"
                >
                  {routely.form.roles.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white"
                >
                  {routely.form.interests.map((i) => (
                    <option key={i.value} value={i.value}>
                      {i.label}
                    </option>
                  ))}
                </select>
                {error && <p className="text-sm text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-violet-600 py-2.5 text-sm font-semibold text-white hover:bg-violet-500 disabled:opacity-50"
                >
                  {loading ? 'Sending…' : routely.cta}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Quick paths */}
        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page max-w-3xl">
            <h2 className="font-display text-center text-2xl font-bold text-white">Get started</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6 text-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 font-display text-sm font-bold text-violet-300">
                  01
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">Try the demo</h3>
                <p className="mt-2 text-sm text-zinc-400">Run the 90s vision tour — no signup required.</p>
                <Link href="/routely/demo?tour=1" className="mt-4 inline-block text-sm font-medium text-violet-300 hover:underline">
                  Open demo →
                </Link>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6 text-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 font-display text-sm font-bold text-violet-300">
                  02
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">Join waitlist</h3>
                <p className="mt-2 text-sm text-zinc-400">Get early access to browser beta and desktop download.</p>
                <Link href="#waitlist" className="mt-4 inline-block text-sm font-medium text-violet-300 hover:underline">
                  Join now →
                </Link>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6 text-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 font-display text-sm font-bold text-violet-300">
                  03
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">Read docs</h3>
                <p className="mt-2 text-sm text-zinc-400">Installation, API, and desktop editor setup.</p>
                <Link href="/docs" className="mt-4 inline-block text-sm font-medium text-violet-300 hover:underline">
                  Open docs →
                </Link>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={routelyAppUrl}
                className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {routely.ctaTryBrowser}
              </a>
              <Link href="/routely/demo?tour=1" className="btn-secondary border-zinc-700 text-zinc-200">
                {routely.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="section-pad border-t border-zinc-800/80 bg-[#050508]/50">
          <div className="container-page max-w-3xl">
            <h2 className="font-display text-center text-2xl font-bold text-white">Roadmap</h2>
            <p className="mt-2 text-center text-sm text-zinc-500">What is live today and what ships next.</p>
            <ul className="mt-10 space-y-4">
              {routely.roadmap.map((item) => (
                <li
                  key={item.phase}
                  className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-[#0a0a0f] p-5"
                >
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      item.done ? 'bg-emerald-500/20 text-emerald-300' : 'bg-violet-500/20 text-violet-300'
                    }`}
                  >
                    {item.done ? '✓' : '→'}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{item.phase}</p>
                    <p className="mt-1 text-sm text-zinc-200">{item.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad border-t border-zinc-800/80" aria-labelledby="routely-faq">
          <div className="container-page max-w-3xl">
            <h2 id="routely-faq" className="font-display text-center text-2xl font-bold text-white">
              Questions and answers
            </h2>
            <dl className="mt-10 space-y-5">
              {routely.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-zinc-800 bg-[#0a0a0f] p-6">
                  <dt className="font-display text-base font-semibold text-white sm:text-lg">{f.q}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{f.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-center text-sm text-zinc-500">
              {routely.title} — {routely.headline}{' '}
              <Link href="/" className="text-zinc-300 hover:text-white">
                {site.name}
              </Link>{' '}
              · Delhi, India
            </p>
          </div>
        </section>
      </div>
    </AkshDemoProvider>
  );
}
