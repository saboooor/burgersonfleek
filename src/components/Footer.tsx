import { component$ } from '@builder.io/qwik';
import { SocialButtons } from './Nav';

export default component$(() => {
  return (
    <footer class="items-center justify-center z-10 bg-gray-900/50 backdrop-blur-xl border-t border-t-gray-800">
      <div class="max-w-7xl flex flex-col sm:flex-row gap-2 sm:gap-8 items-center mx-auto py-8 px-2">
        <p class="sm:text-xl sm:text-left text-center">
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
              © Copyright {new Date().getFullYear()} Burgers on Fleek - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});
