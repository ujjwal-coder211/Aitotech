import Reveal from './Reveal';
import WhatsAppLink from '@/components/WhatsAppLink';
import TrackedLink from '@/components/ap/TrackedLink';
import { trustPoints } from '@/data/homepage';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 15% 0%, rgba(46,163,232,0.22), transparent 65%)',
        }}
      />
      <div className="ap-wrap relative py-16 sm:py-20 lg:py-[88px]">
        <Reveal className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.16em] text-azure">
              Free consultation
            </p>
            <h2 className="mb-4 text-[clamp(28px,3.6vw,44px)] font-extrabold text-white">
              Tell us what you are trying to grow.
            </h2>
            <p className="max-w-[50ch] text-[17px] leading-relaxed text-[#a9bdd8]">
              Thirty minutes on a call, your actual business, and a clear recommendation of what to
              build first — before you commit to anything or hear a price.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink
                href="/contact"
                event="Book a Free Consultation"
                location="final_cta"
                className="ap-btn ap-btn-pri"
              >
                Book a Free Consultation
              </TrackedLink>
              <WhatsAppLink className="ap-btn ap-btn-ghost">Chat on WhatsApp</WhatsAppLink>
            </div>
          </div>

          <ul className="grid gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            {trustPoints.map((point) => (
              <li key={point} className="flex gap-3 text-[14.5px] text-[#c2d0e4]">
                <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-azure" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
