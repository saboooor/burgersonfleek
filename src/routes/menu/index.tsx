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
            <aside class="z-10 w-full sm:h-1 align-middle sm:sticky sm:top-28" aria-label="Sidebar">
                <p class="text-3xl font-bold mb-5 text-orange-300" style={{ filter: 'drop-shadow(0 0.5rem 2rem rgba(253, 186, 116, 1));' }}>Menu</p>
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
                            <a href="/menu.pdf" class="flex flex-1 items-center p-2 text-base font-normal rounded-xl text-white hover:bg-gray-700 transition duration-200">
                                View Paper Menu
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="sm:col-span-2 lg:col-span-3 2xl:col-span-4">
                <h1 class="font-bold tracking-tight text-orange-300 text-4xl transition duration-300" id="beefburgers" style={{ filter: 'drop-shadow(0 0.5rem 3rem rgba(253, 186, 116, 1));' }}>Beef & Chicken Burgers</h1>
                <h2 class="text-gray-400 text-xl transition duration-300">* Make it a combo with fries and pop for $5.50</h2>
                <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10 pb-6">
                    {meatburgers.map((meatburger, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{meatburger.name}</h1>
                                <p class="text-amber-400 text-md">{meatburger.price}</p>
                                {meatburger.double && <p class="text-gray-400 text-md">Double: <span class="text-amber-400">{meatburger.double}</span></p>}
                                <p class="text-gray-400 text-md mt-5">{meatburger.description}</p>
                            </div>
                        )
                    })}
                </div>
                <h2 class="text-gray-400 text-md transition duration-300">* Our beef burgers are made with premium quality meat, cut & grounded in-house & handpressed on the grill.</h2>
                <h2 class="text-gray-400 text-md transition duration-300 pb-10">* Our chicken burgers are made using boneless leg/thigh marinated in our special spice blend (mild spicy) & deep fried.</h2>
                <h1 class="font-bold tracking-tight text-orange-300 text-4xl transition duration-300" id="veggieburgers" style={{ filter: 'drop-shadow(0 0.5rem 3rem rgba(253, 186, 116, 1));' }}>Vegetarian Burgers</h1>
                <h2 class="tracking-tight text-gray-400 text-xl transition duration-300" id="beefburgers">* Make it a combo with fries and pop for $5.25</h2>
                <div class="grid grid-cols-2 gap-6 py-10">
                    {veggieburgers.map((veggieburger, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{veggieburger.name}</h1>
                                <p class="text-amber-400 text-md">{veggieburger.price}</p>
                                <p class="text-gray-400 text-md mt-5">{veggieburger.description}</p>
                            </div>
                        )
                    })}
                </div>
                <h1 class="font-bold tracking-tight text-orange-300 text-4xl transition duration-300" id="steaksandwiches">Steak Sandwiches</h1>
                <h2 class="tracking-tight text-gray-400 text-xl transition duration-300" id="beefburgers" style={{ filter: 'drop-shadow(0 0.5rem 3rem rgba(253, 186, 116, 1));' }}>* Make it a combo with fries and pop for $5.25</h2>
                <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                    {steaksandwiches.map((steaksandwich, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{steaksandwich.name}</h1>
                                <p class="text-amber-400 text-md">{steaksandwich.price}</p>
                                <p class="text-gray-400 text-md mt-5">{steaksandwich.description}</p>
                            </div>
                        )
                    })}
                </div>
                <h1 class="font-bold tracking-tiught text-orange-300 text-4xl transition duration-300" id="extras" style={{ filter: 'drop-shadow(0 0.5rem 3rem rgba(253, 186, 116, 1));' }}>Extras</h1>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-10">
                    {extras.map((extra, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{extra.name}</h1>
                                <p class="text-amber-400 text-md">{extra.price}</p>
                            </div>
                        )
                    })}
                </div>
                <h1 class="font-bold tracking-tiught text-orange-300 text-4xl transition duration-300" id="sides" style={{ filter: 'drop-shadow(0 0.5rem 3rem rgba(253, 186, 116, 1));' }}>Sides</h1>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-10">
                    {sides.map((side, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{side.name}</h1>
                                <p class="text-gray-400 text-md">
                                    Medium: <span class="text-amber-400">{side.price.medium}</span><br/>
                                    Large: <span class="text-amber-400">{side.price.large}</span>
                                </p>
                            </div>
                        )
                    })}
                </div>
                <h1 class="font-bold tracking-tight text-orange-300 text-4xl transition duration-300" id="drinks" style={{ filter: 'drop-shadow(0 0.5rem 3rem rgba(253, 186, 116, 1));' }}>Drinks</h1>
                <div class="grid grid-cols-2 gap-6 py-10">
                    {drinks.map((drink, i) => {
                        return (
                            <div class="bg-gray-800 rounded-2xl p-6 transition duration-300" style={{ transitionDelay: `${i * 20}ms` }}>
                                <h1 class="font-bold tracking-tight text-white text-2xl">{drink.name}</h1>
                                <p class="text-amber-400 text-md">{drink.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <script src="/scrooll.js" />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Menu',

};
