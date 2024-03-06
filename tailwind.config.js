import { content, theme } from '@luminescent/ui/config';

/** @type {import('tailwindcss').Config} */

const gray = {
  50: "hsl(30deg, 2%, 95%)",
 100: "hsl(30deg, 4%, 85%)",
 200: "hsl(30deg, 6%, 75%)",
 300: "hsl(30deg, 8%, 65%)",
 400: "hsl(30deg, 10%, 55%)",
 500: "hsl(30deg, 12%, 45%)",
 600: "hsl(30deg, 14%, 32%)",
 700: "hsl(30deg, 16%, 20%)",
 800: "hsl(30deg, 18%, 10%)",
 850: "hsl(30deg, 20%, 8%)",
 900: "hsl(30deg, 22%, 5%)",
 950: "hsl(30deg, 28%, 1%)",
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
    require('@anuragroy/tailwindcss-animate'),
  ]
};
