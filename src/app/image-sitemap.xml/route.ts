import { ALL_SITEMAP_PAGES, absoluteUrl, escapeXml } from "@/lib/sitePages";
import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

export const dynamic = "force-static";

export function GET() {
  const withImages = ALL_SITEMAP_PAGES.filter((p) => p.images && p.images.length > 0);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${withImages
  .map(
    (page) => `  <url>
    <loc>${escapeXml(absoluteUrl(page.path))}</loc>
    <lastmod>${page.lastMod}</lastmod>
${(page.images || [])
  .map(
    (img) => `    <image:image>
      <image:loc>${escapeXml(`${SITE_ORIGIN}${img.loc}`)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
  )
  .join("\n")}
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
