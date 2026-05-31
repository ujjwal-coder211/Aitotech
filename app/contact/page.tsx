import type { Metadata } from 'next';
import { contactPage } from '@/data/siteContent';
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
                    ) : item.label === 'Phone' ? (
                      <a href={`tel:${item.value.replace(/\s/g, '')}`} className="hover:text-cyan-400">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </div>
            ))}

            {/* Map / office placeholder */}
            <div className="glass rounded-2xl border border-dashed border-slate-600/50 p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {mapPlaceholder.comingSoon}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{mapPlaceholder.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{mapPlaceholder.body}</p>
              <div className="mt-4 flex h-32 items-center justify-center rounded-xl bg-abyss-100/80 text-sm text-slate-600 sm:h-40">
                Map embed placeholder
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
