import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import HalalSection from '~/components/sections/Halal';

export default component$(() => {
  return (
    <section class="flex flex-col mx-auto max-w-6xl px-6 items-center justify-center text-center min-h-svh pt-20">
      <HalalSection />
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Halal',
};
