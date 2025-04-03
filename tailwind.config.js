/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sono-orange': '#FF6B35',
        'sono-green': '#1A4314',
        'sono-pink': '#FFB6C1',
      },
    },
  },
  plugins: [],
};
