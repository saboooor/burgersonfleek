import { component$, Slot, useSignal } from '@builder.io/qwik';
import IconWhite from './svg/IconInBag';
import { Button, ButtonAnchor, Card, Header } from '@luminescent/ui';

export default component$(() => {
  const menu = useSignal(false);

  return (
    <aside class="w-full fixed -ml-4 sm:sticky sm:h-1 top-[66px] sm:top-32 font-futura z-[40]" aria-label="Sidebar">
      <div class="flex items-center gap-2 px-2 py-2 sm:mb-4 bg-gray-800/60 sm:bg-transparent backdrop-blur-lg border-y border-y-gray-800 sm:border-t-0">
        <div class="flex-1 ml-1">
          <h1 class="text-2xl text-orange-200">MENU</h1>
        </div>
        <Button square transparent color="gray" class={{ 'sm:hidden': true }} onClick$={() => {
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
        </Button>
      </div>
      <Card class={{
        'flex overflow-y-auto max-h-[calc(100dvh-300px)] mx-2 sm:mx-0 backdrop-blur-xl': true,
        'mt-2': menu.value,
        'opacity-0 sm:opacity-100 pointer-events-none sm:pointer-events-auto': !menu.value,
      }} color='darkgray'>
        <Slot />
      </Card>
      <Card color="orange" blobs class={{
        'font-futura backdrop-blur-lg mt-4 hidden sm:block': true,
      }}>
        <Header>
          Feeling HANGRY?
        </Header>
        <ButtonAnchor href="tel:+1 (905) 427 4377" size="lg" class={{
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
