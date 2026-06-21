'use client';

import { useAkshDemo } from './AkshDemoProvider';

export default function TryAkshDemoButton({
  className = '',
  children = 'Try Aksh Studio',
  prompt,
  variant = 'primary',
}: {
  className?: string;
  children?: React.ReactNode;
  prompt?: string;
  variant?: 'primary' | 'secondary';
}) {
  const { openDemo } = useAkshDemo();

  const base =
    variant === 'primary'
      ? 'btn-primary inline-flex bg-violet-600 hover:bg-violet-500'
      : 'btn-secondary border-zinc-700 text-zinc-200';

  return (
    <button type="button" onClick={() => openDemo(prompt)} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
