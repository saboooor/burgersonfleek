// LuminescentDev Navbar Component Apr 28

import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik';
import IconWhite from './svg/IconInBag';
import { Blobs } from '@luminescent/ui-qwik';

export default component$(() => {
  const prevScrollpos = useSignal(0);

  useOnDocument('scroll', $(() => {
    const orderpopup = document.getElementById('orderpopup')!;
    if (prevScrollpos.value > window.scrollY && window.scrollY + 1000 < document.body.scrollHeight) {
      orderpopup.style.bottom = '0';
    } else if (window.scrollY > 100) {
      orderpopup.style.bottom = '-9rem';
    }
    prevScrollpos.value = window.scrollY;
  }));

  return <div class="fixed bottom-0 w-full sm:hidden p-4 transition-all" id="orderpopup">
    <div class={{
      'lum-card flex-row justify-between items-center lum-pad-equal-2xl lum-bg-burger-300/40 !text-white': true,
      'font-futura backdrop-blur-lg mt-4': true,
    }}>
      <p class="text-xl">
        Feeling HANGRY?
      </p>
      <a href="tel:+1 (905) 427 4377" class={{
        'lum-btn rounded-lg text-white mt-1 relative': true,
        'hover:lum-bg-burger-300 text-gray-100 hover:!text-white bg-gradient-to-b border-burger-300': true,
        'from-burger-100/80 to-burger-200/80 hover:bg-burger-100': true,
      }}>
        <IconWhite width="24" class="fill-current" /> Call to order
      </a>
      <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg pointer-events-none': true }} style={{ transform: 'translateZ(-10px)' }}/>
    </div>
  </div>;
});
