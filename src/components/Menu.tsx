import { component$, Slot, useSignal } from '@builder.io/qwik';
import { Dropdown } from '@luminescent/ui-qwik';
import { BookOpen } from 'lucide-icons-qwik';
import OrderPopup from './OrderPopup';

export default component$(() => {
  const menu = useSignal(false);

  return (
    <aside class="w-full fixed -ml-4 sm:sticky sm:h-1 top-[66px] sm:top-32 font-futura z-40" aria-label="Sidebar">
      <Dropdown class={{
        'w-[calc(100%-2rem)] items-center gap-3 mx-4 -mt-4 pt-6 lum-bg-gray-800 text-orange-200! backdrop-blur-lg': true,
        'sm:pt-2 sm:mb-2 sm:mx-0 sm:w-full sm:lum-bg-transparent': true,
      }} opened={menu.value}
      onClick$={() => menu.value = !menu.value}>
        <div class="flex items-center gap-3">
          <BookOpen strokeWidth={1} size={28} />
          <h1 class="text-xl flex-1">MENU</h1>
        </div>
      </Dropdown>
      <div class={{
        'transition-all lum-card gap-2 p-4': true,
        'flex overflow-y-auto max-h-[calc(100dvh-300px)] m-4 mt-2 sm:m-0 backdrop-blur-xl': true,
        'mt-2': menu.value,
        'pointer-events-none sm:pointer-events-auto opacity-0 sm:opacity-100 -mt-2 sm:mt-2 scale-95 sm:scale-100': !menu.value,
      }}>
        <Slot />
      </div>
      <OrderPopup col/>
    </aside>
  );
});

export const MenuCategory = component$(({ name }: any) => {
  return (
    <div class="flex flex-col gap-2">
      <span class="text-orange-200 px-2 py-1">{name}</span>
      <div class={{
        'flex flex-col gap-1 flex-wrap': true,
      }}>
        <Slot />
      </div>
    </div>
  );
});
