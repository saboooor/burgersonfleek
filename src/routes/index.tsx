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
    <section class="flex flex-col sm:flex-row mx-auto max-w-5xl px-6 items-center justify-center min-h-svh pt-24">
      <div class="flex animate-in fade-in slide-in-from-top-16 anim-duration-600">
        <Logo size={476} height={600} id="pc" class="hidden sm:flex"/>
      </div>
      <div class="flex flex-col sm:items-start sm:text-left items-center text-center">
        <LogoHorizontal size={216} height={75} id="mobile" class="sm:hidden mx-auto mb-6 animate-in fade-in slide-in-from-top-16 anim-duration-600" />

        <h1 class="font-bold text-white text-2xl sm:text-4xl mb-2 animate-in fade-in slide-in-from-top-16 anim-duration-700">
          The <span class="text-lum-accent">burgers</span><br/>you are <span class="text-burger-300">craving.</span><span class="text-lg align-top">™</span>
        </h1>
        <p class="text-lum-text-secondary text-sm md:text-lg animate-in fade-in slide-in-from-top-16 anim-duration-800">
          Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. est. 2019
        </p>

        <div class="flex flex-col gap-1 my-2 text-left">
          <div class="animate-in fade-in slide-in-from-top-16 anim-duration-900">
            <Link href="/halal" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 text-lum-text-secondary! rounded-lum-1">
              <Halal class="w-5 sm:w-auto mr-2" />
              Only serving Halal
            </Link>
          </div>
          <div class="animate-in fade-in slide-in-from-top-16 anim-duration-1000">
            <a data-umami-event="phone" href="tel:+1 (905) 427 4377" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 text-lum-text-secondary! rounded-lum-1">
              <Phone strokeWidth={1} class="w-5 sm:w-auto mr-2" />
              +1 (905) 427 4377
            </a>
          </div>
          <div class="animate-in fade-in slide-in-from-top-16 anim-duration-1100">
            <a data-umami-event="maps" target="_blank" href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 text-lum-text-secondary! rounded-lum-1">
              <MapPin strokeWidth={1} class="w-5 sm:w-auto mr-2" />
              135 Harwood Ave N, Ajax, ON
            </a>
          </div>
          <div class="animate-in fade-in slide-in-from-top-16 anim-duration-1200">
            <a data-umami-event="giftcard" target="_blank" href="https://order.toasttab.com/egiftcards/burgers-on-fleek-135-harwood-ave-n-unit-b212" class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 text-lum-text-secondary! rounded-lum-1">
              <Gift strokeWidth={1} class="w-5 sm:w-auto mr-2" />
              Generous Mood? <span class="text-lum-accent underline">Order gift cards</span>
            </a>
          </div>
          <div class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-gray-900/50 text-lum-text-secondary! min-h-13.5 animate-in fade-in slide-in-from-top-16 anim-duration-1300">
            {GoogleDetails.value.currentOpeningHours?.openNow !== undefined &&
              <div class="*:animate-in *:fade-in *:anim-duration-800">
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

        <div class="flex flex-col items-center sm:items-start gap-1 sm:gap-2 font-futura">
          <OrderPopup class={{
            'animate-in fade-in slide-in-from-top-16 anim-duration-1400': true,
          }} />
          <div class="animate-in fade-in slide-in-from-top-16 anim-duration-1500">
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
          <div class="mt-4 w-full flex justify-center animate-bounce text-burger-200">
            <a href="#reviews" class="lum-btn lum-bg-transparent p-2">
              <ChevronDown />
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
