import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import drinks from '~/components/menuitems/drinks.json';
import extras from '~/components/menuitems/extras.json';
import sides from '~/components/menuitems/sides.json';
import beefburgers from '~/components/menuitems/beefburgers';
import chickenburgers from '~/components/menuitems/chickenburgers';
import steaksandwiches from '~/components/menuitems/steaksandwiches';
import veggieburgers from '~/components/menuitems/veggieburgers';

import Menu, { MenuCategory } from '~/components/Menu';
import { ButtonAnchor, Card, Header } from '@luminescent/ui';
import BestSeller from '~/components/BestSeller';
import OrderPopup from '~/components/OrderPopup';
import Icon from '~/components/svg/Icon';

export default component$(() => {
  return <>
    <section class="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl px-4 sm:px-6 min-h-[100svh]">
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
      <div class="sm:col-span-2 lg:col-span-3 pt-36 sm:pt-28">
        <p class="sm:text-xl mb-8">
          We are not fast food.
          <br />
          All our food is made fresh, and it can take a minimum of 15 minutes to complete your order.
          <br />
          All of our food is cooked to the internal temperature required by the CFIA.
          <br />
          If you have any food allergies, please inquire before ordering.
        </p>
        <Header id="beefburgers" class={{
          'sm:text-4xl font-futura tracking-wider': true,
        }}
        subheader="* Our beef burgers are made with premium quality meat, cut & grounded in-house & handpressed on the grill.">
          Beef Burgers
        </Header>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {beefburgers.map((item, i) => {
            return <Card key={i} row class={{
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {item.image && <item.image class="max-w-[80px] sm:max-h-[128px] sm:max-w-full sm:object-contain" alt={item.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!item.image && <Icon width={128} class="w-[80px] h-[80px] sm:h-auto sm:w-auto sm:mx-auto" />}
              </div>
              <div class="flex-1 flex flex-col gap-4">
                <Header class={{
                  'font-futura tracking-wider': true,
                }} subheader={
                  <p class="text-amber-400 text-xs sm:text-sm">
                    {item.double && <span class="text-gray-400">Single: </span>}{item.price}
                    {item.double && <><br/><span class="text-gray-400">Double: </span>{item.double}</>}
                  </p>
                }>{item.name}{item.bestseller && <BestSeller/>}</Header>
                <p class="text-gray-400 text-sm sm:text-base h-full">{item.description}</p>
              </div>
            </Card>;
          })}
        </div>
        <Header id="chickenburgers" class={{
          'sm:text-4xl font-futura tracking-wider': true,
        }}
        subheader="* Our chicken burgers are made using boneless leg/thigh marinated in our special spice blend (mild spicy) & deep fried.">
          Chicken Burgers
        </Header>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {chickenburgers.map((item, i) => {
            return <Card key={i} row class={{
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {item.image && <item.image class="max-w-[80px] sm:max-h-[128px] sm:max-w-full sm:object-contain" alt={item.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!item.image && <Icon width={128} class="w-[80px] h-[80px] sm:h-auto sm:w-auto sm:mx-auto" />}
              </div>
              <div class="flex-1 flex flex-col gap-4">
                <Header class={{
                  'font-futura tracking-wider': true,
                }} subheader={
                  <p class="text-amber-400 text-xs sm:text-sm">
                    {item.price}
                  </p>
                }>{item.name}{item.bestseller && <BestSeller/>}</Header>
                <p class="text-gray-400 text-sm sm:text-base h-full">{item.description}</p>
              </div>
            </Card>;
          })}
        </div>
        <Header id="veggieburgers" class={{
          'sm:text-4xl font-futura tracking-wider': true,
        }}>
          Vegetarian Burgers
        </Header>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {veggieburgers.map((item, i) => {
            return <Card key={i} row class={{
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {item.image && <item.image class="max-w-[80px] sm:max-h-[128px] sm:max-w-full sm:object-contain" alt={item.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!item.image && <Icon width={128} class="w-[80px] h-[80px] sm:h-auto sm:w-auto sm:mx-auto" />}
              </div>
              <div class="flex-1 flex flex-col gap-4">
                <Header class={{
                  'font-futura tracking-wider': true,
                }} subheader={
                  <p class="text-amber-400 text-xs sm:text-sm">
                    {item.price}
                  </p>
                }>{item.name}</Header>
                <p class="text-gray-400 text-sm sm:text-base h-full">{item.description}</p>
              </div>
            </Card>;
          })}
        </div>
        <Header id="steaksandwiches" class={{
          'sm:text-4xl font-futura tracking-wider': true,
        }}>
          Steak Sandwiches
        </Header>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {steaksandwiches.map((item, i) => {
            return <Card key={i} row class={{
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {item.image && <item.image class="max-w-[80px] sm:max-h-[128px] sm:max-w-full sm:object-contain" alt={item.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!item.image && <Icon width={128} class="w-[80px] h-[80px] sm:h-auto sm:w-auto sm:mx-auto" />}
              </div>
              <div class="flex-1 flex flex-col gap-4">
                <Header class={{
                  'font-futura tracking-wider': true,
                }} subheader={
                  <p class="text-amber-400 text-xs sm:text-sm">
                    {item.price}
                  </p>
                }>{item.name}</Header>
                <p class="text-gray-400 text-sm sm:text-base h-full">{item.description}</p>
              </div>
            </Card>;
          })}
        </div>
        <Header id="extras" class={{
          'sm:text-4xl font-futura tracking-wider': true,
        }}>
          Extras
        </Header>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {extras.map((item, i) => {
            return <Card key={i} class={{
              'flex-1 min-w-[18rem]': true,
            }}>
              <Header class={{
                'font-futura tracking-wider text-wrap': true,
              }}>{item.name}</Header>
              <div class="h-full">
                {typeof item.price == 'string' && <p class="text-amber-400 text-xs sm:text-sm">{item.price}</p>}
                {typeof item.price != 'string' && Object.entries(item.price).map(([option, price], i) => {
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
        <Header id="sides" class={{
          'sm:text-4xl font-futura tracking-wider': true,
        }}>
          Sides
        </Header>
        <div class="flex flex-wrap gap-4 pt-5 pb-10">
          {sides.map((item, i) => {
            return <Card key={i} class={{
              'flex-1 min-w-[18rem]': true,
            }}>
              <Header class={{
                'font-futura tracking-wider text-wrap': true,
              }} subheader={
                <div>
                  <p class="text-gray-400 text-xs sm:text-sm">
                    Medium: <span class="text-amber-400">{item.price.medium}</span><br/>
                    Large: <span class="text-amber-400">{item.price.large}</span><br/><br/>
                    <span class="text-gray-200 font-bold">Make it a Combo:</span><br/>
                    Medium: <span class="text-amber-400">{item.price.mediumCombo}</span><br/>
                    Large: <span class="text-amber-400">{item.price.largeCombo}</span>
                  </p>
                </div>
              }>{item.name}</Header>
              <p class="text-gray-400 text-sm sm:text-base h-full">{item.description}</p>
            </Card>;
          })}
        </div>
        <Header id="drinks" class={{
          'sm:text-4xl font-futura tracking-wider': true,
        }}>
          Drinks
        </Header>
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
