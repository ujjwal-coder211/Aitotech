/**
 * The website's one line into the AitoTech business OS.
 *
 * Every enquiry, whatever channel it arrived on, is supposed to resolve to a
 * single person in `contacts` and leave a row in the central `events` log. The
 * website used to be the exception: a form submission landed in
 * `contact_messages` and stopped there, so a visitor who later messaged on
 * WhatsApp looked like two unrelated strangers.
 *
 * This posts to POST /api/events on the agent service, which does the identity
 * resolution. It replaces the old notifyAgents() call to an n8n-era
 * `/tasks` endpoint that is no longer part of the stack.
 *
 * Deliberately best-effort: by the time this runs the message is already saved
 * in the website's own table, so a failure here must never turn into an error
 * for the person who filled the form. It is logged and swallowed.
 */

function baseUrl(): string | undefined {
  const url = process.env.AITOTECH_INGEST_URL?.trim();
  return url ? url.replace(/\/$/, '') : undefined;
}

/**
 * A stable key for this submission, so a double-click or a Vercel retry does
 * not create a second event for the same message. Same text from the same
 * person within the same hour is one event.
 */
async function dedupeKey(email: string, message: string): Promise<string> {
  const hour = new Date().toISOString().slice(0, 13); // yyyy-mm-ddThh
  const data = new TextEncoder().encode(`${email}|${message}|${hour}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const hex = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return `website:${hex.slice(0, 32)}`;
}

export interface IngestPayload {
  name: string;
  email: string;
  company: string;
  message: string;
  /** Acquisition, when the form managed to capture it. */
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

/** @returns true when the business OS accepted the enquiry. */
export async function sendToIngest(payload: IngestPayload): Promise<boolean> {
  const base = baseUrl();
  const key = process.env.INGEST_API_KEY?.trim();

  if (!base) return false;
  if (!key) {
    // Loud, because the endpoint fails closed: without the key every enquiry
    // silently stops at contact_messages and never reaches the business OS.
    console.error('INGEST_API_KEY is not set — website leads are not reaching the business OS');
    return false;
  }

  try {
    const res = await fetch(`${base}/api/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': key },
      body: JSON.stringify({
        type: 'form.submit',
        source: 'website',
        dedupe_key: await dedupeKey(payload.email, payload.message),
        email: payload.email,
        full_name: payload.name,
        company: payload.company || undefined,
        utm_source: payload.utm_source,
        utm_medium: payload.utm_medium,
        utm_campaign: payload.utm_campaign,
        // Also opens a thread in the unified inbox, so the enquiry can be read
        // and answered from the Command Center instead of only sitting in a
        // table. The phone, when given, is what makes a WhatsApp reply possible.
        channel: 'website',
        subject: 'Website enquiry',
        message: payload.message,
        payload: { message: payload.message, form: 'contact' },
      }),
      // Never hold the form hostage to a slow backend.
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.error(`ingest rejected the enquiry: ${res.status} ${await res.text()}`);
      return false;
    }
    return true;
  } catch (e) {
    console.error('ingest call failed:', e);
    return false;
  }
}
