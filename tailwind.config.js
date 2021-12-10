const defaultTheme = require('tailwindcss/defaultTheme');

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
    extend: {},
  },
  variants: {
    extend: {},
  },
};
