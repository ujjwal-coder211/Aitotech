import type { Metadata } from 'next';
import Link from 'next/link';
import { aboutPage } from '@/data/siteContent';
import PageHero from '@/components/PageHero';
import FounderSection from '@/components/FounderSection';

export const metadata: Metadata = {
  title: 'About',
  description: "Learn about AitoTech's mission and how we help teams with AI automation.",
};

export default function AboutPage() {
  const { hero, pillars, team, ctaButton } = aboutPage;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page">
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          highlight={hero.highlight}
          description={hero.description}
        />

        <FounderSection />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="border-t border-white/[0.08] pt-6">
              <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:mt-16 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-white">{team.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">{team.body}</p>
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <Link href="/contact" className="btn-primary inline-flex">
            {ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
