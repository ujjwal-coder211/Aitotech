import Reveal from './Reveal';
import TrackedLink from './TrackedLink';
import HeroShowcase from './HeroShowcase';

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfdff] to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 85% 0%, rgba(46,163,232,0.10), transparent 70%)',
        }}
      />

      <div className="ap-wrap relative pb-20 pt-14 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <Reveal stagger={0.09}>
            <div className="mb-6 flex items-center gap-2.5">
              <span className="block h-0.5 w-[34px] bg-azure" />
              <span className="ap-eyebrow">AI technology &amp; business automation · Delhi</span>
            </div>

            <h1 className="mb-6 text-[clamp(36px,5.4vw,62px)] font-extrabold leading-[1.05] text-balance">
              Building digital solutions that{' '}
              <span className="text-azure-deep">grow businesses.</span>
            </h1>

            <p className="ap-lead mb-9 max-w-[52ch]">
              Websites, applications and AI automation, built around how your business actually
              works — so more people find you, more of them become customers, and the work behind
              it runs without the chaos.
            </p>

            <div className="flex flex-wrap gap-3">
              <TrackedLink
                href="/contact"
                event="Book a Free Consultation"
                location="hero"
                className="ap-btn ap-btn-pri"
              >
                Book a Free Consultation
              </TrackedLink>
              <TrackedLink
                href="/services"
                event="Explore Services"
                location="hero"
                className="ap-btn ap-btn-sec"
              >
                Explore our services
              </TrackedLink>
            </div>

            <p className="mt-7 text-[13.5px] text-quiet-soft">
              Free 30-minute consultation — we map what you need before quoting anything.
            </p>
          </Reveal>

          <Reveal delay={0.15} y={26}>
            <HeroShowcase />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
