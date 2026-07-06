/**
 * Re-exports from data/siteContent.ts — edit content in data/siteContent.ts only.
 */
export {
  site,
  site as SITE,
  images,
  navLinks,
  navLinks as NAV_LINKS,
  cta,
  home,
  services,
  services as SERVICES,
  servicesPage,
  aboutPage,
  contactPage,
  footer,
  serviceDetail,
  getServiceBySlug,
  type ServiceSlug,
} from '@/data/siteContent';

import { home } from '@/data/siteContent';

/** Legacy alias used by WhyChooseUs */
export const WHY_CHOOSE_US = home.whyChooseUs.items;
