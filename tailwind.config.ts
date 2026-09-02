import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b0b9c9',
          400: '#8593aa',
          500: '#66758f',
          600: '#515e76',
          700: '#434d60',
          800: '#3a4251',
          900: '#0f1218',
          950: '#080a0e',
        },
        accent: {
          DEFAULT: '#f5b301',
          soft: '#ffd75e',
          deep: '#b88400',
        },
        brand: {
          DEFAULT: '#3b82f6',
          soft: '#93c5fd',
          deep: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
        prose: '46rem',
      },
    },
  },
  plugins: [],
};

export default config;
