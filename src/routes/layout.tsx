import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/navbar';
import Footer from '~/components/footer';

export default component$(() => {
  return (
    <main>
      <Header />
      <section style="padding-top: 64px">
        <Slot />
      </section>
      <Footer />
    </main>
  );
});
