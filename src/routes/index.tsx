import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

import Logo from '~/components/svg/Logo';
import Icon from '~/components/svg/Icon';
import { LogoInstagram, LogoFacebook, BookOutline, CallOutline, MapOutline, LogoTiktok } from 'qwik-ionicons';
import Halal from '~/components/svg/Halal';

export default component$(() => {
  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center justify-center min-h-[100svh] pt-20">
      <div class="hidden sm:flex relative justify-start align-center mr-auto max-w-[50%]">
        <div class="z-10 animate-in fade-in slide-in-from-top-8 anim-duration-1000" style="max-width: 60%" >
          <Logo width={476} height={600} id="pc"/>
        </div>
      </div>
      <div class="text-center justify-center">
        <div class="flex sm:hidden relative justify-center align-center w-full mb-10">
          <div class="z-10 animate-in fade-in slide-in-from-top-8 anim-duration-1000">
            <Icon width={160} id="mobile"/>
          </div>
        </div>
        <div class="flex items-end justify-center animate-in fade-in slide-in-from-top-16 sm:slide-in-from-top-8 anim-duration-1000">
          <h1 class="font-bold text-orange-100 text-3xl sm:text-5xl my-4 sm:mb-6" style="filter: drop-shadow(0 2rem 3rem rgba(251, 146, 60, 0.5));">
            The <span class="text-burger-500">burgers</span><br/>you are <span class="text-burger-300">craving.</span>
          </h1>
          <p class="mb-6 sm:mb-10">™</p>
        </div>
        <p class="text-gray-600 mx-6 md:mx-20 text-lg md:text-xl animate-in fade-in slide-in-from-top-24 sm:slide-in-from-top-16 anim-duration-1000">
          Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. Only serving Halal حلال<br/>
          est. 2019
        </p>
        <div class="flex flex-col gap-1 sm:gap-1.5 mt-10 min-h-[11.25rem] font-futura">
          <div class="flex gap-1 sm:gap-1.5 justify-center animate-in fade-in slide-in-from-top-32 sm:slide-in-from-top-24 anim-duration-1000">
            <Link href="/menu" class={{
              'lum-btn lum-pad-lg text-sm sm:lum-pad-xl sm:text-lg rounded-xl': true,
              'text-gray-100 hover:!text-white border-gray-900': true,
              'lum-bg-burger-700/5 hover:lum-bg-burger-700 bg-gradient-to-b from-burger-500/50 to-burger-700': true,
            }}>
              <BookOutline width="24" class="fill-current w-5 sm:w-auto sm:mr-1" /> View the menu
            </Link>
            <Link href="/halal" class={{
              'lum-btn lum-pad-lg text-sm sm:lum-pad-xl sm:text-lg rounded-xl': true,
              'text-gray-100 hover:!text-white border-gray-900': true,
              'lum-bg-burger-700/5 hover:lum-bg-burger-700 bg-gradient-to-b from-burger-500/50 to-burger-700': true,
            }}>
              <Halal width="24" class="fill-current w-5 sm:w-auto sm:mr-1" /> Halal
            </Link>
          </div>
          <div class="flex gap-1 sm:gap-1.5 justify-center animate-in fade-in slide-in-from-top-40 sm:slide-in-from-top-32 anim-duration-1000">
            <a href="tel:+1 (905) 427 4377" class={{
              'lum-btn lum-pad-lg text-sm sm:lum-pad-xl sm:text-lg rounded-xl': true,
              'text-gray-100 hover:!text-white border-gray-900': true,
              'lum-bg-burger-800/5 hover:lum-bg-burger-800 bg-gradient-to-b from-burger-700/50 to-burger-800': true,
            }}>
              <CallOutline width="24" class="fill-current w-5 sm:w-auto sm:mr-1" /> +1 (905) 427 4377
            </a>
            <a href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" class={{
              'lum-btn lum-pad-lg text-sm sm:lum-pad-xl sm:text-lg rounded-xl': true,
              'text-gray-100 hover:!text-white border-gray-900': true,
              'lum-bg-burger-800/5 hover:lum-bg-burger-800 bg-gradient-to-b from-burger-700/50 to-burger-800': true,
            }}>
              <MapOutline width="24" class="fill-current w-5 sm:w-auto sm:mr-1" /> Google Maps
            </a>
          </div>
          <div class="flex gap-1 sm:gap-1.5 justify-center animate-in fade-in slide-in-from-top-48 sm:slide-in-from-top-40 anim-duration-1000">
            <a href="https://instagram.com/burgersonfleek.ca" class={{
              'lum-btn lum-pad-lg text-sm sm:lum-pad-xl sm:text-lg rounded-xl': true,
              'text-gray-100 hover:!text-white border-gray-900': true,
              'bg-transparent border-[#dd2a7baa] bg-gradient-to-b from-burger-800/50': true,
              'to-[#dd2a7baa] hover:lum-bg-[#dd2a7baa]': true,
            }}>
              <LogoInstagram width="24" class="fill-current w-5 sm:w-auto" />
            </a>
            <a href="https://facebook.com/burgersonfleek.ca" class={{
              'lum-btn lum-pad-lg text-sm sm:lum-pad-xl sm:text-lg rounded-xl': true,
              'text-gray-100 hover:!text-white border-gray-900': true,
              'bg-transparent border-[#1877f2aa] bg-gradient-to-b from-burger-800/50': true,
              'to-[#1877f2aa] hover:lum-bg-[#1877f2aa]': true,
            }}>
              <LogoFacebook width="24" class="fill-current w-5 sm:w-auto" />
            </a>
            <a href="https://tiktok.com/@burgersonfleek.ca" class={{
              'lum-btn lum-pad-lg text-sm sm:lum-pad-xl sm:text-lg rounded-xl': true,
              'text-gray-100 hover:!text-white border-gray-900': true,
              'bg-transparent border-[#ee1d52aa] bg-gradient-to-b from-burger-800/50': true,
              'to-[#ee1d52aa] hover:lum-bg-[#ee1d52aa]': true,
            }}>
              <LogoTiktok width="24" class="fill-current w-5 sm:w-auto" />
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
