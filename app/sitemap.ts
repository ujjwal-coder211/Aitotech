import type { MetadataRoute } from 'next';
import { getAllDocSlugs } from '@/data/akshDocs';
import { siteUrl } from '@/lib/seo/siteUrl';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const docPages = getAllDocSlugs().map((slug) => ({
    url: `${siteUrl}/docs/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/aksh`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${siteUrl}/aksh/press`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/docs`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    ...docPages,
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
