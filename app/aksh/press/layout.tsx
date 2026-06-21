import type { Metadata } from 'next';
import { routely } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Press — Routely | AitoTech',
  description: 'Media information about Routely, AitoTech\'s AI coding tool for India.',
};

export default function AkshPressLayout({ children }: { children: React.ReactNode }) {
  return children;
}
