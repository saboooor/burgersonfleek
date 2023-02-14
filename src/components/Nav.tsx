import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import Icon from '~/components/svg/Icon';
import { HomeIcon, FileTextIcon } from "qwik-feather-icons";

export default component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen py-3 pointer-events-none drop-shadow-lg bg-gray-900/60 backdrop-blur-lg sm:backdrop-blur-none sm:bg-transparent">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="relative flex h-16 items-center justify-between ">
          <div class="flex flex-1 items-center sm:items-stretch justify-start">
            <Link href="/" class="transition duration-200 pointer-events-auto text-gray-300 sm:bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 pl-3 pr-4 py-2 rounded-lg text-lg flex items-center whitespace-nowrap">
              <Icon width={32} height={32} /> <span class="font-bold mr-1 ml-4">BURGERS</span> ON FLEEK
            </Link>
          </div>
          <div class="flex flex-1 items-center justify-end sm:items-stretch">
            <div class="sm:ml-6 sm:block">
              <div class="pointer-events-auto flex gap-2 text-gray-300">
                <Link href="/" class="transition duration-200 hidden sm:bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4"><HomeIcon/>Home</Link>
                <Link href="/menu" class="transition duration-200 sm:bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold flex items-center gap-4"><FileTextIcon/>Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});
