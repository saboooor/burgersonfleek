// LuminescentDev Navbar Component Apr 28

import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Blobs } from '@luminescent/ui-qwik';
import IconInBag from './svg/IconInBag';

export default component$(({ id, popup, class: Class, col }: {
  id?: string
  popup?: boolean
  class?: { [key: string]: boolean }
  col?: boolean
}) => {
  const prevScrollpos = useSignal(0);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (!popup || !id) return;

    const handler = () => {
      const orderpopup = document.getElementById(id)!;
      if (
        prevScrollpos.value > window.scrollY &&
        window.scrollY + 1000 < document.body.scrollHeight
      ) {
        orderpopup.style.bottom = '0';
      } else if (window.scrollY > 100) {
        orderpopup.style.bottom = '-9rem';
      }
      prevScrollpos.value = window.scrollY;
    };

    document.addEventListener('scroll', handler);
  });

  return <div class={{
    'fixed bottom-0 p-4 w-full transition-all': popup,
    'hidden sm:block': col,
    ...Class,
  }} id={id}>
    <div class={{
      'lum-card justify-between items-center gap-2 p-2 lum-bg-burger-800/40 !text-lum-text': true,
      'flex-row': !col,
      'font-futura backdrop-blur-lg mt-4': true,
    }}>
      <p class={{
        'sm:text-xl mx-2': true,
        'my-1': col,
      }}>
        Feeling HANGRY?
      </p>
      <a target='_blank' data-umami-event="order_online" href="https://order.toasttab.com/online/burgers-on-fleek-135-harwood-ave-n-unit-b212" class={{
        'lum-btn lum-btn-p-2 text-sm sm:lum-btn-p-2 sm:text-lg rounded-lum-2': true,
        'w-full justify-center': col,
        'hover:!text-lum-text border-burger-600': true,
        'bg-burger-700/5 hover:lum-bg-burger-700 bg-gradient-to-b from-burger-600/50 to-burger-700/50': true,
      }}>
        <IconInBag class="fill-current w-5 sm:w-auto sm:mr-1" /> Order Online
      </a>
      <Blobs color='orange' class={{ 'absolute overflow-clip pointer-events-none -z-1 rounded-lum': true }} style={{ transform: 'translateZ(-10px)' }}/>
    </div>
  </div>;
});
