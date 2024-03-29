import { component$, Slot } from '@builder.io/qwik';
import Nav from '~/components/Nav';
import Footer from '~/components/Footer';

export default component$(() => {
  return (
    <main>
      <Nav />
      <Slot />
      <Footer />
    </main>
  );
});
