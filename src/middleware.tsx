import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('session_token');
  const { pathname } = request.nextUrl;

  // 1. SKYDDA DASHBOARD
  if (pathname.startsWith('/dashboard')) {
    if (!sessionToken) {
      return NextResponse.redirect(new URL('/signin-email', request.url));
    }
  }

  // 2. SKYDDA LOGIN-SIDAN (Här stoppar vi loopen!)
  if (pathname === '/signin-email') {
    // VIKTIGT: Vi tar bort auto-redirecten härifrån helt.
    // Det är bättre att användaren får se inloggningssidan en gång för mycket
    // än att de fastnar i en oändlig loop.
    return NextResponse.next();
  }

  return NextResponse.next();
}