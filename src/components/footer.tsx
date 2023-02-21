import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="text-center text-gray-400 py-5 px-2">
      <p class="text-lg md:text-xl">
        All of our food is cooked to the internal temperature required by the CFIA.<br class="hidden md:block"/>
        If you have any food allergies, please inquire before ordering.
      </p>
      <br/>
      <p class="text-xs md:text-sm">
        © Copyright {new Date().getFullYear()} Burgers on Fleek - All Rights Reserved.
      </p>
    </footer>
  );
});
