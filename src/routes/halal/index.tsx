import { component$ } from '@builder.io/qwik';
import HalalSection from '~/components/sections/Halal';
import { generateHead } from '~/root';

export default component$(() => {
  return (
    <section class="flex flex-col mx-auto max-w-6xl px-6 items-center justify-center text-center min-h-svh pt-20">
      <HalalSection />
    </section>
  );
});

export const head = generateHead({
  title: 'Burgers on Fleek - Halal',
});