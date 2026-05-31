import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

/**
 * Admin shell. Route protection is in middleware.ts (redirects to /admin/login).
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 min-h-screen pt-6 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
