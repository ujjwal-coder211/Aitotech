import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import DemoStudio from '@/components/DemoStudio';
import { demosPage } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Demos & Templates',
  description:
    'Browse website templates and automation demos by AitoTech. Tell us your requirement and get a personalised demo for your business.',
};

export default function DemosPage() {
  const { hero } = demosPage;

  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page">
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          highlight={hero.highlight}
          description={hero.description}
        />
        <DemoStudio />
      </div>
    </div>
  );
}
