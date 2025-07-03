import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Icon from '~/components/svg/Icon';

export default component$(() => {
  return (
    <section class="flex flex-col mx-auto max-w-6xl px-6 items-center justify-center text-center min-h-[100svh] pt-20">
      <div class="relative fade-in mb-10 w-full sm:w-96 h-32 flex justify-center">
        <div class="z-10">
          <Icon size={119} id="mobile"/>
        </div>
      </div>
      <h1 class="font-bold text-lum-text text-2xl sm:text-5xl mb-8 sm:mb-8 fade-in animation-delay-100">
        We Only Serve <span class="text-orange-300">Halal حلال</span>
      </h1>
      <p class="text-lum-text-secondary text-xl mx-6 md:mx-16 md:text-2xl flex flex-col gap-2 mb-6 sm:mb-10 fade-in animation-delay-200">
        Burgers On Fleek uses 100% Hand slaughtered Halal Meat.
      </p>
      <div class="text-lum-text-secondary text-lg mx-6 md:mx-16 md:text-xl mb-6 sm:mb-10 fade-in animation-delay-300">
        <p>
          Our meat providers are
        </p>
        <p>
          <a href="http://sthelensmeat.com" class="text-blue-400/80 hover:text-blue-400 hover:underline">St. Helen's</a> and <a href="https://sargentfarms.ca" class="text-blue-400/80 hover:text-blue-400 hover:underline">Sargent Farms</a>
        </p>
      </div>
      <p class="text-lum-text-secondary text-base mx-6 md:mx-16 md:text-lg fade-in animation-delay-400">
        For further inquiries, feel free to reach us at <a href="mailto:eat@burgersonfleek.ca" class="text-blue-400/80 hover:text-blue-400 hover:underline">eat@burgersonfleek.ca</a>
      </p>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Halal',
};
