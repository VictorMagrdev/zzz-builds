import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createIntlMiddleware from 'next-intl/middleware';

// Middleware de next-intl
const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en'
});

export function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request);
  if (intlResponse) {
    return intlResponse;
  }

  const currentUser = request.cookies.get("token");
  const isProfilePage = request.nextUrl.pathname.startsWith("/profile");

  if (!currentUser && isProfilePage) {
    return Response.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/', 
    '/(es|en)/:path*',
    '/profile',
    '/login',
    '/((?!api|_next/static|_next/image|.*\\.png$).*)'
  ],
};
