import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Teen Patti Sky Blog – Login, Bonuses, Support & Tips",
  description:
    "Teen Patti Sky guides: account login, recover account, customer support, win-big tips, bonuses, and IP limit fixes.",
  alternates: { canonical: "https://teenpattiskyapp.com.pk/blog" },
  openGraph: {
    title: "Teen Patti Sky Blog",
    description: "Practical Teen Patti Sky articles for Pakistani Android players.",
    url: "https://teenpattiskyapp.com.pk/blog",
    siteName: "Teen Patti Sky",
    images: [{ url: "https://teenpattiskyapp.com.pk/teen-patti-sky.webp", width: 512, height: 512 }],
  },
};

const posts = [
  {
    href: "/blog/teen-patti-sky-account-login",
    title: "Teen Patti Sky Account Create & Login",
    blurb: "Register once, bind the profile, and recover access without duplicate accounts.",
  },
  {
    href: "/blog/how-to-recover-teen-patti-sky-account",
    title: "How to Recover Teen Patti Sky Account",
    blurb: "OTP password reset, bound number tips, and when to contact support.",
  },
  {
    href: "/blog/how-to-contact-teen-patti-sky-customer-support",
    title: "How to Contact Customer Support",
    blurb: "In-app chat, official forms, and how to avoid fake support scams.",
  },
  {
    href: "/blog/how-to-win-big-in-teen-patti-sky",
    title: "How to Win Big in Teen Patti Sky",
    blurb: "Bankroll limits, table selection, bonus timing, and smarter play habits.",
  },
  {
    href: "/blog/teen-patti-sky-bonuses-referral",
    title: "Bonuses, Daily Spin & Referral Rewards",
    blurb: "How daily claims and invite rewards work before you deposit real PKR.",
  },
  {
    href: "/blog/teen-patti-sky-ip-limit-exceed-fix",
    title: "Fix IP Limit Exceed Error",
    blurb: "Clear the network block without creating more banned profiles.",
  },
];

export default function BlogIndex() {
  return (
    <div className="px-4 md:px-8 py-10 max-w-6xl mx-auto">
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-cream mb-3">
        Teen Patti Sky Blog
      </h1>
      <p className="text-cream/70 text-lg mb-10 max-w-2xl">
        Account recovery, customer support, win-big tips, bonuses, login, and IP fixes. Deposit and withdraw details live on their dedicated guide pages.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="sky-panel p-5 md:p-6 group block hover:border-gold/40 transition-colors"
          >
            <h2 className="font-display text-xl font-bold text-gold mb-2 group-hover:text-ember transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-cream/70 leading-relaxed">{post.blurb}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
