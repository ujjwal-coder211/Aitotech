'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sairaDocPages } from '@/data/sairaDocs';
import { cn } from '@/lib/utils';

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Routely</p>
      <nav className="space-y-0.5">
        <Link
          href="/docs"
          className={cn(
            'block rounded-lg px-3 py-2 text-sm transition',
            pathname === '/docs' ? 'bg-brand-soft text-brand-light' : 'text-zinc-400 hover:bg-surface-hover hover:text-white'
          )}
        >
          Overview
        </Link>
        {sairaDocPages.map((doc) => {
          const href = `/docs/${doc.slug}`;
          const active = pathname === href;
          return (
            <Link
              key={doc.slug}
              href={href}
              className={cn(
                'block rounded-lg px-3 py-2 text-sm transition',
                active ? 'bg-brand-soft text-brand-light' : 'text-zinc-400 hover:bg-surface-hover hover:text-white'
              )}
            >
              {doc.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
