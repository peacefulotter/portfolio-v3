import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['var(--font-roboto)', ...fontFamily.sans],
        RobotoBold: ['var(--font-roboto-bold)', ...fontFamily.sans],
        Playfair: ['var(--font-playfair)', ...fontFamily.sans],
        WorkSans: ['var(--font-worksans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
