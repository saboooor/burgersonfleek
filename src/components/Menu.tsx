import { component$, Slot } from '@qwik.dev/core';
import BookOpen from 'lucide-icons-qwik/icons/BookOpen';

export default component$(() => {
  return (
    <aside
      class="sticky top-0 hidden max-h-180 flex-col px-6 pt-30 sm:flex"
      aria-label="Sidebar"
    >
      <div
        class={{
          'lum-btn-p-2 mb-2 flex items-center gap-3': true,
        }}
      >
        <BookOpen />
        <h1 class="font-futura flex-1 text-2xl">MENU</h1>
      </div>
      <div
        class={{
          'lum-card font-futura gap-2 p-4 motion-safe:transition-all': true,
        }}
      >
        <Slot />
      </div>
    </aside>
  );
});

export const MenuCategory = component$(({ name }: any) => {
  return (
    <div class="flex flex-col gap-2">
      <span class="px-2 py-1 text-orange-200">{name}</span>
      <div
        class={{
          'flex flex-col flex-wrap gap-1': true,
        }}
      >
        <Slot />
      </div>
    </div>
  );
});

export const MobileMenu = component$(() => {
  return (
    <div class="lum-card *:lum-btn *:rounded-lum-1 font-futura fixed top-18 z-10 mx-4 w-[calc(100vw-2rem)] flex-row gap-1 overflow-auto p-1 backdrop-blur-md sm:hidden">
      <Slot />
    </div>
  );
});
