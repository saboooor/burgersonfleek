import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <nav class="z-10 fixed top-0 w-screen my-3 pointer-events-none">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center sm:items-stretch justify-start">
            <Link href="/" class="transition duration-200 pointer-events-auto text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl pl-2 pr-3 py-2 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
              <img class="h-8 w-8 mr-3" src={`/icon.svg`} alt="Burgers On Fleek" />
              Burgers on Fleek
            </Link>
          </div>
          <div class="flex flex-1 items-center justify-end sm:items-stretch">
            <div class="sm:ml-6 sm:block">
              <div class="pointer-events-auto flex space-x-4">
                <Link href="/" class="transition duration-200 hidden sm:flex text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium">Home</Link>
                <Link href="/menu" class="transition duration-200 text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium">Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});
