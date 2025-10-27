import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Star } from 'lucide-icons-qwik';

export default component$(() => {
  const reviews = useSignal<any[]>([]);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    // load reviews from api
    const res = await fetch('https://api.burgersonfleek.ca/details');
    reviews.value = (await res.json() as any).reviews;
    console.log(reviews.value);
  });

  return (
    <div class="flex flex-wrap justify-evenly relative w-full my-10 gap-4">
      {reviews.value.map((review: any) => (
        <a href={review.googleMapsUri} key={review.name} class="lum-card lum-bg-gray-900/50 relative text-left p-6 backdrop-blur-lg lum-hoverable">
          <div class="flex sm:flex-row flex-col sm:items-center gap-4">
            <div class="flex-1 flex items-center gap-2">
              <img src={review.authorAttribution.photoUri} alt={review.authorAttribution.displayName} width={32} height={32}  />
              <h3 class="text-lum-text text-base md:text-xl font-bold">
                {review.authorAttribution.displayName}
              </h3>
            </div>
            <div class="flex">
              <div class={'flex gap-1 lum-bg-gray-800/50 p-2 rounded-lum-2'}>
                {[...Array(review.rating)].map((_, i) =>
                  <Star key={i} class="w-4 h-4 fill-current text-burger-400" />,
                )}
              </div>
            </div>
          </div>
          <p class="text-lum-text-secondary text-xs md:text-sm">
            {review.text.text}
          </p>
          <p class="text-gray-600 text-xs md:text-sm">
            {review.relativePublishTimeDescription}
          </p>
        </a>
      ))}
    </div>
  );
});