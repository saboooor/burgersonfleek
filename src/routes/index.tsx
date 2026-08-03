import {
  component$,
  createContextId,
  useContextProvider,
  useSignal,
  useTask$,
} from '@qwik.dev/core';
import { Link, routeLoader$ } from '@qwik.dev/router';

import Cutout from '~/components/images/Cutout.png?jsx';
import LogoHorizontal from '~/components/svg/LogoHorizontal';
import Halal from '~/components/svg/Halal';
import BookOpen from 'lucide-icons-qwik/icons/BookOpen';
import ChevronDown from 'lucide-icons-qwik/icons/ChevronDown';
import Gift from 'lucide-icons-qwik/icons/Gift';
import MapPin from 'lucide-icons-qwik/icons/MapPin';
import Phone from 'lucide-icons-qwik/icons/Phone';
import Reviews from '~/components/sections/Reviews';
import HalalSection from '~/components/sections/Halal';
import { generateHead } from '~/root';
import Popup from '~/components/Popup';
import { getPlaceDetails } from '~/components/GoogleMaps';

const videos = [
  '/videos/godzilla.mp4',
  '/videos/shook.mp4',
  '/videos/5years.mp4',
  '/videos/brisket.mp4',
];

export const useGoogleDetails = routeLoader$(async (requestEvent) =>
  getPlaceDetails(requestEvent)
);
export const GoogleDetailsContext =
  createContextId<ReturnType<typeof useGoogleDetails>>('google-details');
