import Link from 'next/link';
import AkshWaitlistForm from '@/components/AkshWaitlistForm';
import SocialLinks from '@/components/SocialLinks';
import JsonLdScript from '@/components/seo/JsonLdScript';
import { aksh, site } from '@/data/siteContent';
import { siteUrl } from '@/lib/seo/siteUrl';

function StudioMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0a0a0f] shadow-2xl shadow-violet-950/40">
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <span className="text-xs text-zinc-500">Aksh Studio · Powered by Omni</span>
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300">Soon</span>
      </div>
      <div className="grid min-h-[280px] grid-cols-[120px_1fr_140px] text-xs">
        <div className="border-r border-zinc-800 bg-[#050508] p-3 text-zinc-500">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Threads</p>
          <div className="mb-1 rounded bg-violet-500/15 px-2 py-1 text-violet-300">Todo app</div>
          <div className="px-2 py-1">Bug fix</div>
        </div>
        <div className="border-r border-zinc-800 bg-[#030712] p-4 font-mono text-zinc-400">
          <span className="text-violet-400">export</span> function App() {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-sky-400">return</span> &lt;Todo /&gt;;
          <br />
          {'}'}
        </div>
        <div className="bg-[#050508] p-3">
          <p className="mb-2 text-[10px] font-semibold text-zinc-600">OMNI</p>
          <div className="rounded-lg border border-zinc-800 bg-[#0a0a0f] p-2 text-[11px] text-zinc-400">
            React todo app bana diya — files save ho gayi ✓
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AkshLaunchPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Aksh',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/PreOrder' },
      description: aksh.description,
      url: `${siteUrl}/aksh`,
      provider: { '@type': 'Organization', name: site.name, url: siteUrl },
      featureList: aksh.features.map((f) => f.title).join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: aksh.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Aksh — Launching Soon',
      description: aksh.description,
      url: `${siteUrl}/aksh`,
      isPartOf: { '@type': 'WebSite', name: site.name, url: siteUrl },
    },
  ];

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <div className="pt-16 sm:pt-20">
        <section className="section-pad pb-12">
          <div className="container-page">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">{aksh.badge}</p>
                <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{aksh.title}</h1>
                <p className="mt-2 text-xl font-medium text-violet-300 sm:text-2xl">{aksh.subtitle}</p>
                <p className="mt-4 text-base text-zinc-400 sm:text-lg">{aksh.tagline}</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">{aksh.description}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                  {aksh.status}
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/25 via-indigo-600/10 to-transparent blur-2xl" />
                <StudioMockup />
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="section-pad border-t border-zinc-800/80 bg-[#050508]/80 pt-16">
          <div className="container-page max-w-xl">
            <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">Get early access</h2>
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-zinc-400">
              Waitlist join karo — launch par pehle invite, Studio beta, aur updates milegi.
            </p>
            <div className="mt-8">
              <AkshWaitlistForm />
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page">
            <h2 className="font-display text-center text-2xl font-bold text-white">3 steps — shuru karo</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {aksh.quickStart.map((step) => (
                <div key={step.step} className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6 text-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 font-display text-sm font-bold text-violet-300">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href={aksh.docsCta.href} className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500">
                {aksh.docsCta.button}
              </Link>
              <p className="mt-3 text-xs text-zinc-500">{aksh.docsCta.description}</p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-page">
            <h2 className="font-display text-center text-2xl font-bold text-white">Kya milega Aksh mein</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {aksh.features.map((f) => (
                <article key={f.title} className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6 transition hover:border-zinc-700">
                  <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-zinc-800/80" aria-labelledby="aksh-faq">
          <div className="container-page max-w-3xl">
            <h2 id="aksh-faq" className="font-display text-center text-2xl font-bold text-white">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6">
              {aksh.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-zinc-800 bg-[#0a0a0f] p-6">
                  <dt className="font-display text-base font-semibold text-white">{f.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-400">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page max-w-2xl">
            <h2 className="font-display text-center text-2xl font-bold text-white">Launch roadmap</h2>
            <ul className="mt-10 space-y-4">
              {aksh.roadmap.map((step) => (
                <li key={step.label} className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-[#0a0a0f] px-5 py-4">
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
          </div>
        </section>

        <section className="section-pad border-t border-zinc-800/80 pb-24">
          <div className="container-page text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Follow AitoTech</p>
            <SocialLinks className="mt-4 justify-center" size="md" />
            <p className="mt-10 text-sm text-zinc-500">
              {aksh.title} by{' '}
              <Link href="/" className="text-zinc-300 hover:text-white">
                {site.name}
              </Link>{' '}
              · <a href={`mailto:${site.email}`} className="text-violet-400 hover:underline">{site.email}</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
