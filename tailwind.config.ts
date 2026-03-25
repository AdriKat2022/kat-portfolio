import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          'bg': '#060914',
          'bg-elev': '#10192d',
          'bg-soft': '#17233f',
          'text-h': '#f4f7ff',
          'text': '#aebcda',
          'accent': '#58f3ff',
          'accent-2': '#5f8cff',
          'accent-bg': 'rgba(88, 243, 255, 0.12)',
          'accent-border': 'rgba(88, 243, 255, 0.35)',
          'border': 'rgba(137, 163, 224, 0.2)',
          'social-bg': 'rgba(23, 35, 63, 0.72)',
        },
      },
      boxShadow: {
        'neon-sm': '0 0 18px rgba(88, 243, 255, 0.2)',
        'neon-md': '0 0 28px rgba(88, 243, 255, 0.25)',
        'neon-lg': '0 0 36px rgba(88, 243, 255, 0.18)',
      },
      textShadow: {
        'glow': '0 0 12px rgba(88, 243, 255, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
