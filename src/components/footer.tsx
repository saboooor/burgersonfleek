import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="text-center text-gray-400 h-16">
      <p>© Copyright {new Date().getFullYear()} Burgers on Fleek<br/>All Rights Reserved</p>
    </footer>
  );
});
