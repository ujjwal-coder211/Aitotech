import Link from 'next/link';
import { aksh, site } from '@/data/siteContent';

function CopyBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-6">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-violet-400">{label}</h3>
        <span className="text-xs text-zinc-600">Select & copy</span>
      </div>
      <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">{text}</p>
    </div>
  );
}

export default function AkshPressPage() {
  const { press } = aksh;

  return (
    <div className="pt-16 sm:pt-20">
      <section className="section-pad pb-12">
        <div className="container-page max-w-3xl">
          <Link href="/aksh" className="text-sm text-violet-400 hover:underline">
            ← Back to Aksh launch
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">Media kit</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">{press.pageTitle}</h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">{press.pageDescription}</p>
          <p className="mt-6 rounded-xl border border-violet-500/25 bg-violet-500/10 px-5 py-4 text-base font-medium text-violet-100">
            {aksh.headline} {aksh.elevatorPitch}
          </p>
        </div>
      </section>

      <section className="section-pad border-t border-zinc-800/80 pt-12">
        <div className="container-page max-w-3xl space-y-6">
          <h2 className="font-display text-2xl font-bold text-white">Official descriptions (copy-paste)</h2>
          <CopyBlock label="One line" text={press.short} />
          <CopyBlock label="Paragraph — news article" text={press.medium} />
          <CopyBlock label="Long — press release / feature story" text={press.long} />
        </div>
      </section>

      <section className="section-pad border-t border-zinc-800/80">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white">Key facts</h2>
          <dl className="mt-8 divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-[#0a0a0f]">
            {press.facts.map((f) => (
              <div key={f.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-zinc-500">{f.label}</dt>
                <dd className="text-sm text-zinc-200">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad border-t border-zinc-800/80">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white">Founder quote</h2>
          <blockquote className="mt-6 border-l-4 border-violet-500 pl-6">
            <p className="text-lg italic leading-relaxed text-zinc-300">&ldquo;{press.quote}&rdquo;</p>
            <footer className="mt-4 text-sm text-zinc-500">— {press.quoteAttribution}</footer>
          </blockquote>
        </div>
      </section>

      <section className="section-pad border-t border-zinc-800/80 pb-24">
        <div className="container-page max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-white">{press.contactLabel}</h2>
          <a
            href={`mailto:${press.contactEmail}?subject=Aksh%20Launch%20Press%20Inquiry`}
            className="btn-primary mt-6 inline-flex bg-violet-600 hover:bg-violet-500"
          >
            {press.contactEmail}
          </a>
          <p className="mt-8 text-sm text-zinc-500">
            {site.name} · {site.address} ·{' '}
            <Link href="/aksh" className="text-violet-400 hover:underline">
              aitotech.in/aksh
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
