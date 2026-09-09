import type { Metadata } from 'next';
import DemoStudio from '@/components/DemoStudio';
import PageShell from '@/components/ap/PageShell';
import PageIntro from '@/components/ap/PageIntro';
import FinalCta from '@/components/ap/FinalCta';

export const metadata: Metadata = {
  title: 'Demos & Templates',
  description:
    'Browse website templates and automation demos by AitoTech. Tell us your requirement and get a personalised demo built for your business.',
  alternates: { canonical: '/demos' },
};

export default function DemosPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Demos & templates"
        title={
          <>
            See it working before you <span className="text-azure-deep">commit to anything.</span>
          </>
        }
        description="Browse live templates by industry, then tell us your requirement and we will build a demo around your own workflow."
      />

      <section className="ap-sec pt-4">
        <div className="ap-wrap">
          <DemoStudio />
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
