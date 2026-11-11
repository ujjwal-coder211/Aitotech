/**
 * Where a visitor came from, remembered until they actually get in touch.
 *
 * The analytics in the Command Center group leads by first_source, and until
 * now every website lead arrived labelled "website" — true, and useless. The
 * answer to "is Instagram worth the effort" was not in there, because the one
 * place it could have been captured never looked.
 *
 * FIRST touch wins, deliberately. Somebody clicks an Instagram link, reads for
 * a week, then returns by typing the address and fills the form. Last-touch
 * would credit that to "direct" and quietly tell the owner Instagram does
 * nothing. The first visit is the one that cost something to earn.
 *
 * Kept in sessionStorage, never in a cookie: no consent banner, nothing
 * tracked across sites, nothing that outlives the visit. A visitor who leaves
 * and comes back a week later is a new first touch, which is honest about what
 * this can actually know.
 */

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  landing_path?: string;
}

const KEY = 'aitotech_attribution';
const MAX = 200;

function clean(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  const trimmed = String(value).trim().slice(0, MAX);
  return trimmed || undefined;
}

/**
 * Work out where this visit came from when there are no UTM tags — which is
 * most of the time, because nobody tags a link they paste into a WhatsApp
 * status.
 */
function fromReferrer(referrer: string): { utm_source?: string; utm_medium?: string } {
  if (!referrer) return { utm_source: 'direct', utm_medium: 'none' };
  let host: string;
  try {
    host = new URL(referrer).hostname.replace(/^www\./, '');
  } catch {
    return {};
  }
  if (host === window.location.hostname) return {}; // our own pages

  const known: Record<string, { utm_source: string; utm_medium: string }> = {
    'google.com': { utm_source: 'google', utm_medium: 'organic' },
    'google.co.in': { utm_source: 'google', utm_medium: 'organic' },
    'bing.com': { utm_source: 'bing', utm_medium: 'organic' },
    'instagram.com': { utm_source: 'instagram', utm_medium: 'social' },
    'l.instagram.com': { utm_source: 'instagram', utm_medium: 'social' },
    'facebook.com': { utm_source: 'facebook', utm_medium: 'social' },
    'l.facebook.com': { utm_source: 'facebook', utm_medium: 'social' },
    'linkedin.com': { utm_source: 'linkedin', utm_medium: 'social' },
    'lnkd.in': { utm_source: 'linkedin', utm_medium: 'social' },
    'youtube.com': { utm_source: 'youtube', utm_medium: 'social' },
    't.co': { utm_source: 'x', utm_medium: 'social' },
    'x.com': { utm_source: 'x', utm_medium: 'social' },
  };
  if (known[host]) return known[host];

  // WhatsApp strips the referrer, so a link shared in a chat usually looks
  // direct. Where it does come through, it is worth knowing.
  if (host.includes('whatsapp')) return { utm_source: 'whatsapp', utm_medium: 'social' };

  return { utm_source: host, utm_medium: 'referral' };
}

/** Record this visit, if it is the first one of the session. */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {};

  try {
    const existing = window.sessionStorage.getItem(KEY);
    if (existing) return JSON.parse(existing) as Attribution;
  } catch {
    // Private mode, or storage blocked. Attribution is worth having and never
    // worth breaking a page for.
  }

  const params = new URLSearchParams(window.location.search);
  const tagged = {
    utm_source: clean(params.get('utm_source')),
    utm_medium: clean(params.get('utm_medium')),
    utm_campaign: clean(params.get('utm_campaign')),
  };

  const guessed = tagged.utm_source ? {} : fromReferrer(document.referrer || '');

  const attribution: Attribution = {
    ...tagged,
    ...guessed,
    referrer: clean(document.referrer) ?? undefined,
    landing_path: clean(window.location.pathname + window.location.search),
  };

  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(attribution));
  } catch {
    /* nothing to do, and nothing worth breaking */
  }
  return attribution;
}

/** What was captured earlier in this visit. */
export function readAttribution(): Attribution {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : captureAttribution();
  } catch {
    return {};
  }
}
