import type { Metadata } from 'next';
import Link from 'next/link';
import { arya } from '@/data/aryaHomes';
import AryaListings from '@/components/arya/AryaListings';

export const metadata: Metadata = {
  // absolute — this page is the client's site, not an AitoTech page
  title: { absolute: 'Arya Homes and Builder — Property in Uttam Nagar, Delhi' },
  description:
    'Arya Homes and Builder — flats, builder floors, and plots in Uttam Nagar, Delhi. Rated 4.8 by 40+ families. Free site visits, home loan help, buy · sell · rent.',
};

const wa = (msg: string) => `https://wa.me/${arya.whatsapp}?text=${encodeURIComponent(msg)}`;

function Icon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const paths: Record<string, string> = {
    home: 'M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10',
    tag: 'M7 7h.01M7 3h5a2 2 0 011.41.59l7 7a2 2 0 010 2.82l-5 5a2 2 0 01-2.82 0l-7-7A2 2 0 013 10V5a2 2 0 012-2z',
    key: 'M15 7a2 2 0 012 2m4-2a6 6 0 01-7.74 5.74L11 15H9v2H7v2H4a1 1 0 01-1-1v-2.59a1 1 0 01.29-.7l5.96-5.96A6 6 0 1121 7z',
    build: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
    bank: 'M3 21h18M5 21V10m14 11V10M4 10h16L12 4 4 10zM9 21v-6h6v6',
    doc: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.59a1 1 0 01.7.29l4.42 4.42a1 1 0 01.29.7V19a2 2 0 01-2 2z',
  };
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={paths[name] ?? paths.home} />
    </svg>
  );
}

