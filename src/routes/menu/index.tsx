import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import drinks from '~/menuitems/drinks.json';
import extras from '~/menuitems/extras.json';
import sides from '~/menuitems/sides.json';
import beefburgers from '~/menuitems/beefburgers.json';
import chickenburgers from '~/menuitems/chickenburgers.json';
import steaksandwiches from '~/menuitems/steaksandwiches.json';
import veggieburgers from '~/menuitems/veggieburgers.json';

import Menu, { MenuCategory, MenuItem, MenuTitle } from '~/components/Menu';
import Card, { CardHeader } from '~/components/Card';

export default component$(() => {
  return (
    <section class="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto max-w-screen-2xl px-4 sm:px-6 min-h-[calc(100lvh-80px)]">
      <Menu>
        <MenuCategory name="BURGERS">
          <MenuItem href="#beefburgers">
            Beef
          </MenuItem>
          <MenuItem href="#chickenburgers">
            Chicken
          </MenuItem>
          <MenuItem href="#veggieburgers">
            Vegetarian
          </MenuItem>
        </MenuCategory>
        <MenuCategory name="SANDWICHES">
          <MenuItem href="#steaksandwiches">
            Steak
          </MenuItem>
        </MenuCategory>
        <MenuCategory name="OTHER">
          <MenuItem href="#extras">
            Extras
          </MenuItem>
          <MenuItem href="#sides">
            Sides
          </MenuItem>
          <MenuItem href="#drinks">
            Drinks
          </MenuItem>
        </MenuCategory>
        <MenuItem href="/menu.pdf">
            View Paper Menu
        </MenuItem>
      </Menu>
      <div class="sm:col-span-2 lg:col-span-3 2xl:col-span-4 sm:pt-28">
        <MenuTitle id="beefburgers">Beef Burgers</MenuTitle>
        <h2 class="text-gray-400 text-xl transition">* Our beef burgers are made with premium quality meat, cut & grounded in-house & handpressed on the grill.</h2>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {beefburgers.map((beefburger, i) => {
            return <Card key={i}>
              <CardHeader>{beefburger.name}</CardHeader>
              <p class="text-amber-400 text-md">
                {beefburger.double && <span class="text-gray-400">Single: </span>}{beefburger.price}
                {beefburger.double && <><br/><span class="text-gray-400">Double: </span>{beefburger.double}</>}
              </p>
              <p class="text-gray-400 text-md mt-4">{beefburger.description}</p>
            </Card>;
          })}
        </div>
        <MenuTitle id="chickenburgers">Chicken Burgers</MenuTitle>
        <h2 class="text-gray-400 text-xl transition">* Our chicken burgers are made using boneless leg/thigh marinated in our special spice blend (mild spicy) & deep fried.</h2>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {chickenburgers.map((chickenburger, i) => {
            return <Card key={i}>
              <CardHeader>{chickenburger.name}</CardHeader>
              <p class="text-amber-400 text-md">
                {chickenburger.price}
              </p>
              <p class="text-gray-400 text-md mt-4">{chickenburger.description}</p>
            </Card>;
          })}
        </div>
        <MenuTitle id="veggieburgers">Vegetarian Burgers</MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {veggieburgers.map((veggieburger, i) => {
            return <Card key={i}>
              <CardHeader>{veggieburger.name}</CardHeader>
              <p class="text-amber-400 text-md">
                {veggieburger.price}
              </p>
              <p class="text-gray-400 text-md mt-4">{veggieburger.description}</p>
            </Card>;
          })}
        </div>
        <MenuTitle id="steaksandwiches">Steak Sandwiches</MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {steaksandwiches.map((steaksandwich, i) => {
            return <Card key={i}>
              <CardHeader>{steaksandwich.name}</CardHeader>
              <p class="text-amber-400 text-md">
                {steaksandwich.price}
              </p>
              <p class="text-gray-400 text-md mt-4">{steaksandwich.description}</p>
            </Card>;
          })}
        </div>
        <MenuTitle id="extras">Extras</MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {extras.map((extra, i) => {
            return <Card key={i}>
              <CardHeader>{extra.name}</CardHeader>
              {typeof extra.price == 'string' && <p class="text-amber-400 text-md">{extra.price}</p>}
              {typeof extra.price != 'string' && Object.entries(extra.price).map(([option, price]) => {
                return <>
                  <p class="text-md">
                    {option}:
                    <span class="text-amber-400 ml-1">
                      {price}
                    </span>
                  </p>
                </>;
              })}
            </Card>;
          })}
        </div>
        <MenuTitle id="sides">Sides</MenuTitle>
        <h2 class="text-gray-400 text-xl transition">* Add a drink for $1.50</h2>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {sides.map((side, i) => {
            return <Card key={i}>
              <CardHeader>{side.name}</CardHeader>
              <p class="text-gray-400 text-md">
                Medium: <span class="text-amber-400">{side.price.medium}</span><br/>
                Large: <span class="text-amber-400">{side.price.large}</span>
              </p>
            </Card>;
          })}
        </div>
        <MenuTitle id="drinks">Drinks</MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {drinks.map((drink, i) => {
            return <Card key={i}>
              <CardHeader>{drink.name}</CardHeader>
              <p class="text-amber-400 text-md">{drink.price}</p>
            </Card>;
          })}
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Menu',
};
