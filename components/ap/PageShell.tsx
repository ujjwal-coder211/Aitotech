import type { ReactNode } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

/** Light-system chrome shared by every marketing page. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="ap-root">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
