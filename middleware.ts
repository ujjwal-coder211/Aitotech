import { type NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';
import { guardOutreachAdminEdge } from '@/lib/outreach-admin-guard.edge';

/** Runs on every request — refreshes auth session & guards admin areas. */
export async function middleware(request: NextRequest) {
  const outreachBlock = await guardOutreachAdminEdge(request);
  if (outreachBlock) return outreachBlock;

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all paths except static assets and images.
     */
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
