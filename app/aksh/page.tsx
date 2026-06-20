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
        <span className="text-xs text-zinc-500">Aksh Studio · India&apos;s Cursor alternative</span>
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300">Beta soon</span>
      </div>
      <div className="grid min-h-[300px] grid-cols-[120px_1fr_140px] text-xs">
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
            {aksh.mockupOmniReply}
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
      alternateName: "India's Cursor Alternative",
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/PreOrder' },
      description: aksh.heroLead,
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
  ];

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <div className="pt-16 sm:pt-20">
        {/* HERO — clear headline + visible description */}
        <section className="section-pad pb-12">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">{aksh.badge}</p>
                <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                  {aksh.headline}
                </h1>
                <p className="mt-3 text-xl font-semibold text-violet-300 sm:text-2xl">{aksh.subtitle}</p>
                <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">{aksh.heroLead}</p>
                <p className="mt-4 text-sm font-medium text-zinc-400">{aksh.tagline}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#waitlist"
                    className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500"
                  >
                    {aksh.cta}
                  </Link>
                  <Link href="/aksh/press" className="btn-secondary border-zinc-700 text-zinc-200">
                    {aksh.ctaSecondary}
                  </Link>
                  <Link href="/docs" className="btn-secondary border-zinc-700 text-zinc-200">
                    Documentation
                  </Link>
                </div>
                <p className="mt-4 text-xs text-zinc-500">{aksh.ctaHint}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                  {aksh.status}
                </p>
              </div>
              <div className="relative lg:sticky lg:top-24">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/25 via-indigo-600/10 to-transparent blur-2xl" />
                <StudioMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Elevator pitch box */}
        <section className="border-y border-zinc-800/80 bg-[#050508]/90 py-10">
          <div className="container-page max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{aksh.elevatorLabel}</p>
            <p className="mt-3 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
              {aksh.elevatorPitch}
            </p>
          </div>
        </section>

        {/* Cursor vs Aksh */}
        <section className="section-pad">
          <div className="container-page">
            <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">{aksh.comparison.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-base text-zinc-400">{aksh.comparison.subtitle}</p>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-zinc-800">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-[#0a0a0f]">
                    {aksh.comparison.columns.map((col, i) => (
                      <th
                        key={col}
                        className={`px-5 py-4 font-semibold ${i === 2 ? 'text-violet-300' : 'text-zinc-400'}`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {aksh.comparison.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-zinc-800/80 last:border-0">
                      <td className="px-5 py-4 font-medium text-zinc-200">{row.feature}</td>
                      <td className="px-5 py-4 text-zinc-500">{row.cursor}</td>
                      <td className="px-5 py-4 text-violet-200">{row.aksh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why India */}
        <section className="section-pad border-t border-zinc-800/80 bg-[#050508]/50">
          <div className="container-page">
            <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">{aksh.whyIndia.title}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {aksh.whyIndia.items.map((item) => (
                <article key={item.title} className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product features — long descriptions */}
        <section className="section-pad">
          <div className="container-page">
            <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">{aksh.platformTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-base text-zinc-400">
              {aksh.platformSubtitle}
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {aksh.features.map((f) => (
                <article key={f.title} className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-8">
                  <h3 className="font-display text-xl font-semibold text-violet-300">{f.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page">
            <h2 className="font-display text-center text-2xl font-bold text-white">{aksh.audiences.title}</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {aksh.audiences.items.map((a) => (
                <div key={a.title} className="rounded-xl border border-zinc-800 bg-[#0a0a0f] p-5">
                  <h3 className="font-display font-semibold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="section-pad border-t border-zinc-800/80 bg-violet-950/20">
          <div className="container-page max-w-xl">
            <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">{aksh.cta}</h2>
            <p className="mx-auto mt-4 max-w-md text-center text-base text-zinc-300">
              {aksh.waitlistSubtitle}
            </p>
            <div className="mt-8">
              <AkshWaitlistForm />
            </div>
          </div>
        </section>

        {/* Quick start + docs */}
        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page">
            <h2 className="font-display text-center text-2xl font-bold text-white">{aksh.quickStartTitle}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {aksh.quickStart.map((step) => (
                <div key={step.step} className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 font-display text-sm font-bold text-violet-300">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href={aksh.docsCta.href} className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500">
                {aksh.docsCta.button}
              </Link>
              <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-500">{aksh.docsCta.description}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad border-t border-zinc-800/80" aria-labelledby="aksh-faq">
          <div className="container-page max-w-3xl">
            <h2 id="aksh-faq" className="font-display text-center text-2xl font-bold text-white">
              {aksh.faqTitle}
            </h2>
            <dl className="mt-10 space-y-5">
              {aksh.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-zinc-800 bg-[#0a0a0f] p-6">
                  <dt className="font-display text-base font-semibold text-white sm:text-lg">{f.q}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Press teaser */}
        <section className="section-pad border-t border-zinc-800/80 bg-[#050508]/80">
          <div className="container-page max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-white">{aksh.pressSectionTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">{aksh.press.medium}</p>
            <Link href="/aksh/press" className="btn-secondary mt-8 inline-flex border-zinc-700">
              {aksh.pressSectionCta} →
            </Link>
          </div>
        </section>

        {/* Roadmap */}
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
              {aksh.title} — {aksh.headline}{' '}
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
