import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import drinks from '~/menuitems/drinks.json';
import extras from '~/menuitems/extras.json';
import sides from '~/menuitems/sides.json';
import beefburgers from '~/menuitems/beefburgers.json';
import chickenburgers from '~/menuitems/chickenburgers.json';
import steaksandwiches from '~/menuitems/steaksandwiches.json';
import veggieburgers from '~/menuitems/veggieburgers.json';

import * as Menu from '~/components/menu';

export default component$(() => {
  return (
    <section class="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto max-w-screen-2xl px-4 sm:px-6 pt-12" style="min-height: calc(100vh - 64px);">
        <Menu.Nav>
            <Menu.Item href="#beefburgers">
                Beef Burgers
            </Menu.Item>
            <Menu.Item href="#chickenburgers">
                Chicken Burgers
            </Menu.Item>
            <Menu.Item href="#veggieburgers">
                Vegetarian Burgers
            </Menu.Item>
            <Menu.Item href="#steaksandwiches">
                Steak Sandwiches
            </Menu.Item>
            <Menu.Item href="#extras">
                Extras
            </Menu.Item>
            <Menu.Item href="#sides">
                Sides
            </Menu.Item>
            <Menu.Item href="#drinks">
                Drinks
            </Menu.Item>
            <Menu.Item href="/menu.pdf">
                View Paper Menu
            </Menu.Item>
        </Menu.Nav>
        <div class="sm:col-span-2 lg:col-span-3 2xl:col-span-4">
            <Menu.Title id="beefburgers">Beef Burgers</Menu.Title>
            <h2 class="text-gray-400 text-xl transition duration-300">* Make it a combo with fries and pop for $5.50</h2>
            <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10 pb-6">
                {beefburgers.map((beefburger, i) => {
                    return (
                        <div class="bg-gray-800 rounded-2xl p-6 transition duration-300" style={{ transitionDelay: `${i * 20}ms` }}>
                            <h1 class="font-bold tracking-tight text-white text-2xl">{beefburger.name}</h1>
                            <p class="text-amber-400 text-md">{beefburger.price}</p>
                            {beefburger.double && <p class="text-gray-400 text-md">Double: <span class="text-amber-400">{beefburger.double}</span></p>}
                            <p class="text-gray-400 text-md mt-5">{beefburger.description}</p>
                        </div>
                    )
                })}
            </div>
            <h2 class="text-gray-400 text-md transition duration-300 pb-10">* Our beef burgers are made with premium quality meat, cut & grounded in-house & handpressed on the grill.</h2>
            <Menu.Title id="chickenburgers">Chicken Burgers</Menu.Title>
            <h2 class="text-gray-400 text-xl transition duration-300">* Make it a combo with fries and pop for $5.50</h2>
            <div class="grid grid-cols-2 gap-6 pt-10 pb-6">
                {chickenburgers.map((chickenburger, i) => {
                    return (
                        <div class="bg-gray-800 rounded-2xl p-6 transition duration-300" style={{ transitionDelay: `${i * 20}ms` }}>
                            <h1 class="font-bold tracking-tight text-white text-2xl">{chickenburger.name}</h1>
                            <p class="text-amber-400 text-md">{chickenburger.price}</p>
                            <p class="text-gray-400 text-md mt-5">{chickenburger.description}</p>
                        </div>
                    )
                })}
            </div>
            <h2 class="text-gray-400 text-md transition duration-300 pb-10">* Our chicken burgers are made using boneless leg/thigh marinated in our special spice blend (mild spicy) & deep fried.</h2>
            <Menu.Title id="veggieburgers">Vegetarian Burgers</Menu.Title>
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
            <Menu.Title id="steaksandwiches">Steak Sandwiches</Menu.Title>
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
            <Menu.Title id="extras">Extras</Menu.Title>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-10">
                {extras.map((extra, i) => {
                    return (
                        <div class="bg-gray-800 rounded-2xl p-6 transition duration-300" style={{ transitionDelay: `${i * 20}ms` }}>
                            <h1 class="font-bold tracking-tight text-white text-2xl">{extra.name}</h1>
                            {typeof extra.price == 'string' && <p class="text-amber-400 text-md">{extra.price}</p>}
                            {typeof extra.price != 'string' && Object.entries(extra.price).map(([option, price]) => {
                                return <p class="text-md">{option}: <span class="text-amber-400">{price}</span></p>
                            })}
                        </div>
                    )
                })}
            </div>
            <Menu.Title id="sides">Sides</Menu.Title>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-10">
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
            <Menu.Title id="drinks">Drinks</Menu.Title>
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
  );
});

export const head: DocumentHead = {
  title: 'Menu',

};