export default component$(() => {
  const GoogleDetails = useGoogleDetails();
  useContextProvider(GoogleDetailsContext, GoogleDetails);
  const videoRef = useSignal<HTMLVideoElement>();

  useTask$(({ track }) => {
    track(() => videoRef.value);

    const video = videoRef.value;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
  });

  const twelveHrs = 12 * 60 * 60 * 1000;
  const fifteenMins = 15 * 60 * 1000;
  const nextCloseTime = new Date(
    new Date(GoogleDetails.value.currentOpeningHours?.nextCloseTime).getTime() -
      fifteenMins
  );
  const nextOpenTime = new Date(
    GoogleDetails.value.currentOpeningHours?.nextOpenTime
  );
  const now = Date.now();

  const closeTime = nextCloseTime.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
    second: undefined,
    timeZone: 'America/Toronto',
  });

  const openTimeMoreThanTwelveHrsAway =
    nextOpenTime.getTime() - now > twelveHrs;
  const openTime = nextOpenTime.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    second: undefined,
    timeZone: 'America/Toronto',
  });
  const openDate = nextOpenTime.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/Toronto',
  });

  return (
    <>
      <video
        class={{
          'fullscreen-bg animate-in fade-in opacity-25': true,
        }}
        autoplay
        playsInline
        muted
        ref={videoRef}
        loop
        preload="auto"
      >
        <source
          src={videos[Math.floor(Math.random() * videos.length)]}
          type="video/mp4"
        />
      </video>
      <section class="mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center gap-4 px-6 pt-20 sm:flex-row">
        <div class="animate-in fade-in motion-safe:slide-in-from-top-16 flex flex-col items-center gap-4 motion-safe:duration-600">
          <LogoHorizontal
            size={600}
            height={250}
            id="pc"
            class="hidden sm:flex"
          />
          <LogoHorizontal
            size={300}
            height={125}
            id="mobile"
            class="flex sm:hidden"
          />
          <Cutout class="max-w-3/4 drop-shadow-md sm:max-w-150" />
        </div>
        <div class="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 class="font-futura animate-in fade-in motion-safe:slide-in-from-top-16 text-2xl/6 font-bold! tracking-tighter uppercase motion-safe:duration-700 sm:text-3xl/8 md:text-4xl/10">
            The{' '}
            <span class="from-burger-200 via-burger-400 bg-linear-to-br to-orange-100 bg-clip-text! text-transparent">
              burgers
            </span>{' '}
            <br class="hidden sm:block" />
            you are{' '}
            <span class="from-burger-400 via-burger-200 to-burger-600 bg-linear-to-br bg-clip-text! text-transparent">
              craving.
            </span>
            <span class="align-top text-lg">™</span>
          </h1>
          <p class="text-lum-text-secondary animate-in fade-in motion-safe:slide-in-from-top-16 mt-2 motion-safe:duration-800 md:text-lg">
            Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more.
            est. 2019
          </p>

          <div class="my-2 flex flex-col gap-1 text-left">
            <div class="animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-900">
              <Link
                href="/halal"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1"
              >
                <Halal class="mr-2 w-5 sm:w-auto" />
                Only serving Halal
              </Link>
            </div>
            <div class="animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-1000">
              <a
                data-umami-event="phone"
                href="tel:+1 (905) 427 4377"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1"
              >
                <Phone strokeWidth={1} class="mr-2 w-5 sm:w-auto" />
                +1 (905) 427 4377
              </a>
            </div>
            <div class="animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-1100">
              <a
                data-umami-event="maps"
                target="_blank"
                href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1"
              >
                <MapPin strokeWidth={1} class="mr-2 w-5 sm:w-auto" />
                135 Harwood Ave N, Ajax, ON
              </a>
            </div>
            <div class="animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-1200">
              <a
                data-umami-event="giftcard"
                target="_blank"
                href="https://order.toasttab.com/egiftcards/burgers-on-fleek-135-harwood-ave-n-unit-b212"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1"
              >
                <Gift strokeWidth={1} class="mr-2 w-5 sm:w-auto" />
                Generous Mood?{' '}
                <span class="text-lum-accent underline">Order gift cards</span>
              </a>
            </div>
            <div class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! animate-in fade-in motion-safe:slide-in-from-top-16 min-h-13.5 motion-safe:duration-1300">
              {GoogleDetails.value.currentOpeningHours?.openNow !==
                undefined && (
                <div class="*:animate-in *:fade-in *:motion-safe:duration-800">
                  {nextCloseTime.getTime() < now ||
                  GoogleDetails.value.currentOpeningHours?.openNow === false ? (
                    <p class="flex items-center gap-2 font-medium text-red-200/80">
                      <span class="lum-grad-bg-red-300 h-2 w-2 rounded-full" />
                      We're closed at the moment.
                    </p>
                  ) : (
                    <p class="flex items-center gap-2 font-medium text-green-200/80">
                      <span class="lum-grad-bg-green-300 h-2 w-2 rounded-full" />
                      We're open, come on in!
                    </p>
                  )}
                  {GoogleDetails.value.currentOpeningHours?.openNow && (
                    <p class="text-lum-text-secondary text-sm">
                      closing at {closeTime}
                    </p>
                  )}
                  {!GoogleDetails.value.currentOpeningHours?.openNow && (
                    <p class="text-lum-text-secondary text-sm">
                      opening{' '}
                      {openTimeMoreThanTwelveHrsAway && `on ${openDate}`}{' '}
                      {`at ${openTime}`}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div class="font-futura flex flex-col items-center gap-1 sm:items-start sm:gap-2">
            <Popup
              class={{
                'animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-1400': true,
              }}
              types={['order']}
            />
            <div class="animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:duration-1500">
              <Link
                href="/menu"
                class={{
                  'lum-btn lum-btn-p-3 sm:text-lg': true,
                  'hover:text-lum-text! active:text-lum-text border-none': true,
                  'lum-grad-bg-burger-600 from-burger-600 to-burger-700 hover:from-burger-500 active:from-burger-500 bg-linear-to-b': true,
                }}
                onClick$={() => {
                  window.umami?.track('menu');
                }}
              >
                <BookOpen strokeWidth={1} class="w-5 sm:mr-1 sm:w-auto" /> View
                the menu
              </Link>
            </div>

            <div class="text-burger-200 mt-2 flex w-full animate-bounce justify-center">
              <a
                href="#reviews"
                class="lum-btn lum-bg-transparent p-2"
                title="Learn more"
              >
                <ChevronDown />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="reviews"
        class="mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <Reviews />
      </section>

      <section
        id="halal"
        class="mx-auto mt-20 flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <HalalSection />
      </section>
    </>
  );
});

export const head = generateHead({
  title: 'Burgers on Fleek',
});
