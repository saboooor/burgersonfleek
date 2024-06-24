import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { Blobs, Button, ButtonAnchor } from '@luminescent/ui';

import Logo from '~/components/svg/Logo';
import Icon from '~/components/svg/Icon';
import { LogoInstagram, LogoFacebook, BookOutline, CallOutline, MapOutline, LogoTiktok } from 'qwik-ionicons';
import Halal from '~/components/svg/Halal';

export default component$(() => {
  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center justify-center min-h-[100svh] pt-20">
      <div class="hidden sm:flex relative justify-start align-center mr-auto max-w-[50%]">
        <div class="absolute top-32 left-10 h-96 w-96">
          <Blobs color="yellow" />
        </div>
        <div class="z-10 animate-in fade-in slide-in-from-top-8 anim-duration-1000" style="max-width: 60%" >
          <Logo width={476} height={600} id="pc"/>
        </div>
      </div>
      <div class="text-center justify-center">
        <div class="flex sm:hidden relative justify-center align-center w-full mb-10">
          <div class="absolute -top-10 w-64 h-64">
            <Blobs color="yellow" />
          </div>
          <div class="z-10 animate-in fade-in slide-in-from-top-8 anim-duration-1000">
            <Icon width={160} id="mobile"/>
          </div>
        </div>
        <div class="flex items-end justify-center animate-in fade-in slide-in-from-top-16 sm:slide-in-from-top-8 anim-duration-1000">
          <h1 class="font-bold text-orange-100 text-3xl sm:text-5xl my-4 sm:mb-6" style="filter: drop-shadow(0 2rem 3rem rgba(251, 146, 60, 0.5));">
            The <span class="text-amber-500">burgers</span><br/>you are <span class="text-orange-300">craving.</span>
          </h1>
          <p class="mb-6 sm:mb-10">™</p>
        </div>
        <p class="text-gray-400 mx-6 md:mx-20 text-lg md:text-xl animate-in fade-in slide-in-from-top-24 sm:slide-in-from-top-16 anim-duration-1000">
          Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. Only serving Halal حلال<br/>
          est. 2019
        </p>
        <div class="flex flex-col gap-1.5 sm:gap-2 mt-10 min-h-[11.25rem] font-futura">
          <div class="flex gap-1.5 sm:gap-2 justify-center animate-in fade-in slide-in-from-top-32 sm:slide-in-from-top-24 anim-duration-1000">
            <Link href="/menu">
              <Button size="xl" mobilesize="sm" class={{
                'bg-gradient-to-b from-burger-100/80 to-burger-200/80 hover:bg-burger-100 border-none': true,
              }}>
                <BookOutline width="24" class="fill-current" /> View the menu
              </Button>
            </Link>
            <Link href="/halal">
              <Button size="xl" mobilesize="sm" class={{
                'bg-gradient-to-b from-burger-100/80 to-burger-200/80 hover:bg-burger-100 border-none': true,
              }}>
                <Halal width="24" class="fill-current" /> Halal
              </Button>
            </Link>
          </div>
          <div class="flex gap-1.5 sm:gap-2 justify-center animate-in fade-in slide-in-from-top-40 sm:slide-in-from-top-32 anim-duration-1000">
            <ButtonAnchor href="tel:+1 (905) 427 4377" size="xl" mobilesize="sm" class={{
              'bg-gradient-to-b from-burger-200/80 to-burger-300/80 hover:bg-burger-200 border-none': true,
            }}>
              <CallOutline width="24" class="fill-current" /> +1 (905) 427 4377
            </ButtonAnchor>
            <ButtonAnchor href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" size="xl" mobilesize="sm"  class={{
              'bg-gradient-to-b from-burger-200/80 to-burger-300/80 hover:bg-burger-200 border-none': true,
            }}>
              <MapOutline width="24" class="fill-current" /> Google Maps
            </ButtonAnchor>
          </div>
          <div class="flex gap-1.5 sm:gap-2 justify-center animate-in fade-in slide-in-from-top-48 sm:slide-in-from-top-40 anim-duration-1000">
            <ButtonAnchor href="https://instagram.com/burgersonfleek.ca" size="xl" mobilesize="sm" class={{
              'bg-gradient-to-b from-burger-300/80 via-burger-300/80 to-pink-700/60 hover:bg-burger-300 border-none': true,
            }}>
              <LogoInstagram width="24" class="fill-current" /> Instagram
            </ButtonAnchor>
            <ButtonAnchor href="https://facebook.com/burgersonfleek.ca" size="xl" mobilesize="sm" class={{
              'bg-gradient-to-b from-burger-300/80 via-burger-300/80 to-indigo-700/60 hover:bg-burger-300 border-none': true,
            }}>
              <LogoFacebook width="24" class="fill-current" /> Facebook
            </ButtonAnchor>
            <ButtonAnchor href="https://tiktok.com/@burgersonfleek.ca" size="xl" mobilesize="sm" class={{
              'bg-gradient-to-b from-burger-300/80 via-burger-300/80 to-purple-700/60 hover:bg-burger-300 border-none': true,
            }}>
              <LogoTiktok width="24" class="fill-current" /> TikTok
            </ButtonAnchor>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Home',
};
