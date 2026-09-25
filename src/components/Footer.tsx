import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { FACEBOOK_PROFILE_URL } from '@/lib/appFacts';

export default function Footer() {
  return (
    <footer className="bg-secondary text-cream pt-10 pb-3 px-4 md:px-8 border-t border-gold/20 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-display text-xl font-bold text-gold mb-4">
              Teen Patti <span className="text-crimson">Sky</span>
            </h2>
            <p className="text-sm text-cream/70 mb-4 leading-relaxed">
              Teen Patti Sky brings live Teen Patti tables, daily bonuses, and JazzCash / EasyPaisa cashouts to Android players across Pakistan.
            </p>
            <div className="flex space-x-4">
              <a
                href={FACEBOOK_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Teen Patti Sky on Facebook"
              >
                <svg className="w-5 h-5 text-cream/50 hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-gold">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-cream/70 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/download-teen-patti-sky" className="text-cream/70 hover:text-gold transition-colors">Download APK</Link></li>
              <li><Link href="/teen-patti-sky-for-pc" className="text-cream/70 hover:text-gold transition-colors">PC Version</Link></li>
              <li><Link href="/blog" className="text-cream/70 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/about-us" className="text-cream/70 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-cream/70 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-gold">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/deposit-money-in-teen-patti-sky" className="text-cream/70 hover:text-gold transition-colors">Deposit Guide</Link></li>
              <li><Link href="/withdraw-money-from-teen-patti-sky" className="text-cream/70 hover:text-gold transition-colors">Withdraw Guide</Link></li>
              <li><Link href="/blog/teen-patti-sky-account-login" className="text-cream/70 hover:text-gold transition-colors">Account & Login</Link></li>
              <li><Link href="/blog/how-to-recover-teen-patti-sky-account" className="text-cream/70 hover:text-gold transition-colors">Recover Account</Link></li>
              <li><Link href="/blog/how-to-win-big-in-teen-patti-sky" className="text-cream/70 hover:text-gold transition-colors">How to Win Big</Link></li>
              <li><Link href="/blog/how-to-contact-teen-patti-sky-customer-support" className="text-cream/70 hover:text-gold transition-colors">Customer Support</Link></li>
              <li><Link href="/privacy" className="text-cream/70 hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-cream/70 hover:text-gold transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-gold">Download App</h2>
            <p className="text-sm text-cream/70 mb-4">
              Get the latest Teen Patti Sky APK and start playing on Android with local PKR payments.
            </p>
            <CtaButton ariaLabel="Download Teen Patti Sky app for Android">DOWNLOAD NOW</CtaButton>
          </div>
        </div>

        <div className="border-t border-gold/15 mt-8 pt-4 pb-3 text-center text-sm text-cream/50">
          <p className="mb-0">
            © 2026 Teen Patti Sky. All rights reserved. |{' '}
            <Link href="/" className="hover:text-gold">teenpattiskyapp.com.pk</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
