import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { FACEBOOK_PROFILE_URL, SUPPORT_EMAIL } from "@/lib/appFacts";

export const metadata: Metadata = {
  title: "About Teen Patti Sky",
  description:
    "About teenpattiskyapp.com.pk — independent Teen Patti Sky guides for Pakistani players covering download, wallets, bonuses, and troubleshooting.",
  alternates: { canonical: "https://teenpattiskyapp.com.pk/about-us" },
  openGraph: {
    title: "About Teen Patti Sky",
    description: "Who runs this Teen Patti Sky information site and what we publish.",
    url: "https://teenpattiskyapp.com.pk/about-us",
    siteName: "Teen Patti Sky",
    images: [{ url: "https://teenpattiskyapp.com.pk/teen-patti-sky.webp", width: 512, height: 512 }],
  },
};

export default function AboutPage() {
  return (
    <div className="px-4 md:px-8 py-10 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-cream mb-4">
        About Teen Patti Sky on teenpattiskyapp.com.pk
      </h1>
      <p className="text-cream/75 text-lg mb-8 leading-relaxed">
        We publish clear Android guides for Teen Patti Sky players in Pakistan — download steps, JazzCash and EasyPaisa wallet flows, bonuses, and common errors — without stuffing every keyword onto one page.
      </p>

      <div className="sky-panel p-4 mb-8 max-w-xs">
        <Image
          src="/teen-patti-sky.webp"
          alt="Teen Patti Sky brand icon"
          width={512}
          height={512}
          className="rounded-2xl w-full h-auto"
        />
      </div>

      <div className="prose-sky space-y-4">
        <h2 className="font-display text-2xl font-bold text-cream">What this site is</h2>
        <p>
          teenpattiskyapp.com.pk is an information and download-help property focused on Teen Patti Sky. We explain how to install the APK, bind an account, deposit, withdraw, and troubleshoot issues such as IP limits. We are not a bank and we do not guarantee winnings.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">What we refuse to do</h2>
        <p>
          We do not copy doorway farm articles, hide download buttons behind unrelated trackers without disclosure, or invent bilingual claims. Content stays in English with Pakistan-specific payment context. For policies see{" "}
          <Link href="/privacy">Privacy</Link> and <Link href="/disclaimer">Disclaimer</Link>.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">Contact</h2>
        <p>
          Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          {FACEBOOK_PROFILE_URL ? (
            <>
              {" "}
              or visit our{" "}
              <a href={FACEBOOK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                Facebook page
              </a>
            </>
          ) : null}
          . For product issues inside the game, use Teen Patti Sky’s in-app Support as well.
        </p>
      </div>

      <div className="mt-10 text-center">
        <CtaButton ariaLabel="Download Teen Patti Sky">DOWNLOAD NOW</CtaButton>
      </div>
    </div>
  );
}
