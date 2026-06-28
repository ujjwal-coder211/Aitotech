/** Server-side Routely Railway URL */

export function getRoutelyApiUrl(): string | undefined {
  const url = (process.env.ROUTELY_API_URL || process.env.AKSH_API_URL)?.trim();
  return url?.replace(/\/$/, '') || undefined;
}

export function getRoutelyApiKey(): string | undefined {
  const key = (process.env.ROUTELY_API_KEY || process.env.AKSH_API_KEY)?.trim();
  return key || undefined;
}

export const getAkshApiUrl = getRoutelyApiUrl;
export const getAkshApiKey = getRoutelyApiKey;

export function getAgentsApiUrl(): string | undefined {
  const url = process.env.AGENTS_API_URL?.trim();
  return url?.replace(/\/$/, '') || undefined;
}

export function getAgentsApiKey(): string | undefined {
  const key = process.env.AGENTS_API_KEY?.trim();
  return key || undefined;
}
