import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Teen Patti Sky for PC (Windows Emulator Guide)",
  description:
    "Play Teen Patti Sky on Windows PC using an Android emulator. Install the APK, sign in, and use the same JazzCash wallet as on mobile.",
  alternates: { canonical: "https://teenpattiskyapp.com.pk/teen-patti-sky-for-pc" },
  openGraph: {
    title: "Teen Patti Sky for PC",
    description: "Run Teen Patti Sky on a Windows PC with BlueStacks or a similar Android emulator.",
    url: "https://teenpattiskyapp.com.pk/teen-patti-sky-for-pc",
    siteName: "Teen Patti Sky",
    images: [{ url: "https://teenpattiskyapp.com.pk/teen-patti-sky-pakistan.webp", width: 1200, height: 565 }],
  },
};

export default function PcPage() {
  return (
    <div className="px-4 md:px-8 py-10 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "PC Version" }]} />
      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-cream mb-4">
        Play Teen Patti Sky on PC with an Android emulator
      </h1>
      <p className="text-cream/75 text-lg mb-8 leading-relaxed">
        Teen Patti Sky is an Android APK. On Windows you run it inside an emulator such as BlueStacks or LDPlayer, then sign into the same account you use on your phone.
      </p>

      <div className="sky-panel p-3 mb-8">
        <Image
          src="/teen-patti-sky-pakistan.webp"
          alt="Teen Patti Sky available for Pakistani players including PC emulator setups"
          width={1200}
          height={565}
          className="rounded-xl w-full h-auto"
          priority
        />
      </div>

      <div className="prose-sky space-y-4">
        <h2 className="font-display text-2xl font-bold text-cream">PC setup steps</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>Install a reputable Android emulator on your Windows PC.</li>
          <li>
            Download the Teen Patti Sky APK from the{" "}
            <Link href="/download-teen-patti-sky">download page</Link> and open the file inside the emulator.
          </li>
          <li>Install the package, launch Teen Patti Sky, and log in with your bound account.</li>
          <li>Enable virtualization in BIOS if the emulator asks for better performance.</li>
        </ol>

        <h2 className="font-display text-2xl font-bold text-cream">Emulator tips</h2>
        <p>
          Use one account across phone and PC. Opening many fresh accounts from the same public IP can trigger the{" "}
          <Link href="/blog/teen-patti-sky-ip-limit-exceed-fix">IP limit exceed</Link> block. Keep wallet binding identical so{" "}
          <Link href="/deposit-money-in-teen-patti-sky">deposits</Link> and{" "}
          <Link href="/withdraw-money-from-teen-patti-sky">withdrawals</Link> stay consistent.
        </p>
      </div>

      <div className="mt-10 text-center">
        <CtaButton ariaLabel="Download Teen Patti Sky APK for PC emulator">DOWNLOAD NOW</CtaButton>
      </div>
    </div>
  );
}
