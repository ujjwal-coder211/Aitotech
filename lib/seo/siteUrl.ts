/** Canonical site URL — set in Vercel as NEXT_PUBLIC_SITE_URL=https://aitotech.in */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://aitotech.in';

export const defaultOgImage = `${siteUrl}/images/og-aksh.svg`;
