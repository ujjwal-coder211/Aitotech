import { NextRequest, NextResponse } from 'next/server';
import { clientIp, rateLimit } from '@/lib/rate-limit';
import { sendToIngest } from '@/lib/ingest';

/**
 * Somebody clicked through to WhatsApp.
 *
 * Most enquiries arrive on WhatsApp, and until now they arrived from nowhere:
 * the agent sees a phone number and no idea whether that person came from
 * Instagram, a Google search, or a card handed over in person. The whole
 * "which channel is worth the effort" question was unanswerable for the
 * channel that matters most.
 *
 * This is deliberately a WEAK signal and is labelled as one. It records that a
 * click happened and where the clicker came from; it cannot know whether they
 * actually sent a message. Matching is by time — a WhatsApp message a minute
 * after an Instagram click probably came from that click. Probably. Stuffing a
 * tracking code into the prefilled message would be certain, but the customer
 * would see it, and a customer should not have to look at our bookkeeping.
 *
 * No personal data: no name, no number, nothing identifying. Just a channel
 * and a moment.
 */
export async function POST(request: NextRequest) {
  // A click is cheap to fake and worthless in bulk, so the limit is loose
  // enough never to bother a real person and tight enough to stop a script.
  if (!rateLimit(`wa-click:${clientIp(request)}`, 20, 10 * 60 * 1000)) {
    return NextResponse.json({ ok: true, recorded: false });
  }

  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    /* a click with no body is still a click */
  }

  const str = (value: unknown, max: number) =>
    (typeof value === 'string' ? value.trim().slice(0, max) : undefined) || undefined;

  await sendToIngest({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'website.whatsapp_click',
    anonymous: true,
    utm_source: str(body.utm_source, 200),
    utm_medium: str(body.utm_medium, 200),
    utm_campaign: str(body.utm_campaign, 200),
    referrer: str(body.referrer, 300),
    landing_path: str(body.landing_path, 300),
    label: str(body.label, 120),
  });

  // Always 200. The visitor is on their way to WhatsApp and must never see a
  // failure in our bookkeeping.
  return NextResponse.json({ ok: true });
}
