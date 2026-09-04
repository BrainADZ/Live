import { NextRequest, NextResponse } from "next/server";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brainadzlive.com";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-canonical-path", request.nextUrl.pathname);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  // Non-HTML documents cannot contain a canonical <link> element.
  if (request.nextUrl.pathname.toLowerCase().endsWith(".pdf")) {
    response.headers.set(
      "Link",
      `<${siteUrl}${request.nextUrl.pathname}>; rel="canonical"`,
    );
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
