import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * Middleware function for handling authentication using Supabase in Next.js applications.
 * @param req The request object from Next.js.
 * @returns The response object.
 */
export async function middleware(req: NextRequest) {
  // Create a response object
  const res = NextResponse.next();

  // Create a Supabase client using the request and response objects
  const supabase = createMiddlewareClient({ req, res });

  // Get the session from Supabase authentication
  await supabase.auth.getSession();

  // Return the response object
  return res;
}
