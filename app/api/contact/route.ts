import { NextRequest, NextResponse } from 'next/server';
import { sendToIngest } from '@/lib/ingest';
import { clientIp, rateLimit } from '@/lib/rate-limit';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';

/**
 * Serverless contact handler.
 * Primary: stores the message in Supabase (table: contact_messages).
 *
 * The table is NOT called `leads`: that name is taken by the SalesConnect AI
 * agent's own CRM in the same database, whose columns are completely
 * different (channel, customer_name, phone, lead_score...). Inserting this
 * payload there failed on a missing `name` column, so every submission fell
 * through to the 503 at the bottom of this file.
 * Optional: also forwards an email notification via Formspree / EmailJS.
 * Falls back gracefully if nothing is configured (dev logging).
 */

interface ContactBody {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  landing_path?: string;
  /** Honeypot — real users never fill this hidden field. */
  website?: string;
}

function sanitize(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

function validate(body: ContactBody): string | null {
  const name = sanitize(body.name, 100);
  const email = sanitize(body.email, 254);
  const message = sanitize(body.message, 2000);

  if (name.length < 2) return 'Name must be at least 2 characters.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Valid email is required.';
  if (message.length < 10) return 'Message must be at least 10 characters.';

  return null;
}

/** Best-effort email notification (does not block success if it fails). */
async function sendEmailNotification(payload: {
  name: string;
  email: string;
  company: string;
  message: string;
}): Promise<void> {
  const formspree = process.env.FORMSPREE_ENDPOINT;
  if (formspree) {
    try {
      await fetch(formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          company: payload.company || '(not provided)',
          message: payload.message,
          _subject: `AitoTech inquiry from ${payload.name}`,
        }),
      });
    } catch (e) {
      console.error('Formspree notification failed:', e);
    }
    return;
  }

  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } =
    process.env;
  if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
    try {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          accessToken: EMAILJS_PRIVATE_KEY,
          template_params: {
            from_name: payload.name,
            from_email: payload.email,
            company: payload.company,
            message: payload.message,
          },
        }),
      });
    } catch (e) {
      console.error('EmailJS notification failed:', e);
    }
  }
}

/** POST /api/contact */
export async function POST(request: NextRequest) {
  if (!rateLimit(`contact:${clientIp(request)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json(
      { success: false, error: 'Too many messages. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  // Honeypot tripped — pretend success so bots don't adapt, store nothing.
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return NextResponse.json({ success: true, message: 'Thank you! Your message has been received.' });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ success: false, error: validationError }, { status: 400 });
  }

  const payload = {
    name: sanitize(body.name, 100),
    email: sanitize(body.email, 254),
    company: sanitize(body.company, 150),
    message: sanitize(body.message, 2000),
    // Attribution comes from the visitor's own browser, so it is sanitised
    // like everything else they send.
    utm_source: sanitize(body.utm_source, 200) || undefined,
    utm_medium: sanitize(body.utm_medium, 200) || undefined,
    utm_campaign: sanitize(body.utm_campaign, 200) || undefined,
    referrer: sanitize(body.referrer, 300) || undefined,
    landing_path: sanitize(body.landing_path, 300) || undefined,
  };

  let storedInDb = false;

  // ─── Primary: store the lead in Supabase ───
  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      const { error } = await supabase.from('contact_messages').insert({
        name: payload.name,
        email: payload.email,
        company: payload.company || null,
        message: payload.message,
      });

      if (error) {
        console.error('Supabase insert error:', error.message);
      } else {
        storedInDb = true;
      }
    } catch (e) {
      // Name the host. A bare `TypeError: fetch failed` is indistinguishable
      // from fifty other causes, and the one that actually bit here -- a
      // NEXT_PUBLIC_SUPABASE_URL that is set but unreachable, e.g. carrying a
      // stray newline from a copy-paste -- is invisible without it. Only the
      // host is logged, never the key.
      let host = 'unset';
      try {
        host = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '').host || 'empty';
      } catch {
        host = `unparseable: ${JSON.stringify(
          (process.env.NEXT_PUBLIC_SUPABASE_URL ?? '').slice(0, 60),
        )}`;
      }
      console.error(`Supabase insert failed (host ${host}):`, e);
    }
  }

  // ─── Secondary: notify, and hand the enquiry to the business OS ───
  //
  // Both are best-effort and independent, so they run together rather than one
  // after the other — this is on the critical path of someone waiting for the
  // form to submit.
  const [, ingested] = await Promise.all([
    sendEmailNotification(payload),
    sendToIngest(payload),
  ]);

  if (!ingested) {
    // Visible in the logs so a misconfigured key does not quietly cost leads.
    console.warn('contact: enquiry not ingested into the business OS');
  }

  // The enquiry is safe if EITHER store took it.
  //
  // This used to depend on contact_messages alone, and that insert has been
  // failing on production with `TypeError: fetch failed` -- contact_messages
  // holds ZERO rows. So a visitor whose enquiry had just been delivered into
  // the business OS was told "Contact backend is not configured yet. Please
  // try again later." They would reasonably give up and go to a competitor
  // while their lead sat unread in the inbox.
  //
  // Telling somebody their message failed when we have it is worse than either
  // failing honestly or succeeding quietly.
  if (storedInDb || ingested) {
    if (!storedInDb) {
      // Not the visitor's problem, but somebody has to know that the website's
      // own copy of its enquiries is not being written.
      console.error(
        'contact: enquiry reached the business OS but NOT contact_messages — '
        + 'the website database write is failing',
      );
    }
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received.',
    });
  }

  // Dev fallback — nothing configured
  if (process.env.NODE_ENV === 'development') {
    console.log('[DEV] Contact submission:', payload);
    return NextResponse.json({
      success: true,
      message: 'DEV MODE: Logged. Configure Supabase to store messages.',
    });
  }

  // If email was sent but DB not configured, still treat as success
  if (process.env.FORMSPREE_ENDPOINT || process.env.EMAILJS_SERVICE_ID) {
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received.',
    });
  }

  return NextResponse.json(
    {
      success: false,
      error: 'Contact backend is not configured yet. Please try again later.',
    },
    { status: 503 }
  );
}
