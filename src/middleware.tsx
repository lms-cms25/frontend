import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('session_token');
  const refreshToken = request.cookies.get('refresh_token');
  const { pathname } = request.nextUrl;

  // 1. SKYDDA DASHBOARD
  if (pathname.startsWith('/dashboard')) {
    // Om användaren är helt utloggad (ingen session OCH ingen refresh) -> Skicka till login
    if (!sessionToken && !refreshToken) {
      return NextResponse.redirect(new URL('/signin-email', request.url));
    }
    // Om session saknas men refresh finns -> LÅT DEM PASSERA.
    // Vi låter fetchWithAuth sköta refreshen inuti sidan istället för att redirecta här.
  }

  // 2. SKYDDA LOGIN-SIDAN (Förhindra inloggade att se login)
  if (pathname === '/signin-email') {
    // Endast om man har en AKTIV session skickar vi till dashboard.
    // Om vi bara har en refreshToken låter vi dem vara på login (eller låter dem logga in på nytt)
    if (sessionToken) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/signin-email'],
}