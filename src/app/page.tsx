import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  APP_AGGREGATE_RATING,
  APP_DETAILS,
  APP_DOWNLOAD_URL,
  APP_SCREENSHOTS,
  FACEBOOK_PROFILE_URL,
  SUPPORT_EMAIL,
} from "@/lib/appFacts";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: {
    absolute: "3 Patti Sky APK v2.5.0 Pakistan – Free Android Download 2026",
  },
  description:
    "Download 3 Patti Sky (Teen Patti Sky) APK v2.5.0 for Android in Pakistan. JazzCash & EasyPaisa, daily bonuses, referral agent rewards, Roulette, Mines, Dragon Tiger & more.",
  openGraph: {
    title: "3 Patti Sky APK v2.5.0 Pakistan – Free Android Download 2026",
    description:
      "Official Teen Patti Sky / 3 Patti Sky guide: install APK, claim bonuses, deposit & withdraw with JazzCash and EasyPaisa.",
    url: "https://teenpattiskyapp.com.pk",
    siteName: "Teen Patti Sky",
    images: [
      {
        url: "https://teenpattiskyapp.com.pk/teen-patti-sky.webp",
        width: 512,
        height: 512,
        alt: "3 Patti Sky official app icon",
      },
      {
        url: "https://teenpattiskyapp.com.pk/feature/og-image.png",
        width: 1200,
        height: 630,
        alt: "3 Patti Sky APK download for Pakistan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Patti Sky APK v2.5.0 Pakistan – Free Android Download 2026",
    description:
      "Install Teen Patti Sky on Android. Live tables, VIP rooms, JazzCash & EasyPaisa cashouts.",
    images: ["https://teenpattiskyapp.com.pk/feature/twitter-card.webp"],
  },
  alternates: { canonical: "https://teenpattiskyapp.com.pk" },
};

const toc = [
  { id: "what-is", label: "What is 3 Patti Sky?" },
  { id: "overview", label: "APK Overview" },
  { id: "why-choose", label: "Why Choose It" },
  { id: "rewards", label: "Rewards & Bonuses" },
  { id: "agent", label: "Agent / Referral" },
  { id: "features", label: "Key Features" },
  { id: "games", label: "Games Available" },
  { id: "requirements", label: "System Requirements" },
  { id: "download", label: "Download & Install" },
  { id: "ios", label: "iPhone / iOS" },
  { id: "pc", label: "PC Version" },
  { id: "register", label: "Register" },
  { id: "login", label: "Login & Password" },
  { id: "whats-new", label: "What's New v2.5.0" },
  { id: "payments", label: "Deposit & Withdraw" },
  { id: "compare", label: "vs Other Apps" },
  { id: "safety", label: "Safe, Legal & Legit" },
  { id: "support", label: "Customer Support" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "faq", label: "FAQs" },
];

const apkRows: [string, string][] = [
  ["App Name", "3 Patti Sky (Teen Patti Sky)"],
  ["Version", APP_DETAILS.version],
  ["Category", APP_DETAILS.category],
  ["App Size", APP_DETAILS.size],
  ["Android Required", APP_DETAILS.android],
  ["Game Mode", APP_DETAILS.mode],
  ["Language", APP_DETAILS.language],
  ["Price", APP_DETAILS.price],
  ["Platform", APP_DETAILS.platform],
  ["Update Status", APP_DETAILS.updateStatus],
];

const agentTiers = [
  ["5", "3,000"],
  ["10", "6,500"],
  ["30", "18,500"],
  ["50", "31,000"],
  ["100", "62,000"],
  ["300", "186,000"],
  ["500", "310,000"],
  ["1,000", "620,000"],
  ["2,000", "1,250,000"],
  ["10,000", "6,250,000"],
];

const games = [
  { name: "Royal Patti", desc: "Premium tables with higher stakes and a royal theme." },
  { name: "Golden Joker", desc: "Gold jokers that boost winning combinations." },
  { name: "Low Card Battle", desc: "Muflis-style play focused on smart low hands." },
  { name: "Power Ace Mode", desc: "Aces act as wildcards for flexible wins." },
  { name: "Lucky Draw Mode", desc: "A random wildcard each round keeps pots unpredictable." },
  { name: "Pro Player Table", desc: "Competitive rooms for experienced players." },
  { name: "Diamond Patti", desc: "Deluxe chips and elite-table energy." },
  { name: "Dragon Tiger", desc: "Fast two-side card rounds." },
  { name: "Mines", desc: "Quick risk-and-reward grid rounds." },
  { name: "Zoo Roulette", desc: "Colorful roulette-style spins." },
  { name: "BlackJack", desc: "Classic 21 alongside Teen Patti lobbies." },
  { name: "Ludo & more", desc: "Extra casual modes for short sessions." },
];

const faqs = [
  {
    q: "What is 3 Patti Sky?",
    a: "3 Patti Sky (also called Teen Patti Sky) is an Android gaming app popular in Pakistan. It mixes classic Teen Patti with modes like Roulette, Mines, Dragon Tiger, Ludo, and more, plus JazzCash and EasyPaisa wallet support.",
  },
  {
    q: "How can I download the 3 Patti Sky app?",
    a: "Open teenpattiskyapp.com.pk, tap Download, allow the one-time unknown-sources prompt if Android asks, then install the APK and register with your mobile number. Full steps are in the download section below and on our dedicated download page.",
  },
  {
    q: "Is 3 Patti Sky safe to use?",
    a: "Use a single trusted download path, bind your account, start with a small deposit/withdrawal test, and never share OTPs. The app includes OTP login and encrypted wallet flows; your habits matter as much as the software.",
  },
  {
    q: "How do I deposit money into my 3 Patti Sky account?",
    a: "Open Wallet → Deposit, choose JazzCash, EasyPaisa, or bank transfer, enter the PKR amount, and confirm. See our full deposit guide for screenshots and troubleshooting.",
  },
  {
    q: "Can I earn money by inviting friends to 3 Patti Sky?",
    a: "Yes. The referral and agent program pays commissions and milestone bonuses when invited players stay active. Always read the live in-app terms — rates can change.",
  },
  {
    q: "How long does it take to withdraw winnings from 3 Patti Sky?",
    a: "Verified JazzCash or EasyPaisa requests often clear within minutes to a few hours after checks. Bound wallets and matching account details speed things up.",
  },
];

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="section-anchor font-display text-2xl md:text-3xl font-extrabold text-cream">
      {children}
    </h2>
  );
}

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://teenpattiskyapp.com.pk/#website",
        url: "https://teenpattiskyapp.com.pk/",
        name: "Teen Patti Sky",
        alternateName: "3 Patti Sky",
        description:
          "3 Patti Sky / Teen Patti Sky APK guides for Pakistani players — download, bonuses, JazzCash & EasyPaisa.",
        inLanguage: "en-PK",
      },
      {
        "@type": "Organization",
        "@id": "https://teenpattiskyapp.com.pk/#organization",
        name: "Teen Patti Sky",
        url: "https://teenpattiskyapp.com.pk/",
        logo: {
          "@type": "ImageObject",
          url: "https://teenpattiskyapp.com.pk/teen-patti-sky.webp",
          width: 512,
          height: 512,
          ...imageObjectLicensing,
        },
        sameAs: [FACEBOOK_PROFILE_URL],
        contactPoint: {
          "@type": "ContactPoint",
          email: SUPPORT_EMAIL,
          contactType: "Customer Support",
          areaServed: "PK",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "3 Patti Sky",
        alternateName: "Teen Patti Sky",
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        softwareVersion: APP_DETAILS.version,
        fileSize: APP_DETAILS.size,
        image: "https://teenpattiskyapp.com.pk/teen-patti-sky.webp",
        aggregateRating: APP_AGGREGATE_RATING,
        offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
        downloadUrl: APP_DOWNLOAD_URL,
        description:
          "3 Patti Sky is an Android Teen Patti and casino-style game app for Pakistan with JazzCash, EasyPaisa, daily bonuses, VIP tables, and multiplayer modes.",
        screenshot: [...APP_SCREENSHOTS],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "HowTo",
        name: "How to download and install 3 Patti Sky APK on Android",
        totalTime: "PT5M",
        step: [
          {
            "@type": "HowToStep",
            name: "Open the download page",
            text: "Visit teenpattiskyapp.com.pk and tap Download 3 Patti Sky Game.",
          },
          {
            "@type": "HowToStep",
            name: "Allow install",
            text: "Allow installs from your browser when Android asks for unknown sources.",
          },
          {
            "@type": "HowToStep",
            name: "Install and register",
            text: "Open the APK, install, then register with your mobile number and OTP.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(240,193,75,0.18),_transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-14 pb-12 md:pb-16 relative">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="sky-chip">v2.5.0 · 2026</span>
                <span className="sky-chip">Pakistan</span>
                <span className="sky-chip">JazzCash · EasyPaisa</span>
              </div>
              <p className="font-display text-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">
                Teen Patti Sky · 3 Patti Sky
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold leading-[1.12] text-cream mb-5">
                Teen Patti Sky Game Download Latest Version For Android 2026
              </h1>
              <p className="text-lg text-cream/80 leading-relaxed max-w-2xl mb-6">
                3 Patti Sky, also known as Teen Patti Sky, is a popular card game in Pakistan. Enjoy exciting games like
                Roulette, Mines, and Dragon Tiger with smooth gameplay and beautiful graphics. It also offers easy payment
                options through JazzCash and EasyPaisa, along with 24/7 customer support.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <CtaButton ariaLabel="Download 3 Patti Sky Game">Download 3 Patti Sky Game</CtaButton>
                <Link
                  href="/download-teen-patti-sky"
                  className="text-gold font-semibold underline underline-offset-4 hover:text-ember"
                >
                  Full install guide →
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-cream/75" aria-label="App rating">
                <span className="text-gold text-lg tracking-tight" aria-hidden="true">
                  ★★★★☆
                </span>
                <span>
                  <strong className="text-cream">4.5</strong> · 200,000 ratings · Free · Android · Game
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-[160px] sm:w-[180px] lg:w-[200px] shrink-0">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/25 via-crimson/15 to-felt/30 blur-2xl" />
              <div className="relative sky-panel p-1.5 sm:p-2 animate-floaty">
                <Image
                  src="/teen-patti-sky.webp"
                  alt="Teen Patti Sky official app icon"
                  width={200}
                  height={200}
                  priority
                  fetchPriority="high"
                  quality={75}
                  className="w-full h-auto rounded-xl"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APK DETAILS TABLE */}
      <section className="px-4 md:px-8 pb-10" id="apk-details">
        <div className="max-w-5xl mx-auto sky-panel overflow-hidden">
          <div className="px-6 py-4 border-b border-gold/15 flex flex-wrap items-center justify-between gap-3 bg-felt/40">
            <h2 className="font-display text-xl md:text-2xl font-bold text-gold m-0 border-0 p-0">
              3 Patti Sky Download Info
            </h2>
            <span className="text-xs uppercase tracking-wider text-cream/50">{APP_DETAILS.version} · {APP_DETAILS.size}</span>
          </div>
          <table className="apk-table">
            <tbody>
              {apkRows.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* INTRO + GAMEPLAY IMAGE */}
      <section className="felt-band px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="prose-sky">
            <p>
              Welcome to the official Teen Patti Sky hub on teenpattiskyapp.com.pk — your guide to download, play, and
              understand rewards on 3 Patti Sky. Special game modes, daily bonuses, free chips, and live challenges make
              sessions feel lively whether you play casually or chase higher tables.
            </p>
            <p>
              The 3 Patti Sky APK is built for smooth Android performance with VIP lounges, elite tables, live winning
              updates, daily login gifts, referral rewards, and local wallet withdrawals. Regular updates keep the lobby
              fresh for Pakistani players who want both entertainment and real reward opportunities.
            </p>
            <div className="not-prose mt-6">
              <CtaButton ariaLabel="Download 3 Patti Sky APK now">DOWNLOAD NOW</CtaButton>
            </div>
          </div>
          <div className="sky-panel p-2">
            <Image
              src="/teen-patti-sky-game.webp"
              alt="3 Patti Sky live multiplayer gameplay on Android"
              width={1200}
              height={565}
              className="rounded-xl w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      {/* BODY + TOC */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid lg:grid-cols-[220px_1fr] gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24 sky-panel p-4 max-h-[70vh] overflow-y-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Table of Contents</p>
            <nav aria-label="On this page" className="space-y-0.5">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="toc-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="prose-sky min-w-0">
          {/* Mobile TOC */}
          <details className="lg:hidden sky-panel p-4 mb-8">
            <summary className="font-bold text-gold cursor-pointer">Table of Contents</summary>
            <nav className="mt-3 grid sm:grid-cols-2 gap-1">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="toc-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </details>

          <SectionTitle id="what-is">What is 3 Patti Sky?</SectionTitle>
          <p>
            3 Patti Sky is a popular gaming app in Pakistan that blends fun card play with real reward opportunities.
            Players can earn through table wins and a referral system — share your invite link with friends and family on
            Facebook, Instagram, or Telegram and unlock commission (commonly described around up to 30% under live
            program rules). New users often receive a welcome bonus near 100 PKR after install; always confirm the
            current offer inside the app.
          </p>
          <p>
            Right now 3 Patti Sky targets Android phones and is not a native App Store product. The lobby spans modes such
            as classic Teen Patti variants, 10 Cards, Ludo, Tiger vs Dragon, Mines, Zoo Roulette, and BlackJack. You can
            start with a modest deposit around 100 PKR, while larger bankrolls unlock VIP perks. Each qualifying deposit
            may include a reward-wheel spin. JazzCash, EasyPaisa, and bank transfer keep money movement local and
            familiar.
          </p>
          <div className="not-prose sky-panel p-2 my-6">
            <Image
              src="/teen-patti-sky-pakistan.webp"
              alt="3 Patti Sky promoted for Pakistani players with local payments"
              width={1200}
              height={565}
              className="rounded-xl w-full h-auto"
              sizes="100vw"
            />
          </div>

          <SectionTitle id="overview">3 Patti Sky APK Overview</SectionTitle>
          <p>
            3 Patti Sky is a fast-growing online gaming platform where players across Pakistan join for real-time reward
            chances. The catalogue stays wide, new titles appear over time, and bonuses — daily check-ins, deposit gifts,
            referral prizes — help stretch playtime. Developers keep polishing mobile performance so tables feel
            responsive on everyday Android phones.
          </p>
          <p>
            The traditional Teen Patti feel remains the heart of the product, wrapped in colorful UI and social
            multiplayer. From home you can learn rules, meet other players, and climb from beginner rooms into higher
            stakes without needing a physical club.
          </p>

          <SectionTitle id="why-choose">Why Choose 3 Patti Sky?</SectionTitle>
          <p>
            Smooth graphics and simple controls make 3 Patti Sky feel close to a real table for both newcomers and
            regulars. Anyone with a supported Android phone can download the Teen Patti Sky APK for Pakistan free of
            charge — setup is quick, and early bonuses sweeten the first sessions.
          </p>
          <p>
            Beyond entertainment, referral bonuses and first-deposit gifts let skilled players convert play into tangible
            rewards. That mix of live tables and wallet-friendly offers is why the brand keeps trending in Pakistani
            Teen Patti searches.
          </p>

          <SectionTitle id="rewards">Rewards You Can Claim in 3 Patti Sky</SectionTitle>
          <div className="not-prose sky-panel p-2 my-6">
            <Image
              src="/teen-patti-sky-daily-bonus.webp"
              alt="3 Patti Sky daily bonus and login rewards screen"
              width={1200}
              height={565}
              className="rounded-xl w-full h-auto"
            />
          </div>
          <h3>New User Bonus</h3>
          <p>
            Fresh accounts may receive a welcome reward based on the campaign running that week. Offers rotate, so check
            the lobby banner after signup before you deposit.
          </p>
          <h3>Daily Login Rewards</h3>
          <p>
            Checking in each day can unlock coins, credits, or event prizes. Some calendars reset if you skip a day —
            treat the claim button as part of your routine.
          </p>
          <h3>Referral Bonus</h3>
          <p>
            Share your code or link. When friends meet the activity rules, both sides can earn. Read the live referral
            card — amounts and conditions change. See also our{" "}
            <Link href="/blog/teen-patti-sky-bonuses-referral">bonuses & referral guide</Link>.
          </p>
          <h3>VIP Rewards</h3>
          <p>
            Players who hit VIP thresholds may unlock special tables, events, or richer offers. Membership usually needs
            ongoing activity to stay active.
          </p>

          <SectionTitle id="agent">3 Patti Sky Agent Program and Referral System</SectionTitle>
          <div className="not-prose sky-panel p-2 my-6">
            <Image
              src="/teen-patti-sky-referrals.webp"
              alt="3 Patti Sky referral and agent program invite screen"
              width={1200}
              height={565}
              className="rounded-xl w-full h-auto"
            />
          </div>
          <p>
            Active promoters can unlock milestone bonuses tied to how many active members they grow. Example tiers
            commonly listed for the program (confirm inside the app before planning income):
          </p>
          <div className="not-prose overflow-x-auto sky-panel my-6">
            <table className="apk-table min-w-[320px]">
              <thead>
                <tr>
                  <th>Active members</th>
                  <td className="font-bold text-gold">Bonus (PKR)</td>
                </tr>
              </thead>
              <tbody>
                {agentTiers.map(([m, b]) => (
                  <tr key={m}>
                    <th scope="row">{m}</th>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Larger networks unlock larger milestones. Treat the ladder as motivational structure — not a guaranteed
            salary — and follow platform rules so accounts stay in good standing.
          </p>

          <SectionTitle id="features">Key Features of 3 Patti Sky</SectionTitle>
          <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
            {[
              {
                t: "Easy-to-use design",
                d: "Clear menus so new and experienced players find tables without friction.",
                img: "/teen-patti-sky-game.webp",
              },
              {
                t: "Secure platform",
                d: "Encrypted flows, fair-play tooling, and anti-cheat monitoring for honest rooms.",
                img: "/teen-patti-sky-live-support.webp",
              },
              {
                t: "Variety of modes",
                d: "Classic Teen Patti, Joker, Muflis, AK47, Hukam-style variants, and more.",
                img: "/teen-patti-sky-pakistan.webp",
              },
              {
                t: "VIP & elite tables",
                d: "Higher stakes and premium rooms once you level up.",
                img: "/teen-patti-sky-daily-bonus.webp",
              },
              {
                t: "Real-time multiplayer",
                d: "Live opponents, chat energy, and true table pace on mobile data.",
                img: "/teen-patti-sky-game.webp",
              },
              {
                t: "JazzCash & EasyPaisa",
                d: "Local deposits and withdrawals without foreign cards.",
                img: "/teen-patti-sky-deposit-money.webp",
              },
            ].map((f) => (
              <div key={f.t} className="sky-panel overflow-hidden">
                <div className="relative aspect-[1200/565]">
                  <Image src={f.img} alt={f.t} fill className="object-cover" sizes="(max-width:640px) 100vw, 50vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold text-gold mb-1">{f.t}</h3>
                  <p className="text-sm text-cream/70 m-0">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            Extra pillars include daily bonuses, OTP-backed login, fast Android performance on mid-range phones, and
            regular updates that ship bug fixes plus occasional new modes. Bind your profile early — see the{" "}
            <Link href="/blog/teen-patti-sky-account-login">account & login guide</Link>.
          </p>

          <SectionTitle id="games">Games Available in 3 Patti Sky</SectionTitle>
          <div className="not-prose grid sm:grid-cols-2 lg:grid-cols-3 gap-3 my-6">
            {games.map((g) => (
              <div key={g.name} className="sky-panel p-4 border-l-2 border-gold/50">
                <h3 className="font-display text-base font-bold text-gold mb-1">{g.name}</h3>
                <p className="text-sm text-cream/70 m-0">{g.desc}</p>
              </div>
            ))}
          </div>

          <SectionTitle id="requirements">System Requirements for 3 Patti Sky APK</SectionTitle>
          <ul>
            <li>Android 5.0 or above</li>
            <li>RAM: minimum 2 GB (3 GB recommended)</li>
            <li>Storage: keep about 100–200 MB free</li>
            <li>Stable internet for multiplayer tables</li>
          </ul>
          <p>
            iOS play usually depends on browser or third-party paths, so performance can differ. A stable device setup
            reduces crashes and lag.
          </p>

          <SectionTitle id="download">How to Download & Install 3 Patti Sky APK on Android</SectionTitle>
          <p>
            The game is not on Google Play for many regions, which confuses some players — sideloading an official APK
            from a trusted page is normal in this category. Prefer teenpattiskyapp.com.pk over random mirrors.
          </p>
          <ol>
            <li>Open your Android browser and visit teenpattiskyapp.com.pk.</li>
            <li>Tap the APK Download button and wait for the file to finish.</li>
            <li>Go to Settings → Security → Install unknown apps and allow your browser or Files app once.</li>
            <li>Open the downloaded package and install 3 Patti Sky.</li>
            <li>Launch the icon, sign up, and start exploring tables.</li>
          </ol>
          <div className="not-prose my-6">
            <CtaButton ariaLabel="Download 3 Patti Sky APK">DOWNLOAD NOW</CtaButton>
          </div>
          <p>
            Need screenshots and troubleshooting? Open the{" "}
            <Link href="/download-teen-patti-sky">dedicated download guide</Link>.
          </p>

          <SectionTitle id="ios">Can You Play 3 Patti Sky on iPhone (iOS)?</SectionTitle>
          <p>
            There is no standard Teen Patti Sky APK for iOS. Some players use Safari on the official web entry: open the
            site, tap Play Now / Play in Browser, then optionally Add to Home Screen for a shortcut. Expect a different
            experience than the native Android build.
          </p>

          <SectionTitle id="pc">How to Download 3 Patti Sky for PC</SectionTitle>
          <ol>
            <li>Install a trusted Android emulator such as BlueStacks on Windows.</li>
            <li>Download the 3 Patti Sky APK from this site.</li>
            <li>Install the APK inside the emulator and log into your bound account.</li>
          </ol>
          <p>
            Step-by-step emulator tips live on{" "}
            <Link href="/teen-patti-sky-for-pc">Teen Patti Sky for PC</Link>.
          </p>

          <SectionTitle id="register">How to Register a New Account</SectionTitle>
          <div className="not-prose sky-panel p-2 my-6">
            <Image
              src="/teen-patti-sky-bind-account.webp"
              alt="Register and bind a 3 Patti Sky account"
              width={1200}
              height={565}
              className="rounded-xl w-full h-auto"
            />
          </div>
          <ol>
            <li>Open the 3 Patti Sky app on Android.</li>
            <li>Tap Register / Sign Up.</li>
            <li>Enter your mobile number and OTP when prompted.</li>
            <li>Create a strong password and finish any remaining fields.</li>
            <li>Accept the terms, then create the account.</li>
          </ol>
          <p>
            Use a number you control, keep the password private, and stay on stable data during OTP. Full walkthrough:{" "}
            <Link href="/blog/teen-patti-sky-account-login">account & login</Link>.
          </p>

          <SectionTitle id="login">How to Login & Recover Password</SectionTitle>
          <p>
            Tap Login, enter your registered number or ID plus password, complete OTP if asked, then enter the lobby. If
            login fails, check spelling, update the app, and use Forgot Password: enter your number, verify OTP, set a
            new password, and sign in again. Never share OTPs with “agents” on social apps.
          </p>

          <SectionTitle id="whats-new">What&apos;s New in Version v2.5.0 (2026)?</SectionTitle>
          <p>
            The 2026 v2.5.0 line focuses on faster loads, tighter security for personal data, broader Android
            compatibility, reward-system polish, and a cleaner UI for joining tables. Beginners and veterans both benefit
            from keeping the latest package installed.
          </p>

          <SectionTitle id="payments">How to Deposit and Withdraw Funds</SectionTitle>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="sky-panel overflow-hidden">
              <Image
                src="/teen-patti-sky-deposit-money.webp"
                alt="Deposit money in 3 Patti Sky with JazzCash or EasyPaisa"
                width={1200}
                height={565}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-display font-bold text-gold mb-2">Deposit</h3>
                <p className="text-sm text-cream/75 mb-3">
                  Menu → Deposit → JazzCash, EasyPaisa, or bank transfer → enter PKR → submit. Balance updates after
                  confirmation.
                </p>
                <Link href="/deposit-money-in-teen-patti-sky" className="text-gold font-semibold text-sm">
                  Full deposit guide →
                </Link>
              </div>
            </div>
            <div className="sky-panel overflow-hidden">
              <Image
                src="/teen-patti-sky-withdraw-money.webp"
                alt="Withdraw winnings from 3 Patti Sky"
                width={1200}
                height={565}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-display font-bold text-gold mb-2">Withdraw</h3>
                <p className="text-sm text-cream/75 mb-3">
                  Menu → Withdraw → choose wallet → enter amount → submit. After verification, funds move to your bound
                  account.
                </p>
                <Link href="/withdraw-money-from-teen-patti-sky" className="text-gold font-semibold text-sm">
                  Full withdraw guide →
                </Link>
              </div>
            </div>
          </div>

          <SectionTitle id="compare">3 Patti Sky vs Other Teen Patti Apps</SectionTitle>
          <p>
            3 Patti Sky aims for a simple interface and quick table access. Versus heavier apps, differences usually show
            in bonus structure, game variety, withdrawal speed, and day-to-day stability. It sits in the middle —
            approachable for new players without feeling empty. Try a small session, then decide from your own results.
          </p>

          <h3 className="section-anchor" id="before-playing">
            Things to Know Before Playing
          </h3>
          <ul>
            <li>Install the latest APK for fixes and security patches.</li>
            <li>Register with your own mobile number for easier recovery.</li>
            <li>Read each mode’s rules before staking real PKR.</li>
            <li>Check live bonus terms — promotions change.</li>
            <li>Keep login details private and play inside a set budget.</li>
          </ul>

          <SectionTitle id="safety">Is 3 Patti Sky Legal, Safe & Legit in Pakistan?</SectionTitle>
          <p>
            Online real-money play sits in a legal grey area under Pakistan’s traditional gambling rules. Downloading is
            usually straightforward; staking cash carries personal risk. Many users treat the app as entertainment, not
            income. Platforms in this niche often lack a public casino licence display — stay cautious.
          </p>
          <p>
            Safety improves when you use one trusted download path, OTP login, and small test cashouts. Experiences vary:
            some players report smooth withdrawals, others hit verification delays. Start small, ignore “guaranteed
            profit” spam, and{" "}
            <Link href="/blog/how-to-contact-teen-patti-sky-customer-support">contact official support</Link> if something
            feels wrong.
          </p>

          <SectionTitle id="support">3 Patti Sky Customer Support</SectionTitle>
          <div className="not-prose sky-panel p-2 my-6">
            <Image
              src="/teen-patti-sky-live-support.webp"
              alt="3 Patti Sky in-app live customer support"
              width={1200}
              height={565}
              className="rounded-xl w-full h-auto"
            />
          </div>
          <p>
            For login, deposit, or bonus questions, use in-app Support or the official contact form — not random Facebook
            “agents.” Site questions can also go to{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> via our{" "}
            <Link href="/contact-us">Contact page</Link>.
          </p>

          <SectionTitle id="pros-cons">Pros and Cons</SectionTitle>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="sky-panel p-5">
              <h3 className="font-display text-lg font-bold text-gold mb-3">Pros</h3>
              <ul className="space-y-2 text-sm text-cream/80 list-disc pl-5">
                <li>Clean interface friendly to beginners</li>
                <li>Mix of Teen Patti and casual casino modes</li>
                <li>Runs on most Android 5.0+ devices</li>
                <li>Fast register / login with OTP options</li>
                <li>Regular updates and JazzCash / EasyPaisa support</li>
              </ul>
            </div>
            <div className="sky-panel p-5">
              <h3 className="font-display text-lg font-bold text-crimson mb-3">Cons</h3>
              <ul className="space-y-2 text-sm text-cream/80 list-disc pl-5">
                <li>Needs stable internet for live tables</li>
                <li>Some bonuses are event-only</li>
                <li>Older phones may feel slower</li>
                <li>Feature set can differ by build</li>
                <li>Real-money play requires self-control</li>
              </ul>
            </div>
          </div>

          <h3>How we reviewed 3 Patti Sky</h3>
          <p>
            This page reflects the newest public APK details at writing time — install flow, UI, signup, Android
            performance, payments, requirements, and update notes. Offers can change by version and region.
          </p>
          <h3>Playing responsibly</h3>
          <p>
            Cap your hours and bankroll, read reviews before funding, never chase losses, use your own wallet details, and
            take breaks. Entertainment first — not a salary plan.
          </p>

          <SectionTitle id="verdict">Final Verdict</SectionTitle>
          <p>
            3 Patti Sky APK delivers classic Teen Patti energy with daily rewards, live multiplayer, VIP rooms, side
            games like Ludo, Mines, and Roulette, plus JazzCash / EasyPaisa / bank cashouts. Set a spending limit,
            download from this trusted path, invite friends only under official referral rules, and enjoy the tables for
            fun.
          </p>
          <div className="not-prose flex flex-wrap gap-4 my-8">
            <CtaButton ariaLabel="Download 3 Patti Sky today">DOWNLOAD NOW</CtaButton>
            <Link href="/blog" className="self-center text-gold font-semibold underline underline-offset-4">
              Read more guides →
            </Link>
          </div>

          <SectionTitle id="faq">FAQs – 3 Patti Sky</SectionTitle>
          <div className="not-prose space-y-3 mt-4">
            {faqs.map((item) => (
              <details key={item.q} className="sky-panel group px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold text-cream flex justify-between gap-3">
                  <span>{item.q}</span>
                  <span className="text-gold group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-cream/75 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </article>
      </div>

      {/* Bottom CTA band */}
      <section className="felt-band px-4 md:px-8 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-extrabold text-cream mb-3">
            Download 3 Patti Sky Game — Android v2.5.0
          </h2>
          <p className="text-cream/70 mb-6">
            Free APK · JazzCash & EasyPaisa · Daily bonuses · Live Teen Patti tables
          </p>
          <CtaButton ariaLabel="Download 3 Patti Sky Game APK">Download 3 Patti Sky Game</CtaButton>
        </div>
      </section>
    </>
  );
}
