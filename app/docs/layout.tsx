import type { Metadata } from 'next';
import DocsSidebar from '@/components/docs/DocsSidebar';
import PageShell from '@/components/ap/PageShell';
import { docsHub } from '@/data/sairaDocs';

export const metadata: Metadata = {
  title: 'Routely documentation',
  description: docsHub.description,
  keywords: [
    'Routely docs',
    'Routely browser',
    'Routely API',
    'installation',
    'getting started',
    'AI coding India',
  ],
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageShell>
      <section className="ap-sec">
        <div className="ap-wrap">
          <div className="mb-10 max-w-3xl">
            <p className="ap-eyebrow">{docsHub.eyebrow}</p>
            <h1 className="mt-3 text-[clamp(28px,3.6vw,42px)] font-extrabold">{docsHub.title}</h1>
            <p className="ap-lead mt-4">{docsHub.description}</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14 xl:grid-cols-[240px_1fr]">
            <DocsSidebar />
            <div className="min-w-0">{children}</div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
