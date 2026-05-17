import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  const pathname = request.nextUrl.pathname;
  if (pathname === '/signin-email') return NextResponse.next();
  const sessionToken = request.cookies.get('session_token');
  if (!sessionToken) {
    const redirectResponse = NextResponse.redirect(new URL('/signin-email', request.url));
    redirectResponse.headers.set('x-middleware-cache', 'no-cache');
    return redirectResponse;
  } const response = NextResponse.next();
  response.headers.set('x-middleware-cache', 'no-cache');
  return response;
}


export const config = {
matcher: [
'/((?!api/|_next/|static/|favicon.ico|robots.txt|signin-email).*)'
] };