const defaultTheme = require('tailwindcss/defaultTheme');
const heropatterns = require('tailwindcss-hero-patterns/src/patterns');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      custom: ['Sacramento'],
      para: ['Poppins', ...defaultTheme.fontFamily.sans],
      mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
    },
    heroPatterns: {
      circuitboard: heropatterns.circuitboard,
    },
    heroPatternsShades: ['800'],
    heroPatternsColors: ['neutral'],
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-hero-patterns')],
};
