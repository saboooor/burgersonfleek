
import { Slot, component$ } from '@builder.io/qwik';
import { MedalOutline } from 'qwik-ionicons';

export default component$(({ extraClass, row, squish, fit, darker, contextMenu }: any) => {
  return (
    <div class={{
      'flex border border-gray-700/80 rounded-xl p-6': true,
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
    <h1 class="flex font-bold text-gray-100 text-xl sm:text-2xl mb-2 font-futura tracking-wider">
      <div class="flex items-center gap-3 flex-1">
        <Slot />
        {bestSeller &&
          <span class="flex gap-1.5 items-center text-xs bg-burger-200 border border-burger-100 text-white rounded-lg px-3 py-1">
            <MedalOutline width='14'/>
            Best Seller
          </span>
        }
      </div>
    </h1>
  );
});