import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5E6AD2',
          light: '#9BA2EC',
          dark: '#4C56C0',
          soft: 'rgba(94, 106, 210, 0.12)',
        },
        surface: {
          DEFAULT: '#09090b',
          raised: '#111113',
          card: '#18181b',
          hover: '#1f1f23',
        },
        line: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.14)',
        },
        // legacy aliases (admin / gradual migration)
        abyss: {
          DEFAULT: '#09090b',
          50: '#111113',
          100: '#18181b',
          200: '#27272a',
        },
        electric: {
          cyan: '#3b82f6',
          blue: '#60a5fa',
          violet: '#818cf8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px -20px rgba(0,0,0,0.5)',
        elevated: '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 24px 64px -32px rgba(0,0,0,0.7)',
        glow: '0 0 24px -6px rgba(94,106,210,0.5)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'fade-bottom': 'linear-gradient(to bottom, transparent, #09090b 85%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scroll-cue': 'scrollCue 1.8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollCue: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
