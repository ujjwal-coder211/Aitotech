import Link from 'next/link';
import AkshAgentFleet from '@/components/aksh/AkshAgentFleet';
import AkshDemoCtaBand from '@/components/aksh/AkshDemoCtaBand';
import { AkshDemoProvider } from '@/components/aksh/AkshDemoProvider';
import { AkshHeroActions, AkshHeroMockup } from '@/components/aksh/AkshHeroInteractive';
import AkshWaitlistForm from '@/components/AkshWaitlistForm';
import SocialLinks from '@/components/SocialLinks';
import JsonLdScript from '@/components/seo/JsonLdScript';
import { aksh, site } from '@/data/siteContent';
import { siteUrl } from '@/lib/seo/siteUrl';

export default function AkshLaunchPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Aksh',
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
    <AkshDemoProvider>
      <JsonLdScript data={jsonLd} />
      <div className="pt-16 sm:pt-20">
        {/* HERO */}
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
                <AkshHeroActions />
                <p className="mt-4 text-xs text-zinc-500">{aksh.ctaHint}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                  {aksh.status}
                </p>
              </div>
              <AkshHeroMockup />
            </div>
          </div>
        </section>

        {/* Elevator pitch */}
        <section className="border-y border-zinc-800/80 bg-[#050508]/90 py-10">
          <div className="container-page max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{aksh.elevatorLabel}</p>
            <p className="mt-3 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
              {aksh.elevatorPitch}
            </p>
          </div>
        </section>

        <AkshAgentFleet />

        {/* Platform pillars — Zoho-style "Agentic AI Platform" */}
        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">
              The Aksh platform
            </p>
            <h2 className="mt-3 text-center font-display text-2xl font-bold text-white sm:text-3xl">
              One product. Editor, AI, memory, cloud.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {aksh.features.map((f) => (
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

        {/* Testimonials */}
        <section className="section-pad border-t border-zinc-800/80 bg-[#050508]/50">
          <div className="container-page">
            <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
              {aksh.testimonials.title}
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {aksh.testimonials.items.map((t) => (
                <blockquote key={t.author} className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6">
                  <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-xs font-medium text-zinc-500">
                    {t.author}
                    {t.role ? ` · ${t.role}` : ''}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="section-pad border-t border-zinc-800/80">
          <div className="container-page">
            <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">
              {aksh.differentiators.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-base text-zinc-400">{aksh.differentiators.subtitle}</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aksh.differentiators.items.map((item) => (
                <article key={item.title} className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6">
                  <h3 className="font-display text-lg font-semibold text-violet-300">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">{item.body}</p>
                </article>
              ))}
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

        <AkshDemoCtaBand />

        {/* Waitlist */}
        <section id="waitlist" className="section-pad border-t border-zinc-800/80 bg-violet-950/20">
          <div className="container-page max-w-xl">
            <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">{aksh.cta}</h2>
            <p className="mx-auto mt-4 max-w-md text-center text-base text-zinc-300">{aksh.waitlistSubtitle}</p>
            <div className="mt-8">
              <AkshWaitlistForm />
            </div>
          </div>
        </section>

        {/* Quick start */}
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

        {/* Press */}
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
            <h2 className="font-display text-center text-2xl font-bold text-white">Launch plan</h2>
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
              ·{' '}
              <a href={`mailto:${site.email}`} className="text-violet-400 hover:underline">
                {site.email}
              </a>
            </p>
          </div>
        </section>
      </div>
    </AkshDemoProvider>
  );
}
