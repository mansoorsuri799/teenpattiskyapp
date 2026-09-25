import { imageObjectLicensing, SITE_ORIGIN } from "@/lib/schemaImageLicensing";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

type BlogPostSchemaProps = {
  title: string;
  description: string;
  /** Full canonical URL or path like /blog/slug */
  url?: string;
  /** Legacy slug without /blog/ prefix */
  slug?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
  articleBody?: string;
};

export default function BlogPostSchema({
  title,
  description,
  url,
  slug,
  datePublished,
  dateModified,
  image = `${SITE_ORIGIN}/teen-patti-sky.webp`,
  breadcrumbOnly = false,
  articleBody,
}: BlogPostSchemaProps) {
  const resolvedUrl =
    url?.startsWith("http")
      ? url
      : url
        ? `${SITE_ORIGIN}${url}`
        : `${SITE_ORIGIN}/blog/${slug}`;

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${resolvedUrl}#article`,
    headline: title,
    description,
    url: resolvedUrl,
    image,
    author: { "@type": "Organization", name: "Teen Patti Sky", url: SITE_ORIGIN },
    publisher: {
      "@type": "Organization",
      name: "Teen Patti Sky",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/teen-patti-sky.webp`,
        ...imageObjectLicensing,
        creditText: "Teen Patti Sky logo",
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": resolvedUrl },
    inLanguage: "en-PK",
    ...(articleBody && { articleBody }),
  };

  if (breadcrumbOnly) return null;

  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
      />
    </div>
  );
}
