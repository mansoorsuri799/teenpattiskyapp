import type { Metadata, Viewport } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { ORGANIZATION_JSON_LD } from "@/lib/appFacts";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-body",
  preload: true,
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0e0c",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://teenpattiskyapp.com.pk"),
  title: {
    default: "3 Patti Sky APK v1.199(1) Pakistan – Free Android Download 2026",
    template: "%s | Teen Patti Sky",
  },
  description:
    "Download 3 Patti Sky (Teen Patti Sky) APK v1.199(1) for Pakistan. JazzCash & EasyPaisa, daily bonuses, referral rewards, Roulette, Mines, Dragon Tiger.",
  keywords: [
    "Teen Patti Sky",
    "teen patti sky apk",
    "teen patti sky download",
    "teen patti sky pakistan",
    "3 patti sky",
    "3 patti sky apk",
    "teen patti sky jazzcash",
    "teen patti sky easypaisa",
    "download teen patti sky",
    "teen patti sky real money",
  ],
  authors: [{ name: "Teen Patti Sky Team" }],
  creator: "Teen Patti Sky",
  publisher: "Teen Patti Sky",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "256x256" },
      { url: "/teen-patti-sky.webp", type: "image/webp", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  alternates: {
    canonical: "https://teenpattiskyapp.com.pk",
  },
  openGraph: {
    title: "Teen Patti Sky APK Pakistan – Free Download & Cash Guide",
    description:
      "Play Teen Patti Sky on Android with JazzCash & EasyPaisa. Download the free APK, claim bonuses, and withdraw in PKR.",
    url: "https://teenpattiskyapp.com.pk",
    siteName: "Teen Patti Sky",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://teenpattiskyapp.com.pk/feature/og-image.png",
        width: 1200,
        height: 630,
        alt: "Teen Patti Sky – Pakistan Teen Patti APK",
      },
      {
        url: "https://teenpattiskyapp.com.pk/feature/og-image-square.webp",
        width: 512,
        height: 512,
        alt: "Teen Patti Sky app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Sky APK Pakistan – Free Download & Cash Guide",
    description:
      "Download Teen Patti Sky for Android. JazzCash & EasyPaisa deposits, daily bonuses, and fast PKR withdrawals.",
    images: [
      {
        url: "https://teenpattiskyapp.com.pk/feature/twitter-card.webp",
        width: 512,
        height: 512,
        alt: "Teen Patti Sky Twitter card",
      },
    ],
  },
  applicationName: "Teen Patti Sky",
  category: "Gaming",
  classification: "Teen Patti Card Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/teen-patti-sky.webp" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
      </head>
      <body
        className={`${outfit.className} antialiased bg-primary text-cream min-h-screen flex flex-col bg-sky-radial`}
        style={{ backgroundAttachment: "fixed", minHeight: "100vh" }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-40" aria-hidden="true" />
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        <DeferredAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
