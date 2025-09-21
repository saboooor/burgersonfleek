import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

import Logo from '~/components/svg/Logo';
import LogoHorizontal from '~/components/svg/LogoHorizontal';
import Halal from '~/components/svg/Halal';
import { BookOpen, MapPin, Phone } from 'lucide-icons-qwik';
import OrderPopup from '~/components/OrderPopup';

export default component$(() => {
  return <>
    <section class="flex flex-col sm:flex-row mx-auto max-w-5xl px-6 items-center justify-center min-h-[100svh] pt-20">
      <div class="flex relative">
        <div class="z-10 animate-in fade-in slide-in-from-top-16 anim-duration-1000">
          <Logo size={476} height={600} id="pc" class="hidden sm:flex"/>
          <LogoHorizontal size={288} height={100} id="mobile" class="sm:hidden" />
        </div>
      </div>
      <div class="flex flex-col items-center sm:items-start text-center sm:text-left">
        <div class="flex animate-in fade-in slide-in-from-top-16 sm:slide-in-from-top-8 anim-duration-1000">
          <h1 class="font-bold text-lum-text text-3xl sm:text-5xl my-4 sm:mb-10">
            The <span class="text-burger-500">burgers</span><br/>you are <span class="text-burger-300">craving.</span><span class="text-lg align-top">™</span>
          </h1>
        </div>
        <p class="text-lum-text-secondary text-lg md:text-xl animate-in fade-in slide-in-from-top-24 sm:slide-in-from-top-16 anim-duration-1000">
          Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. est. 2019
        </p>

        <div class="flex flex-col gap-1 mt-2">
          <div class="flex gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-top-32 sm:slide-in-from-top-24 anim-duration-1000">
            <a href="/halal" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 !text-lum-text-secondary">
              <Halal class="w-5 sm:w-auto sm:mr-1" />
              Only serving Halal
            </a>
          </div>
          <div class="flex gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-top-40 sm:slide-in-from-top-32 anim-duration-1000">
            <a data-umami-event="phone" href="tel:+1 (905) 427 4377" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 !text-lum-text-secondary">
              <Phone strokeWidth={1} class="w-5 sm:w-auto sm:mr-1" />
              +1 (905) 427 4377
            </a>
          </div>
          <div class="flex gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-top-48 sm:slide-in-from-top-40 anim-duration-1000">
            <a data-umami-event="maps" target="_blank" href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 !text-lum-text-secondary">
              <MapPin strokeWidth={1} class="w-5 sm:w-auto sm:mr-1" />
              135 Harwood Ave N, Ajax, ON
            </a>
          </div>
        </div>

        <OrderPopup class={{
          'animate-in fade-in slide-in-from-top-64 sm:slide-in-from-top-56 anim-duration-1000': true,
        }} />
        <div class="flex flex-col gap-1 sm:gap-2 my-4 font-futura">
          <div class="flex gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-top-64 sm:slide-in-from-top-56 anim-duration-1000">
            <Link data-umami-event="menu" href="/menu" class={{
              'lum-btn lum-btn-p-3 text-sm sm:lum-btn-p-4 sm:text-lg': true,
              'hover:!text-lum-text border-burger-600': true,
              'bg-burger-700/5 hover:lum-bg-burger-700 bg-gradient-to-b from-burger-500/50 to-burger-700': true,
            }}>
              <BookOpen strokeWidth={1} class="w-5 sm:w-auto sm:mr-1" /> View the menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>;
});

export const head: DocumentHead = {
  title: 'Home',
};
