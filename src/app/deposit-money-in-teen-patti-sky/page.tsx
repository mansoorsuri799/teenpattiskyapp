import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Deposit Money in Teen Patti Sky (JazzCash & EasyPaisa)",
  description:
    "How to deposit PKR into Teen Patti Sky using JazzCash or EasyPaisa. Bind your wallet, confirm the amount, and fund your first cash table.",
  alternates: { canonical: "https://teenpattiskyapp.com.pk/deposit-money-in-teen-patti-sky" },
  openGraph: {
    title: "Deposit Money in Teen Patti Sky",
    description: "JazzCash and EasyPaisa deposit walkthrough for Teen Patti Sky players in Pakistan.",
    url: "https://teenpattiskyapp.com.pk/deposit-money-in-teen-patti-sky",
    siteName: "Teen Patti Sky",
    images: [{ url: "https://teenpattiskyapp.com.pk/teen-patti-sky-deposit-money.webp", width: 1200, height: 565 }],
  },
};

export default function DepositPage() {
  return (
    <div className="px-4 md:px-8 py-10 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "Deposit Money" }]} />
      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-cream mb-4">
        Deposit money in Teen Patti Sky with local wallets
      </h1>
      <p className="text-cream/75 text-lg mb-8 leading-relaxed">
        Pakistani players usually fund Teen Patti Sky through JazzCash or EasyPaisa. Bind the wallet once, then reuse it for quick top-ups before cash tables.
      </p>

      <div className="sky-panel p-3 mb-8">
        <Image
          src="/teen-patti-sky-deposit-money.webp"
          alt="Teen Patti Sky deposit money screen highlighting JazzCash and EasyPaisa options"
          width={1200}
          height={565}
          className="rounded-xl w-full h-auto"
          priority
        />
      </div>

      <div className="prose-sky space-y-4">
        <h2 className="font-display text-2xl font-bold text-cream">Prepare your account</h2>
        <p>
          Complete registration and bind your Teen Patti Sky profile before sending money. Unbound accounts make support recovery slower if a transfer needs manual review. See the{" "}
          <Link href="/blog/teen-patti-sky-account-login">account and login guide</Link> if you still need to secure the profile.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">Deposit steps</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>Open Teen Patti Sky and go to Wallet or Deposit.</li>
          <li>Choose JazzCash or EasyPaisa and enter the PKR amount you can comfortably stake.</li>
          <li>Confirm the on-screen instructions for your wallet app and finish the payment.</li>
          <li>Return to Teen Patti Sky and wait for the balance refresh. Keep the transaction ID if the credit is delayed.</li>
        </ol>

        <h2 className="font-display text-2xl font-bold text-cream">Tips that prevent failed top-ups</h2>
        <p>
          Use the same personal wallet number you bound in the app. Mismatched names or third-party wallets often trigger extra checks. Start with a modest first deposit so you can verify the loop before larger stakes.
        </p>
        <p>
          After the balance appears, explore{" "}
          <Link href="/blog/teen-patti-sky-bonuses-referral">daily bonuses and referrals</Link> before sitting a high table. When you are ready to cash out later, follow the{" "}
          <Link href="/withdraw-money-from-teen-patti-sky">withdrawal guide</Link>.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <CtaButton ariaLabel="Download Teen Patti Sky to deposit">DOWNLOAD NOW</CtaButton>
        <Link href="/withdraw-money-from-teen-patti-sky" className="text-gold font-semibold underline underline-offset-4">
          Withdraw guide →
        </Link>
      </div>
    </div>
  );
}
