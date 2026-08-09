import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Connect with AitoTech',
  description: 'Call, email, visit, or save AitoTech to your contacts.',
  robots: { index: false, follow: false },
};

const PHONE_DISPLAY = '+91 76783 22020';
const PHONE_HREF = 'tel:+917678322020';
const EMAIL = 'info@aitotech.in';
const SITE = 'aitotech.in';

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

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/aitotech.in', icon: <IconInstagram /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aitotech', icon: <IconLinkedIn /> },
  { label: 'WhatsApp', href: 'https://wa.me/917678322020', icon: <IconWhatsApp /> },
];

const contactRows = [
  { icon: <IconPhone />, label: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: <IconMail />, label: EMAIL, href: `mailto:${EMAIL}` },
  { icon: <IconGlobe />, label: SITE, href: 'https://aitotech.in' },
];

const trust = ['Reliable Solutions', 'Client Focused', 'Growth Driven', 'End-to-End Support'];

export default function ConnectPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#0a1a33] px-4 py-8">
      {/* ambient brand glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(46,163,232,0.18),transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,102,163,0.22),transparent_70%)] blur-2xl" />
      </div>

      <div className="animate-fade-in relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-[#0f2547] shadow-[0_30px_80px_-24px_rgba(0,0,0,0.65)]">
        {/* gold top accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#2ea3e8] via-[#5bb8ef] to-[#2ea3e8]" />

        <div className="px-7 pb-7 pt-8 sm:px-9">
          {/* brand logo on a clean white panel — mirrors the visiting card */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-[260px] rounded-2xl bg-white px-6 py-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/logo-full-v2.png"
                alt="AitoTech — AI · Automation · Development"
                width={400}
                height={381}
                priority
                className="h-auto w-full"
              />
            </div>
            <p className="mt-5 text-base font-semibold text-white">Smart Solutions for Modern Businesses</p>
          </div>

          {/* divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* contact rows */}
          <ul className="space-y-3">
            {contactRows.map((row) => {
              const inner = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2ea3e8]/15 text-[#2ea3e8]">
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
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1e73c4] to-[#2ea3e8] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(46,163,232,0.7)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <IconPhone />
              Call Now
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#2ea3e8] hover:text-[#2ea3e8]"
              >
                <IconMail />
                Email
              </a>
              <a
                href="https://aitotech.in"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#2ea3e8] hover:text-[#2ea3e8]"
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

          {/* social icons */}
          <div className="mt-7 flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-colors hover:border-[#2ea3e8] hover:bg-[#2ea3e8]/10 hover:text-[#2ea3e8]"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* trust strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-white/10 pt-5">
            {trust.map((t) => (
              <span key={t} className="text-[11px] font-medium text-slate-400">
                <span className="mr-1 text-[#2ea3e8]">◆</span>
                {t}
              </span>
            ))}
          </div>

          <p className="mt-6 text-center font-display text-lg italic text-[#2ea3e8]">Let&apos;s Connect!</p>
        </div>
      </div>
    </main>
  );
}
