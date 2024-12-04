import { content, theme } from '@luminescent/ui-qwik/config';

/** @type {import('tailwindcss').Config} */

const gray = {
  50: "hsl(30deg, 0%, 95%)",
 100: "hsl(30deg, 2%, 90%)",
 200: "hsl(30deg, 4%, 85%)",
 300: "hsl(30deg, 6%, 80%)",
 400: "hsl(30deg, 8%, 70%)",
 500: "hsl(30deg, 10%, 60%)",
 600: "hsl(30deg, 14%, 50%)",
 700: "hsl(30deg, 16%, 40%)",
 800: "hsl(30deg, 18%, 30%)",
 850: "hsl(30deg, 20%, 15%)",
 900: "hsl(30deg, 30%, 8%)",
 950: "hsl(30deg, 35%, 5%)",
};

const burger = {
  50: "hsl(30deg, 54%, 95%)",
 100: "hsl(30deg, 57%, 85%)",
 200: "hsl(30deg, 61%, 80%)",
 300: "hsl(30deg, 65%, 70%)",
 400: "hsl(30deg, 69%, 60%)",
 500: "hsl(30deg, 71%, 50%)",
 600: "hsl(30deg, 73%, 44%)",
 700: "hsl(30deg, 77%, 28%)",
 800: "hsl(30deg, 81%, 16%)",
 900: "hsl(30deg, 85%, 10%)",
 950: "hsl(30deg, 89%, 7%)",
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
