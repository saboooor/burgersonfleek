import {
  component$,
  useContext,
  useSignal,
  useVisibleTask$,
} from '@qwik.dev/core';
import ChevronDown from 'lucide-icons-qwik/icons/ChevronDown';
import MapPin from 'lucide-icons-qwik/icons/MapPin';
import Star from 'lucide-icons-qwik/icons/Star';
import { GoogleDetailsContext } from '~/routes';

export default component$(() => {
  const GoogleDetails = useContext<any>(GoogleDetailsContext);

  return (
    <>
      <div class="flex flex-col gap-2 text-center">
        <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
          Guest Feedback
        </p>
        <h2 class="font-futura text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          See For{' '}
          <span class="from-burger-200 via-burger-400 bg-linear-to-r to-orange-400 bg-clip-text text-transparent">
            Yourself
          </span>
        </h2>
        <p class="text-lum-text-secondary mx-auto max-w-lg text-sm sm:text-base">
          Our guests love us! Real 5-star experiences and reviews from our
          Google community.
        </p>
      </div>
      <div class="relative my-10 flex w-full flex-wrap justify-evenly gap-4">
        {GoogleDetails.value.reviews?.map((review: any, index: number) => (
          <Review review={review} key={index} />
        ))}
      </div>
    </>
  );
});

const Review = component$(({ review }: { review: any }) => {
  const expanded = useSignal(false);
  const overflowing = useSignal(false);
  const textRef = useSignal<HTMLElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const el = textRef.value;
    if (el) {
      overflowing.value = el.scrollHeight > el.clientHeight + 1;
    }
  });

  if (review.rating < 4) return null;

  return (
    <div
      key={review.name}
      class="lum-card relative p-6 text-left backdrop-blur-md"
    >
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div class="flex flex-1 items-center gap-2">
          <img
            src={review.authorAttribution.photoUri}
            alt={review.authorAttribution.displayName}
            width={32}
            height={32}
          />
          <p class="text-lum-text text-base font-bold md:text-xl">
            {review.authorAttribution.displayName}
          </p>
        </div>
        <div class="flex">
          <div class="lum-grad-bg-lum-input-bg rounded-lum-2 flex gap-1 p-2">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} class="text-lum-accent h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p
        class={{
          'text-lum-text-secondary text-xs md:text-sm': true,
          'line-clamp-10': !expanded.value,
        }}
        ref={textRef}
      >
        {review.text.text}
      </p>
      <div class="flex items-end justify-between">
        <p class="text-left text-xs text-gray-400 md:text-sm">
          {review.relativePublishTimeDescription}
        </p>
        <div class="flex gap-1">
          <a
            href={review.googleMapsUri}
            target="_blank"
            class="lum-btn lum-btn-p-1 rounded-lum-2 lum-bg-transparent text-burger-200/75 text-xs md:text-sm"
          >
            <MapPin size={16} />
            Open in Google Maps
          </a>
          {overflowing.value && (
            <button
              class="lum-btn lum-btn-p-1 rounded-lum-2 lum-bg-transparent text-burger-200/75 cursor-pointer text-xs md:text-sm"
              onClick$={() => {
                expanded.value = !expanded.value;
              }}
            >
              <div
                class={{
                  'duration-300 motion-safe:transition-transform': true,
                  'rotate-180': expanded.value,
                }}
              >
                <ChevronDown size={16} />
              </div>
              Read {expanded.value ? 'less' : 'more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
});
