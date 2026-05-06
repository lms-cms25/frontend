import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = false;
    
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(
      new URL(isLoggedIn ? '/dashboard' : '/signin-email', request.url)
    )
  }
}

