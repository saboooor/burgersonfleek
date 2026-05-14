import { component$, Slot } from '@qwik.dev/core';
import Nav from '~/components/Nav';
import Footer from '~/components/sections/Footer';
import { useLocation } from '@qwik.dev/router';
import Popup from '~/components/Popup';

export default component$(() => {
  const loc = useLocation();
  return (
    <main>
      <Nav />
      <Slot />
      <Footer />
      <Popup fixed pathname={loc.url.pathname} types={
        [
          ...(loc.url.pathname != '/' ? ['order' as const] : []),
          'deal',
        ]
      } />
    </main>
  );
});
