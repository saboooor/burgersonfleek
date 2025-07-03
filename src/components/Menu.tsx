import { component$, Slot, useSignal } from '@builder.io/qwik';
import { Blobs } from '@luminescent/ui-qwik';
import IconInBag from './svg/IconInBag';
import { BookOpen,  Menu } from 'lucide-icons-qwik';

export default component$(() => {
  const menu = useSignal(false);

  return (
    <aside class="w-full fixed -ml-4 sm:sticky sm:h-1 top-[66px] sm:top-32 font-futura z-[40]" aria-label="Sidebar">
      <div class="flex items-center py-2 px-2 gap-3 sm:mb-4 lum-bg-gray-800/30 !text-orange-200 !border-x-0 sm:border-t-0 sm:bg-transparent backdrop-blur-lg">
        <BookOpen class="ml-2" strokeWidth={1} />
        <h1 class="text-xl flex-1">MENU</h1>

        <button class={{ 'lum-btn lum-bg-transparent p-2 sm:hidden': true }} onClick$={() => {
          menu.value = !menu.value;
          const abortController = new AbortController();
          document.addEventListener('click', (e) => {
            if (!e.composedPath().includes(document.querySelector('aside')!) || e.target instanceof HTMLAnchorElement) {
              menu.value = false;
              abortController.abort();
            }
          }, { signal: abortController.signal });
        }} aria-label="Toggle Menu">
          <Menu />
        </button>
      </div>
      <div class={{
        'lum-card gap-7': true,
        'flex overflow-y-auto max-h-[calc(100dvh-300px)] mx-2 sm:mx-0 backdrop-blur-xl': true,
        'mt-2': menu.value,
        'opacity-0 sm:opacity-100 pointer-events-none sm:pointer-events-auto': !menu.value,
      }}>
        <Slot />
      </div>
      <div class={{
        'lum-card lum-bg-burger-800/40': true,
        'font-futura backdrop-blur-lg mt-2 hidden sm:block': true,
      }}>
        <Blobs color='orange' class={{ 'absolute -z-1 overflow-clip': true }} style={{ transform: 'translateZ(-10px)' }}/>
        <h2 class="text-xl font-bold whitespace-nowrap sm:text-2xl">
          Feeling HANGRY?
        </h2>
        <a href="tel:+1 (905) 427 4377" class={{
          'lum-btn lum-btn-p-3 text-sm sm:lum-btn-p-4 sm:text-lg mt-4': true,
          'hover:!text-lum-text border-burger-600': true,
          'bg-burger-700/5 hover:lum-bg-burger-700 bg-gradient-to-b from-burger-500/50 to-burger-700': true,
        }}>
          <IconInBag class="fill-current w-5 sm:w-auto sm:mr-1" /> Call us to order
        </a>
      </div>
    </aside>
  );
});

export const MenuCategory = component$(({ name }: any) => {
  return (
    <div class="flex flex-col gap-2">
      <span class="font-bold text-orange-200">{name}</span>
      <div class={{
        'flex flex-col gap-2 flex-wrap': true,
      }}>
        <Slot />
      </div>
    </div>
  );
});
