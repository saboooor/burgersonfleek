import { component$, Slot, useStore } from '@builder.io/qwik';
import { DocumentTextOutline, Menu } from 'qwik-ionicons';
import IconWhite from './svg/IconInBag';
import { Button, ButtonAnchor, Card, Header } from '@luminescent/ui';

export default component$(() => {
  const menuStore = useStore({
    menu: false,
  });
  return (
    <aside class="w-full align-middle sm:sticky sm:h-1 sm:top-32 pt-24 sm:pt-0 font-futura tracking-wider" aria-label="Sidebar">
      <div class="flex items-center gap-2 mb-4">
        <div class="flex-1">
          <p class="text-3xl font-bold text-orange-200">MENU</p>
        </div>
        <Button color="darkgray" class={{ 'sm:hidden': true }} onClick$={() => menuStore.menu = !menuStore.menu} aria-label="Toggle Menu">
          <Menu width="24"/>
        </Button>
      </div>
      <Card class={{
        'overflow-y-auto mt-8 max-h-[calc(100dvh-300px)]': true,
        'hidden sm:flex': !menuStore.menu,
      }}>
        <Slot />
      </Card>
      <Card color="orange" blobs class={{
        'font-futura backdrop-blur-lg mt-4 hidden sm:block': true,
      }}>
        <Header>
          Feeling HANGRY?
        </Header>
        <ButtonAnchor href="tel:+1 (905) 427 4377" color="orange" size="lg" class={{
          'flex transition backdrop-blur-lg bg-gradient-to-b from-burger-100/80 to-burger-200/80 hover:bg-burger-100 whitespace-nowrap mt-4': true,
        }}>
          <IconWhite width="24" class="fill-current" /> Call to order
        </ButtonAnchor>
      </Card>
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

export const MenuItem = component$(({ href }: any) => {
  return (
    <ButtonAnchor href={href}>
      <Slot />
    </ButtonAnchor>
  );
});

export const MenuTitle = component$(({ id, subtitle }: any) => {
  return (
    <>
      <span id={id} class="block h-28 -mt-28" />
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
