import { component$, Slot, useSignal } from '@builder.io/qwik';
import IconWhite from './svg/IconInBag';
import { Blobs, Header } from '@luminescent/ui-qwik';
import IconInBag from './svg/IconInBag';

export default component$(() => {
  const menu = useSignal(false);

  return (
    <aside class="w-full fixed -ml-4 sm:sticky sm:h-1 top-[66px] sm:top-32 font-futura z-[40]" aria-label="Sidebar">
      <div class="flex items-center gap-2 px-2 py-2 sm:mb-4 bg-gray-900/60 sm:bg-transparent backdrop-blur-lg border-y border-y-gray-800 sm:border-t-0">
        <div class="flex-1 ml-1">
          <h1 class="text-2xl text-orange-200">MENU</h1>
        </div>
        <button class={{ 'lum-btn lum-bg-transparent lum-pad-equal-md sm:hidden': true }} onClick$={() => {
          menu.value = !menu.value;
          const abortController = new AbortController();
          document.addEventListener('click', (e) => {
            if (!e.composedPath().includes(document.querySelector('aside')!) || e.target instanceof HTMLAnchorElement) {
              menu.value = false;
              abortController.abort();
            }
          }, { signal: abortController.signal });
        }} aria-label="Toggle Menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div class={{
        'lum-card lum-bg-gray-900/50': true,
        'flex overflow-y-auto max-h-[calc(100dvh-300px)] mx-2 sm:mx-0 backdrop-blur-xl': true,
        'mt-2': menu.value,
        'opacity-0 sm:opacity-100 pointer-events-none sm:pointer-events-auto': !menu.value,
      }}>
        <Slot />
      </div>
      <div class={{
        'lum-card lum-bg-burger-800/40': true,
        'font-futura backdrop-blur-lg mt-4 hidden sm:block': true,
      }}>
        <Header>
          Feeling HANGRY?
        </Header>
        <a href="tel:+1 (905) 427 4377" class={{
          'lum-btn lum-pad-lg text-sm sm:lum-pad-xl sm:text-lg rounded-lg mt-4': true,
          'text-gray-100 hover:!text-white border-burger-600': true,
          'bg-burger-700/5 hover:lum-bg-burger-700 bg-gradient-to-b from-burger-500/50 to-burger-700': true,
        }}>
          <IconInBag width="24" class="fill-current w-5 sm:w-auto sm:mr-1" /> Call us to order
        </a>
        <Blobs color='orange' class={{ 'absolute overflow-clip rounded-lg pointer-events-none': true }} style={{ transform: 'translateZ(-10px)' }}/>
      </div>
    </aside>
  );
});

export const MenuCategory = component$(({ name }: any) => {
  return (
    <div class="flex flex-col gap-4">
      <span class="font-bold text-orange-200">{name}</span>
      <div class={{
        'flex flex-col gap-2 flex-wrap': true,
      }}>
        <Slot />
      </div>
    </div>
  );
});
