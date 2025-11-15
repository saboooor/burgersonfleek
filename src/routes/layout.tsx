import { component$, Slot } from '@builder.io/qwik';
import Nav from '~/components/Nav';
import Footer from '~/components/sections/Footer';
import { useLocation } from '@builder.io/qwik-city';

const videos = [
  '/videos/godzilla.mp4',
  '/videos/shook.mp4',
];

export default component$(() => {
  const loc = useLocation();
  return (
    <main>
      <video
        class={{
          'fixed top-0 overflow-hidden -z-10 w-full h-full object-cover opacity-25 animate-in fade-in': true,
          'blur-md scale-110': loc.url.pathname != '/',
        }}
        autoplay
        playsInline
        muted
        preload="auto"
      >
        <source src={videos[Math.floor(Math.random() * videos.length)]} type="video/mp4" />
      </video>
      <Nav />
      <Slot />
      <Footer />
    </main>
  );
});
