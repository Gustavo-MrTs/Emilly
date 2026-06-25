import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: {
          base: '#080810',
          surface: '#0f0f1a',
          card: '#131320',
          elevated: '#1a1a2e',
        },
        accent: {
          purple: '#9b5de5',
          'purple-dim': '#6b3fa0',
          crimson: '#c1121f',
          'crimson-dim': '#8b0d16',
          teal: '#00f5d4',
          'teal-dim': '#00b89d',
        },
        text: {
          primary: '#e2e8f0',
          muted: '#64748b',
          dim: '#94a3b8',
        },
      },
      backgroundImage: {
        'cursed-gradient': 'linear-gradient(135deg, #080810 0%, #0f0815 50%, #110810 100%)',
        'purple-glow': 'radial-gradient(circle, rgba(155,93,229,0.15) 0%, transparent 70%)',
        'teal-glow': 'radial-gradient(circle, rgba(0,245,212,0.1) 0%, transparent 70%)',
        'crimson-glow': 'radial-gradient(circle, rgba(193,18,31,0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(155,93,229,0.25), 0 0 60px rgba(155,93,229,0.1)',
        'glow-teal': '0 0 30px rgba(0,245,212,0.2), 0 0 60px rgba(0,245,212,0.08)',
        'glow-crimson': '0 0 30px rgba(193,18,31,0.25), 0 0 60px rgba(193,18,31,0.1)',
        'card-hover': '0 8px 32px rgba(155,93,229,0.2), 0 0 0 1px rgba(155,93,229,0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite 2s',
        'float-slow': 'float 10s ease-in-out infinite 4s',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(3deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
