import { NextRequest, NextResponse } from 'next/server';

const API = process.env.OUTREACH_API_URL?.replace(/\/$/, '') || '';
const SECRET = process.env.OUTREACH_ADMIN_SECRET?.trim() || '';

function unauthorized() {
  return NextResponse.json({ error: 'Admin not configured' }, { status: 503 });
}

/** Proxy to Outreach backend admin API — keeps secret on server. */
export async function POST(request: NextRequest) {
  if (!API || !SECRET) return unauthorized();

  const action = request.nextUrl.searchParams.get('action');
  if (!action) {
    return NextResponse.json({ error: 'Missing action' }, { status: 400 });
  }

  try {
    if (action === 'create-user') {
      const body = await request.json();
      const res = await fetch(`${API}/api/admin/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-secret': SECRET },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    if (action === 'list-users') {
      const status = request.nextUrl.searchParams.get('status') || 'all';
      const res = await fetch(`${API}/api/admin/users?status=${status}`, {
        headers: { 'x-admin-secret': SECRET },
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    if (action === 'approve-user') {
      const id = request.nextUrl.searchParams.get('id');
      if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
      const body = await request.json().catch(() => ({}));
      const res = await fetch(`${API}/api/admin/users/${id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-secret': SECRET },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    if (action === 'send-credentials') {
      const id = request.nextUrl.searchParams.get('id');
      if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
      const body = await request.json();
      const res = await fetch(`${API}/api/admin/users/${id}/send-credentials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-secret': SECRET },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    if (action === 'import-registry') {
      const form = await request.formData();
      const upstream = new FormData();
      const file = form.get('file');
      const dataDate = form.get('dataDate');
      if (file) upstream.append('file', file);
      if (dataDate) upstream.append('dataDate', String(dataDate));

      const res = await fetch(`${API}/api/admin/registry/import`, {
        method: 'POST',
        headers: { 'x-admin-secret': SECRET },
        body: upstream,
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    if (action === 'request-access') {
      const body = await request.json();
      const res = await fetch(`${API}/api/auth/request-access`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (e) {
    console.error('Outreach admin proxy error:', e);
    return NextResponse.json({ error: 'Proxy failed' }, { status: 502 });
  }
}

export async function GET(request: NextRequest) {
  if (!API || !SECRET) return unauthorized();

  const action = request.nextUrl.searchParams.get('action');
  if (action === 'list-users') {
    const status = request.nextUrl.searchParams.get('status') || 'pending';
    try {
      const res = await fetch(`${API}/api/admin/users?status=${status}`, {
        headers: { 'x-admin-secret': SECRET },
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    } catch {
      return NextResponse.json({ error: 'Failed to fetch users' }, { status: 502 });
    }
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
}
