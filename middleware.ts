import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

const intlMiddleware = createIntlMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request);
  if (!intlResponse) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  // const currentUser = request.cookies.get("token");
  // const isProfilePage = request.nextUrl.pathname.includes("/profile");
  // const isPostPage = request.nextUrl.pathname.includes("/post");

  // if (!currentUser && (isProfilePage || isPostPage)) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return intlResponse;
}

export const config = {
  matcher: [
    "/",
    "/(es|en)/:path*",
    "/(es|en)/profile",
    "/(es|en)/post",
    "/(es|en)/login",
    "/(es|en)/:path*/post",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
