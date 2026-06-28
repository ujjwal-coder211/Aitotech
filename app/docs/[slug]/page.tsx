import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DocBody from '@/components/docs/DocBody';
import { getAllDocSlugs, getDocBySlug } from '@/data/sairaDocs';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return { title: 'Not Found' };
  return {
    title: doc.title,
    description: doc.description,
  };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  return (
    <div>
      <header className="mb-10 border-b border-line pb-8">
        {doc.badge && (
          <span className="mb-3 inline-block rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-light">
            {doc.badge}
          </span>
        )}
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">{doc.title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300">{doc.description}</p>
      </header>

      <DocBody doc={doc} />

      <nav className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:justify-between">
        {doc.prev ? (
          <Link href={`/docs/${doc.prev.slug}`} className="text-sm text-zinc-400 hover:text-white">
            ← {doc.prev.title}
          </Link>
        ) : (
          <span />
        )}
        {doc.next ? (
          <Link href={`/docs/${doc.next.slug}`} className="text-sm text-brand-light hover:underline sm:text-right">
            {doc.next.title} →
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
