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
import BestSeller from '~/components/BestSeller';
import OrderPopup from '~/components/OrderPopup';
import Icon from '~/components/svg/Icon';
import { Anchor } from '@luminescent/ui-qwik';
import { Beef, CupSoda, Drumstick, EggFried, Leaf, Soup } from 'lucide-icons-qwik';

export default component$(() => {
  return <>
    <section class="grid gap-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl px-4 sm:px-6 min-h-[100svh]">
      <Menu>
        <MenuCategory name="BURGERS & SANDWICHES">
          <a class="lum-btn lum-bg-transparent" href="#beefburgers">
            <Beef /> Beef Burgers
          </a>
          <a class="lum-btn lum-bg-transparent" href="#chickenburgers">
            <Drumstick /> Chicken Burgers
          </a>
          <a class="lum-btn lum-bg-transparent" href="#veggieburgers">
            <Leaf /> Vegetarian Burgers
          </a>
          <a class="lum-btn lum-bg-transparent" href="#steaksandwiches">
            <Beef /> Steak Sandwiches
          </a>
        </MenuCategory>
        <MenuCategory name="OTHER" collapse>
          <a class="lum-btn lum-bg-transparent" href="#extras">
            <EggFried /> Extras
          </a>
          <a class="lum-btn lum-bg-transparent" href="#sides">
            <Soup /> Sides
          </a>
          <a class="lum-btn lum-bg-transparent" href="#drinks">
            <CupSoda /> Drinks
          </a>
        </MenuCategory>
      </Menu>
      <div class="sm:col-span-2 lg:col-span-3 pt-36 sm:pt-28">
        <p class="sm:text-xl mb-8 text-lum-text-secondary">
          We are not fast food.
          <br />
          All our food is made fresh, and it can take a minimum of 15 minutes to complete your order.
          <br />
          All our food is cooked to the internal temperature required by the CFIA.
          <br />
          If you have any food allergies, please advise us before ordering.
        </p>
        <Anchor id="beefburgers">
          <h2 id="beefburgers" class="text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
            Beef Burgers
          </h2>
        </Anchor>
        <h3 class="text-sm text-lum-text-secondary mt-1">
          * All of our beef burgers are made with premium quality meat, cut and grounded in house daily and handpressed on the grill.
        </h3>
        <div class="flex flex-wrap gap-2 pt-5 pb-10">
          {beefburgers.map((item, i) => {
            return <div key={i} class={{
              'lum-card': true,
              'flex-1 flex-row sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {item.image && <item.image class="max-w-[80px] sm:max-h-[128px] sm:max-w-full sm:object-contain" alt={item.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!item.image && <Icon size={128} class="w-[80px] h-[80px] sm:h-auto sm:w-auto sm:mx-auto" />}
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h2 class={{
                  'flex gap-2 text-xl font-bold sm:text-2xl font-futura tracking-wider': true,
                }}>
                  {item.name}{item.bestseller && <BestSeller/>}
                </h2>
                <p class="text-burger-500 text-xs sm:text-sm">
                  {item.double && <span class="text-lum-text-secondary">Single: </span>}{item.price}
                  {item.double && <><br/><span class="text-lum-text-secondary">Double: </span>{item.double}</>}
                </p>
                <p class="text-lum-text-secondary text-sm sm:text-base h-full">{item.description}</p>
              </div>
            </div>;
          })}
        </div>
        <Anchor id="chickenburgers">
          <h2 id="chickenburgers" class="text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
            Chicken Burgers
          </h2>
        </Anchor>
        <h3 class="text-sm text-lum-text-secondary mt-1">
          * All of our chicken burgers are made using boneless leg/thigh which is marinated in our special spice blend (mild) and deep fried.
        </h3>
        <div class="flex flex-wrap gap-2 pt-5 pb-10">
          {chickenburgers.map((item, i) => {
            return <div key={i} class={{
              'lum-card': true,
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {item.image && <item.image class="max-w-[80px] sm:max-h-[128px] sm:max-w-full sm:object-contain" alt={item.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!item.image && <Icon size={128} class="w-[80px] h-[80px] sm:h-auto sm:w-auto sm:mx-auto" />}
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h2 class={{
                  'flex gap-2 text-xl font-bold sm:text-2xl font-futura tracking-wider': true,
                }}>
                  {item.name}{item.bestseller && <BestSeller/>}
                </h2>
                <p class="text-burger-500 text-xs sm:text-sm">
                  {item.price}
                </p>
                <p class="text-lum-text-secondary text-sm sm:text-base h-full">{item.description}</p>
              </div>
            </div>;
          })}
        </div>
        <Anchor id="veggieburgers">
          <h2 id="veggieburgers" class="text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
            Vegetarian Burgers
          </h2>
        </Anchor>
        <div class="flex flex-wrap gap-2 pt-5 pb-10">
          {veggieburgers.map((item, i) => {
            return <div key={i} class={{
              'lum-card': true,
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {item.image && <item.image class="max-w-[80px] sm:max-h-[128px] sm:max-w-full sm:object-contain" alt={item.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!item.image && <Icon size={128} class="w-[80px] h-[80px] sm:h-auto sm:w-auto sm:mx-auto" />}
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h2 class={{
                  'flex gap-2 text-xl font-bold sm:text-2xl font-futura tracking-wider': true,
                }}>
                  {item.name}
                </h2>
                <p class="text-burger-500 text-xs sm:text-sm">
                  {item.price}
                </p>
                <p class="text-lum-text-secondary text-sm sm:text-base h-full">{item.description}</p>
              </div>
            </div>;
          })}
        </div>
        <Anchor id="steaksandwiches">
          <h2 id="steaksandwiches" class="text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
            Steak Sandwiches
          </h2>
        </Anchor>
        <div class="grid sm:grid-cols-2 gap-2 pt-5 pb-10">
          {steaksandwiches.map((item, i) => {
            return <div key={i} class={{
              'lum-card': true,
              'flex-1 sm:flex-col min-w-[18rem] gap-6': true,
            }}>
              <div class="mb-4">
                {item.image && <item.image class="max-w-[80px] sm:max-h-[128px] sm:max-w-full sm:object-contain" alt={item.name} style="filter: drop-shadow(0 0 3rem rgba(251, 146, 60, 0.1));" />}
                {!item.image && <Icon size={128} class="w-[80px] h-[80px] sm:h-auto sm:w-auto sm:mx-auto" />}
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h2 class={{
                  'flex gap-2 text-xl font-bold sm:text-2xl font-futura tracking-wider': true,
                }}>
                  {item.name}
                </h2>
                <p class="text-burger-500 text-xs sm:text-sm">
                  {item.price}
                </p>
                <p class="text-lum-text-secondary text-sm sm:text-base h-full">{item.description}</p>
              </div>
            </div>;
          })}
        </div>
        <Anchor id="extras">
          <h2 id="extras" class="text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
            Extras
          </h2>
        </Anchor>
        <div class="flex flex-wrap gap-2 pt-5 pb-10">
          {extras.map((item, i) => {
            return <div key={i} class={{
              'lum-card': true,
              'flex-1 min-w-[18rem]': true,
            }}>
              <h2 class={{
                'flex gap-2 text-xl font-bold sm:text-2xl font-futura tracking-wider': true,
              }}>
                {item.name}
              </h2>
              <div class="h-full">
                {typeof item.price == 'string' && <p class="text-burger-500 text-xs sm:text-sm">{item.price}</p>}
                {typeof item.price != 'string' && Object.entries(item.price).map(([option, price], i) => {
                  return <p key={i} class="text-xs sm:text-sm">
                    {option}:
                    <span class="text-burger-500 ml-1">
                      {price}
                    </span>
                  </p>;
                })}
              </div>
            </div>;
          })}
        </div>
        <Anchor id="sides">
          <h2 id="sides" class="text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
            Sides
          </h2>
        </Anchor>
        <div class="flex flex-wrap gap-2 pt-5 pb-10">
          {sides.map((item, i) => {
            return <div key={i} class={{
              'lum-card': true,
              'flex-1 min-w-[18rem]': true,
            }}>
              <h2 class={{
                'flex gap-2 text-xl font-bold sm:text-2xl font-futura tracking-wider': true,
              }}>
                {item.name}
              </h2>
              <div>
                <p class="text-lum-text-secondary text-xs sm:text-sm">
                  Medium: <span class="text-burger-500">{item.price.medium}</span><br/>
                  Large: <span class="text-burger-500">{item.price.large}</span><br/><br/>
                  <span class="font-bold">Make it a Combo:</span><br/>
                  Medium: <span class="text-burger-500">{item.price.mediumCombo}</span><br/>
                  Large: <span class="text-burger-500">{item.price.largeCombo}</span>
                </p>
              </div>
              <p class="text-lum-text-secondary text-sm sm:text-base h-full">{item.description}</p>
            </div>;
          })}
        </div>
        <Anchor id="drinks">
          <h2 id="drinks" class="text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
            Drinks
          </h2>
        </Anchor>
        <div class="flex flex-wrap gap-2 pt-5 pb-10">
          {drinks.map((item, i) => {
            return <div key={i} class={{
              'lum-card': true,
              'flex-1 min-w-[18rem]': true,
            }}>
              <h2 class={{
                'flex gap-2 text-xl font-bold sm:text-2xl font-futura tracking-wider': true,
              }}>
                {item.name}
              </h2>
              <p class="text-burger-500 text-xs sm:text-sm">
                {item.price}
              </p>
            </div>;
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
