import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect with AitoTech',
  description: 'Call, email, visit, or save AitoTech to your contacts.',
  robots: { index: false, follow: false },
};

const PHONE_DISPLAY = '+91 76783 22020';
const PHONE_HREF = 'tel:+917678322020';
const EMAIL = 'info@aitotech.in';
const SITE = 'aitotech.in';

/** A-monogram echoing the AitoTech logo (white A + gold swoosh). */
function Monogram() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" aria-hidden>
      <path d="M32 9 L55 55 H43.5 L32 31 L20.5 55 H9 Z" fill="#ffffff" />
      <path
        d="M12 41 Q33 27 55 39"
        stroke="#f4b400"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="14.5" cy="41.5" r="3.6" fill="#f4b400" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 0 1 0-18m0 18c2.5 0 4-4.03 4-9s-1.5-9-4-9m0 18c-2.5 0-4-4.03-4-9s1.5-9 4-9M3.6 9h16.8M3.6 15h16.8" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

const contactRows = [
  { icon: <IconPhone />, label: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: <IconMail />, label: EMAIL, href: `mailto:${EMAIL}` },
  { icon: <IconGlobe />, label: SITE, href: 'https://aitotech.in' },
  { icon: <IconPin />, label: 'WZ-43, 3rd Floor, Kirti Nagar, New Delhi - 110015', href: null },
];

const trust = ['Reliable Solutions', 'Client Focused', 'Growth Driven', 'End-to-End Support'];

export default function ConnectPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#0a1a33] px-4 py-8">
      {/* ambient brand glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(244,180,0,0.14),transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,102,163,0.22),transparent_70%)] blur-2xl" />
      </div>

      <div className="animate-fade-in relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-[#0f2547] shadow-[0_30px_80px_-24px_rgba(0,0,0,0.65)]">
        {/* gold top accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#f4b400] via-[#ffcf47] to-[#f4b400]" />

        <div className="px-7 pb-7 pt-8 sm:px-9">
          {/* logo + name */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <Monogram />
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold tracking-tight">
              <span className="text-white">Aito</span>
              <span className="text-[#f4b400]">Tech</span>
            </h1>
            <p className="mt-1.5 text-sm text-slate-300">Smart Solutions for Modern Businesses</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#f4b400]/80">
              Technology · Automation · Growth
            </p>
          </div>

          {/* divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* contact rows */}
          <ul className="space-y-3">
            {contactRows.map((row) => {
              const inner = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4b400]/15 text-[#f4b400]">
                    {row.icon}
                  </span>
                  <span className="text-sm leading-snug text-slate-200">{row.label}</span>
                </>
              );
              return (
                <li key={row.label}>
                  {row.href ? (
                    <a href={row.href} className="flex items-center gap-3 rounded-xl px-1 py-1 transition-colors hover:text-white">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-1 py-1">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* action buttons */}
          <div className="mt-7 grid grid-cols-1 gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-5 py-3.5 text-sm font-bold text-[#0a1a33] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <IconPhone />
              Call Now
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#f4b400] hover:text-[#f4b400]"
              >
                <IconMail />
                Email
              </a>
              <a
                href="https://aitotech.in"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#f4b400] hover:text-[#f4b400]"
              >
                <IconGlobe />
                Website
              </a>
            </div>
            <a
              href="/aitotech.vcf"
              download
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#0a1a33] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-8H7v8M7 3v5h8" />
              </svg>
              Save Contact
            </a>
          </div>

          {/* trust strip */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-white/10 pt-5">
            {trust.map((t) => (
              <span key={t} className="text-[11px] font-medium text-slate-400">
                <span className="mr-1 text-[#f4b400]">◆</span>
                {t}
              </span>
            ))}
          </div>

          <p className="mt-6 text-center font-display text-lg italic text-[#f4b400]">Let&apos;s Connect!</p>
        </div>
      </div>
    </main>
  );
}
