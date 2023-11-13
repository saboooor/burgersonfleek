// LuminescentDev Navbar Component Apr 28

import { component$ } from '@builder.io/qwik';
import IconWhite from './svg/IconInBag';

export default component$(() => {
  return (
    <div class="font-futura fixed bottom-0 w-full sm:hidden">
      <div class="flex flex-col gap-4 bg-burger-200/30 backdrop-blur-lg px-6 py-5 m-4 rounded-xl border border-burger-200/50">
        <h2 class="text-lg font-bold">
          Feeling Hungry?
        </h2>
        <a href="https://burgersonfleek.order.online/store/25869825" class="flex transition rounded-xl shadow-lg backdrop-blur-lg bg-gradient-to-b from-burger-100/80 to-burger-200/80 hover:bg-burger-100 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-3 items-center">
          <IconWhite width="24" class="fill-current" /> Order Online
        </a>
      </div>
    </div>
  );
});