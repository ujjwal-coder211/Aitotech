import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { demoTemplates, getDemoTemplate } from '@/data/demoTemplates';
import DemoSiteFull from '@/components/demos/DemoSiteFull';

export function generateStaticParams() {
  return demoTemplates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getDemoTemplate(slug);
  return {
    title: t ? `${t.card.name} — Demo Template` : 'Demo Template',
    description: t ? `Live ${t.category} website demo template by AitoTech.` : undefined,
  };
}

export default async function DemoPreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getDemoTemplate(slug);
  if (!t) notFound();

  return (
    <div className="relative">
      {/* thin AitoTech ribbon so the client can get back — the demo itself stays clean */}
      <div className="flex items-center justify-between gap-3 bg-black px-4 py-2 text-xs text-zinc-400">
        <Link href="/demos" className="inline-flex items-center gap-1.5 font-medium text-zinc-300 hover:text-white">
          <span aria-hidden>←</span> Back to AitoTech demos
        </Link>
        <span className="hidden sm:inline">
          This is a sample template · <span className="text-zinc-300">we build it with your brand & content</span>
        </span>
        <Link
          href={`/demos#request`}
          className="rounded-md bg-brand px-3 py-1 font-semibold text-white hover:bg-brand-dark"
        >
          Request this design
        </Link>
      </div>
      <DemoSiteFull t={t} />
    </div>
  );
}
