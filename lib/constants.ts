/**
 * Re-exports from data/siteContent.ts — edit content in data/siteContent.ts only.
 */
export {
  site,
  site as SITE,
  images,
  navLinks,
  navLinks as NAV_LINKS,
  productLinks,
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

/** Legacy aliases used by AnimatedStats / WhyChooseUs */
export const HERO_STATS = home.stats;
export const WHY_CHOOSE_US = home.whyChooseUs.items;
