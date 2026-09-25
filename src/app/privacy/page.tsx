import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SUPPORT_EMAIL } from "@/lib/appFacts";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for teenpattiskyapp.com.pk — what data we collect, cookies, and how to contact us about Teen Patti Sky site content.",
  alternates: { canonical: "https://teenpattiskyapp.com.pk/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="px-4 md:px-8 py-10 max-w-3xl mx-auto">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <h1 className="font-display text-4xl font-extrabold text-cream mb-6">Privacy Policy</h1>
      <div className="prose-sky space-y-4">
        <p>Last updated: 25 September 2026</p>
        <p>
          This Privacy Policy explains how teenpattiskyapp.com.pk (“we”, “us”) handles information when you browse our Teen Patti Sky guides. It applies to this website only — not to the Teen Patti Sky mobile application’s own servers.
        </p>
        <h2 className="font-display text-2xl font-bold text-cream">Information we may collect</h2>
        <p>
          Like most sites, our hosting and analytics tools may process technical data such as IP address, browser type, device type, referring URLs, and pages viewed. If you email us, we receive the address and message content you send.
        </p>
        <h2 className="font-display text-2xl font-bold text-cream">Cookies and analytics</h2>
        <p>
          We may use privacy-conscious analytics or essential cookies to understand traffic and keep the site secure. You can block cookies in your browser; core pages should still load.
        </p>
        <h2 className="font-display text-2xl font-bold text-cream">Third-party links</h2>
        <p>
          Download buttons may open external APK distribution URLs. Those destinations have their own privacy practices. Review them before installing software.
        </p>
        <h2 className="font-display text-2xl font-bold text-cream">Your choices</h2>
        <p>
          To request deletion of an email you sent us, or to ask a privacy question, contact{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. See also our{" "}
          <Link href="/disclaimer">Disclaimer</Link> and <Link href="/contact-us">Contact</Link> pages.
        </p>
      </div>
    </div>
  );
}
