import type { Metadata } from 'next';
import Link from 'next/link';
import { outreachProduct, site } from '@/data/siteContent';
import PageHero from '@/components/PageHero';
import WhatsAppLink from '@/components/WhatsAppLink';

export const metadata: Metadata = {
  title: 'SalesConnect — AI Sales Assistant for Local Businesses',
  description:
    'SalesConnect by AitoTech: turn WhatsApp and Instagram enquiries into booked clients with AI-drafted replies and automatic follow-ups. In development — join the waitlist.',
  openGraph: {
    title: 'SalesConnect — Coming soon | AitoTech',
    description: outreachProduct.hero.description,
  },
};

export default function SalesConnectProductPage() {
  const { hero, features, demoSteps, docs, faq, waitlist } = outreachProduct;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page">
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          highlight={hero.highlight}
          description={hero.description}
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Join the waitlist
            </Link>
            <WhatsAppLink
              className="btn-secondary"
              message="Hi AitoTech! I'd like early access to SalesConnect."
            >
              Chat on WhatsApp
            </WhatsAppLink>
          </div>
        </PageHero>

        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="space-y-12">
            <section>
              <p className="eyebrow mb-3">Features</p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">What SalesConnect will do</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f.title} className="card-hover p-5 sm:p-6">
                    <h3 className="font-semibold text-brand-light">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{f.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow mb-3">How it works</p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">From enquiry to booked client</h2>
              <ol className="mt-6 space-y-4">
                {demoSteps.map((d) => (
                  <li key={d.step} className="card flex gap-4 p-5 sm:p-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/20 font-mono text-sm font-bold text-brand-light">
                      {d.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{d.title}</h3>
                      <p className="mt-1 text-sm text-zinc-500">{d.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <p className="eyebrow mb-3">{docs.title}</p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Who it is for</h2>
              <div className="mt-6 space-y-6">
                {docs.sections.map((sec) => (
                  <div key={sec.heading} className="card p-6">
                    <h3 className="font-semibold text-white">{sec.heading}</h3>
                    <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-500">
                      {sec.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow mb-3">FAQ</p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Common questions</h2>
              <div className="mt-6 space-y-4">
                {faq.map((item) => (
                  <details key={item.q} className="card group p-5 sm:p-6">
                    <summary className="cursor-pointer list-none font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                      {item.q}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="card border-line-strong p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand-light">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {outreachProduct.status}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">{waitlist.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{waitlist.note}</p>
              <Link href="/contact" className="btn-primary mt-6 flex w-full justify-center text-base">
                Join the waitlist
              </Link>
              <WhatsAppLink
                className="mt-3 flex w-full justify-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                message="Hi AitoTech! I'd like early access to SalesConnect."
              >
                or chat with us on WhatsApp
              </WhatsAppLink>
            </div>
            <p className="mt-4 text-center text-xs text-zinc-600">
              Built by {site.name} · {outreachProduct.contactEmail}
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
