import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import WhatsAppLink from '@/components/WhatsAppLink';
import SocialLinks from '@/components/SocialLinks';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import Reveal from '@/components/ap/Reveal';

export const metadata: Metadata = {
  title: 'Contact — Book a Free Automation Audit',
  description:
    'Tell us what you want to automate. Thirty minutes, your actual workflows, and a clear list of what can be automated first. We reply within one business day.',
  alternates: { canonical: '/contact' },
};

const details = [
  { label: 'Email', value: 'info@aitotech.in', href: 'mailto:info@aitotech.in' },
  { label: 'Phone', value: '+91 76783 22020', href: 'tel:+917678322020' },
  { label: 'Studio', value: 'Delhi, India' },
  { label: 'Response', value: 'Within 24 hours on business days' },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s find what you can <span className="text-azure-deep">automate.</span>
          </>
        }
        description="Tell us what you want to build or automate. We reply within one business day — and the first conversation is a free audit, not a pitch."
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
                      <a href={d.href} className="text-[15px] text-ink hover:text-azure-deep">
                        {d.value}
                      </a>
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
                <h2 className="mb-2.5 text-[17px] font-bold">What happens in the audit</h2>
                <ul className="grid gap-2.5">
                  {[
                    'We map how work moves through your business today.',
                    'We mark the steps costing the most time or deals.',
                    'You get a written list of what can be automated first.',
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
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
