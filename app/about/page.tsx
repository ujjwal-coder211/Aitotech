import type { Metadata } from 'next';
import Link from 'next/link';
import { aboutPage } from '@/data/siteContent';
import PageHero, { ComingSoonBlock } from '@/components/PageHero';
import FounderSection from '@/components/FounderSection';

export const metadata: Metadata = {
  title: 'About',
  description: "Learn about AitoTech's mission and approach to enterprise automation.",
};

export default function AboutPage() {
  const { hero, pillars, teamPlaceholder, ctaButton } = aboutPage;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page">
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          highlight={hero.highlight}
          description={hero.description}
          comingSoon
          comingSoonLabel={hero.comingSoonBadge}
        />

        <FounderSection />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
          {pillars.map((item) => (
            <div key={item.title} className="card-hover p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-brand-light">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.body}</p>
            </div>
          ))}
        </div>

        <ComingSoonBlock
          title={teamPlaceholder.title}
          body={teamPlaceholder.body}
          ctaLabel={teamPlaceholder.cta}
        />

        <div className="mt-12 text-center sm:mt-16">
          <Link href="/contact" className="btn-primary inline-flex">
            {ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
