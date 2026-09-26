import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

/** Matches the homepage hero rating claim — keep identical in UI + schema. */
export const APP_AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.5",
  ratingCount: "200000",
  bestRating: "5",
  worstRating: "1",
} as const;

export const APP_DOWNLOAD_URL =
  "https://3pattiskypk1.com/?from_gameid=6482287&channelCode=100000";

export const FACEBOOK_PROFILE_URL =
  "https://www.facebook.com/teen.patti.sky.5166528/";

export const ORGANIZATION_SAME_AS = [FACEBOOK_PROFILE_URL] as const;

export const SUPPORT_EMAIL = "support@teenpattiskyapp.com.pk";

export const APP_SCREENSHOTS = [
  `${SITE_ORIGIN}/teen-patti-sky.webp`,
  `${SITE_ORIGIN}/teen-patti-sky-game.webp`,
  `${SITE_ORIGIN}/teen-patti-sky-pakistan.webp`,
  `${SITE_ORIGIN}/teen-patti-sky-daily-bonus.webp`,
] as const;

export const BRAND = {
  name: "Teen Patti Sky",
  shortName: "3 Patti Sky",
  domain: "teenpattiskyapp.com.pk",
  origin: SITE_ORIGIN,
  tagline: "Sky-high Teen Patti with JazzCash & EasyPaisa in Pakistan",
} as const;

export const APP_DETAILS = {
  version: "v1.199(1)",
  size: "80 MB",
  android: "Android 5.0+",
  category: "Card Game",
  price: "Free",
  language: "English, Urdu",
  mode: "Online Multiplayer",
  platform: "Android",
  updateStatus: "Recently Updated",
} as const;

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/teen-patti-sky.webp`,
  description:
    "Teen Patti Sky is a Pakistani Teen Patti and card-game APK with JazzCash and EasyPaisa deposits, fast withdrawals, daily bonuses, and live multiplayer tables.",
  sameAs: [...ORGANIZATION_SAME_AS],
  email: SUPPORT_EMAIL,
};
