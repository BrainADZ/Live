import { NextRequest, NextResponse } from "next/server";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brainadzlive.com";

export function proxy(request: NextRequest) {
  // Normalize links shared with the old redirect-cache workaround.
  if (
    request.nextUrl.pathname === "/privacy-policy" &&
    request.nextUrl.searchParams.get("v") === "20261006"
  ) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("v");
    return NextResponse.redirect(url, {
      status: 307,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-canonical-path", request.nextUrl.pathname);
  const isErpPixelPage =
    request.nextUrl.pathname === "/smart-erp" ||
    (request.nextUrl.pathname === "/thank-you" &&
      request.nextUrl.searchParams.get("from") === "smart-erp");
  requestHeaders.set("x-erp-pixel-page", isErpPixelPage ? "1" : "0");

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
