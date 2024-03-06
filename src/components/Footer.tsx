import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="text-center text-gray-400 py-5 px-2">
      <p class="text-lg md:text-xl mb-3 tracking-wider">
        We are not fast food.
        <br class="hidden md:block"/>
        All our food is made fresh, and it can take a minimum of 15 minutes to complete your order.
        <br class="hidden md:block"/>
        All of our food is cooked to the internal temperature required by the CFIA.
        <br class="hidden md:block"/>
        If you have any food allergies, please inquire before ordering.
      </p>
      <p class="text-xs md:text-sm mb-1">
        Contact us at <a href="mailto:eat@burgersonfleek.ca" class="text-blue-400/80 hover:text-blue-400 hover:underline">eat@burgersonfleek.ca</a>
      </p>
      <p class="text-xs md:text-sm">
        © Copyright {new Date().getFullYear()} Burgers on Fleek - All Rights Reserved.
      </p>
    </footer>
  );
});