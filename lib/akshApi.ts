/** Server-side Aksh / Railway backend URL (Vercel env). */

export function getAkshApiUrl(): string | undefined {
  const url = (process.env.AKSH_API_URL || process.env.AGENTS_API_URL)?.trim();
  return url?.replace(/\/$/, '') || undefined;
}

export function getAkshApiKey(): string | undefined {
  const key = (process.env.AKSH_API_KEY || process.env.AGENTS_API_KEY)?.trim();
  return key || undefined;
}
