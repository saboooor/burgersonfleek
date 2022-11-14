import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import drinks from '../../menuitems/drinks.json';
import extras from '../../menuitems/extras.json';
import sides from '../../menuitems/sides.json';
import meatburgers from '../../menuitems/meatburgers.json';
import steaksandwiches from '../../menuitems/steaksandwiches.json';
import veggieburgers from '../../menuitems/veggieburgers.json';

export default component$(() => {
  return (
    <>
        <section class="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto max-w-screen-2xl px-4 sm:px-6 pt-12" style="min-height: calc(100vh - 64px);">
            <aside class="w-full sm:h-1 align-middle sm:sticky sm:top-28" aria-label="Sidebar">
                <p class="text-3xl font-bold mb-5 text-white">Menu</p>
                <div class="overflow-y-auto py-4 px-3 rounded-2xl bg-gray-800">
                    <ul class="space-y-2">
                        <li>
                            <a href="#beefburgers" class="flex flex-1 items-center p-2 text-base font-normal rounded-xl text-white hover:bg-gray-700 transition duration-200">
                                Beef & Chicken Burgers
                            </a>
                        </li>
                        <li>
                            <a href="#veggieburgers" class="flex flex-1 items-center p-2 text-base font-normal rounded-xl text-white hover:bg-gray-700 transition duration-200">
                                Vegetarian Burgers
                            </a>
                        </li>
                        <li>
                            <a href="#steaksandwiches" class="flex flex-1 items-center p-2 text-base font-normal rounded-xl text-white hover:bg-gray-700 transition duration-200">
                                Steak Sandwiches
                            </a>
                        </li>
                        <li>
                            <a href="#extras" class="flex flex-1 items-center p-2 text-base font-normal rounded-xl text-white hover:bg-gray-700 transition duration-200">
                                Extras
                            </a>
                        </li>
                        <li>
                            <a href="#sides" class="flex flex-1 items-center p-2 text-base font-normal rounded-xl text-white hover:bg-gray-700 transition duration-200">
                                Sides
                            </a>
                        </li>
                        <li>
                            <a href="#drinks" class="flex flex-1 items-center p-2 text-base font-normal rounded-xl text-white hover:bg-gray-700 transition duration-200">
                                Drinks
                            </a>
                        </li>
                        <li>
                            <a href="/menu.jpeg" class="flex flex-1 items-center p-2 text-base font-normal rounded-xl text-white hover:bg-gray-700 transition duration-200">
                                View Paper Menu
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="sm:col-span-2 lg:col-span-3 2xl:col-span-4">
                <h1 class="font-bold tracking-tight text-white text-4xl transition duration-300 opacity-0 -translate-x-80 blur-md" id="beefburgers">Beef & Chicken Burgers</h1>
                <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
                    {meatburgers.map((meatburger, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300 opacity-0 -translate-x-80 blur-md" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{meatburger.name}</h1>
                                <p class="text-amber-400 text-md">{meatburger.price}</p>
                                {meatburger.double && <p class="text-gray-400 text-md">Double: <span class="text-amber-400">{meatburger.double}</span></p>}
                                <p class="text-gray-400 text-md mt-5">{meatburger.description}</p>
                            </div>
                        )
                    })}
                </div>
                <h1 class="font-bold tracking-tight text-white text-4xl transition duration-300 opacity-0 -translate-x-80 blur-md" id="veggieburgers">Vegetarian Burgers</h1>
                <div class="grid grid-cols-2 gap-6 py-10">
                    {veggieburgers.map((veggieburger, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300 opacity-0 -translate-x-80 blur-md" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{veggieburger.name}</h1>
                                <p class="text-amber-400 text-md">{veggieburger.price}</p>
                                <p class="text-gray-400 text-md mt-5">{veggieburger.description}</p>
                            </div>
                        )
                    })}
                </div>
                <h1 class="font-bold tracking-tight text-white text-4xl transition duration-300 opacity-0 -translate-x-80 blur-md" id="steaksandwiches">Steak Sandwiches</h1>
                <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                    {steaksandwiches.map((steaksandwich, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300 opacity-0 -translate-x-80 blur-md" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{steaksandwich.name}</h1>
                                <p class="text-amber-400 text-md">{steaksandwich.price}</p>
                                <p class="text-gray-400 text-md mt-5">{steaksandwich.description}</p>
                            </div>
                        )
                    })}
                </div>
                <h1 class="font-bold tracking-tiught text-white text-4xl transition duration-300 opacity-0 -translate-x-80 blur-md" id="extras">Extras</h1>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-10">
                    {extras.map((extra, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300 opacity-0 -translate-x-80 blur-md" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{extra.name}</h1>
                                <p class="text-amber-400 text-md">{extra.price}</p>
                            </div>
                        )
                    })}
                </div>
                <h1 class="font-bold tracking-tiught text-white text-4xl transition duration-300 opacity-0 -translate-x-80 blur-md" id="sides">Sides</h1>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-10">
                    {sides.map((side, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300 opacity-0 -translate-x-80 blur-md" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{side.name}</h1>
                                <p class="text-gray-400 text-md">
                                    Medium: <span class="text-amber-400">{side.price.medium}</span><br/>
                                    Large: <span class="text-amber-400">{side.price.large}</span>
                                </p>
                            </div>
                        )
                    })}
                </div>
                <h1 class="font-bold tracking-tight text-white text-4xl transition duration-300 opacity-0 -translate-x-80 blur-md" id="drinks">Drinks</h1>
                <div class="grid grid-cols-2 gap-6 py-10">
                    {drinks.map((drink, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300 opacity-0 -translate-x-80 blur-md" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{drink.name}</h1>
                                <p class="text-amber-400 text-md">{drink.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <script src="/scroll.js" />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Menu',

};
