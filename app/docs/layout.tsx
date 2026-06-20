import type { Metadata } from 'next';
import DocsSidebar from '@/components/docs/DocsSidebar';
import { docsHub } from '@/data/akshDocs';

export const metadata: Metadata = {
  title: 'Aksh docs — India\'s Cursor alternative',
  description: docsHub.description,
  keywords: [
    'Aksh docs',
    'Cursor alternative',
    'Aksh Studio',
    'Omni API',
    'installation',
    'getting started',
    'India AI coding',
  ],
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-28">
      <div className="container-page">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{docsHub.eyebrow}</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">{docsHub.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">{docsHub.description}</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14 xl:grid-cols-[240px_1fr]">
          <DocsSidebar />
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
