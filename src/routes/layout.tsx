import { component$, Slot } from '@builder.io/qwik';
import Nav from '~/components/Nav';
import Footer from '~/components/sections/Footer';
import { useLocation } from '@builder.io/qwik-city';
import Popup from '~/components/Popup';

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
          'fullscreen-bg opacity-25 animate-in fade-in': true,
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
      <Popup fixed pathname={loc.url.pathname} types={
        [
          ...(loc.url.pathname != '/' ? ['order' as const] : []),
          'deal',
        ]
      } />
    </main>
  );
});
