import Link from 'next/link';
import AutomationEngine from './AutomationEngine';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfdff] to-white pb-20 pt-14 sm:pb-24 sm:pt-20">
      <div className="ap-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal stagger={0.09}>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="block h-0.5 w-[34px] bg-azure" />
              <span className="ap-eyebrow">AI Business Automation · Delhi, India</span>
            </div>

            <h1 className="mb-5 text-[clamp(34px,5.2vw,58px)] font-extrabold text-balance">
              Your business runs every day.{' '}
              <span className="text-azure-deep">Let automation run it smarter.</span>
            </h1>

            <p className="ap-lead mb-8 max-w-[54ch]">
              From customer enquiries to internal operations, AitoTech connects AI, automation and
              your existing business tools into one intelligent workflow.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="ap-btn ap-btn-pri">
                Book Free Automation Audit
              </Link>
              <Link href="/how-it-works" className="ap-btn ap-btn-sec">
                See How It Works
              </Link>
            </div>

            <p className="mt-6 text-[13.5px] text-quiet-soft">
              Free 30-minute audit — we map your actual workflows before a line of code is written.
            </p>
          </Reveal>

          <Reveal delay={0.15} y={26}>
            <AutomationEngine />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
