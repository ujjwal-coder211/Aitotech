import { NextRequest, NextResponse } from 'next/server';

/**
 * Serverless contact handler — forwards to Formspree or EmailJS.
 * No persistent server; runs on AWS Amplify / Vercel edge/serverless.
 *
 * Set FORMSPREE_ENDPOINT in .env.local (recommended), OR EmailJS vars.
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
  const company = sanitize(body.company, 150);
  const message = sanitize(body.message, 2000);

  if (name.length < 2) return 'Name must be at least 2 characters.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Valid email is required.';
  if (message.length < 10) return 'Message must be at least 10 characters.';

  return null;
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

  // ─── Option A: Formspree (recommended — simple, no SDK) ───
  const formspree = process.env.FORMSPREE_ENDPOINT;
  if (formspree) {
    try {
      const res = await fetch(formspree, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          company: payload.company || '(not provided)',
          message: payload.message,
          _subject: `AitoTech inquiry from ${payload.name}`,
        }),
      });

      if (res.ok) {
        return NextResponse.json({
          success: true,
          message: 'Thank you! Your message has been received.',
        });
      }

      const err = await res.json().catch(() => ({}));
      console.error('Formspree error:', err);
      return NextResponse.json(
        { success: false, error: 'Unable to send message. Please try again later.' },
        { status: 502 }
      );
    } catch (e) {
      console.error('Formspree fetch failed:', e);
      return NextResponse.json(
        { success: false, error: 'Service unavailable. Please try again.' },
        { status: 503 }
      );
    }
  }

  // ─── Option B: EmailJS REST API ───
  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } =
    process.env;

  if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
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

      if (res.ok) {
        return NextResponse.json({
          success: true,
          message: 'Thank you! Your message has been received.',
        });
      }

      return NextResponse.json(
        { success: false, error: 'Email delivery failed.' },
        { status: 502 }
      );
    } catch (e) {
      console.error('EmailJS error:', e);
      return NextResponse.json(
        { success: false, error: 'Service unavailable.' },
        { status: 503 }
      );
    }
  }

  // Dev fallback — log only (configure .env.local for production)
  if (process.env.NODE_ENV === 'development') {
    console.log('[DEV] Contact submission:', payload);
    return NextResponse.json({
      success: true,
      message: 'DEV MODE: Message logged. Set FORMSPREE_ENDPOINT in .env.local for real delivery.',
    });
  }

  return NextResponse.json(
    {
      success: false,
      error: 'Contact form is not configured. Set FORMSPREE_ENDPOINT or EmailJS environment variables.',
    },
    { status: 503 }
  );
}
