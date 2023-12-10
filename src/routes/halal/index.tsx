import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Icon from '~/components/svg/Icon';

export default component$(() => {
  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center justify-center min-h-[calc(100lvh)] pt-20">
      <div class="text-center justify-center">
        <div class="flex relative justify-center align-center mb-10" style="width: 100%;">
          <div class="absolute -bottom-16 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-xl"></div>
          <div class="absolute -bottom-16 w-32 h-32 bg-amber-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-xl -animation-delay-5000"></div>
          <div class="absolute -bottom-16 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-xl -animation-delay-10000"></div>
          <div class="z-10">
            <div class="z-10 fade-in">
              <Icon width={119} height={150} id="mobile"/>
            </div>
          </div>
        </div>
        <h1 class="font-bold text-orange-100 text-2xl sm:text-5xl mb-8 sm:mb-8 fade-in animation-delay-100">
          We Only Serve <span class="text-orange-300">Halal حلال</span>
        </h1>
        <p class="text-gray-400 text-xl mx-6 md:mx-16 md:text-2xl flex flex-col gap-4 mb-6 sm:mb-10 fade-in animation-delay-200">
          Burgers On Fleek uses 100% Hand slaughtered Halal Meat.
        </p>
        <div class="text-gray-400 text-lg mx-6 md:mx-16 md:text-xl mb-6 sm:mb-10 fade-in animation-delay-300">
          <p>
            Our meat providers are
          </p>
          <p>
            <a href="http://sthelensmeat.com" class="text-blue-400/80 hover:text-blue-400 hover:underline">St. Helen's</a> and <a href="https://sargentfarms.ca" class="text-blue-400/80 hover:text-blue-400 hover:underline">Sargent Farms</a>
          </p>
        </div>
        <p class="text-gray-400 text-base mx-6 md:mx-16 md:text-lg fade-in animation-delay-400">
          For further inquiries, feel free to reach us at <a href="mailto:eat@burgersonfleek.ca" class="text-blue-400/80 hover:text-blue-400 hover:underline">eat@burgersonfleek.ca</a>
        </p>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Halal',
};
