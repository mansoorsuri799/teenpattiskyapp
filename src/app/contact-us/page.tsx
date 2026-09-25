import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { SUPPORT_EMAIL } from "@/lib/appFacts";

export const metadata: Metadata = {
  title: "Contact Teen Patti Sky Support",
  description:
    "Contact teenpattiskyapp.com.pk for site, content, or privacy questions about Teen Patti Sky guides.",
  alternates: { canonical: "https://teenpattiskyapp.com.pk/contact-us" },
  openGraph: {
    title: "Contact Us – Teen Patti Sky",
    description: "Email support for the Teen Patti Sky information site.",
    url: "https://teenpattiskyapp.com.pk/contact-us",
    siteName: "Teen Patti Sky",
  },
};

export default function ContactPage() {
  return (
    <div className="px-4 md:px-8 py-10 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-cream mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-center text-cream/70 mb-10">
        Questions about this website, Teen Patti Sky guides, or privacy requests — email us below.
      </p>

      <div className="sky-panel p-8 md:p-10 text-center mb-8">
        <h2 className="font-display text-2xl font-bold text-gold mb-3">Email</h2>
        <p className="text-cream/70 mb-6">We read every message about content accuracy, broken links, and privacy.</p>
        <CtaButton href={`mailto:${SUPPORT_EMAIL}`} icon="mail" ariaLabel="Email Teen Patti Sky support">
          {SUPPORT_EMAIL}
        </CtaButton>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { href: "/download-teen-patti-sky", title: "Download help", blurb: "APK install steps for Android." },
          { href: "/blog/how-to-contact-teen-patti-sky-customer-support", title: "Customer support", blurb: "In-app chat and official help channels." },
          { href: "/privacy", title: "Privacy policy", blurb: "How this site handles data." },
        ].map((card) => (
          <Link key={card.href} href={card.href} className="sky-panel p-5 hover:border-gold/40 transition-colors">
            <h3 className="font-semibold text-gold mb-2">{card.title}</h3>
            <p className="text-sm text-cream/65">{card.blurb}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
