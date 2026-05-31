import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

/** Runs on every request — refreshes auth session & guards /admin. */
export async function middleware(request: NextRequest) {
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
