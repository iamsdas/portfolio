module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: ['Sacramento'],
      mono: ['Roboto Mono'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-hero-patterns')],
};
