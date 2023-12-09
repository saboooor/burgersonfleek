// LuminescentDev Navbar Component Apr 28

import { $, component$, useOnDocument, useStore } from '@builder.io/qwik';
import IconWhite from './svg/IconInBag';

export default component$(() => {
  const store = useStore({
    prevScrollpos: 0,
  });

  useOnDocument('scroll', $(() => {
    const orderpopup = document.getElementById('orderpopup')!;
    if (store.prevScrollpos > window.scrollY && window.scrollY + 1000 < document.body.scrollHeight) {
      orderpopup.style.bottom = '0';
    } else if (window.scrollY > 100) {
      orderpopup.style.bottom = '-9rem';
    }
    store.prevScrollpos = window.scrollY;
  }));

  return (
    <div class="font-futura fixed bottom-0 w-full sm:hidden transition-all duration-300 delay-75" id="orderpopup">
      <div class="flex flex-col gap-4 bg-burger-200/30 backdrop-blur-lg px-6 py-5 m-4 rounded-xl border border-burger-200/50">
        <h2 class="text-lg font-bold">
          Feeling HANGRY?
        </h2>
        <a href="tel:+1 (905) 427 4377" class="flex transition rounded-xl shadow-lg backdrop-blur-lg bg-gradient-to-b from-burger-100/80 to-burger-200/80 hover:bg-burger-100 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-3 items-center">
          <IconWhite width="24" class="fill-current" /> Call to order
        </a>
      </div>
    </div>
  );
});
