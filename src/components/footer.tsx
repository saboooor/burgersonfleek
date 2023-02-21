import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="text-center text-gray-400 py-5 text-xs md:text-sm">
      <p>All of our food is cooked to the internal temperature required by the CFIA.</p>
      <p>If you have any food allergies, please inquire before ordering.</p><br/>
      <p>© Copyright {new Date().getFullYear()} Burgers on Fleek - All Rights Reserved.</p>
    </footer>
  );
});
