import { component$, Slot } from '@builder.io/qwik';
import Nav from '~/components/Nav';
import Footer from '~/components/Footer';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();
  return (
    <main>
      <video
        class={{
          'fixed top-0 overflow-hidden -z-10 w-full h-full object-cover opacity-10': true,
          'blur-xl scale-110': loc.url.pathname != '/',
        }}
        autoplay
        muted
        preload="auto"
        poster="/videos/hero.jpg"
      >
        <source src="/videos/shook.webm" type="video/mp4"/>
      </video>
      <Nav />
      <Slot />
      <Footer />
    </main>
  );
});
