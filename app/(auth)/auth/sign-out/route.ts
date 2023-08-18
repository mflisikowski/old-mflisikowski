import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

/**
 * Handles a POST request by signing out the user and redirecting them to the login page.
 * 
 * @param request - The request object containing information about the incoming request.
 * @returns A NextResponse object with a redirect to the login page.
 */
export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const supabase = createRouteHandlerClient({ cookies })

  await supabase.auth.signOut()

  return NextResponse.redirect(`${requestUrl.origin}/login`, {
    status: 301,
  })
}