export default function AryaHomesPage() {
  return (
    <div className="bg-[#fdfcfa] text-slate-900">
      {/* AitoTech ribbon — remove when this ships on the client's own domain */}
      <div className="flex items-center justify-between gap-3 bg-slate-950 px-4 py-2 text-xs text-zinc-400">
        <Link href="/demos" className="font-medium text-zinc-300 hover:text-white">
          ← Back to AitoTech demos
        </Link>
        <span className="hidden sm:inline">Website proposal for Arya Homes and Builder · built by AitoTech</span>
        <Link href="/contact" className="rounded-md bg-brand px-3 py-1 font-semibold text-white hover:bg-brand-dark">
          Get this website
        </Link>
      </div>

      {/* ─── header ─── */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 font-display text-base font-extrabold text-amber-400">
              A
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-extrabold tracking-tight text-slate-900">
                Arya Homes
              </span>
              <span className="block text-[10px] font-medium tracking-wide text-slate-500">AND BUILDER</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {[
              ['Properties', '#properties'],
              ['Services', '#services'],
              ['Why us', '#why'],
              ['Reviews', '#reviews'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
                {label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${arya.phoneIntl}`}
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.5 5.5l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">Call now</span>
          </a>
        </div>
      </header>

      {/* ─── hero ─── */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-800">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              {arya.hero.badge}
            </span>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {arya.hero.heading}{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  {arya.hero.headingAccent}
                </span>
                <span className="absolute bottom-1.5 left-0 z-0 h-3 w-full bg-amber-200/70" />
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">{arya.hero.sub}</p>

            {/* real rating */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex text-amber-500" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.96 0 1.36 1.24.58 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.75 1.69-1.54 1.12l-3.56-2.59a1 1 0 00-1.18 0l-3.56 2.59c-.78.57-1.83-.2-1.53-1.12l1.36-4.18a1 1 0 00-.37-1.12L1.78 9.61C1 9.04 1.4 7.8 2.36 7.8h4.4a1 1 0 00.95-.69L9.05 2.93z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-700">
                {arya.rating} on Google · <span className="font-normal text-slate-500">{arya.reviewCount}+ reviews</span>
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={wa('Hi Arya Homes! I want to book a free site visit. Please share available properties.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-4 text-base font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
              >
                {arya.hero.ctaPrimary}
              </a>
              <a
                href={wa('Hi Arya Homes! I have a property enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-white px-7 py-4 text-base font-bold text-[#128C4A] transition-all hover:bg-[#25D366]/10"
              >
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M16 3.2A12.8 12.8 0 004.92 22.4L3.2 28.8l6.57-1.72A12.8 12.8 0 1016 3.2zm0 23.36a10.5 10.5 0 01-5.39-1.47l-.38-.23-3.9 1.02 1.04-3.8-.25-.4A10.64 10.64 0 1116 26.56zm5.84-7.97c-.32-.16-1.89-.93-2.19-1.04-.29-.1-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.6-1.9-1.78-2.21-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.67 0 1.57 1.15 3.09 1.31 3.31.16.21 2.25 3.44 5.46 4.82.76.33 1.36.53 1.82.67.77.25 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
                </svg>
                {arya.hero.ctaSecondary}
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Free site visits · No obligation · {arya.hours}
            </p>
          </div>

          {/* hero visual */}
          <div className="relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-slate-900/25">
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-amber-500/25 blur-3xl" />
              <svg className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-[60%] text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
              </svg>
              <p className="absolute bottom-6 left-6 right-6 text-sm text-white/50">
                Property photos go here — we shoot or use your existing images.
              </p>
            </div>

            {/* floating fact card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
              <p className="font-display text-2xl font-extrabold text-slate-900">1 BHK – 4 BHK</p>
              <p className="mt-0.5 text-xs text-slate-500">& plots across Uttam Nagar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── trust strip ─── */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
          {arya.trust.map((t) => (
            <div key={t.label} className="text-center">
              <p className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">{t.value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── properties ─── */}
      <section id="properties" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 lg:py-24">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Available now</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Homes in Uttam Nagar
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-600">
            Handpicked flats, builder floors, and plots. Every listing is visited by our team before we show it to you.
          </p>
        </div>

        <AryaListings />

        <p className="mt-10 text-center text-sm text-slate-500">
          Looking for something specific?{' '}
          <a
            href={wa('Hi Arya Homes! I am looking for a specific property. Can you help?')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-900 underline underline-offset-4"
          >
            Tell us your requirement →
          </a>
        </p>
      </section>

      {/* ─── services ─── */}
      <section id="services" className="scroll-mt-20 border-y border-slate-200 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything under one roof
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {arya.services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-slate-200 bg-[#fdfcfa] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-slate-900">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── why us ─── */}
      <section id="why" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Why Arya Homes</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A local team you can actually trust
            </h2>
            <p className="mt-4 text-slate-600">
              We are based in Rama Park and we deal only in Uttam Nagar. That focus is why families keep sending
              their relatives to us.
            </p>
            <a
              href={arya.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 underline underline-offset-4"
            >
              See our Google reviews →
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {arya.why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-3 font-display text-base font-bold text-slate-900">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── process ─── */}
      <section className="border-y border-slate-200 bg-slate-900 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              From first call to your keys
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {arya.steps.map((s) => (
              <div key={s.step}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/40 bg-amber-400/10 font-display text-sm font-extrabold text-amber-400">
                  {s.step}
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── reviews ─── */}
      <section id="reviews" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16 text-center lg:py-24">
        <div className="flex justify-center text-amber-500" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.96 0 1.36 1.24.58 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.75 1.69-1.54 1.12l-3.56-2.59a1 1 0 00-1.18 0l-3.56 2.59c-.78.57-1.83-.2-1.53-1.12l1.36-4.18a1 1 0 00-.37-1.12L1.78 9.61C1 9.04 1.4 7.8 2.36 7.8h4.4a1 1 0 00.95-.69L9.05 2.93z" />
            </svg>
          ))}
        </div>
        <p className="mt-5 font-display text-4xl font-extrabold text-slate-900">
          {arya.rating} <span className="text-2xl font-bold text-slate-400">/ 5</span>
        </p>
        <p className="mt-2 text-slate-600">
          Rated by <strong className="text-slate-900">{arya.reviewCount}+ families</strong> on Google
        </p>
        <a
          href={arya.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-slate-900"
        >
          Read all reviews on Google →
        </a>
      </section>

      {/* ─── faq ─── */}
      <section className="border-t border-slate-200 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Common questions
          </h2>
          <div className="mt-10 space-y-3">
            {arya.faq.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-200 bg-[#fdfcfa] p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-bold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 text-amber-600 transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── contact + map ─── */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 lg:py-24">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Visit us</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900">
                Let&apos;s find your home
              </h2>
              <p className="mt-3 text-slate-600">
                Walk into our Rama Park office, or just send a WhatsApp — we reply the same day.
              </p>

              <dl className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-sm font-bold text-slate-900">Office</dt>
                    <dd className="text-sm text-slate-600">{arya.address}</dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-sm font-bold text-slate-900">Hours</dt>
                    <dd className="text-sm text-slate-600">{arya.hoursDetail}</dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.5 5.5l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-sm font-bold text-slate-900">Phone</dt>
                    <dd>
                      <a href={`tel:${arya.phoneIntl}`} className="text-sm font-semibold text-slate-900 underline underline-offset-4">
                        {arya.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={wa('Hi Arya Homes! I want to book a free site visit.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1eb958]"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${arya.phoneIntl}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
                >
                  Call now
                </a>
              </div>
            </div>

            <div className="min-h-[320px] bg-slate-100">
              <iframe
                src={arya.mapEmbed}
                title="Arya Homes and Builder — Rama Park, Uttam Nagar"
                className="h-full min-h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── footer ─── */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-display text-lg font-extrabold text-slate-900">{arya.name}</p>
              <p className="text-sm text-slate-500">{arya.nameHi} · {arya.category}</p>
            </div>
            <p className="max-w-xs text-sm text-slate-500">{arya.address}</p>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} {arya.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ─── floating actions (mobile-first, like top local sites) ─── */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        <a
          href={`tel:${arya.phoneIntl}`}
          aria-label="Call Arya Homes"
          className="flex items-center justify-center rounded-full bg-slate-900 p-3.5 text-white shadow-xl transition-transform hover:scale-105"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.5 5.5l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
          </svg>
        </a>
        <a
          href={wa('Hi Arya Homes! I have a property enquiry.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Arya Homes"
          className="flex items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-xl transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden>
            <path d="M16 3.2A12.8 12.8 0 004.92 22.4L3.2 28.8l6.57-1.72A12.8 12.8 0 1016 3.2zm0 23.36a10.5 10.5 0 01-5.39-1.47l-.38-.23-3.9 1.02 1.04-3.8-.25-.4A10.64 10.64 0 1116 26.56zm5.84-7.97c-.32-.16-1.89-.93-2.19-1.04-.29-.1-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.6-1.9-1.78-2.21-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.67 0 1.57 1.15 3.09 1.31 3.31.16.21 2.25 3.44 5.46 4.82.76.33 1.36.53 1.82.67.77.25 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
