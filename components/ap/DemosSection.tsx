import Link from 'next/link';
import Reveal from './Reveal';

const panelClass =
  'flex h-full flex-col gap-4 rounded-[18px] border border-white/[0.13] bg-white/[0.055] p-6 transition-colors duration-300 hover:border-white/25';
const screenClass = 'rounded-xl border border-white/10 bg-[#0a1a3f] p-4';

export default function DemosSection() {
  return (
    <section className="ap-sec bg-navy text-white">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[40ch] sm:mb-12">
          <p className="ap-eyebrow mb-3.5 text-azure">Live demos</p>
          <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold text-white">
            Don&rsquo;t take our word for it. Talk to it.
          </h2>
          <p className="mt-4 max-w-[52ch] text-[17px] text-[#a9bdd8]">
            Try the same agents we deploy for clients.
          </p>
        </Reveal>

        <Reveal stagger={0.07} y={20} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* WhatsApp agent */}
          <div className={panelClass}>
            <h3 className="text-[19px] font-bold text-white">AI WhatsApp Agent</h3>
            <div className={`${screenClass} flex flex-col gap-2.5`}>
              <span className="max-w-[85%] self-start rounded-[12px_12px_12px_3px] bg-white/[0.09] px-3 py-2 text-[13px] text-[#e6eefa]">
                Do you have 2BHK in Kirti Nagar?
              </span>
              <span className="max-w-[85%] self-end rounded-[12px_12px_3px_12px] bg-azure-deep px-3 py-2 text-[13px] text-white">
                Yes — 3 available. What&rsquo;s your budget range?
              </span>
              <span className="max-w-[85%] self-start rounded-[12px_12px_12px_3px] bg-white/[0.09] px-3 py-2 text-[13px] text-[#e6eefa]">
                Around 80L
              </span>
            </div>
            <Link href="/contact" className="ap-btn ap-btn-ghost mt-auto h-11 text-sm">
              Start a chat
            </Link>
          </div>

          {/* Voice agent */}
          <div className={panelClass}>
            <h3 className="text-[19px] font-bold text-white">AI Voice Agent</h3>
            <div className={`${screenClass} flex flex-col items-center gap-3`}>
              <div className="flex h-[38px] items-end gap-[3px]" aria-hidden>
                {[12, 26, 34, 18, 30, 14, 24, 9].map((h, i) => (
                  <span
                    key={i}
                    className="w-[3px] rounded-sm bg-azure"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <p className="text-center text-[13px] text-[#a9bdd8]">
                &ldquo;Hi, this is Aria from AitoTech — is now a good time?&rdquo;
              </p>
            </div>
            <Link href="/contact" className="ap-btn ap-btn-ghost mt-auto h-11 text-sm">
              Get a demo call
            </Link>
          </div>

          {/* Qualification */}
          <div className={panelClass}>
            <h3 className="text-[19px] font-bold text-white">Lead Qualification</h3>
            <div className={`${screenClass} grid gap-3`}>
              <Row label="Budget confirmed" value="Yes" ok />
              <Row label="Timeline" value="30 days" />
              <Row label="Decision maker" value="Yes" ok />
              <span className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#a9bdd8]">Score</span>
                <span className="font-heading text-xl font-extrabold text-azure">Hot</span>
              </div>
            </div>
            <Link href="/contact" className="ap-btn ap-btn-ghost mt-auto h-11 text-sm">
              Try qualification
            </Link>
          </div>

          {/* Workflow run */}
          <div className={panelClass}>
            <h3 className="text-[19px] font-bold text-white">Business Automation</h3>
            <div className={`${screenClass} grid gap-2.5`}>
              <Step label="Enquiry received" state="done" />
              <Step label="Qualified & scored" state="done" />
              <Step label="Booking slot offered" state="active" />
              <Step label="CRM updated" state="idle" />
            </div>
            <Link href="/contact" className="ap-btn ap-btn-ghost mt-auto h-11 text-sm">
              Run the workflow
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ label, value, ok }: { label: string; value: string; ok?: boolean }) {
  return (
    <div className="flex justify-between text-[13px] text-[#e6eefa]">
      <span>{label}</span>
      <span className={ok ? 'text-[#4ade80]' : ''}>{value}</span>
    </div>
  );
}

function Step({ label, state }: { label: string; state: 'done' | 'active' | 'idle' }) {
  const dot =
    state === 'done' ? 'bg-[#4ade80]' : state === 'active' ? 'bg-azure' : 'bg-[#42506b]';
  return (
    <div
      className={`flex items-center gap-2.5 text-[13px] ${
        state === 'idle' ? 'text-[#7c8ba3]' : 'text-[#e6eefa]'
      }`}
    >
      <span className={`h-[7px] w-[7px] flex-none rounded-full ${dot}`} />
      {label}
    </div>
  );
}
