import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

export type SitemapImage = {
  loc: string;
  title: string;
  caption: string;
};

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: SitemapImage[];
};

const TODAY = "2026-09-25";

export const CORE_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: TODAY,
    changeFreq: "daily",
    priority: 1.0,
    images: [
      {
        loc: "/teen-patti-sky.webp",
        title: "Teen Patti Sky official app icon",
        caption:
          "Teen Patti Sky APK logo for Android players in Pakistan seeking JazzCash and EasyPaisa cash games.",
      },
      {
        loc: "/teen-patti-sky-game.webp",
        title: "Teen Patti Sky gameplay",
        caption:
          "Teen Patti Sky multiplayer card tables with real-money Teen Patti action.",
      },
    ],
  },
  {
    path: "/download-teen-patti-sky",
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: "/teen-patti-sky.webp",
        title: "Download Teen Patti Sky APK",
        caption: "Install Teen Patti Sky APK on Android 5.0+ devices in Pakistan.",
      },
    ],
  },
  {
    path: "/deposit-money-in-teen-patti-sky",
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: "/teen-patti-sky-deposit-money.webp",
        title: "Deposit money in Teen Patti Sky",
        caption: "JazzCash and EasyPaisa deposit steps for Teen Patti Sky wallet top-ups.",
      },
    ],
  },
  {
    path: "/withdraw-money-from-teen-patti-sky",
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: "/teen-patti-sky-withdraw-money.webp",
        title: "Withdraw money from Teen Patti Sky",
        caption: "Cash out Teen Patti Sky winnings to JazzCash or EasyPaisa.",
      },
    ],
  },
  {
    path: "/teen-patti-sky-for-pc",
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.85,
    images: [
      {
        loc: "/teen-patti-sky-pakistan.webp",
        title: "Teen Patti Sky for PC",
        caption: "Play Teen Patti Sky on Windows PC with an Android emulator.",
      },
    ],
  },
  {
    path: "/about-us",
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: "/teen-patti-sky.webp",
        title: "About Teen Patti Sky",
        caption: "About the Teen Patti Sky Pakistan information site.",
      },
    ],
  },
  {
    path: "/blog",
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/contact-us",
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/privacy",
    lastMod: TODAY,
    changeFreq: "yearly",
    priority: 0.5,
  },
  {
    path: "/disclaimer",
    lastMod: TODAY,
    changeFreq: "yearly",
    priority: 0.5,
  },
];

export const BLOG_POSTS: SitemapPage[] = [
  {
    path: "/blog/teen-patti-sky-account-login",
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "/teen-patti-sky-bind-account.webp",
        title: "Teen Patti Sky account and login",
        caption: "Create and bind a Teen Patti Sky account for secure logins.",
      },
    ],
  },
  {
    path: "/blog/how-to-recover-teen-patti-sky-account",
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "/teen-patti-sky-bind-account.webp",
        title: "How to recover Teen Patti Sky account",
        caption: "OTP password reset and account recovery for Teen Patti Sky.",
      },
    ],
  },
  {
    path: "/blog/how-to-contact-teen-patti-sky-customer-support",
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "/teen-patti-sky-live-support.webp",
        title: "Contact Teen Patti Sky customer support",
        caption: "In-app live support and official help channels for Teen Patti Sky.",
      },
    ],
  },
  {
    path: "/blog/how-to-win-big-in-teen-patti-sky",
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "/teen-patti-sky-game.webp",
        title: "How to win big in Teen Patti Sky",
        caption: "Smart bankroll and table tips for Teen Patti Sky players.",
      },
    ],
  },
  {
    path: "/blog/teen-patti-sky-bonuses-referral",
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "/teen-patti-sky-daily-bonus.webp",
        title: "Teen Patti Sky bonuses and referral",
        caption: "Daily bonuses and referral rewards inside Teen Patti Sky.",
      },
      {
        loc: "/teen-patti-sky-referrals.webp",
        title: "Teen Patti Sky referral program",
        caption: "Share Teen Patti Sky referral links and unlock invite rewards.",
      },
    ],
  },
  {
    path: "/blog/teen-patti-sky-ip-limit-exceed-fix",
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.75,
    images: [
      {
        loc: "/teen-patti-sky-live-support.webp",
        title: "Fix Teen Patti Sky IP limit exceed",
        caption: "Troubleshoot the IP limit exceed error on Teen Patti Sky APK.",
      },
    ],
  },
];

export const ALL_SITEMAP_PAGES: SitemapPage[] = [...CORE_PAGES, ...BLOG_POSTS];

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
