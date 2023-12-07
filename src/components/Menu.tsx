import { component$, Slot, useStore } from '@builder.io/qwik';
import { Button, ExternalButton } from './Button';
import { DocumentTextOutline, Menu } from 'qwik-ionicons';
import IconWhite from './svg/IconInBag';

export default component$(() => {
  const menuStore = useStore({
    menu: false,
  });
  return (
    <aside class="w-full align-middle sm:sticky sm:h-1 sm:top-32 pt-24 sm:pt-0 font-futura tracking-wider" aria-label="Sidebar">
      <div class="flex items-center gap-2">
        <div class="flex-1">
          <p class="text-3xl font-bold text-orange-200">MENU</p>
        </div>
        <ExternalButton color="tertiary" href="/menu.pdf">
          <DocumentTextOutline width="24"/>
        </ExternalButton>
        <Button color="tertiary" extraClass="sm:hidden" onClick$={() => menuStore.menu = !menuStore.menu}>
          <Menu width="24"/>
        </Button>
      </div>
      <div class={`overflow-y-auto ${!menuStore.menu ? 'hidden sm:' : ''}flex flex-col gap-6 p-6 mt-8 rounded-xl bg-gray-800 border border-gray-700 max-h-[calc(100dvh-400px)]`}>
        <Slot />
      </div>
      <div class="font-futura bg-burger-200/30 border border-burger-200/60 rounded-xl backdrop-blur-lg p-6 mt-4 hidden sm:block">
        <div class="flex flex-col gap-5">
          <h2 class="text-lg sm:text-2xl font-bold">
            Feeling Hungry?
          </h2>
          <a href="https://burgersonfleek.order.online/store/25869825" class="flex transition rounded-xl shadow-lg backdrop-blur-lg bg-gradient-to-b from-burger-100/80 to-burger-200/80 hover:bg-burger-100 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-3 items-center">
            <IconWhite width="24" class="fill-current" /> Order Online
          </a>
        </div>
      </div>
    </aside>
  );
});

export const MenuCategory = component$(({ name, collapse }: any) => {
  return (
    <div class="flex flex-col gap-4">
      <span class="font-bold text-orange-200">{name}</span>
      <div class={{
        'flex gap-2 flex-wrap': true,
        'flex-col': !collapse,
      }}>
        <Slot />
      </div>
    </div>
  );
});

export const MenuItem = component$(({ href }: any) => {
  return (
    <a href={href} class="flex-1 min-w-fit transition bg-gray-800 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-gray-700 hover:border-gray-600 px-3 py-2 rounded-lg text-base flex items-center gap-2">
      <Slot />
    </a>
  );
});

export const MenuTitle = component$(({ id, subtitle }: any) => {
  return (
    <>
      <span id={id} class="block h-24 -mt-24" />
      <h1 class="font-bold text-orange-200 text-2xl sm:text-4xl transition font-futura tracking-wider" id={id}>
        <Slot />
      </h1>
      {subtitle &&
        <h2 class="text-gray-400 text-sm md:text-base transition font-futura tracking-wider mt-2">
          {subtitle}
        </h2>
      }
    </>
  );
});
