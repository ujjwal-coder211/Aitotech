import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/siteUrl';

export const metadata: Metadata = {
  title: 'Routely Studio — SAIRA Phase 1 demo',
  description: 'Interactive preview of Omni, Harness, and Hermes — mock demo, no backend required.',
  alternates: { canonical: `${siteUrl}/routely/demo` },
};

export default function RoutelyDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
