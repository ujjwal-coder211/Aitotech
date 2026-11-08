import type { Metadata } from 'next';
import PageShell from '@/components/ap/PageShell';
import HomeHero from '@/components/ap/HomeHero';
import ProblemSection from '@/components/ap/ProblemSection';
import ServicesOverview from '@/components/ap/ServicesOverview';
import GrowthSection from '@/components/ap/GrowthSection';
import IndustriesSection from '@/components/ap/IndustriesSection';
import FeaturedSection from '@/components/ap/FeaturedSection';
import WhySection from '@/components/ap/WhySection';
import ProcessSection from '@/components/ap/ProcessSection';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'Digital Solutions, AI Automation & Custom Technology',
  description:
    'AitoTech helps businesses grow through digital solutions, AI automation and custom technology — websites, web and mobile apps, custom software, AI chatbots, WhatsApp automation and AI voice agents. Book a free consultation.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <PageShell>
      <HomeHero />
      <ProblemSection />
      <ServicesOverview />
      <GrowthSection />
      <IndustriesSection />
      <FeaturedSection />
      <WhySection />
      <ProcessSection />
      <FinalCta />
    </PageShell>
  );
}
