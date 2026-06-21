import { NextRequest, NextResponse } from 'next/server';
import { getAgentsApiKey, getAgentsApiUrl, getAkshApiKey, getAkshApiUrl } from '@/lib/akshApi';

/**
 * Same-origin proxy for site chat + Aksh demo.
 * - agent_type=aksh → AKSH_API_URL only (Omni coding agent)
 * - agent_type=sales|support → AGENTS_API_URL (legacy agents project), not mixed with Aksh
 */

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  let body: { message?: string; agent_type?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const agentType = (body.agent_type || 'sales').toString().trim().toLowerCase();
  const isAksh = agentType === 'aksh';

  const base = isAksh ? getAkshApiUrl() : getAgentsApiUrl() ?? getAkshApiUrl();
  if (!base) {
    return NextResponse.json(
      {
        error: isAksh
          ? 'Aksh API is not configured (set AKSH_API_URL on Vercel).'
          : 'AI assistant is not configured yet.',
      },
      { status: 503 }
    );
  }

  const message = (body.message ?? '').toString().trim().slice(0, 1000);
  if (message.length < 1) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }

  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    const secret = isAksh ? getAkshApiKey() : getAgentsApiKey() ?? getAkshApiKey();
    if (secret) {
      headers['X-Agents-Key'] = secret;
    }

    const res = await fetch(`${base}/public/chat`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        message,
        agent_type: agentType,
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
      agent: data.agent ?? (isAksh ? 'Omni' : 'AitoTech AI'),
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
