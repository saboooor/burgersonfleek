import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import drinks from '~/components/menuitems/drinks.json';
import extras from '~/components/menuitems/extras.json';
import sides from '~/components/menuitems/sides.json';
import beefburgers from '~/components/menuitems/beefburgers';
import chickenburgers from '~/components/menuitems/chickenburgers';
import steaksandwiches from '~/components/menuitems/steaksandwiches';
import veggieburgers from '~/components/menuitems/veggieburgers';

import Menu, { MenuCategory, MenuTitle } from '~/components/Menu';
import { ButtonAnchor, Card, Header } from '@luminescent/ui';
import BestSeller from '~/components/BestSeller';
import OrderPopup from '~/components/OrderPopup';
import Icon from '~/components/svg/Icon';

export default component$(() => {
  return <>
    <section class="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 mx-auto max-w-screen-xl px-4 sm:px-6 min-h-[100svh]">
      <Menu>
        <MenuCategory name="BURGERS & SANDWICHES">
          <ButtonAnchor transparent size="sm" href="#beefburgers">
            Beef Burgers
          </ButtonAnchor>
          <ButtonAnchor transparent size="sm" href="#chickenburgers">
            Chicken Burgers
          </ButtonAnchor>
          <ButtonAnchor transparent size="sm" href="#veggieburgers">
            Vegetarian Burgers
          </ButtonAnchor>
          <ButtonAnchor transparent size="sm" href="#steaksandwiches">
            Steak Sandwiches
          </ButtonAnchor>
        </MenuCategory>
        <MenuCategory name="OTHER" collapse>
          <ButtonAnchor transparent size="sm" href="#extras">
            Extras
          </ButtonAnchor>
          <ButtonAnchor transparent size="sm" href="#sides">
            Sides
          </ButtonAnchor>
          <ButtonAnchor transparent size="sm" href="#drinks">
            Drinks
          </ButtonAnchor>
        </MenuCategory>
      </Menu>
      <div class="sm:col-span-2 lg:col-span-3 sm:pt-28">
        <p class="text-lg sm:text-xl mb-8">
          We are not fast food.
          <br />
          All our food is made fresh, and it can take a minimum of 15 minutes to complete your order.
          <br />
          All of our food is cooked to the internal temperature required by the CFIA.
          If you have any food allergies, please inquire before ordering.
        </p>
        <MenuTitle id="beefburgers"
          subtitle="* Our beef burgers are made with premium quality meat, cut & grounded in-house & handpressed on the grill.">
          Beef Burgers
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {beefburgers.map((beefburger, i) => {
            return <Card key={i} row class={{
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {beefburger.image && <beefburger.image class="max-w-[80px] sm:max-w-[128px]" alt={beefburger.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!beefburger.image && <Icon width={80} />}
              </div>
              <div class="flex-1 flex flex-col gap-4">
                <Header class={{
                  'font-futura tracking-wider': true,
                }} subheader={
                  <p class="text-amber-400 text-xs sm:text-sm">
                    {beefburger.double && <span class="text-gray-400">Single: </span>}{beefburger.price}
                    {beefburger.double && <><br/><span class="text-gray-400">Double: </span>{beefburger.double}</>}
                  </p>
                }>{beefburger.name}{beefburger.bestseller && <BestSeller/>}</Header>
                <p class="text-gray-400 text-sm sm:text-base h-full">{beefburger.description}</p>
              </div>
            </Card>;
          })}
        </div>
        <MenuTitle id="chickenburgers"
          subtitle="* Our chicken burgers are made using boneless leg/thigh marinated in our special spice blend (mild spicy) & deep fried.">
          Chicken Burgers
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {chickenburgers.map((chickenburger, i) => {
            return <Card key={i} row class={{
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {chickenburger.image && <chickenburger.image class="max-w-[80px] sm:max-w-[128px]" alt={chickenburger.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!chickenburger.image && <Icon width={80} />}
              </div>
              <div class="flex-1 flex flex-col gap-4">
                <Header class={{
                  'font-futura tracking-wider': true,
                }} subheader={
                  <p class="text-amber-400 text-xs sm:text-sm">
                    {chickenburger.price}
                  </p>
                }>{chickenburger.name}{chickenburger.bestseller && <BestSeller/>}</Header>
                <p class="text-gray-400 text-sm sm:text-base h-full">{chickenburger.description}</p>
              </div>
            </Card>;
          })}
        </div>
        <MenuTitle id="veggieburgers">
          Vegetarian Burgers
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {veggieburgers.map((veggieburger, i) => {
            return <Card key={i} row class={{
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {veggieburger.image && <veggieburger.image class="max-w-[80px] sm:max-w-[128px]" alt={veggieburger.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!veggieburger.image && <Icon width={80} />}
              </div>
              <div class="flex-1 flex flex-col gap-4">
                <Header class={{
                  'font-futura tracking-wider': true,
                }} subheader={
                  <p class="text-amber-400 text-xs sm:text-sm">
                    {veggieburger.price}
                  </p>
                }>{veggieburger.name}</Header>
                <p class="text-gray-400 text-sm sm:text-base h-full">{veggieburger.description}</p>
              </div>
            </Card>;
          })}
        </div>
        <MenuTitle id="steaksandwiches">
          Steak Sandwiches
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {steaksandwiches.map((steaksandwich, i) => {
            return <Card key={i} row class={{
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {steaksandwich.image && <steaksandwich.image class="max-w-[80px] sm:max-w-[128px]" alt={steaksandwich.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!steaksandwich.image && <Icon width={80} />}
              </div>
              <div class="flex-1 flex flex-col gap-4">
                <Header class={{
                  'font-futura tracking-wider': true,
                }} subheader={
                  <p class="text-amber-400 text-xs sm:text-sm">
                    {steaksandwich.price}
                  </p>
                }>{steaksandwich.name}</Header>
                <p class="text-gray-400 text-sm sm:text-base h-full">{steaksandwich.description}</p>
              </div>
            </Card>;
          })}
        </div>
        <MenuTitle id="extras">
          Extras
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {extras.map((extra, i) => {
            return <Card key={i} class={{
              'flex-1 min-w-[18rem]': true,
            }}>
              <Header class={{
                'font-futura tracking-wider text-wrap': true,
              }}>{extra.name}</Header>
              <div class="h-full">
                {typeof extra.price == 'string' && <p class="text-amber-400 text-xs sm:text-sm">{extra.price}</p>}
                {typeof extra.price != 'string' && Object.entries(extra.price).map(([option, price], i) => {
                  return <p key={i} class="text-xs sm:text-sm">
                    {option}:
                    <span class="text-amber-400 ml-1">
                      {price}
                    </span>
                  </p>;
                })}
              </div>
            </Card>;
          })}
        </div>
        <MenuTitle id="sides">
          Sides
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {sides.map((side, i) => {
            return <Card key={i} class={{
              'flex-1 min-w-[18rem]': true,
            }}>
              <Header class={{
                'font-futura tracking-wider text-wrap': true,
              }} subheader={
                <div>
                  <p class="text-gray-400 text-xs sm:text-sm">
                    Medium: <span class="text-amber-400">{side.price.medium}</span><br/>
                    Large: <span class="text-amber-400">{side.price.large}</span><br/><br/>
                    <span class="text-gray-200 font-bold">Make it a Combo:</span><br/>
                    Medium: <span class="text-amber-400">{side.price.mediumCombo}</span><br/>
                    Large: <span class="text-amber-400">{side.price.largeCombo}</span>
                  </p>
                </div>
              }>{side.name}</Header>
              <p class="text-gray-400 text-sm sm:text-base h-full">{side.description}</p>
            </Card>;
          })}
        </div>
        <MenuTitle id="drinks">
          Drinks
        </MenuTitle>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {drinks.map((drink, i) => {
            return <Card key={i} class={{
              'flex-1 min-w-[18rem]': true,
            }}>
              <Header class={{
                'font-futura tracking-wider text-wrap': true,
              }} subheader={
                <p class="text-amber-400 text-xs sm:text-sm">{drink.price}</p>
              }>{drink.name}</Header>
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
