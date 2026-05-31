/**
 * Service data layer — reads from Supabase when configured,
 * otherwise falls back to static data/siteContent.ts.
 * This keeps the site working even before the database is set up.
 */
import { services as staticServices } from '@/data/siteContent';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';

export interface ServiceRecord {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: string;
  accent: string;
  gradient: string;
  comingSoon?: boolean;
  bentoLg?: string;
}

/** Bento spans applied by position (DB doesn't store layout). */
const BENTO_LAYOUT = [
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-2',
  'lg:col-span-2 lg:row-span-1',
];

function withLayout(list: Omit<ServiceRecord, 'bentoLg'>[]): ServiceRecord[] {
  return list.map((s, i) => ({ ...s, bentoLg: BENTO_LAYOUT[i % BENTO_LAYOUT.length] }));
}

/** All published services (DB first, static fallback). */
export async function getServices(): Promise<ServiceRecord[]> {
  if (!isSupabaseConfigured()) {
    return withLayout(staticServices.map(normalizeStatic));
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('published', true)
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return withLayout(staticServices.map(normalizeStatic));
    }

    return withLayout(
      data.map((row) => ({
        slug: row.slug,
        title: row.title,
        short: row.short,
        description: row.description,
        features: Array.isArray(row.features) ? row.features : [],
        icon: row.icon,
        accent: row.accent,
        gradient: row.gradient,
        comingSoon: false,
      }))
    );
  } catch {
    return withLayout(staticServices.map(normalizeStatic));
  }
}

export async function getService(slug: string): Promise<ServiceRecord | null> {
  const all = await getServices();
  return all.find((s) => s.slug === slug) ?? null;
}

function normalizeStatic(s: (typeof staticServices)[number]): Omit<ServiceRecord, 'bentoLg'> {
  return {
    slug: s.slug,
    title: s.title,
    short: s.short,
    description: s.description,
    features: [...s.features],
    icon: s.icon,
    accent: s.accent,
    gradient: s.gradient,
    comingSoon: s.comingSoon,
  };
}
