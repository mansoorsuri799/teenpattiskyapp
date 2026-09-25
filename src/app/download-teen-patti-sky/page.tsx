import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { APP_DETAILS, APP_DOWNLOAD_URL } from "@/lib/appFacts";

export const metadata: Metadata = {
  title: "Download Teen Patti Sky APK for Android",
  description:
    "Step-by-step Teen Patti Sky APK download for Android in Pakistan. Install safely, enable unknown sources once, then register and play.",
  alternates: { canonical: "https://teenpattiskyapp.com.pk/download-teen-patti-sky" },
  openGraph: {
    title: "Download Teen Patti Sky APK for Android",
    description: "Install Teen Patti Sky on Android with a clear Pakistan-focused APK guide.",
    url: "https://teenpattiskyapp.com.pk/download-teen-patti-sky",
    siteName: "Teen Patti Sky",
    images: [{ url: "https://teenpattiskyapp.com.pk/teen-patti-sky.webp", width: 512, height: 512, alt: "Download Teen Patti Sky APK" }],
  },
};

const steps = [
  "Open teenpattiskyapp.com.pk on your Android browser and tap Download Now.",
  "Allow the browser or Files app to install unknown apps for this single APK when Android prompts you.",
  "Open the downloaded Teen Patti Sky package and tap Install.",
  "Launch the app, create or restore your account, then bind JazzCash or EasyPaisa before depositing.",
];

export default function DownloadPage() {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Download and install Teen Patti Sky APK",
    description: "Install Teen Patti Sky on Android devices in Pakistan.",
    totalTime: "PT5M",
    step: steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Step ${i + 1}`,
      text,
    })),
  };

  return (
    <div className="px-4 md:px-8 py-10 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <Breadcrumbs items={[{ label: "Download Teen Patti Sky" }]} />

      <p className="sky-chip mb-4">Android APK · {APP_DETAILS.size} · {APP_DETAILS.android}</p>
      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-cream mb-4">
        Download Teen Patti Sky APK without mirror confusion
      </h1>
      <p className="text-cream/75 text-lg mb-8 leading-relaxed">
        This page walks Pakistani Android users through a clean Teen Patti Sky install. Use one trusted download path, finish setup, then move on to{" "}
        <Link href="/blog/teen-patti-sky-account-login">account binding</Link> and{" "}
        <Link href="/deposit-money-in-teen-patti-sky">JazzCash deposits</Link> when you are ready.
      </p>

      <div className="sky-panel p-4 mb-8">
        <Image
          src="/teen-patti-sky.webp"
          alt="Teen Patti Sky APK icon ready for Android download"
          width={512}
          height={512}
          className="mx-auto rounded-2xl w-48 h-48 object-cover"
          priority
        />
      </div>

      <div className="flex justify-center mb-10">
        <CtaButton href={APP_DOWNLOAD_URL} ariaLabel="Download Teen Patti Sky APK file">
          DOWNLOAD NOW
        </CtaButton>
      </div>

      <div className="prose-sky space-y-4">
        <h2 className="font-display text-2xl font-bold text-cream">Before you install</h2>
        <p>
          Teen Patti Sky is distributed as an Android package outside the Play Store on many regional sites. That means your phone may ask for a one-time permission to install from the browser. Grant it only for this download, then revoke the permission afterward if you prefer stricter device settings.
        </p>
        <p>
          Keep at least {APP_DETAILS.size} free storage and use a stable connection. Interrupted downloads are the most common reason people end up with a broken package and start hunting random mirrors.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">Install steps</h2>
        <ol className="list-decimal pl-5 space-y-3">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h2 className="font-display text-2xl font-bold text-cream">After installation</h2>
        <p>
          Open Teen Patti Sky and secure the account immediately — phone number, password, and wallet binding reduce recovery friction later. If a login fails or you see an IP limit message, read the{" "}
          <Link href="/blog/teen-patti-sky-ip-limit-exceed-fix">IP limit fix</Link> before creating duplicate accounts on the same network.
        </p>
        <p>
          Prefer a larger screen? Follow{" "}
          <Link href="/teen-patti-sky-for-pc">Teen Patti Sky for PC</Link> to run the same APK inside an Android emulator on Windows.
        </p>
      </div>

      <div className="mt-10 text-center">
        <CtaButton ariaLabel="Get Teen Patti Sky APK">DOWNLOAD NOW</CtaButton>
      </div>
    </div>
  );
}
