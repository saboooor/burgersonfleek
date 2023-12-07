import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

import Logo from '~/components/svg/Logo';
import Icon from '~/components/svg/Icon';
import IconInBag from '~/components/svg/IconInBag';
import { LogoInstagram, LogoFacebook, BookOutline, CallOutline, MapOutline } from 'qwik-ionicons';

export default component$(() => {
  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center justify-center min-h-[calc(100lvh)] pt-22 sm:pt-28">
      <div class="hidden sm:flex relative justify-start align-center mr-auto" style="max-width: 50%;">
        <div class="absolute left-0 right-0 mx-auto bottom-24 w-48 h-48 bg-orange-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-2xl"></div>
        <div class="absolute left-0 right-0 mx-auto bottom-24 w-48 h-48 bg-amber-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-2xl animation-delay-5"></div>
        <div class="absolute left-0 right-0 mx-auto bottom-24 w-48 h-48 bg-yellow-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-2xl animation-delay-10"></div>
        <div class="z-10 animate-float ease-in-out" style="max-width: 60%" >
          <Logo width={476} height={600} id="pc"/>
        </div>
      </div>
      <div class="text-center justify-center">
        <div class="flex sm:hidden relative justify-center align-center" style="width: 100%;">
          <div class="absolute -bottom-16 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-xl"></div>
          <div class="absolute -bottom-16 w-32 h-32 bg-amber-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-xl animation-delay-5"></div>
          <div class="absolute -bottom-16 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-xl animation-delay-10"></div>
          <div class="z-10">
            <div class="z-10 animate-float ease-in-out">
              <Icon width={119} height={150} id="mobile"/>
            </div>
          </div>
        </div>
        <h1 class="font-bold text-orange-100 text-3xl sm:text-5xl mb-6" style="filter: drop-shadow(0 2rem 2rem rgba(251, 146, 60, 0.5));">
          The <span class="text-amber-500">burgers</span><br/>you are <span class="text-orange-300">craving.</span>
        </h1>
        <p class="text-gray-400 text-lg mx-6 md:mx-20 md:text-xl">
          Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. Only serving Halal حلال
        </p>
        <div class="mt-10 space-y-3 min-h-[11.25rem] font-futura">
          <div class="flex gap-2 justify-center">
            <Link href="/menu" class="flex transition rounded-xl backdrop-blur-lg bg-gradient-to-b from-burger-100/80 to-burger-200/80 hover:bg-burger-100 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-3 items-center">
              <BookOutline width="24" class="fill-current" /> View the menu
            </Link>
          </div>
          <div class="flex gap-2 justify-center">
            <a href="tel:+1 (905) 427 4377" class="flex transition rounded-xl backdrop-blur-lg bg-gradient-to-b from-burger-200/80 to-burger-300/80 hover:bg-burger-200 px-4 py-3 font-bold text-red-100 md:py-4 md:px-8 text-xs md:text-lg whitespace-nowrap gap-3 items-center">
              <CallOutline width="24" class="fill-current" /> +1 (905) 427 4377
            </a>
            <a href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" class="flex transition rounded-xl backdrop-blur-lg bg-gradient-to-b from-burger-200/80 to-burger-300/80 hover:bg-burger-200 px-4 py-3 font-bold text-red-100 md:py-4 md:px-8 text-xs md:text-lg whitespace-nowrap gap-3 items-center">
              <MapOutline width="24" class="fill-current" /> Google Maps
            </a>
          </div>
          <div class="flex gap-2 justify-center">
            <a href="https://instagram.com/burgersonfleek.ca" class="flex transition rounded-xl backdrop-blur-lg bg-gradient-to-b from-burger-300/80 via-burger-300/80 to-pink-700/60 hover:bg-burger-300 px-4 py-3 font-bold text-red-100 md:py-4 md:px-8 text-xs md:text-lg whitespace-nowrap gap-3 items-center">
              <LogoInstagram width="24" class="fill-current" /> Instagram
            </a>
            <a href="https://facebook.com/burgersonfleek.ca" class="flex transition rounded-xl backdrop-blur-lg bg-gradient-to-b from-burger-300/80 via-burger-300/80 to-indigo-700/60 hover:bg-burger-300 px-4 py-3 font-bold text-red-100 md:py-4 md:px-8 text-xs md:text-lg whitespace-nowrap gap-3 items-center">
              <LogoFacebook width="24" class="fill-current" /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Home',
};
