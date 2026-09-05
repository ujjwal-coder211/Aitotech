import type { Metadata } from 'next';
import SiteHeader from '@/components/ap/SiteHeader';
import SiteFooter from '@/components/ap/SiteFooter';
import Hero from '@/components/ap/Hero';
import ProblemSection from '@/components/ap/ProblemSection';
import EnginesSection from '@/components/ap/EnginesSection';
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
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
