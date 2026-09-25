import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SUPPORT_EMAIL } from "@/lib/appFacts";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for teenpattiskyapp.com.pk — entertainment use, no income guarantees, and independent Teen Patti Sky information.",
  alternates: { canonical: "https://teenpattiskyapp.com.pk/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="px-4 md:px-8 py-10 max-w-3xl mx-auto">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />
      <h1 className="font-display text-4xl font-extrabold text-cream mb-6">Disclaimer</h1>
      <div className="prose-sky space-y-4">
        <p>Last updated: 25 September 2026</p>
        <p>
          teenpattiskyapp.com.pk provides informational guides about Teen Patti Sky for educational and entertainment purposes. Real-money play involves risk. You can lose the money you deposit. We do not promise profits, bonuses clearance, or uninterrupted withdrawals.
        </p>
        <h2 className="font-display text-2xl font-bold text-cream">No professional advice</h2>
        <p>
          Nothing on this site is legal, financial, or tax advice. Local rules around online gaming vary. Check the laws that apply to you before downloading or funding any APK.
        </p>
        <h2 className="font-display text-2xl font-bold text-cream">Third-party software</h2>
        <p>
          Installing Android packages from outside official stores carries device risk. Scan files, review permissions, and use only sources you trust. We are not responsible for damage, account bans, or losses arising from app use.
        </p>
        <h2 className="font-display text-2xl font-bold text-cream">Affiliate disclosure</h2>
        <p>
          Some download links may be affiliate or tracked distribution URLs. We may earn a commission if you install through them, at no extra cost to you. That relationship does not change our responsibility to write accurate guides.
        </p>
        <p>
          Questions? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or visit{" "}
          <Link href="/contact-us">Contact Us</Link>.
        </p>
      </div>
    </div>
  );
}
