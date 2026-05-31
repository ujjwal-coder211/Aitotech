'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

/** Renders the public footer everywhere except the /admin area. */
export default function FooterGate() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;
  return <Footer />;
}
