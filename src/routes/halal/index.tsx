import { component$ } from '@qwik.dev/core';
import HalalSection from '~/components/sections/Halal';
import { generateHead } from '~/root';

export default component$(() => {
  return (
    <section class="mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center">
      <HalalSection />
    </section>
  );
});

export const head = generateHead({
  title: 'Burgers on Fleek - Halal',
});
