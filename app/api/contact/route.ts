import { NextRequest, NextResponse } from 'next/server';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';

/**
 * Serverless contact handler.
 * Primary: stores the lead in Supabase (table: leads).
 * Optional: also forwards an email notification via Formspree / EmailJS.
 * Falls back gracefully if nothing is configured (dev logging).
 */

interface ContactBody {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
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

/**
 * Best-effort: Aitotech-agents backend ko ek "sales" task bhejo taaki sales
 * agent follow-up draft/send kar sake (n8n ke through). Lead ki copy website ke
 * apne Supabase me already save hoti hai — ye sirf agents ko kaam deta hai, isliye
 * /tasks use karte hain (duplicate lead se bachne ke liye). Fail ho to ignore.
 */
async function notifyAgents(payload: {
  name: string;
  email: string;
  company: string;
  message: string;
}): Promise<void> {
  const base = process.env.AGENTS_API_URL?.replace(/\/$/, '');
  if (!base) return;
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (process.env.AGENTS_API_KEY) headers['x-api-key'] = process.env.AGENTS_API_KEY;
    await fetch(`${base}/tasks`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        title: `Website lead: ${payload.name}`,
        agent_type: 'sales',
        priority: 6,
        payload: {
          name: payload.name,
          email: payload.email,
          company: payload.company || null,
          message: payload.message,
          source: 'aitotech-website',
        },
      }),
    });
  } catch (e) {
    console.error('Agents notify failed:', e);
  }
}

/** POST /api/contact */
export async function POST(request: NextRequest) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body.' }, { status: 400 });
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
  };

  let storedInDb = false;

  // ─── Primary: store the lead in Supabase ───
  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      const { error } = await supabase.from('leads').insert({
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
      console.error('Supabase insert failed:', e);
    }
  }

  // ─── Secondary: email notification (best-effort) ───
  await sendEmailNotification(payload);

  // ─── Tertiary: hand the lead to the AI agents (best-effort) ───
  await notifyAgents(payload);

  if (storedInDb) {
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
      message: 'DEV MODE: Logged. Configure Supabase to store leads.',
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
