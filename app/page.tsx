import type { Metadata } from 'next';
import SiteHeader from '@/components/ap/SiteHeader';
import SiteFooter from '@/components/ap/SiteFooter';
import Hero from '@/components/ap/Hero';
import ProblemSection from '@/components/ap/ProblemSection';
import EnginesSection from '@/components/ap/EnginesSection';
import ScenariosSection from '@/components/ap/ScenariosSection';
import AutomateSection from '@/components/ap/AutomateSection';
import IndustriesSection from '@/components/ap/IndustriesSection';
import DemosSection from '@/components/ap/DemosSection';
import RoiSection from '@/components/ap/RoiSection';
import ProcessSection from '@/components/ap/ProcessSection';
import BlueprintsSection from '@/components/ap/BlueprintsSection';
import WhySection from '@/components/ap/WhySection';
import TrustSection from '@/components/ap/TrustSection';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'AI Business Automation for Growing Businesses',
  description:
    'AitoTech automates your whole business — customer enquiries, WhatsApp, AI voice calls and follow-ups, plus internal tasks, approvals, inventory and reports. Book a free automation audit.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <div className="ap-root">
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <EnginesSection />
        <ScenariosSection />
        <AutomateSection />
        <IndustriesSection />
        <DemosSection />
        <RoiSection />
        <ProcessSection />
        <BlueprintsSection />
        <WhySection />
        <TrustSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
