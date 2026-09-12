/**
 * Outreach admin console. Bare route — no marketing chrome — but it still
 * needs its own <main> now that the root layout doesn't provide one.
 */
export default function OutreachAdminLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
