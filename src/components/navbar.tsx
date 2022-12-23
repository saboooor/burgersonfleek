import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen my-3 pointer-events-none">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center sm:items-stretch justify-start">
            <a href="/" class="transition duration-200 pointer-events-auto text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl pl-2 pr-3 py-2 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
              <img class="h-8 w-8 mr-3" src={`/icon.svg`} alt="Burgers On Fleek" />
              Burgers on Fleek
            </a>
          </div>
          <div class="flex flex-1 items-center justify-end sm:items-stretch">
            <div class="sm:ml-6 sm:block">
              <div class="pointer-events-auto flex space-x-4">
                <a href="/" class="transition duration-200 hidden sm:flex text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium">Home</a>
                <a href="/menu" class="transition duration-200 text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium">Menu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});
