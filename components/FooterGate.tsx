'use client';

import { usePathname } from 'next/navigation';
import { hidesDarkChrome } from '@/lib/routes';
import Footer from './Footer';

/** Renders the public footer everywhere except the /admin area. */
export default function FooterGate() {
  const pathname = usePathname();
  if (hidesDarkChrome(pathname)) return null;
  return <Footer />;
}
