import { NextResponse } from "next/server";

/** Legacy endpoint — prefer /index.xml and /sitemap-index.xml */
export async function GET() {
  return NextResponse.redirect(new URL("/sitemap-index.xml", "https://teenpattiskyapp.com.pk"), 308);
}
