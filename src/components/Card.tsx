
import { Slot, component$ } from '@builder.io/qwik';

export default component$(({ extraClass, row, squish, fit, darker, contextMenu }: any) => {
  return (
    <div class={{
      'flex border border-gray-700 rounded-xl p-6': true,
      'bg-gray-900/50': darker,
      'bg-gray-800': !darker,
      'flex-col': !row,
      'flex-1 min-w-[18rem]': !squish,
      'min-w-fit': fit,
      ...extraClass,
    }} onContextMenu$={(event) => contextMenu ? contextMenu.func(event, ...contextMenu.args) : ''} preventdefault:contextmenu={contextMenu}>
      <Slot />
    </div>
  );
});

export const CardHeader = component$(({ bestSeller }: any) => {
  return (
    <h1 class="flex font-bold text-gray-100 text-2xl mb-2 font-futura tracking-wider">
      <div class="flex items-center gap-3 flex-1">
        <Slot />
        {bestSeller &&
          <span class="text-sm bg-burger-100 rounded-lg px-3 py-1">
            Best Seller
          </span>
        }
      </div>
    </h1>
  );
});