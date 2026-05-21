import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        monza: '#D90416',
        gamboge: '#EBA40A',
        jackson: '#262494',
        congo: '#5B4039'
      },
      boxShadow: {
        portal: '0 24px 80px rgba(38, 36, 148, 0.18)',
        insetPortal: 'inset 0 1px 0 rgba(255,255,255,0.2)'
      },
      backgroundImage: {
        'portal-grid': 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
