import { content, theme } from '@luminescent/ui-qwik/config';

/** @type {import('tailwindcss').Config} */

const gray = {
  50: "hsl(30deg, 2%, 97%)",
 100: "hsl(30deg, 4%, 94%)",
 200: "hsl(30deg, 6%, 91%)",
 300: "hsl(30deg, 8%, 88%)",
 400: "hsl(30deg, 10%, 85%)",
 500: "hsl(30deg, 12%, 78%)",
 600: "hsl(30deg, 14%, 60%)",
 700: "hsl(30deg, 16%, 20%)",
 800: "hsl(30deg, 18%, 15%)",
 850: "hsl(30deg, 20%, 11%)",
 900: "hsl(30deg, 22%, 8%)",
 950: "hsl(30deg, 28%, 5%)",
};

const burger = {
  100: "rgb(201, 100, 33)",
  200: "rgb(145, 73, 23)",
  300: "rgb(94, 48, 15)",
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', ...content],
  theme: {
    extend: {
      animation: {
        ...theme.extend.animation,
      },
      keyframes: {
        ...theme.extend.keyframes,
      },
      colors: {
        gray,
        burger,
      },
    },
  },
  plugins: [
    require('@luminescent/ui'),
    require('@anuragroy/tailwindcss-animate'),
  ]
};
