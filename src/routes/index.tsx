import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center justify-center" style="min-height: calc(100vh - 64px - 64px);">
      <div class="hidden sm:flex relative justify-start align-center mr-auto" style="max-width: 50%;">
        <div class="absolute top-10 left-10 w-72 h-72 bg-orange-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-2xl"></div>
        <div class="absolute top-10 right-10 w-72 h-72 bg-amber-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-2xl animation-delay-2000"></div>
        <div class="absolute bottom-5 left-32 w-72 h-72 bg-yellow-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-2xl animation-delay-4000"></div>
        <img class="z-10 animate-float ease-in-out" width={1024} src={`/logo.svg`} alt="Burgers on Fleek" />
      </div>
      <div class="text-center justify-center" style="filter: drop-shadow(0 2rem 10rem rgba(251, 146, 60, 0.5));">
        <div class="flex sm:hidden relative justify-center align-center mb-10" style="width: 100%;">
          <div class="absolute top-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-xl" style="left: 45%"></div>
          <div class="absolute top-10 w-32 h-32 bg-amber-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-xl animation-delay-2000" style="right: 50%"></div>
          <div class="absolute bottom-5 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-blob ease-in-out filter blur-xl animation-delay-4000" style="left: 40%"></div>
          <img class="z-10 animate-float ease-in-out" src="./logo.svg" style="max-width: 60%" alt="Burgers on Fleek" />
        </div>
        <h1 class="font-bold tracking-tight text-white text-3xl sm:text-5xl">
          Hours
        </h1>
        <p class="mt-5 text-2xl text-gray-400">
          Tuesday to Sunday<br/>
          12 PM to 8:45 PM<br/>
          Monday - CLOSED
        </p>
        <div class="flex justify-center mt-10">
          <div class="rounded-md shadow">
            <a href="/menu" class="flex transition duration-200 w-full items-center justify-center rounded-xl sm:rounded-3xl border border-transparent bg-amber-800 px-8 py-3 text-base font-bold text-gray-200 hover:bg-amber-700 md:py-4 md:px-10 md:text-lg">
              View the menu
            </a>
          </div>
        </div>
        <div class="mt-3 flex justify-center">
          <div class="rounded-md shadow">
            <a href="tel:+1 (905) 427 4377" class="flex transition duration-200 w-full items-center justify-center rounded-xl sm:rounded-3xl border border-transparent bg-amber-900/50 px-8 py-3 text-base font-medium text-gray-200 hover:bg-amber-900 md:py-4 md:px-10 md:text-lg whitespace-nowrap">
              +1 (905) 427 4377
            </a>
          </div>
          <div class="ml-3 rounded-md shadow">
            <a href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" class="flex transition duration-200 w-full items-center justify-center rounded-xl sm:rounded-3xl border border-transparent bg-amber-900/50 px-8 py-3 text-base font-medium text-gray-200 hover:bg-amber-900 md:py-4 md:px-10 md:text-lg whitespace-nowrap">
              Location
            </a>
          </div>
        </div>
        <div class="mt-3 flex justify-center ">
          <div class="mt-0 rounded-md shadow">
            <a href="https://instagram.com/burgersonfleek.ca" class="flex transition duration-200 w-full items-center justify-center rounded-xl sm:rounded-3xl border border-transparent bg-amber-900/20 px-8 py-3 text-base font-medium text-gray-200 hover:bg-amber-900/60 md:py-4 md:px-10 md:text-lg">
              Instagram
            </a>
          </div>
          <div class="mt-0 ml-3 rounded-md shadow">
            <a href="https://facebook.com/burgersonfleek.ca" class="flex transition duration-200 w-full items-center justify-center rounded-xl sm:rounded-3xl border border-transparent bg-amber-900/20 px-8 py-3 text-base font-medium text-gray-200 hover:bg-amber-900/60 md:py-4 md:px-10 md:text-lg">
              Facebook
            </a>
          </div>
        </div>
      </div>

    </section>
  );
});

export const head: DocumentHead = {
  title: 'Home',
};