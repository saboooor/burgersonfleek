import { component$ } from '@qwik.dev/core';
import { SocialButtons } from '../Nav';

export default component$(() => {
  return (
    <footer class="lum-card text-lum-text-secondary z-10 m-4 mt-20 flex-col items-center justify-center gap-2 p-6 sm:flex-row sm:gap-8">
      <p>
        We are not fast food.
        <br />
        All our food is made fresh, and it can take a minimum of 15 minutes to
        complete your order.
        <br />
        All our food is cooked to the internal temperature required by the CFIA.
        <br />
        If you have any food allergies, please advise us before ordering.
      </p>

      <div class="flex flex-col items-center gap-2 text-center sm:items-end sm:text-end">
        <div class="flex gap-2">
          <SocialButtons />
        </div>
        <div>
          <p class="text-xs md:text-sm">
            Contact us at{' '}
            <a href="mailto:eat@burgersonfleek.ca" class="underline">
              eat@burgersonfleek.ca
            </a>
          </p>
          <p class="text-xs md:text-sm">
            © Copyright {new Date().getFullYear()} Burgers on Fleek - All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
