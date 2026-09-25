'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/download-teen-patti-sky', label: 'Download' },
  { href: '/deposit-money-in-teen-patti-sky', label: 'Deposit' },
  { href: '/withdraw-money-from-teen-patti-sky', label: 'Withdraw' },
  { href: '/teen-patti-sky-for-pc', label: 'PC Version' },
  { href: '/about-us', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="bg-primary/95 backdrop-blur-md py-3 px-4 md:px-8 sticky top-0 z-40 border-b border-gold/20">
      <div className="container mx-auto flex justify-between items-center gap-3">
        <Link href="/" className="flex items-center group min-w-0">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 mr-2 sm:mr-2.5 rounded-xl overflow-hidden ring-1 ring-gold/40 group-hover:ring-crimson/60 transition-all shadow-glow flex-shrink-0">
            <Image
              src="/teen-patti-sky.webp"
              alt="Teen Patti Sky logo"
              width={44}
              height={44}
              className="object-cover"
              priority={true}
              fetchPriority="high"
            />
          </div>
          <span className="font-display text-gold text-lg sm:text-xl md:text-2xl font-bold tracking-tight truncate">
            Teen Patti <span className="text-crimson">Sky</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-7 flex-shrink-0">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative font-medium text-sm transition-colors pb-1 group ${
                isActive(href) ? 'text-gold' : 'text-cream/85 hover:text-gold'
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-crimson rounded-full transition-all duration-300 ${
                  isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
