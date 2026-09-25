import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Withdraw Money from Teen Patti Sky",
  description:
    "Cash out Teen Patti Sky winnings to JazzCash or EasyPaisa. Learn binding, minimums, verification, and what to do if a payout is delayed.",
  alternates: { canonical: "https://teenpattiskyapp.com.pk/withdraw-money-from-teen-patti-sky" },
  openGraph: {
    title: "Withdraw Money from Teen Patti Sky",
    description: "PKR withdrawal walkthrough for Teen Patti Sky using JazzCash and EasyPaisa.",
    url: "https://teenpattiskyapp.com.pk/withdraw-money-from-teen-patti-sky",
    siteName: "Teen Patti Sky",
    images: [{ url: "https://teenpattiskyapp.com.pk/teen-patti-sky-withdraw-money.webp", width: 1200, height: 565 }],
  },
};

export default function WithdrawPage() {
  return (
    <div className="px-4 md:px-8 py-10 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "Withdraw Money" }]} />
      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-cream mb-4">
        Withdraw Teen Patti Sky winnings to JazzCash or EasyPaisa
      </h1>
      <p className="text-cream/75 text-lg mb-8 leading-relaxed">
        Successful cashouts depend on a bound wallet, meeting the app minimum, and passing routine account checks. This guide keeps the process practical for Pakistani players.
      </p>

      <div className="sky-panel p-3 mb-8">
        <Image
          src="/teen-patti-sky-withdraw-money.webp"
          alt="Teen Patti Sky withdraw money interface for JazzCash and EasyPaisa cashouts"
          width={1200}
          height={565}
          className="rounded-xl w-full h-auto"
          priority
        />
      </div>

      <div className="prose-sky space-y-4">
        <h2 className="font-display text-2xl font-bold text-cream">Before you request a payout</h2>
        <p>
          Confirm your Teen Patti Sky account is bound and that the JazzCash or EasyPaisa number matches the details you used for deposits. Changing wallets mid-session often adds review time. If login feels unstable, fix that first with the{" "}
          <Link href="/blog/teen-patti-sky-account-login">login guide</Link>.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">Withdrawal steps</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>Open Wallet → Withdraw inside Teen Patti Sky.</li>
          <li>Select JazzCash or EasyPaisa and enter an amount at or above the on-screen minimum.</li>
          <li>Double-check the destination number, then submit the request.</li>
          <li>Wait for the status update. Most verified payouts arrive within minutes to a few hours.</li>
        </ol>

        <h2 className="font-display text-2xl font-bold text-cream">If the withdrawal is pending</h2>
        <p>
          Do not spam new requests. Open in-app Support with your user ID and request time. Pending states usually clear after KYC-style checks or when network verification finishes. Need help writing a clear ticket? See{" "}
          <Link href="/blog/how-to-contact-teen-patti-sky-customer-support">how to contact customer support</Link>.
        </p>
        <p>
          Need to top up again afterward? Use the{" "}
          <Link href="/deposit-money-in-teen-patti-sky">deposit guide</Link> so the same bound wallet stays consistent.
        </p>
      </div>

      <div className="mt-10 text-center">
        <CtaButton ariaLabel="Download Teen Patti Sky for withdrawals">DOWNLOAD NOW</CtaButton>
      </div>
    </div>
  );
}
