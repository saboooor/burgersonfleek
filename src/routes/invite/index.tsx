import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import InviteCard from '~/components/sections/InviteCard';

export default component$(() => {
  return (
    <section class="flex flex-col mx-auto max-w-6xl items-center justify-center text-center min-h-svh pt-20">
      <InviteCard />
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Your personal invitation to our 5th anniversary',
};
