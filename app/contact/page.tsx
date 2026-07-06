import type { Metadata } from 'next';
import { contactPage, site } from '@/data/siteContent';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import WhatsAppLink from '@/components/WhatsAppLink';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with AitoTech for AI automation consulting and demos.',
};

const iconPaths: Record<string, string> = {
  mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  whatsapp:
    'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  location:
    'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
};

function ContactIcon({ name }: { name: string }) {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[name] ?? iconPaths.mail} />
    </svg>
  );
}

export default function ContactPage() {
  const { hero, infoCards } = contactPage;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          highlight={hero.highlight}
          description={hero.description}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="space-y-4 sm:space-y-5">
            {infoCards.map((item) => (
              <div key={item.label} className="glass-panel flex gap-4 p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] text-zinc-400">
                  <ContactIcon name={item.icon} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="break-words text-sm text-zinc-500">
                    {item.label === 'Email' ? (
                      <a href={`mailto:${item.value}`} className="hover:text-brand-light">
                        {item.value}
                      </a>
                    ) : item.label === 'WhatsApp' ? (
                      <WhatsAppLink className="cursor-pointer text-left hover:text-brand-light">
                        {item.value} &rarr;
                      </WhatsAppLink>
                    ) : item.label === 'Office' ? (
                      <a
                        href={site.map.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-light"
                        title="Open in Google Maps"
                      >
                        {item.value} &rarr;
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </div>
            ))}

            <div className="glass-panel flex items-center justify-between gap-4 p-4 sm:p-5">
              <p className="text-sm font-medium text-white">Connect with us</p>
              <SocialLinks size="sm" />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
