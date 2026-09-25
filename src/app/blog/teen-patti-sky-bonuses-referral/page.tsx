import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";

const TITLE = "Teen Patti Sky Bonuses, Daily Spin & Referral Rewards";
const DESC =
  "How Teen Patti Sky daily bonuses, login spins, and referral rewards work for Pakistani players — without confusing them with deposit guides.";
const PATH = "/blog/teen-patti-sky-bonuses-referral";
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
    images: [{ url: "https://teenpattiskyapp.com.pk/teen-patti-sky-daily-bonus.webp", width: 1200, height: 565 }],
  },
};

export default function BonusBlog() {
  return (
    <article className="px-4 md:px-8 py-10 max-w-3xl mx-auto">
      <BlogPostSchema
        title={TITLE}
        description={DESC}
        url={`https://teenpattiskyapp.com.pk${PATH}`}
        datePublished={DATE}
        dateModified={DATE}
        image="https://teenpattiskyapp.com.pk/teen-patti-sky-daily-bonus.webp"
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Bonuses & Referral" }]} />

      <h1 className="font-display text-4xl font-extrabold text-cream mb-4">{TITLE}</h1>
      <p className="text-cream/50 text-sm mb-6">Updated {DATE} · 7 min read</p>

      <div className="sky-panel p-3 mb-8">
        <Image
          src="/teen-patti-sky-daily-bonus.webp"
          alt="Teen Patti Sky daily bonus and spin rewards screen"
          width={1200}
          height={565}
          className="rounded-xl w-full h-auto"
          priority
        />
      </div>

      <div className="prose-sky space-y-4">
        <p>
          Teen Patti Sky promotes itself with welcome value, daily check-ins, and invite rewards. Those offers help new Pakistani players practice before they stake larger PKR amounts — but only if you collect them on one bound account.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">Daily login and spin rewards</h2>
        <p>
          Open Teen Patti Sky once per day and claim the login panel before you join a table. Many lobbies also include a spin that refreshes on a 24-hour timer. Missing a day usually resets streak-style rewards, so treat the claim as part of your routine rather than an afterthought.
        </p>
        <p>
          Bonuses are still play money with rules. Read the on-screen wagering or expiry notes inside the app instead of assuming every reward converts one-to-one into a JazzCash withdrawal.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">Referral rewards that actually clear</h2>
        <div className="sky-panel p-3 my-4">
          <Image
            src="/teen-patti-sky-referrals.webp"
            alt="Teen Patti Sky referral invite link and reward progress"
            width={1200}
            height={565}
            className="rounded-xl w-full h-auto"
          />
        </div>
        <p>
          Share your personal invite link from the referral screen. Friends should install from a clean{" "}
          <Link href="/download-teen-patti-sky">download path</Link>, register once, and bind their own accounts. Rewards typically unlock after the invitee reaches an activity threshold shown in the app — not merely after installing.
        </p>
        <p>
          Avoid farming dozens of self-referrals on one IP. That behavior is exactly what triggers the{" "}
          <Link href="/blog/teen-patti-sky-ip-limit-exceed-fix">IP limit</Link> block and can void referral progress.
        </p>

        <h2 className="font-display text-2xl font-bold text-cream">How bonuses connect to deposits and cashouts</h2>
        <p>
          Promotions top up your playable balance; they do not replace wallet setup. When you decide to add your own PKR, use the{" "}
          <Link href="/deposit-money-in-teen-patti-sky">deposit guide</Link>. When you cash out winnings that cleared any bonus conditions, follow the{" "}
          <Link href="/withdraw-money-from-teen-patti-sky">withdraw guide</Link>.
        </p>
        <p>
          Still deciding whether to fund the app at all? Pair this article with{" "}
          <Link href="/blog/how-to-win-big-in-teen-patti-sky">how to win big tips</Link> and keep stakes entertainment-sized.
        </p>
      </div>

      <div className="mt-10 text-center">
        <CtaButton ariaLabel="Download Teen Patti Sky for bonuses">DOWNLOAD NOW</CtaButton>
      </div>
    </article>
  );
}
