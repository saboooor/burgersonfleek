import { component$, createContextId, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

import Logo from '~/components/svg/Logo';
import LogoHorizontal from '~/components/svg/LogoHorizontal';
import Halal from '~/components/svg/Halal';
import { BookOpen, ChevronDown, Gift, MapPin, Phone } from 'lucide-icons-qwik';
import OrderPopup from '~/components/OrderPopup';
import Reviews from '~/components/sections/Reviews';
import HalalSection from '~/components/sections/Halal';

export const GoogleDetailsContext = createContextId<any>('google-details');
export default component$(() => {
  const GoogleDetails = useSignal<any>({});
  useContextProvider(GoogleDetailsContext, GoogleDetails);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    // load reviews from api
    const res = await fetch('https://api.burgersonfleek.ca/details?placeId=ChIJGwNrpL7f1IkRam5-B2BHkw4');
    GoogleDetails.value = await res.json() as any;
  });

  return <>
    <section class="flex flex-col sm:flex-row mx-auto max-w-5xl px-6 items-center justify-center min-h-svh pt-20">
      <div class="flex">
        <div class="z-10 animate-in fade-in slide-in-from-top-16 anim-duration-800">
          <Logo size={476} height={600} id="pc" class="hidden sm:flex"/>
          <LogoHorizontal size={288} height={100} id="mobile" class="sm:hidden" />
        </div>
      </div>
      <div class="flex flex-col items-center sm:items-start text-center sm:text-left">
        <div class="flex animate-in fade-in slide-in-from-top-16 sm:slide-in-from-top-8 anim-duration-800">
          <h1 class="font-bold text-white text-3xl sm:text-5xl my-6">
            The <span class="text-burger-500 gold-text">burgers</span><br/>you are <span class="text-burger-300">craving.</span><span class="text-lg align-top">™</span>
          </h1>
        </div>
        <p class="text-lum-text text-lg md:text-xl animate-in fade-in slide-in-from-top-24 sm:slide-in-from-top-16 anim-duration-800">
          Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. est. 2019
        </p>

        <div class="flex flex-col gap-1 mt-2 text-left">
          <div class="flex gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-top-32 sm:slide-in-from-top-24 anim-duration-800">
            <a href="/halal" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 text-lum-text-secondary! rounded-lum-1">
              <Halal class="w-5 sm:w-auto sm:mr-1" />
              Only serving Halal
            </a>
          </div>
          <div class="flex gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-top-40 sm:slide-in-from-top-32 anim-duration-800">
            <a data-umami-event="phone" href="tel:+1 (905) 427 4377" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 text-lum-text-secondary! rounded-lum-1">
              <Phone strokeWidth={1} class="w-5 sm:w-auto sm:mr-1" />
              +1 (905) 427 4377
            </a>
          </div>
          <div class="flex gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-top-48 sm:slide-in-from-top-40 anim-duration-800">
            <a data-umami-event="maps" target="_blank" href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 text-lum-text-secondary! rounded-lum-1">
              <MapPin strokeWidth={1} class="w-5 sm:w-auto sm:mr-1" />
              135 Harwood Ave N, Ajax, ON
            </a>
          </div>
          <div class="flex gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-top-56 sm:slide-in-from-top-48 anim-duration-800">
            <a data-umami-event="giftcard" target="_blank" href="https://order.toasttab.com/egiftcards/burgers-on-fleek-135-harwood-ave-n-unit-b212" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 text-lum-text-secondary! rounded-lum-1">
              <Gift strokeWidth={1} class="w-5 sm:w-auto sm:mr-1" />
              Generous Mood? <span class="text-burger-400 underline">Order gift cards</span>
            </a>
          </div>
          <div class="min-h-15.5 flex gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-top-64 sm:slide-in-from-top-56 anim-duration-800">
            {GoogleDetails.value.currentOpeningHours?.openNow !== undefined &&
              <div class="*:animate-in *:fade-in *:anim-duration-400 w-fit lum-btn-p-1">
                {GoogleDetails.value.currentOpeningHours?.nextCloseTime?.seconds * 1000 - (15 * 60 * 1000) < Date.now()
                || GoogleDetails.value.currentOpeningHours?.openNow === false ?
                  <p class="flex items-center gap-2 text-red-200/80 font-medium">
                    <span class="w-2 h-2 rounded-full lum-bg-red-300" />
                    We're closed at the moment.
                  </p>
                  :
                  <p class="flex items-center gap-2 text-green-200/80 font-medium">
                    <span class="w-2 h-2 rounded-full lum-bg-green-300" />
                    We're open, come on in!
                  </p>
                }
                {GoogleDetails.value.currentOpeningHours?.openNow &&
                  <p class="text-lum-text-secondary text-sm">
                    closing at {new Date(GoogleDetails.value.currentOpeningHours?.nextCloseTime?.seconds * 1000 - (15 * 60 * 1000))
                      .toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: undefined,
                      })}
                  </p>
                }
                {!GoogleDetails.value.currentOpeningHours?.openNow &&
                  <p class="text-lum-text-secondary text-sm">
                    opening at {new Date(GoogleDetails.value.currentOpeningHours?.nextOpenTime?.seconds * 1000)
                      .toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: undefined,
                      })}
                  </p>
                }
              </div>
            }
          </div>
        </div>

        <div class="flex flex-col items-center sm:items-start gap-1 sm:gap-2 mt-2 font-futura animate-in fade-in slide-in-from-top-72 sm:slide-in-from-top-64 anim-duration-800">
          <OrderPopup />
          <div class="flex gap-1 sm:gap-1.5">
            <Link href="/menu" class={{
              'lum-btn lum-btn-p-3 sm:text-lg': true,
              'hover:text-lum-text! active:text-lum-text border-none': true,
              'lum-bg-burger-600 bg-linear-to-b from-burger-600 to-burger-700 hover:from-burger-500 active:from-burger-500': true,
            }} onClick$={() => {
              window.umami?.track('menu');
            }}>
              <BookOpen strokeWidth={1} class="w-5 sm:w-auto sm:mr-1" /> View the menu
            </Link>
          </div>
          <div class="mt-6 w-full flex justify-center animate-bounce text-burger-200">
            <a href="#reviews" class="lum-btn lum-bg-transparent">
              <ChevronDown /> Learn More
            </a>
          </div>
        </div>
      </div>

    </section>

    <section id="reviews" class="flex flex-col items-center text-center mx-auto max-w-5xl px-6">
      <Reviews />
    </section>

    <section id="halal" class="flex flex-col items-center text-center mx-auto max-w-5xl px-6 mt-20">
      <HalalSection />
    </section>
  </>;
});

export const head: DocumentHead = {
  title: 'Home',
};
