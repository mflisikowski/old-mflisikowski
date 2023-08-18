import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

/**
 * Handles a GET request and performs authentication using Supabase.
 * If a 'code' query parameter is present in the request URL, it exchanges the code for a session.
 * After the sign-in process completes, it redirects the user to the origin URL.
 * If the 'code' parameter is not present, it redirects the user to the origin URL with a status code of 302.
 * @param request - The incoming GET request.
 * @returns A NextResponse object with a redirect to the origin URL and an optional status code of 302.
 */
export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
    
    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestUrl.origin)
  }

  return NextResponse.redirect(requestUrl.origin, {
    status: 302,
  })
}
