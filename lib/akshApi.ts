/** Server-side Aksh Railway URL — do NOT fall back to AGENTS_API_URL (different sales bot). */

export function getAkshApiUrl(): string | undefined {
  const url = process.env.AKSH_API_URL?.trim();
  return url?.replace(/\/$/, '') || undefined;
}

export function getAkshApiKey(): string | undefined {
  const key = process.env.AKSH_API_KEY?.trim();
  return key || undefined;
}

/** Separate Aitotech-agents project (contact form /tasks, legacy sales widget). */
export function getAgentsApiUrl(): string | undefined {
  const url = process.env.AGENTS_API_URL?.trim();
  return url?.replace(/\/$/, '') || undefined;
}

export function getAgentsApiKey(): string | undefined {
  const key = process.env.AGENTS_API_KEY?.trim();
  return key || undefined;
}
