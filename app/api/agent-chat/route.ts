import { NextRequest, NextResponse } from 'next/server';
import { getAgentsApiKey, getAgentsApiUrl, getAkshApiKey, getAkshApiUrl } from '@/lib/akshApi';

/**
 * Same-origin proxy for site chat + Routely demo.
 * - agent_type=routely|aksh → AKSH_API_URL (Routely coding agent; aksh is legacy alias)
 * - agent_type=sales|support → AGENTS_API_URL (legacy agents project), not mixed with Routely
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
  const isRoutely = agentType === 'routely' || agentType === 'aksh';

  // Routely marketing demo: mock by default (free, no OpenRouter cost).
  // Set AKSH_DEMO_LIVE=true on Vercel only when you want live Routely on Railway.
  if (isRoutely && process.env.AKSH_DEMO_LIVE !== 'true') {
    return NextResponse.json({ error: 'routely_demo_mock' }, { status: 503 });
  }

  const base = isRoutely ? getAkshApiUrl() : getAgentsApiUrl();
  if (!base) {
    return NextResponse.json(
      {
        error: isRoutely
          ? 'Routely live API is off. The /routely demo uses free mock mode on the website.'
          : 'AI assistant is not configured (set AGENTS_API_URL for the site chat widget).',
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
    const secret = isRoutely ? getAkshApiKey() : getAgentsApiKey();
    if (secret) {
      headers['X-Agents-Key'] = secret;
    }

    const res = await fetch(`${base}/public/chat`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        message,
        agent_type: agentType === 'aksh' ? 'routely' : agentType,
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
      agent: data.agent ?? (isRoutely ? 'Routely' : 'AitoTech AI'),
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
