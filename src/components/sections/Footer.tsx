import { component$ } from '@builder.io/qwik';
import { SocialButtons } from '../Nav';

export default component$(() => {
  return (
    <footer class="items-center justify-center z-10 lum-card lum-bg-gray-950 m-4 backdrop-blur-md p-6 text-lum-text-secondary flex-col sm:flex-row gap-2 sm:gap-8 mt-20">
      <p>
        We are not fast food.
        <br />
        All our food is made fresh, and it can take a minimum of 15 minutes to complete your order.
        <br />
        All our food is cooked to the internal temperature required by the CFIA.
        <br />
        If you have any food allergies, please advise us before ordering.
      </p>

      <div class="flex flex-col text-center items-center sm:text-end sm:items-end gap-2">
        <div class="flex gap-2">
          <SocialButtons />
        </div>
        <div>
          <p class="text-xs md:text-sm">
            Contact us at <a href="mailto:eat@burgersonfleek.ca" class="underline">eat@burgersonfleek.ca</a>
          </p>
          <p class="text-xs md:text-sm">
            © Copyright {new Date().getFullYear()} Burgers on Fleek - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
