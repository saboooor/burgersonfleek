import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Blobs } from '@luminescent/ui-qwik';
import IconInBag from './svg/IconInBag';
import { PartyPopper } from 'lucide-icons-qwik';

export default component$(({ fixed, class: Class, col, types, pathname }: {
  fixed?: boolean
  class?: { [key: string]: boolean }
  col?: boolean
  types: ('deal' | 'order')[]
  pathname?: string
}) => {
  const prevScrollpos = useSignal(0);
  const PopupRefBottom = useSignal<HTMLDivElement>();
  const PopupRefTop = useSignal<HTMLDivElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (!fixed) return;

    const handler = () => {
      if (
        prevScrollpos.value > window.scrollY &&
        window.scrollY + 1000 < document.body.scrollHeight
      ) {
        PopupRefBottom.value!.style.bottom = '0';
        PopupRefTop.value!.style.top = (pathname?.includes('menu') ? '120px' : '64px');
      } else if (window.scrollY > 100) {
        PopupRefBottom.value!.style.bottom = PopupRefBottom.value!.offsetHeight * -1 + 'px';
        PopupRefTop.value!.style.top = PopupRefTop.value!.offsetHeight * -2 + 'px';
      }
      prevScrollpos.value = window.scrollY;
    };

    document.addEventListener('scroll', handler);
  });

  return <>
    <div class={{
      'fixed bottom-0 p-4 w-full transition-all flex flex-col items-center justify-center': fixed,
      'hidden sm:flex': col,
      'flex': !col,
      ...Class,
    }} ref={PopupRefBottom}>
      {types.includes('order') &&
        <div class={{
          'lum-card justify-between items-center gap-2 p-2 lum-bg-burger-800/40 text-lum-text! max-w-7xl': true,
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
      }
    </div>
    <div class={{
      'top-16': !pathname?.includes('menu'),
      'top-30': pathname?.includes('menu'),
      'fixed p-4 w-full transition-all flex flex-col items-center justify-center': fixed,
      'hidden sm:flex': col,
      'flex': !col,
      ...Class,
    }} ref={PopupRefTop}>
      {types.includes('deal') &&
        <a href='/invite' class={{
          'lum-card justify-between items-center gap-2 lum-btn-p-2 text-lum-text! max-w-7xl animate-bounce': true,
          'flex-row': !col,
          'font-futura backdrop-blur-md': true,
        }}>
          <PartyPopper size={20} />
          <p class={{
            'sm:text-xl mx-2': true,
            'my-1': col,
          }}>
            <span class="font-bold">Thank you all for your support on our 5th anniversary!</span><br/>
          </p>
          <Blobs color='orange' class={{ 'absolute overflow-clip pointer-events-none -z-1 rounded-lum': true }} style={{ transform: 'translateZ(-10px)' }}/>
        </a>
      }
    </div>
  </>;
});
