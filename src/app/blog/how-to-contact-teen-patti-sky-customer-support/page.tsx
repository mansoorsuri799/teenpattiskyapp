import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import { SUPPORT_EMAIL } from "@/lib/appFacts";

const TITLE = "How to Contact Teen Patti Sky Customer Support";
const DESC =
  "Reach Teen Patti Sky customer support via in-app chat, official contact form, and site email — avoid fake agents on social media.";
const PATH = "/blog/how-to-contact-teen-patti-sky-customer-support";
const DATE = "2026-09-25";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `https://teenpattiskyapp.com.pk${PATH}` },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `https://teenpattiskyapp.com.pk${PATH}`,
    siteName: "Teen Patti Sky",
    type: "article",
    images: [{ url: "https://teenpattiskyapp.com.pk/teen-patti-sky-live-support.webp", width: 1200, height: 565 }],
  },
};

export default function ContactSupportBlog() {
  return (
    <article className="px-4 md:px-8 py-10 max-w-3xl mx-auto">
      <BlogPostSchema
        title={TITLE}
        description={DESC}
        url={`https://teenpattiskyapp.com.pk${PATH}`}
        datePublished={DATE}
        dateModified={DATE}
        image="https://teenpattiskyapp.com.pk/teen-patti-sky-live-support.webp"
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Customer Support" }]} />

      <h1 className="font-display text-4xl font-extrabold text-cream mb-4">{TITLE}</h1>
      <p className="text-cream/50 text-sm mb-6">Updated {DATE} · 6 min read</p>

      <div className="sky-panel p-3 mb-8">
        <Image
          src="/teen-patti-sky-live-support.webp"
          alt="Teen Patti Sky live customer support chat inside the app"
          width={1200}
          height={565}
          className="rounded-xl w-full h-auto"
          priority
        />
      </div>

      <div className="prose-sky space-y-4">
        <p>
          Deposit delays, login blocks, and bonus questions are fastest to solve through official Teen Patti Sky support —
          not random Facebook or WhatsApp “agents.” This page shows the safe channels Pakistani players should use.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">1. In-app live support (best first step)</h2>
        <p>
          Open Teen Patti Sky, find the <strong>Support</strong> or Help icon (often in the main menu or profile area),
          and start a chat or ticket. Include your user ID, registered mobile number, and a short description of the
          issue. For payment problems, add the JazzCash or EasyPaisa transaction ID and approximate time.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">2. Official contact form</h2>
        <p>
          Some builds also offer a contact form inside Support or on the official site. Fill every required field
          honestly — incomplete tickets slow replies. Never paste your password or OTP into a form.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">3. Website help for this guide site</h2>
        <p>
          Questions about teenpattiskyapp.com.pk content, privacy, or broken links can go to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or our{" "}
          <Link href="/contact-us">Contact Us</Link> page. App wallet issues still need in-app Support for the fastest fix.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">What to prepare before you write</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>User ID / nickname shown in the app</li>
          <li>Registered mobile number</li>
          <li>Device model and app version (e.g. v2.5.0)</li>
          <li>Screenshots of error messages (IP limit, failed withdraw, etc.)</li>
          <li>Payment reference for deposit or withdrawal cases</li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-cream">Avoid fake support scams</h2>
        <p>
          Real staff will not ask you to send money to a personal JazzCash number “for verification.” They will not ask
          for your OTP. If someone DMs you after a Google search ad, ignore them and use only in-app Support.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">Related fixes</h2>
        <p>
          Locked out? Follow{" "}
          <Link href="/blog/how-to-recover-teen-patti-sky-account">account recovery</Link>. Seeing a network block? Try the{" "}
          <Link href="/blog/teen-patti-sky-ip-limit-exceed-fix">IP limit fix</Link>. Payment steps live on the{" "}
          <Link href="/deposit-money-in-teen-patti-sky">deposit</Link> and{" "}
          <Link href="/withdraw-money-from-teen-patti-sky">withdraw</Link> guides.
        </p>
      </div>

      <div className="mt-10 text-center">
        <CtaButton ariaLabel="Download Teen Patti Sky for in-app support">DOWNLOAD NOW</CtaButton>
      </div>
    </article>
  );
}
