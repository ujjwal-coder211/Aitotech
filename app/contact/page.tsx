import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from '@/components/ContactForm';
import WhatsAppLink from '@/components/WhatsAppLink';
import SocialLinks from '@/components/SocialLinks';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import TrackedAnchor from '@/components/ap/TrackedAnchor';
import Reveal from '@/components/ap/Reveal';
import { site } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Contact — Book a Free Consultation',
  description:
    'Tell us what you want to build or automate. Thirty minutes on your actual business and a clear recommendation of what to build first. We reply within one business day.',
  alternates: { canonical: '/contact' },
};

const details = [
  { label: 'Email', value: 'info@aitotech.in', href: 'mailto:info@aitotech.in' },
  { label: 'Phone', value: '+91 76783 22020', href: 'tel:+917678322020' },
  { label: 'Registered office', value: site.legal.registeredAddress },
  { label: 'Response', value: 'Within 24 hours on business days' },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Tell us what you are trying to{' '}
            <span className="text-azure-deep">grow.</span>
          </>
        }
        description="A website, an app, custom software or automation — tell us the problem and we will tell you what to build first. We reply within one business day, and the first conversation is free."
      />

      <section className="ap-sec pt-4">
        <div className="ap-wrap">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-14">
            <Reveal stagger={0.07} y={18}>
              <div className="grid">
                {details.map((d) => (
                  <div key={d.label} className="border-t border-hairline py-5 first:border-t-0 first:pt-0">
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-quiet-soft">
                      {d.label}
                    </p>
                    {d.href ? (
                      <TrackedAnchor
                        href={d.href}
                        event={d.href.startsWith('tel:') ? 'phone_click' : 'email_click'}
                        className="text-[15px] text-ink hover:text-azure-deep"
                      >
                        {d.value}
                      </TrackedAnchor>
                    ) : (
                      <p className="text-[15px] text-ink">{d.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <WhatsAppLink className="ap-btn ap-btn-sec h-11 text-sm">
                  Chat on WhatsApp
                </WhatsAppLink>
                <SocialLinks size="sm" />
              </div>

              <div className="ap-card mt-7 p-6">
                <h2 className="mb-2.5 text-[17px] font-bold">What happens in the consultation</h2>
                <ul className="grid gap-2.5">
                  {[
                    'We learn your business, your customers and what is getting in the way.',
                    'We mark the steps costing you the most time or the most deals.',
                    'You get a written recommendation of what to build first — and what can wait.',
                  ].map((line) => (
                    <li key={line} className="flex gap-3 text-sm text-quiet">
                      <span className="mt-2.5 h-0.5 w-3 flex-none bg-azure" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal y={22}>
              <Suspense fallback={<div className="ap-card h-[560px] animate-pulse" />}>
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
