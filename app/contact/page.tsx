import type { Metadata } from 'next';
import { contactPage, site } from '@/data/siteContent';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with AitoTech for AI automation consulting and demos.',
};

const iconMap: Record<string, string> = {
  mail: '✉',
  phone: '☎',
  location: '◎',
  clock: '◷',
};

export default function ContactPage() {
  const { hero, infoCards, mapPlaceholder } = contactPage;

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
              <div key={item.label} className="glass flex gap-4 rounded-2xl p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-lg text-cyan-400">
                  {iconMap[item.icon] ?? '•'}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="break-words text-sm text-slate-500">
                    {item.label === 'Email' ? (
                      <a href={`mailto:${item.value}`} className="hover:text-cyan-400">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </div>
            ))}

            {/* Google Map — Delhi office */}
            <div className="glass overflow-hidden rounded-2xl">
              <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{mapPlaceholder.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{mapPlaceholder.body}</p>
                </div>
                <a
                  href={site.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg bg-cyan-500/15 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-500/25"
                >
                  {mapPlaceholder.directions} ↗
                </a>
              </div>
              <iframe
                src={site.map.embedUrl}
                title="AitoTech office location — Delhi, India"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0 grayscale-[20%]"
                allowFullScreen
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
