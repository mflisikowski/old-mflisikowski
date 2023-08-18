import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'

/**
 * Handles a POST request to authenticate a user using Supabase.
 * 
 * @param request - The incoming HTTP request.
 * @returns A redirect response with a status code of 301 (Moved Permanently).
 *          The destination URL depends on the authentication result.
 *          If there is an error, the user is redirected to the login page with an error message.
 *          Otherwise, the user is redirected to the origin URL.
 */
export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const supabase = createRouteHandlerClient({ cookies })

  const { error } = await supabase.auth.signInWithPassword({
    password,
    email,
  })
  
  if (error) {
    return NextResponse.redirect(`${requestUrl.origin}/login?error=Could not authenticate user`, {
      status: 301,
    })
  }

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}

/**
 * Handles a GET request and redirects the user to the origin URL with a status code of 301 (Moved Permanently).
 * 
 * @param request - The incoming HTTP request.
 * @returns A NextResponse object with a redirect to the origin URL and a status code of 301.
 */
export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  
  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}