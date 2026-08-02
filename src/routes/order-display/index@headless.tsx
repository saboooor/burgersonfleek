import { component$ } from '@qwik.dev/core';
import { generateHead } from '~/root';

export default component$(() => {
  return (
    <iframe
      class="rounded-lum h-dvh w-full mix-blend-screen"
      src="https://www.toasttab.com/order-display"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
});

export const head = generateHead({
  title: 'Burgers on Fleek - Order Display',
});
