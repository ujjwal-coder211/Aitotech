import type { Metadata } from 'next';
import Link from 'next/link';
import AkshWaitlistForm from '@/components/AkshWaitlistForm';
import { aksh, site } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Aksh — Launching Soon',
  description:
    'Aksh Studio & Aksh Coder — India\'s AI coding platform powered by Omni. Join the waitlist for early access.',
  openGraph: {
    title: 'Aksh by Aitotech — Launching Soon',
    description: aksh.description,
  },
};

function StudioMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface-raised shadow-elevated">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        </div>
        <span className="text-xs text-zinc-500">Aksh Studio · Powered by Omni</span>
        <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
          Soon
        </span>
      </div>
      <div className="grid min-h-[280px] grid-cols-[120px_1fr_140px] text-xs">
        <div className="border-r border-line bg-surface p-3 text-zinc-500">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Threads</p>
          <div className="mb-1 rounded bg-brand-soft px-2 py-1 text-brand-light">Todo app</div>
          <div className="px-2 py-1">Bug fix</div>
        </div>
        <div className="border-r border-line p-4 font-mono text-zinc-400">
          <span className="text-violet-400">export</span> function App() {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-sky-400">return</span> &lt;Todo /&gt;;
          <br />
          {'}'}
        </div>
        <div className="bg-surface p-3">
          <p className="mb-2 text-[10px] font-semibold text-zinc-600">OMNI</p>
          <div className="rounded-lg border border-line bg-surface-raised p-2 text-[11px] text-zinc-400">
            React todo app bana diya — files save ho gayi ✓
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AkshLaunchPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="section-pad pb-12">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow mb-4">{aksh.badge}</p>
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {aksh.title}
              </h1>
              <p className="mt-2 text-xl font-medium text-brand-light sm:text-2xl">{aksh.subtitle}</p>
              <p className="mt-4 text-base text-zinc-400 sm:text-lg">{aksh.tagline}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">{aksh.description}</p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                {aksh.status}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/20 via-brand/10 to-transparent blur-2xl" />
              <StudioMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="section-pad border-t border-line bg-surface-raised/50 pt-16">
        <div className="container-page max-w-xl">
          <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">
            Get early access
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-zinc-400">
            Waitlist join karo — launch par pehle invite, Studio beta, aur updates milegi.
          </p>
          <div className="mt-8">
            <AkshWaitlistForm />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-center text-2xl font-bold text-white">Kya milega Aksh mein</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {aksh.features.map((f) => (
              <div key={f.title} className="card-hover p-6">
                <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-pad border-t border-line">
        <div className="container-page max-w-2xl">
          <h2 className="font-display text-center text-2xl font-bold text-white">Launch roadmap</h2>
          <ul className="mt-10 space-y-4">
            {aksh.roadmap.map((step) => (
              <li
                key={step.label}
                className="flex items-center gap-4 rounded-xl border border-line bg-surface-card px-5 py-4"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    step.done ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-zinc-500'
                  }`}
                >
                  {step.done ? '✓' : '·'}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{step.phase}</p>
                  <p className="text-sm font-medium text-white">{step.label}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-zinc-500">
            Product backend:{' '}
            <Link href="https://github.com/ujjwal-coder211/Saas" className="text-brand-light hover:underline">
              Aksh (Saas repo)
            </Link>{' '}
            · Deploy target: E2E Networks India
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-pad border-t border-line pb-24">
        <div className="container-page text-center">
          <p className="text-sm text-zinc-500">
            {aksh.title} by{' '}
            <Link href="/" className="text-zinc-300 hover:text-white">
              {site.name}
            </Link>{' '}
            · Questions?{' '}
            <a href={`mailto:${site.email}`} className="text-brand-light hover:underline">
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
