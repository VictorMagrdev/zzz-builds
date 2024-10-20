import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("token");
  const isProfilePage = request.nextUrl.pathname.startsWith("/profile");

  if (!currentUser && isProfilePage) {
    return Response.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile",
    "/login",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
