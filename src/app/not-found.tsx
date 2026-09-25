import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="sky-chip mb-4">404</p>
      <h1 className="font-display text-4xl font-extrabold text-cream mb-3">Page not found</h1>
      <p className="text-cream/70 mb-8 max-w-md">
        That URL is not part of Teen Patti Sky. Head home or open the download guide.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="text-gold font-semibold underline underline-offset-4">
          Home
        </Link>
        <Link href="/download-teen-patti-sky" className="text-gold font-semibold underline underline-offset-4">
          Download APK
        </Link>
      </div>
    </div>
  );
}
