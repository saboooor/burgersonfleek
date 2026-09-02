import { component$ } from '@qwik.dev/core';

export default component$(() => {
  return (
    <div class="flex flex-col gap-8 text-center">
      <div class="flex flex-col gap-2">
        <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
          100% Halal Guarantee
        </p>
        <h2 class="font-futura text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          We Only Serve{' '}
          <span class="from-burger-200 via-burger-400 bg-linear-to-r to-orange-400 bg-clip-text text-transparent">
            Halal حلال
          </span>
        </h2>
        <p class="text-lum-text-secondary mx-auto max-w-lg text-sm sm:text-base">
          Burgers on Fleek uses 100% hand-slaughtered Halal meat across our
          entire menu.
        </p>
      </div>

      <div class="lum-card mx-auto max-w-xl p-8 backdrop-blur-md">
        <p class="mb-3 text-xs font-bold tracking-wider text-gray-400 uppercase">
          Certified Meat Suppliers
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 text-lg font-bold sm:text-xl">
          <a
            href="http://sthelensmeat.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-burger-300 hover:text-burger-200 underline transition-colors"
          >
            St. Helen's
          </a>
          <span class="text-gray-500">·</span>
          <a
            href="https://sargentfarms.ca"
            target="_blank"
            rel="noopener noreferrer"
            class="text-burger-300 hover:text-burger-200 underline transition-colors"
          >
            Sargent Farms
          </a>
        </div>
        <p class="text-lum-text-secondary mt-6 text-sm">
          For further inquiries regarding our halal standards, feel free to
          contact us at{' '}
          <a
            href="mailto:eat@burgersonfleek.ca"
            class="text-burger-300 font-medium hover:underline"
          >
            eat@burgersonfleek.ca
          </a>
        </p>
      </div>
    </div>
  );
});
