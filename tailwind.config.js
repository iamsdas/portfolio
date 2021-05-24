const heropatterns = require('tailwindcss-hero-patterns/src/patterns');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      custom: ['Sacramento'],
      para: ['Fira Sans', ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
    },
    heroPatterns: {
      circuitboard: heropatterns.circuitboard,
    },
    heroPatternsShades: ['900'],
    heroPatternsColors: ['gray'],
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
