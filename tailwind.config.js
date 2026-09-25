/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0e0c',
        secondary: '#12201c',
        accent: '#F0C14B',
        gold: '#F0C14B',
        crimson: '#E23B2F',
        ember: '#FF7A3C',
        cream: '#FFF8F0',
        panel: '#152822',
        felt: '#0D3B2E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 48px rgba(240, 193, 75, 0.22)',
        card: '0 24px 60px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'sky-radial':
          'radial-gradient(ellipse 90% 55% at 50% -15%, rgba(226, 59, 47, 0.28), transparent 50%), radial-gradient(ellipse 55% 40% at 95% 15%, rgba(240, 193, 75, 0.16), transparent 45%), radial-gradient(ellipse 45% 35% at 5% 75%, rgba(13, 59, 46, 0.55), transparent 50%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 197, 24, 0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(245, 197, 24, 0)' },
        },
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        pulseGold: 'pulseGold 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
