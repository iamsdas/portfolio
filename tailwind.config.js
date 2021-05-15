const heropatterns = require('tailwindcss-hero-patterns/src/patterns');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: ['Sacramento'],
      mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
      para: ['Fira Sans'],
    },
    heroPatterns: {
      circuitboard: heropatterns.circuitboard,
    },
    heroPatternsShades: ['900'],
    heroPatternsColors: ['green'],
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-hero-patterns')],
};
