import { component$, Slot, useStore } from '@builder.io/qwik';
import { Button } from './Button';
import { Menu } from 'qwik-ionicons';

export default component$(() => {
  const menuStore = useStore({
    menu: false,
  });
  return (
    <aside class="w-full align-middle sm:sticky sm:h-1 sm:top-32 pt-24 sm:pt-0" aria-label="Sidebar">
      <div class="flex items-center mb-8">
        <div class="flex-1">
          <p class="text-3xl font-bold text-orange-200">Menu</p>
        </div>
        <Button extraClass="sm:hidden" onClick$={() => menuStore.menu = !menuStore.menu}>
          <Menu width="24"/>
        </Button>
      </div>
      <div class={`overflow-y-auto ${!menuStore.menu ? 'hidden sm:' : ''}flex flex-col py-4 px-3 rounded-xl bg-gray-800 border border-gray-700 max-h-[calc(100dvh-250px)]`}>
        <Slot />
      </div>
    </aside>
  );
});

export const MenuCategory = component$(({ name }: any) => {
  return (
    <div class="space-y-4 mb-4">
      <span class="ml-2 font-bold">{name}</span>
      <div class="flex flex-col gap-2">
        <Slot />
      </div>
      <hr class="border-gray-600" />
    </div>
  );
});

export const MenuItem = component$(({ href }: any) => {
  return (
    <a href={href} class="min-w-fit transition hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
      <Slot />
    </a>
  );
});

export const MenuTitle = component$(({ id }: any) => {
  return (
    <>
      <span id={id} class="block h-24 -mt-24" />
      <h1 class="font-bold text-orange-200 text-4xl transition" id={id}>
        <Slot />
      </h1>
    </>
  );
});