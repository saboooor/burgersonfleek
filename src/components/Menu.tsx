import { component$, Slot } from '@builder.io/qwik';
import { BookOpen } from 'lucide-icons-qwik';

export default component$(() => {
  return (
    <aside class="hidden sm:block w-full -ml-4 sticky h-1 top-30" aria-label="Sidebar">
      <div class={{
        'flex items-center gap-4 text-orange-200! lum-btn-p-2 mb-2': true,
        'w-full lum-bg-transparent': true,
      }}>
        <BookOpen strokeWidth={1} size={32} />
        <h1 class="text-2xl flex-1 font-futura">MENU</h1>
      </div>
      <div class={{
        'motion-safe:transition-all lum-card gap-2 p-4 font-futura': true,
      }}>
        <Slot />
      </div>
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

export const MobileMenu = component$(() => {
  return (
    <div class="sm:hidden fixed mt-3 z-10 w-[calc(100vw-2rem)] lum-card flex-row gap-1 *:lum-btn *:rounded-lum-1 p-1 overflow-auto font-futura backdrop-blur-md">
      <Slot />
    </div>
  );
});