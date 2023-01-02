import { component$, Slot } from '@builder.io/qwik';
import Nav from '~/components/Nav';
import Footer from '~/components/footer';

export default component$(() => {
  return (
    <main>
      <Nav />
      <section class="pt-16">
        <Slot />
      </section>
      <Footer />
    </main>
  );
});
