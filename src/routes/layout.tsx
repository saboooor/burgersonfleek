import { component$, Slot } from '@builder.io/qwik';
import Nav from '~/components/Nav';
import Footer from '~/components/footer';

export default component$(() => {
  return (
    <main>
      <Nav />
      <section style="padding-top: 64px">
        <Slot />
      </section>
      <Footer />
    </main>
  );
});
