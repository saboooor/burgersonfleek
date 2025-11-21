import { component$ } from '@builder.io/qwik';
import InviteCard from '~/components/sections/InviteCard';
import { generateHead } from '~/root';

export default component$(() => {
  return (
    <section class="flex flex-col mx-auto max-w-6xl items-center justify-center text-center min-h-svh pt-20">
      <InviteCard />
    </section>
  );
});

export const head = generateHead({
  title: 'Your personal invitation to our 5th anniversary',
  image: '/invite/card-front.jpg',
  head: {
    meta: [
      {
        name: 'og:image:width',
        content: '1500',
      },
      {
        name: 'og:image:height',
        content: '1000',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  },
});