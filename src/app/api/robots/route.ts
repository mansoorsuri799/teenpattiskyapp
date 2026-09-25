import { NextResponse } from "next/server";

/** Legacy endpoint — prefer /robots.txt */
export async function GET() {
  return NextResponse.redirect(new URL("/robots.txt", "https://teenpattiskyapp.com.pk"), 308);
}
