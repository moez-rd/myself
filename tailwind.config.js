// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: colors.zinc,
      secondary: colors.sky,
      danger: colors.red,
      success: colors.emerald
    },
    extend: {
      fontFamily: {
        primary: ['var(--fira-sans-font)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
