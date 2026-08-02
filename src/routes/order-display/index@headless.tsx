import { component$ } from '@qwik.dev/core';
import LogoHorizontal from '~/components/svg/LogoHorizontal';
import { generateHead } from '~/root';

export default component$(() => {
  return (
    <>
      <div class="flex h-[20dvh] w-full items-center justify-center mix-blend-screen">
        <LogoHorizontal size={600} height={250} id="order-display" />
      </div>
      <iframe
        class="h-[80dvh] w-full mix-blend-screen"
        src="https://www.toasttab.com/order-display"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
});

export const head = generateHead({
  title: 'Burgers on Fleek - Order Display',
});
