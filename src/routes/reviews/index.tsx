import { component$, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Reviews from '~/components/sections/Reviews';
import { GoogleDetailsContext } from '..';

export default component$(() => {
  const GoogleDetails = useSignal<any>({});
  useContextProvider(GoogleDetailsContext, GoogleDetails);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    // load reviews from api
    const res = await fetch('https://api.burgersonfleek.ca/details?placeId=ChIJGwNrpL7f1IkRam5-B2BHkw4');
    GoogleDetails.value = await res.json() as any;
  });

  return (
    <section class="flex flex-col mx-auto max-w-6xl px-6 items-center justify-center text-center min-h-svh pt-20">
      <Reviews />
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Reviews',
};
