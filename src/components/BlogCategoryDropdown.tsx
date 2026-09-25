'use client';

import { useState } from 'react';
import Link from 'next/link';

const BlogCategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: 'Account & Login', href: '/blog/teen-patti-sky-account-login' },
    { name: 'Recover Account', href: '/blog/how-to-recover-teen-patti-sky-account' },
    { name: 'Customer Support', href: '/blog/how-to-contact-teen-patti-sky-customer-support' },
    { name: 'How to Win Big', href: '/blog/how-to-win-big-in-teen-patti-sky' },
    { name: 'Bonuses & Referral', href: '/blog/teen-patti-sky-bonuses-referral' },
    { name: 'IP Limit Fix', href: '/blog/teen-patti-sky-ip-limit-exceed-fix' },
  ];

  return (
    <div className="relative mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-64 px-4 py-2 bg-secondary text-cream rounded-md border border-gold/20"
      >
        <span>Select Guide</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full md:w-64 mt-1 bg-secondary rounded-md shadow-lg border border-gold/20">
          <ul className="py-1">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="block px-4 py-2 text-sm text-cream hover:bg-panel hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogCategoryDropdown;
