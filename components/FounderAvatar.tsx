'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/data/siteContent';
import { cn } from '@/lib/utils';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  linked?: boolean;
  className?: string;
  showName?: boolean;
};

const sizes = {
  sm: { box: 'h-8 w-8', text: 'text-[10px]', name: 'text-xs' },
  md: { box: 'h-10 w-10', text: 'text-xs', name: 'text-sm' },
  lg: { box: 'h-32 w-32', text: 'text-2xl', name: 'text-base' },
};

export default function FounderAvatar({ size = 'sm', linked = true, className, showName = false }: Props) {
  const [imgError, setImgError] = useState(false);
  const s = sizes[size];
  const { founder } = site;

  const inner = (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'relative shrink-0 overflow-hidden rounded-full ring-2 ring-brand/30 ring-offset-2 ring-offset-surface',
          s.box
        )}
      >
        {!imgError ? (
          <Image
            src={founder.photo}
            alt={`${founder.name} — ${founder.role}`}
            fill
            className="object-cover"
            sizes={size === 'lg' ? '128px' : size === 'md' ? '40px' : '32px'}
            onError={() => setImgError(true)}
            priority={size !== 'sm'}
          />
        ) : (
          <span
            className={cn(
              'flex h-full w-full items-center justify-center bg-gradient-to-br from-brand to-violet-600 font-bold text-white',
              s.text
            )}
          >
            {founder.initials}
          </span>
        )}
      </span>
      {showName && (
        <span className="hidden min-w-0 flex-col sm:flex">
          <span className={cn('truncate font-medium text-white', s.name)}>{founder.name}</span>
          <span className="truncate text-xs text-zinc-500">{founder.role}</span>
        </span>
      )}
    </span>
  );

  if (linked) {
    return (
      <Link href="/about" className="group transition-opacity hover:opacity-90" title={`${founder.name} — ${founder.role}`}>
        {inner}
      </Link>
    );
  }

  return inner;
}
