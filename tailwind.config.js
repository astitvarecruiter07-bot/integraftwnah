/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1794d4',
        dark: '#0f1720',
        muted: '#7d8790',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 35px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [],
};
