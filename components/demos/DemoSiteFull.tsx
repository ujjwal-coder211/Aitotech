import type { DemoTemplate, DemoSection } from '@/data/demoTemplates';

/**
 * Renders a full, attractive sample website for a demo template.
 * All colours come from the template palette via inline styles so each
 * industry looks distinct. Pure presentation — no site chrome.
 */
export default function DemoSiteFull({ t }: { t: DemoTemplate }) {
  const p = t.palette;

  return (
    <div style={{ background: p.bg, color: p.text }} className="min-h-screen font-sans">
      {/* nav */}
      <header
        className="sticky top-0 z-20 backdrop-blur-xl"
        style={{ background: `${p.bg}cc`, borderBottom: `1px solid ${p.primary}22` }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.primaryDark})` }}
            >
              {t.brand[0]}
            </span>
            <span className="text-[15px] font-bold tracking-tight">{t.brand}</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {t.nav.map((n, i) => (
              <span key={n} className="text-sm" style={{ color: i === 0 ? p.text : p.muted }}>
                {n}
              </span>
            ))}
          </nav>
          <span
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white"
            style={{ background: p.primary }}
          >
            {t.hero.cta}
          </span>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl"
          style={{ background: `${p.primary}33` }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: `${p.primary}1f`, color: p.accent, border: `1px solid ${p.primary}33` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
              {t.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              {t.hero.heading}
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: p.muted }}>
              {t.hero.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-lg px-5 py-3 text-sm font-semibold text-white" style={{ background: p.primary }}>
                {t.hero.cta}
              </span>
              <span
                className="rounded-lg px-5 py-3 text-sm font-semibold"
                style={{ color: p.text, border: `1px solid ${p.primary}55` }}
              >
                {t.hero.ctaAlt}
              </span>
            </div>
          </div>
          {/* hero visual */}
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.primaryDark})`, boxShadow: `0 30px 60px -20px ${p.primary}55` }}
          >
            <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 30% 20%, #fff, transparent 45%)` }} />
            <div className="absolute inset-5 rounded-xl" style={{ background: `${p.bg}cc`, border: `1px solid ${p.primary}33` }}>
              <div className="flex gap-1.5 border-b p-3" style={{ borderColor: `${p.primary}22` }}>
                <span className="h-2 w-2 rounded-full" style={{ background: p.accent }} />
                <span className="h-2 w-2 rounded-full opacity-60" style={{ background: p.muted }} />
                <span className="h-2 w-2 rounded-full opacity-40" style={{ background: p.muted }} />
              </div>
              <div className="space-y-3 p-4">
                <div className="h-3 w-2/3 rounded-full" style={{ background: `${p.accent}88` }} />
                <div className="h-2 w-full rounded-full" style={{ background: `${p.muted}44` }} />
                <div className="h-2 w-4/5 rounded-full" style={{ background: `${p.muted}44` }} />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-12 rounded-lg" style={{ background: `${p.primary}33` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stats */}
      <section style={{ borderTop: `1px solid ${p.primary}1f`, borderBottom: `1px solid ${p.primary}1f`, background: p.surface }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold md:text-3xl" style={{ color: p.accent }}>{s.value}</div>
              <div className="mt-1 text-xs" style={{ color: p.muted }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* sections */}
      {t.sections.map((sec, i) => (
        <SectionBlock key={i} sec={sec} p={p} />
      ))}

      {/* testimonial */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <div className="text-5xl leading-none" style={{ color: p.primary }}>“</div>
        <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed md:text-2xl">{t.testimonial.quote}</p>
        <p className="mt-5 text-sm font-semibold" style={{ color: p.accent }}>{t.testimonial.name}</p>
        <p className="text-xs" style={{ color: p.muted }}>{t.testimonial.role}</p>
      </section>

      {/* cta */}
      <section className="px-5 pb-20">
        <div
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-14 text-center"
          style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.primaryDark})` }}
        >
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">{t.cta.heading}</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">{t.cta.sub}</p>
          <span className="mt-7 inline-block rounded-lg bg-white px-6 py-3 text-sm font-bold" style={{ color: p.primaryDark }}>
            {t.cta.button}
          </span>
        </div>
      </section>

      {/* footer */}
      <footer style={{ borderTop: `1px solid ${p.primary}1f`, background: p.surface }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm sm:flex-row" style={{ color: p.muted }}>
          <span className="font-semibold" style={{ color: p.text }}>{t.brand}</span>
          <span>{t.tagline}</span>
          <span>© {new Date().getFullYear()} · Demo by AitoTech</span>
        </div>
      </footer>
    </div>
  );
}

function SectionBlock({ sec, p }: { sec: DemoSection; p: DemoTemplate['palette'] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="mb-8 text-center text-2xl font-extrabold tracking-tight md:text-3xl">{sec.title}</h2>

      {sec.type === 'services' && (
        <div className="grid gap-5 md:grid-cols-3">
          {sec.items.map((it) => (
            <div key={it.title} className="rounded-2xl p-6" style={{ background: p.surface, border: `1px solid ${p.primary}22` }}>
              <div className="mb-4 h-10 w-10 rounded-lg" style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.primaryDark})` }} />
              <h3 className="text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: p.muted }}>{it.body}</p>
            </div>
          ))}
        </div>
      )}

      {sec.type === 'features' && (
        <div className="grid gap-5 md:grid-cols-3">
          {sec.items.map((it) => (
            <div key={it.title} className="rounded-2xl p-6 text-center" style={{ background: p.surface, border: `1px solid ${p.primary}22` }}>
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: p.muted }}>{it.body}</p>
            </div>
          ))}
        </div>
      )}

      {sec.type === 'menu' && (
        <div className="mx-auto grid max-w-3xl gap-3">
          {sec.items.map((it) => (
            <div key={it.name} className="flex items-center justify-between rounded-xl px-5 py-4" style={{ background: p.surface, border: `1px solid ${p.primary}22` }}>
              <div>
                <div className="font-semibold">{it.name}</div>
                <div className="text-xs" style={{ color: p.muted }}>{it.note}</div>
              </div>
              <div className="text-lg font-bold" style={{ color: p.accent }}>{it.price}</div>
            </div>
          ))}
        </div>
      )}

      {sec.type === 'listings' && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sec.items.map((it) => (
            <div key={it.title} className="overflow-hidden rounded-2xl" style={{ background: p.surface, border: `1px solid ${p.primary}22` }}>
              <div className="aspect-video" style={{ background: `linear-gradient(135deg, ${p.primary}66, ${p.primaryDark})` }} />
              <div className="p-4">
                <div className="font-semibold">{it.title}</div>
                <div className="mt-0.5 text-xs" style={{ color: p.muted }}>{it.meta}</div>
                <div className="mt-2 text-lg font-bold" style={{ color: p.accent }}>{it.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {sec.type === 'gallery' && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sec.items.map((it, i) => (
            <div key={it} className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ background: `linear-gradient(${135 + i * 25}deg, ${p.primary}, ${p.primaryDark})` }}>
              <div className="absolute bottom-3 left-4 text-sm font-semibold text-white">{it}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
