/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b0b8c7',
          400: '#8491a7',
          500: '#63718c',
          600: '#4e5971',
          700: '#3f475b',
          750: '#2f3545',
          800: '#262a36',
          850: '#1e212b',
          900: '#161820',
          950: '#0e1015',
        },
        warm: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f4f1ec',
          300: '#eae4db',
          400: '#ded5c7',
          500: '#ccbeab',
          600: '#b5a18b',
          700: '#94816c',
          800: '#6b5d4e',
          900: '#473d33',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
