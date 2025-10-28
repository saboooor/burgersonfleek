// LuminescentDev Navbar Component Apr 28

import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Blobs } from '@luminescent/ui-qwik';
import IconInBag from './svg/IconInBag';

export default component$(({ popup, class: Class, col }: {
  popup?: boolean
  class?: { [key: string]: boolean }
  col?: boolean
}) => {
  const prevScrollpos = useSignal(0);
  const orderPopupRef = useSignal<HTMLDivElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (!popup) return;

    const handler = () => {
      if (
        prevScrollpos.value > window.scrollY &&
        window.scrollY + 1000 < document.body.scrollHeight
      ) {
        orderPopupRef.value!.style.bottom = '0';
      } else if (window.scrollY > 100) {
        orderPopupRef.value!.style.bottom = '-9rem';
      }
      prevScrollpos.value = window.scrollY;
    };

    document.addEventListener('scroll', handler);
  });

  return <div class={{
    'fixed bottom-0 p-4 w-full transition-transform': popup,
    'hidden sm:block': col,
    ...Class,
  }} ref={orderPopupRef}>
    <div class={{
      'lum-card justify-between items-center gap-2 p-2 lum-bg-burger-800/40 text-lum-text!': true,
      'flex-row': !col,
      'font-futura backdrop-blur-md': true,
    }}>
      <p class={{
        'sm:text-xl mx-2': true,
        'my-1': col,
      }}>
        Feeling HANGRY?
      </p>
      <a target='_blank' data-umami-event="order_online" href="https://order.toasttab.com/online/burgers-on-fleek-135-harwood-ave-n-unit-b212" class={{
        'lum-btn lum-btn-p-2 text-sm sm:text-lg rounded-lum-2': true,
        'w-full justify-center': col,
        'hover:text-lum-text! border-none': true,
        'lum-bg-burger-600 bg-linear-to-b from-burger-600 to-burger-700 hover:from-burger-500 active:from-burger-500': true,
      }}>
        <IconInBag class="fill-current w-5 sm:w-auto sm:mr-1" /> Order Online
      </a>
      <Blobs color='orange' class={{ 'absolute overflow-clip pointer-events-none -z-1 rounded-lum': true }} style={{ transform: 'translateZ(-10px)' }}/>
    </div>
  </div>;
});
