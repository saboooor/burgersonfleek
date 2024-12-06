// LuminescentDev Navbar Component Apr 28

import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik';
import { Blobs } from '@luminescent/ui-qwik';
import IconInBag from './svg/IconInBag';

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
      'lum-card flex-row justify-between items-center lum-pad-equal-2xl lum-bg-burger-800/40 !text-white': true,
      'font-futura backdrop-blur-lg mt-4': true,
    }}>
      <p class="text-xl">
        Feeling HANGRY?
      </p>
      <a href="tel:+1 (905) 427 4377" class={{
        'lum-btn lum-pad-sm text-sm sm:text-lg rounded-md': true,
        'text-gray-100 hover:!text-white border-burger-600': true,
        'bg-burger-700/5 hover:lum-bg-burger-700 bg-gradient-to-b from-burger-500/50 to-burger-700': true,
      }}>
        <IconInBag width="24" class="fill-current w-5 sm:w-auto sm:mr-1" /> Call us to order
      </a>
      <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg pointer-events-none': true }} style={{ transform: 'translateZ(-10px)' }}/>
    </div>
  </div>;
});
