/**
 * Service data layer.
 *
 * data/services.ts decides which services exist; the Supabase `services`
 * table is a CMS layered on top of it, overriding the editable fields of a
 * matching slug, hiding one by unpublishing it, and adding rows of its own.
 *
 * It works this way round because the rest of the site — the footer, the
 * sitemap, the service detail pages — is built from the catalogue. If the
 * database were the only source, a table that is empty, stale or briefly
 * unreachable would turn every one of those links into a 404.
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

function fromRow(row: Record<string, unknown>): ServiceRecord {
  const slug = String(row.slug);
  return {
    slug,
    title: String(row.title),
    short: String(row.short),
    description: String(row.description),
    features: Array.isArray(row.features) ? (row.features as string[]) : [],
    icon: String(row.icon),
    group: groupFor(slug),
    accent: row.accent as string | undefined,
    gradient: row.gradient as string | undefined,
  };
}

/** Every published service: the catalogue, with the CMS layered over it. */
export async function getServices(): Promise<ServiceRecord[]> {
  if (!isSupabaseConfigured()) return staticServices();

  let rows: Record<string, unknown>[];
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data) return staticServices();
    rows = data;
  } catch {
    return staticServices();
  }

  const bySlug = new Map(rows.map((row) => [String(row.slug), row]));

  // The catalogue in its own order: a row overrides the copy, and an
  // unpublished row hides the service. A slug the table has never heard of
  // still renders, which is what keeps the site whole before it is seeded.
  const services = staticServices().flatMap((service) => {
    const row = bySlug.get(service.slug);
    if (!row) return [service];
    if (row.published === false) return [];
    return [fromRow(row)];
  });

  // Anything the CMS added that the catalogue does not know about, last.
  const extras = rows
    .filter((row) => row.published !== false && !catalogue.some((s) => s.slug === row.slug))
    .map(fromRow);

  return [...services, ...extras];
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
