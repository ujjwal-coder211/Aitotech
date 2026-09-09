/**
 * Routes that use the light "automation platform" design system.
 * They render their own header and footer, so the older dark chrome
 * (header, footer, ambient background) sits out on these paths.
 */
const LIGHT_ROUTES = [
  '/solutions',
  '/services',
  '/demos',
  '/products/outreach',
  '/docs',
  '/industries',
  '/how-it-works',
  '/case-studies',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
] as const;

export function isLightRoute(pathname: string) {
  if (pathname === '/') return true;
  return LIGHT_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

/** Paths that render with no site chrome at all. */
export function isBareRoute(pathname: string) {
  return (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/products/outreach/admin') ||
    pathname.startsWith('/demos/preview') ||
    pathname.startsWith('/connect')
  );
}

/** True when the shared dark chrome should be skipped entirely. */
export function hidesDarkChrome(pathname: string) {
  return isLightRoute(pathname) || isBareRoute(pathname);
}
