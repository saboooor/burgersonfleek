import { component$, useContext, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { ChevronDown, MapPin, Star } from 'lucide-icons-qwik';
import { GoogleDetailsContext } from '~/routes';

export default component$(() => {
  const GoogleDetails = useContext<any>(GoogleDetailsContext);

  return <>
    <div class="flex">
      <h1 class="font-semibold text-white text-3xl sm:text-5xl my-4 sm:mb-8">
        See for <span class="text-burger-300">yourself.</span>
      </h1>
    </div>
    <p class="text-lum-text-secondary text-lg md:text-xl">
      Our guests love us! Check out our reviews on Google.
    </p>
    <div class="flex flex-wrap justify-evenly relative w-full my-10 gap-4">
      {GoogleDetails.value.reviews?.map((review: any, index: number) => <Review review={review} key={index} />)}
    </div>
  </>;
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

  return <div key={review.name} class="lum-card lum-bg-gray-900/50 relative text-left p-6 backdrop-blur-md">
    <div class="flex sm:flex-row flex-col sm:items-center gap-4">
      <div class="flex-1 flex items-center gap-2">
        <img src={review.authorAttribution.photoUri} alt={review.authorAttribution.displayName} width={32} height={32}  />
        <p class="text-lum-text text-base md:text-xl font-bold">
          {review.authorAttribution.displayName}
        </p>
      </div>
      <div class="flex">
        <div class="flex gap-1 lum-bg-gray-700 p-2 rounded-lum-2">
          {[...Array(review.rating)].map((_, i) =>
            <Star key={i} class="w-4 h-4 fill-current text-lum-accent" />,
          )}
        </div>
      </div>
    </div>
    <p class={{
      'text-lum-text-secondary text-xs md:text-sm': true,
      'line-clamp-10': !expanded.value,
    }} ref={textRef}>
      {review.text.text}
    </p>
    <div class="flex justify-between items-end">
      <p class="text-gray-400 text-xs md:text-sm text-left">
        {review.relativePublishTimeDescription}
      </p>
      <div class="flex gap-1">
        <a href={review.googleMapsUri} target="_blank" class="lum-btn lum-btn-p-1 rounded-lum-2 text-xs md:text-sm lum-bg-transparent text-burger-200/75">
          <MapPin size={16} />
          Open in Google Maps
        </a>
        {overflowing.value &&
          <button class="lum-btn lum-btn-p-1 rounded-lum-2 text-xs md:text-sm lum-bg-transparent text-burger-200/75 cursor-pointer"
            onClick$={() => { expanded.value = !expanded.value; }}>
            <div
              class={{
                'transition-transform duration-300': true,
                'rotate-180': expanded.value,
              }}
            >
              <ChevronDown size={16} />
            </div>
            Read {expanded.value ? 'less' : 'more'}
          </button>
        }
      </div>
    </div>
  </div>;
});