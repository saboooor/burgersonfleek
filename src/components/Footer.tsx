import { component$ } from '@builder.io/qwik';
import { SocialButtons } from './Nav';

export default component$(() => {
  return (
    <footer class="relative flex flex-col gap-1 items-center justify-center text-center w-full z-10 bg-gray-950 border-t border-t-gray-800 py-6 px-3">
      <div class="flex gap-2 mb-2">
        <SocialButtons />
      </div>

      <p class="sm:text-xl mb-3">
        We are not fast food.
        <br />
        All our food is made fresh, and it can take a minimum of 15 minutes to complete your order.
        <br />
        All of our food is cooked to the internal temperature required by the CFIA.
        If you have any food allergies, please inquire before ordering.
      </p>
      <p class="text-xs md:text-sm">
        Contact us at <a href="mailto:eat@burgersonfleek.ca" class="text-blue-400/80 hover:text-blue-400 hover:underline">eat@burgersonfleek.ca</a>
      </p>
      <p class="text-xs md:text-sm">
        © Copyright {new Date().getFullYear()} Burgers on Fleek - All Rights Reserved.
      </p>
    </footer>
  );
});