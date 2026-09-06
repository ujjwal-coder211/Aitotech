import Link from 'next/link';
import Reveal from './Reveal';
import WhatsAppLink from '@/components/WhatsAppLink';
import TrackedLink from '@/components/ap/TrackedLink';

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
        <Reveal className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-[clamp(28px,3.6vw,44px)] font-extrabold text-white">
              Find what you can automate.
            </h2>
            <p className="max-w-[48ch] text-[17px] text-[#a9bdd8]">
              Thirty minutes, your actual workflows, and a clear list of what can be automated
              first — before you commit to anything.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <TrackedLink href="/contact" event="Book Your Free Automation Audit" location="final_cta" className="ap-btn ap-btn-pri">
              Book Your Free Automation Audit
            </TrackedLink>
            <WhatsAppLink className="ap-btn ap-btn-ghost">Chat on WhatsApp</WhatsAppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
