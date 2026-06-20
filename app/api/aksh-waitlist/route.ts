import { NextRequest, NextResponse } from 'next/server';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';

interface WaitlistBody {
  name?: string;
  email?: string;
  role?: string;
  interest?: string;
}

const VALID_ROLES = new Set(['developer', 'student', 'founder', 'enterprise', 'other']);
const VALID_INTERESTS = new Set(['studio', 'coder', 'both']);

function sanitize(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

function validate(body: WaitlistBody): string | null {
  const name = sanitize(body.name, 100);
  const email = sanitize(body.email, 254);
  const role = sanitize(body.role, 32);
  const interest = sanitize(body.interest, 32);

  if (name.length < 2) return 'Name must be at least 2 characters.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Valid email is required.';
  if (!VALID_ROLES.has(role)) return 'Invalid role.';
  if (!VALID_INTERESTS.has(interest)) return 'Invalid interest.';

  return null;
}

/** POST /api/aksh-waitlist */
export async function POST(request: NextRequest) {
  let body: WaitlistBody;

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
    email: sanitize(body.email, 254).toLowerCase(),
    role: sanitize(body.role, 32),
    interest: sanitize(body.interest, 32),
  };

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      const { error } = await supabase.from('aksh_waitlist').insert(payload);

      if (error) {
        if (error.code === '23505') {
          return NextResponse.json({
            success: true,
            message: 'You are already on the waitlist!',
          });
        }
        console.error('Waitlist insert error:', error.message);
        return NextResponse.json({ success: false, error: 'Could not save. Try again.' }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: 'You are on the Aksh waitlist!',
      });
    } catch (e) {
      console.error('Waitlist failed:', e);
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[DEV] Aksh waitlist:', payload);
    return NextResponse.json({
      success: true,
      message: 'DEV MODE: Logged. Run supabase/schema.sql for production storage.',
    });
  }

  return NextResponse.json(
    { success: false, error: 'Waitlist is not configured yet. Email info@aitotech.in' },
    { status: 503 }
  );
}
