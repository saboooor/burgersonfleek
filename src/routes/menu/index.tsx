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
import { Beef, CupSoda, Drumstick, EggFried, Hamburger, Leaf, Soup } from 'lucide-icons-qwik';

export default component$(() => {
  return <>
    <section class="grid gap-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl px-4 sm:px-6 min-h-[100svh]">
      <Menu>
        <MenuCategory name="BURGERS & SANDWICHES">
          <a class="lum-btn lum-bg-transparent" href="#beefburgers" data-umami-event-menu="beefburgers">
            <Hamburger class="text-orange-300" /> Beef Burgers
          </a>
          <a class="lum-btn lum-bg-transparent" href="#chickenburgers" data-umami-event-menu="chickenburgers">
            <Drumstick class="text-yellow-200" /> Chicken Burgers
          </a>
          <a class="lum-btn lum-bg-transparent" href="#veggieburgers" data-umami-event-menu="veggieburgers">
            <Leaf class="text-green-300" /> Vegetarian Burgers
          </a>
          <a class="lum-btn lum-bg-transparent" href="#steaksandwiches" data-umami-event-menu="steaksandwiches">
            <Beef class="text-red-300" /> Steak Sandwiches
          </a>
        </MenuCategory>
        <MenuCategory name="OTHER" collapse>
          <a class="lum-btn lum-bg-transparent" href="#extras" data-umami-event-menu="extras">
            <EggFried class="text-amber-200" /> Extras
          </a>
          <a class="lum-btn lum-bg-transparent" href="#sides" data-umami-event-menu="sides">
            <Soup class="text-orange-300" /> Sides
          </a>
          <a class="lum-btn lum-bg-transparent" href="#drinks" data-umami-event-menu="drinks">
            <CupSoda class="text-red-300" /> Drinks
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
        <h2 id="beefburgers" class="flex items-center gap-3 text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
          <Hamburger class="text-orange-300" size={46} />
          Beef Burgers
        </h2>
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
        <h2 id="chickenburgers" class="flex items-center gap-3 text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
          <Drumstick class="text-yellow-200" size={46} />
          Chicken Burgers
        </h2>
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
        <h2 id="veggieburgers" class="flex items-center gap-3 text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
          <Leaf class="text-green-300" size={46} />
          Vegetarian Burgers
        </h2>
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
        <h2 id="steaksandwiches" class="flex items-center gap-3 text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
          <Beef class="text-red-300" size={46} />
          Steak Sandwiches
        </h2>
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
        <h2 id="extras" class="flex items-center gap-3 text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
          <EggFried class="text-yellow-200" size={46} />
          Extras
        </h2>
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
        <h2 id="sides" class="flex items-center gap-3 text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
          <Soup class="text-orange-300" size={46} />
          Sides
        </h2>
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
        <h2 id="drinks" class="flex items-center gap-3 text-xl font-bold whitespace-nowrap text-lum-text sm:text-4xl font-futura tracking-wider">
          <CupSoda class="text-red-300" size={46} />
          Drinks
        </h2>
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
    <OrderPopup popup id="orderpopup" class={{
      'sm:hidden': true,
    }}/>
  </>;
});

export const head: DocumentHead = {
  title: 'Menu',
};
