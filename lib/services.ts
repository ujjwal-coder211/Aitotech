/**
 * Service data layer — reads the catalogue from Supabase when it is
 * configured, and falls back to data/services.ts otherwise, so the site
 * renders the same list with or without a database.
 *
 * `accent` and `gradient` are still carried because the admin CMS writes
 * them, but the current design derives its styling from the service group
 * instead of per-row colours.
 */
import {
  catalogue,
  type ServiceCatalogueItem,
  type ServiceGroupId,
} from '@/data/services';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';

export interface ServiceRecord {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: string;
  group: ServiceGroupId;
  accent?: string;
  gradient?: string;
}

/** The group a slug belongs to — the table has no column for it. */
function groupFor(slug: string): ServiceGroupId {
  return catalogue.find((s) => s.slug === slug)?.group ?? 'software';
}

function fromCatalogue(item: ServiceCatalogueItem): ServiceRecord {
  return {
    slug: item.slug,
    title: item.title,
    short: item.short,
    description: item.description,
    features: [...item.features],
    icon: item.icon,
    group: item.group,
  };
}

const staticServices = (): ServiceRecord[] =>
  [...catalogue].sort((a, b) => a.order - b.order).map(fromCatalogue);

/** All published services, database first. */
export async function getServices(): Promise<ServiceRecord[]> {
  if (!isSupabaseConfigured()) return staticServices();

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('published', true)
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) return staticServices();

    return data.map((row) => ({
      slug: row.slug,
      title: row.title,
      short: row.short,
      description: row.description,
      features: Array.isArray(row.features) ? row.features : [],
      icon: row.icon,
      group: groupFor(row.slug),
      accent: row.accent,
      gradient: row.gradient,
    }));
  } catch {
    return staticServices();
  }
}

export async function getService(slug: string): Promise<ServiceRecord | null> {
  const all = await getServices();
  return all.find((s) => s.slug === slug) ?? null;
}

/** Published services bucketed by group, in catalogue order. */
export async function getServicesByGroup(): Promise<Record<ServiceGroupId, ServiceRecord[]>> {
  const all = await getServices();
  return {
    presence: all.filter((s) => s.group === 'presence'),
    software: all.filter((s) => s.group === 'software'),
    automation: all.filter((s) => s.group === 'automation'),
  };
}
