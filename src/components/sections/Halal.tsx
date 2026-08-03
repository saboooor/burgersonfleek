import { component$ } from '@qwik.dev/core';

export default component$(() => {
  return (
    <>
      <h1 class="text-lum-text fade-in animation-delay-100 mb-8 text-2xl font-bold sm:mb-8 sm:text-5xl">
        We Only Serve <span class="text-orange-300">Halal حلال</span>
      </h1>
      <p class="text-lum-text-secondary fade-in animation-delay-200 mx-6 mb-6 flex flex-col text-xl sm:mb-10 md:mx-16 md:text-2xl">
        Burgers On Fleek uses 100% Hand slaughtered Halal Meat.
      </p>
      <div class="text-lum-text-secondary fade-in animation-delay-300 mx-6 mb-6 text-lg sm:mb-10 md:mx-16 md:text-xl">
        <p>Our meat providers are</p>
        <p>
          <a href="http://sthelensmeat.com" class="text-lum-accent underline">
            St. Helen's
          </a>{' '}
          and{' '}
          <a href="https://sargentfarms.ca" class="text-lum-accent underline">
            Sargent Farms
          </a>
        </p>
      </div>
      <p class="text-lum-text-secondary fade-in animation-delay-400 mx-6 text-base md:mx-16 md:text-lg">
        For further inquiries, feel free to reach us at{' '}
        <a
          href="mailto:eat@burgersonfleek.ca"
          class="text-lum-accent underline"
        >
          eat@burgersonfleek.ca
        </a>
      </p>
    </>
  );
});
