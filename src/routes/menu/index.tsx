import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import drinks from '../../components/menuitems/drinks.json';
import extras from '../../components/menuitems/extras.json';
import sides from '../../components/menuitems/sides.json';
import beefburgers from '~/components/menuitems/beefburgers';
import chickenburgers from '~/components/menuitems/chickenburgers';
import steaksandwiches from '~/components/menuitems/steaksandwiches';
import veggieburgers from '~/components/menuitems/veggieburgers';

import Menu, { MenuCategory, MenuItem, MenuTitle } from '~/components/Menu';
import Card, { CardHeader } from '~/components/Card';
import OrderPopup from '~/components/OrderPopup';
import Icon from '~/components/svg/Icon';

export default component$(() => {
  return <>
    <section class="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto max-w-screen-xl px-4 sm:px-6 min-h-[calc(100lvh-80px)]">
      <Menu>
        <MenuCategory name="BURGERS & SANDWICHES">
          <MenuItem href="#beefburgers">
            Beef Burgers
          </MenuItem>
          <MenuItem href="#chickenburgers">
            Chicken Burgers
          </MenuItem>
          <MenuItem href="#veggieburgers">
            Vegetarian Burgers
          </MenuItem>
          <MenuItem href="#steaksandwiches">
            Steak Sandwiches
          </MenuItem>
        </MenuCategory>
        <MenuCategory name="OTHER" collapse>
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
      </Menu>
      <div class="sm:col-span-2 lg:col-span-3 2xl:col-span-4 sm:pt-28">
        <MenuTitle id="beefburgers"
          subtitle="* Our beef burgers are made with premium quality meat, cut & grounded in-house & handpressed on the grill.">
          Beef Burgers
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {beefburgers.map((beefburger, i) => {
            return <Card key={i}>
              <div class="mb-8">
                {beefburger.image && <beefburger.image class="h-32 w-auto object-contain" alt={beefburger.name} />}
                {!beefburger.image && <Icon width={128}/>}
              </div>
              <CardHeader bestSeller={beefburger.bestseller}>{beefburger.name}</CardHeader>
              <p class="text-amber-400 text-xs sm:text-sm">
                {beefburger.double && <span class="text-gray-400">Single: </span>}{beefburger.price}
                {beefburger.double && <><br/><span class="text-gray-400">Double: </span>{beefburger.double}</>}
              </p>
              <p class="text-gray-400 text-sm sm:text-base mt-4">{beefburger.description}</p>
            </Card>;
          })}
        </div>
        <MenuTitle id="chickenburgers"
          subtitle="* Our chicken burgers are made using boneless leg/thigh marinated in our special spice blend (mild spicy) & deep fried.">
          Chicken Burgers
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {chickenburgers.map((chickenburger, i) => {
            return <Card key={i}>
              <div class="mb-8">
                {chickenburger.image && <chickenburger.image class="h-32 w-auto object-contain" alt={chickenburger.name} />}
                {!chickenburger.image && <Icon width={128}/>}
              </div>
              <CardHeader bestSeller={chickenburger.bestseller}>{chickenburger.name}</CardHeader>
              <p class="text-amber-400 text-xs sm:text-sm">
                {chickenburger.price}
              </p>
              <p class="text-gray-400 text-sm sm:text-base mt-4">{chickenburger.description}</p>
            </Card>;
          })}
        </div>
        <MenuTitle id="veggieburgers">
          Vegetarian Burgers
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {veggieburgers.map((veggieburger, i) => {
            return <Card key={i}>
              <div class="mb-8">
                {veggieburger.image && <veggieburger.image class="h-32 w-auto object-contain" alt={veggieburger.name} />}
                {!veggieburger.image && <Icon width={128}/>}
              </div>
              <CardHeader>{veggieburger.name}</CardHeader>
              <p class="text-amber-400 text-xs sm:text-sm">
                {veggieburger.price}
              </p>
              <p class="text-gray-400 text-sm sm:text-base mt-4">{veggieburger.description}</p>
            </Card>;
          })}
        </div>
        <MenuTitle id="steaksandwiches">
          Steak Sandwiches
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {steaksandwiches.map((steaksandwich, i) => {
            return <Card key={i}>
              <div class="mb-8">
                {steaksandwich.image && <steaksandwich.image class="h-32 w-auto object-contain" alt={steaksandwich.name} />}
                {!steaksandwich.image && <Icon width={128}/>}
              </div>
              <CardHeader bestSeller={steaksandwich.bestseller}>{steaksandwich.name}</CardHeader>
              <p class="text-amber-400 text-xs sm:text-sm">
                {steaksandwich.price}
              </p>
              <p class="text-gray-400 text-sm sm:text-base mt-4">{steaksandwich.description}</p>
            </Card>;
          })}
        </div>
        <MenuTitle id="extras">
          Extras
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {extras.map((extra, i) => {
            return <Card key={i}>
              <CardHeader>{extra.name}</CardHeader>
              {typeof extra.price == 'string' && <p class="text-amber-400 text-xs sm:text-sm">{extra.price}</p>}
              {typeof extra.price != 'string' && Object.entries(extra.price).map(([option, price], i) => {
                return <p key={i} class="text-xs sm:text-sm">
                  {option}:
                  <span class="text-amber-400 ml-1">
                    {price}
                  </span>
                </p>;
              })}
            </Card>;
          })}
        </div>
        <MenuTitle id="sides"
          subtitle="* Add a drink for $1.50">
          Sides
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {sides.map((side, i) => {
            return <Card key={i}>
              <CardHeader>{side.name}</CardHeader>
              <p class="text-gray-400 text-xs sm:text-sm">
                Medium: <span class="text-amber-400">{side.price.medium}</span><br/>
                Large: <span class="text-amber-400">{side.price.large}</span>
              </p>
              {side.description && <p class="text-gray-400 text-sm sm:text-base mt-4">{side.description}</p>}
            </Card>;
          })}
        </div>
        <MenuTitle id="drinks">
          Drinks
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5">
          {drinks.map((drink, i) => {
            return <Card key={i}>
              <CardHeader>{drink.name}</CardHeader>
              <p class="text-amber-400 text-xs sm:text-sm">{drink.price}</p>
            </Card>;
          })}
        </div>
      </div>
    </section>
    <OrderPopup/>
  </>;
});

export const head: DocumentHead = {
  title: 'Menu',
};
