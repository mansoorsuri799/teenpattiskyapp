import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";

const TITLE = "How to Recover Teen Patti Sky Account";
const DESC =
  "Recover your Teen Patti Sky account with OTP password reset, bound mobile number tips, and what to do if login still fails in Pakistan.";
const PATH = "/blog/how-to-recover-teen-patti-sky-account";
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
    images: [{ url: "https://teenpattiskyapp.com.pk/teen-patti-sky-bind-account.webp", width: 1200, height: 565 }],
  },
};

export default function RecoverAccountBlog() {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to recover a Teen Patti Sky account",
    step: [
      { "@type": "HowToStep", name: "Open Forgot Password", text: "On the Teen Patti Sky login screen, tap Forgot Password." },
      { "@type": "HowToStep", name: "Enter mobile number", text: "Use the same number bound to your account." },
      { "@type": "HowToStep", name: "Verify OTP", text: "Enter the OTP sent to your phone." },
      { "@type": "HowToStep", name: "Set a new password", text: "Create a strong password and log in again." },
    ],
  };

  return (
    <article className="px-4 md:px-8 py-10 max-w-3xl mx-auto">
      <BlogPostSchema
        title={TITLE}
        description={DESC}
        url={`https://teenpattiskyapp.com.pk${PATH}`}
        datePublished={DATE}
        dateModified={DATE}
        image="https://teenpattiskyapp.com.pk/teen-patti-sky-bind-account.webp"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Recover Account" }]} />

      <h1 className="font-display text-4xl font-extrabold text-cream mb-4">{TITLE}</h1>
      <p className="text-cream/50 text-sm mb-6">Updated {DATE} · 7 min read</p>

      <div className="sky-panel p-3 mb-8">
        <Image
          src="/teen-patti-sky-bind-account.webp"
          alt="Recover Teen Patti Sky account using bound mobile number"
          width={1200}
          height={565}
          className="rounded-xl w-full h-auto"
          priority
        />
      </div>

      <div className="prose-sky space-y-4">
        <p>
          Losing access to Teen Patti Sky feels stressful when your wallet and referral progress sit on that profile. Most
          recoveries succeed when the account was bound to a real mobile number you still control. This guide walks through
          password reset, OTP issues, and when to contact support instead of creating a second account.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">Before you start</h2>
        <p>
          Confirm you have the latest{" "}
          <Link href="/download-teen-patti-sky">Teen Patti Sky APK</Link> and a stable connection. Use the same phone
          number you registered with — guest or unbound profiles are harder to restore. If you never finished binding,
          review the{" "}
          <Link href="/blog/teen-patti-sky-account-login">account & login guide</Link> so the next session stays recoverable.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">Forgot password recovery steps</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>Open Teen Patti Sky and go to the Login screen.</li>
          <li>Tap <strong>Forgot Password</strong> (wording may vary slightly by version).</li>
          <li>Enter your registered mobile number carefully.</li>
          <li>Enter the OTP sent to that number.</li>
          <li>Create a new strong password and confirm it.</li>
          <li>Log in with the new password and open Wallet to verify balances.</li>
        </ol>

        <h2 className="font-display text-2xl font-bold text-cream">If OTP does not arrive</h2>
        <p>
          Wait a minute before requesting another code. Check signal, disable temporary VPN blocks, and make sure you did
          not mistype the number. SIM swaps or wrong country codes are common causes. Avoid registering a brand-new
          account on the same Wi-Fi — that can trigger the{" "}
          <Link href="/blog/teen-patti-sky-ip-limit-exceed-fix">IP limit exceed</Link> error and complicate recovery.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">When to contact support</h2>
        <p>
          If OTP reset fails, the number changed, or you see unrecognized login activity, open in-app Support with your
          user ID, registered number, and approximate last login time. For a full walkthrough of channels, read{" "}
          <Link href="/blog/how-to-contact-teen-patti-sky-customer-support">how to contact customer support</Link>.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">After you get back in</h2>
        <p>
          Change the password if you shared devices, keep the number private, and avoid logging in on public emulators
          without logging out. When you play again, stick to one profile so bonuses and cashouts stay on the recovered
          wallet — see{" "}
          <Link href="/blog/how-to-win-big-in-teen-patti-sky">how to win big</Link> for table habits that protect your bankroll.
        </p>
      </div>

      <div className="mt-10 text-center">
        <CtaButton ariaLabel="Download Teen Patti Sky to recover account">DOWNLOAD NOW</CtaButton>
      </div>
    </article>
  );
}
