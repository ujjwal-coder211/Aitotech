import { NextRequest, NextResponse } from 'next/server';

/**
 * Same-origin proxy for the AI chat widget.
 * Browser -> /api/agent-chat -> Aitotech-agents /public/chat
 * Keeps AGENTS_API_URL server-side and avoids CORS in the browser.
 */

/** Groq can take 20–30s; allow enough time on Vercel (Pro: up to 60s). */
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const base = process.env.AGENTS_API_URL?.replace(/\/$/, '');
  if (!base) {
    return NextResponse.json(
      { error: 'AI assistant is not configured yet.' },
      { status: 503 }
    );
  }

  let body: { message?: string; agent_type?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const message = (body.message ?? '').toString().trim().slice(0, 1000);
  if (message.length < 1) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }

  try {
    const res = await fetch(`${base}/public/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        agent_type: body.agent_type || 'sales', // aksh | sales | support
      }),
      signal: AbortSignal.timeout(55_000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Assistant is busy right now. Please try again.' },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json({
      agent: data.agent ?? 'Aitotech AI',
      answer: data.answer ?? '',
    });
  } catch (e) {
    console.error('agent-chat proxy failed:', e);
    return NextResponse.json(
      { error: 'Could not reach the assistant. Please try again.' },
      { status: 502 }
    );
  }
}
