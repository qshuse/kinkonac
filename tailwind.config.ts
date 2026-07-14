import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'kinkonac-navy': '#1A3668',
        'kinkonac-navy-light': '#234A8A',
        'kinkonac-navy-dark': '#0F2040',
        'kinkonac-orange': '#F59E0B',
        'kinkonac-orange-light': '#FBBF24',
        'kinkonac-orange-dark': '#D97706',
        'kinkonac-red': '#DC2626',
        'bg-silver': '#F8FAFC',
        'text-slate': '#1E293B',
        'text-slate-light': '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px -5px rgba(26, 54, 104, 0.15), 0 8px 10px -6px rgba(26, 54, 104, 0.08)',
        'nav': '0 2px 15px -3px rgba(26, 54, 104, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
