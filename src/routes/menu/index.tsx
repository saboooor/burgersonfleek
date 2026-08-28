import { component$ } from '@qwik.dev/core';

import drinks from '~/components/menuitems/drinks';
import extras from '~/components/menuitems/extras.json';
import sides from '~/components/menuitems/sides.json';
import beefburgers from '~/components/menuitems/beefburgers';
import chickenburgers from '~/components/menuitems/chickenburgers';
import steaksandwiches from '~/components/menuitems/steaksandwiches';
import veggieburgers from '~/components/menuitems/veggieburgers';

import Menu, { MenuCategory, MobileMenu } from '~/components/Menu';
import BestSeller from '~/components/BestSeller';
import Icon from '~/components/svg/Icon';
import Beef from 'lucide-icons-qwik/icons/Beef';
import CupSoda from 'lucide-icons-qwik/icons/CupSoda';
import Drumstick from 'lucide-icons-qwik/icons/Drumstick';
import EggFried from 'lucide-icons-qwik/icons/EggFried';
import Hamburger from 'lucide-icons-qwik/icons/Hamburger';
import Leaf from 'lucide-icons-qwik/icons/Leaf';
import Soup from 'lucide-icons-qwik/icons/Soup';
import { generateHead } from '~/root';

const BurgersSandwiches = component$(() => {
  return (
    <>
      <a
        class="lum-btn lum-bg-transparent hover:lum-bg-orange-950/50 rounded-lum-2 text-orange-100"
        href="#beefburgers"
        data-umami-event="menu-beefburgers"
      >
        <Hamburger class="text-orange-300" /> Beef Burgers
      </a>
      <a
        class="lum-btn lum-bg-transparent hover:lum-bg-yellow-950/50 rounded-lum-2 text-yellow-100"
        href="#chickenburgers"
        data-umami-event="menu-chickenburgers"
      >
        <Drumstick class="text-yellow-200" /> Chicken Burgers
      </a>
      <a
        class="lum-btn lum-bg-transparent hover:lum-bg-green-950/50 rounded-lum-2 text-green-100"
        href="#veggieburgers"
        data-umami-event="menu-veggieburgers"
      >
        <Leaf class="text-green-300" /> Vegetarian Burgers
      </a>
      <a
        class="lum-btn lum-bg-transparent hover:lum-bg-red-950/50 rounded-lum-2 text-red-100"
        href="#steaksandwiches"
        data-umami-event="menu-steaksandwiches"
      >
        <Beef class="text-red-300" /> Steak Sandwiches
      </a>
    </>
  );
});
const TreatYourself = component$(() => {
  return (
    <>
      <a
        class="lum-btn lum-bg-transparent hover:lum-bg-amber-950/50 rounded-lum-2 text-amber-100"
        href="#extras"
        data-umami-event="menu-extras"
      >
        <EggFried class="text-amber-200" /> Extras
      </a>
      <a
        class="lum-btn lum-bg-transparent hover:lum-bg-burger-950/50 rounded-lum-2 text-burger-100"
        href="#combos"
        data-umami-event="menu-combos"
      >
        <div class="flex max-w-6 -space-x-2">
          <CupSoda class="text-red-300" size={14} />
          <Hamburger
            class="text-burger-200 z-10 drop-shadow-sm drop-shadow-black"
            size={14}
          />
          <Soup class="text-orange-300" size={14} />
        </div>
        Combo Options
      </a>
      <a
        class="lum-btn lum-bg-transparent hover:lum-bg-orange-950/50 rounded-lum-2 text-orange-100"
        href="#sides"
        data-umami-event="menu-sides"
      >
        <Soup class="text-orange-300" /> Sides
      </a>
      <a
        class="lum-btn lum-bg-transparent hover:lum-bg-red-950/50 rounded-lum-2 text-red-100"
        href="#drinks"
        data-umami-event="menu-drinks"
      >
        <CupSoda class="text-red-300" /> Drinks
      </a>
    </>
  );
});

export default component$(() => {
  return (
    <>
      <section class="menu-pattern-bg mx-auto grid min-h-svh max-w-7xl gap-2 sm:grid-cols-3 lg:grid-cols-4">
        <MobileMenu>
          <BurgersSandwiches />
          <TreatYourself />
        </MobileMenu>
        <Menu>
          <MenuCategory name="BURGERS & SANDWICHES">
            <BurgersSandwiches />
          </MenuCategory>
          <MenuCategory name="TREAT YOURSELF">
            <TreatYourself />
          </MenuCategory>
        </Menu>
        <div class="px-4 pt-35 sm:col-span-2 sm:px-6 sm:pt-25 lg:col-span-3">
          <p class="text-lum-text-secondary mb-8 sm:text-xl">
            We are not fast food.
            <br />
            All our food is made fresh, and it can take a minimum of 15 minutes
            to complete your order.
            <br />
            All our food is cooked to the internal temperature required by the
            CFIA.
            <br />
            If you have any food allergies, please advise us before ordering.
          </p>
          <h2
            id="beefburgers"
            class="font-futura flex items-center gap-3 text-xl font-bold tracking-wider whitespace-nowrap text-orange-200 sm:text-4xl"
          >
            <Hamburger class="text-orange-300" size={46} />
            Beef Burgers
          </h2>
          <h3 class="text-lum-text-secondary mt-1 text-sm">
            * All of our beef burgers are made with premium quality meat, cut
            and grounded in house daily and handpressed on the grill.
          </h3>
          <div class="flex flex-wrap gap-2 pt-5 pb-10">
            {beefburgers.map((item, i) => {
              return (
                <div
                  key={i}
                  class={{
                    'lum-card lum-grad-bg-lum-card-bg relative': true,
                    'min-w-[18rem] flex-1 flex-row gap-6 sm:flex-col': true,
                  }}
                >
                  <div class="rounded-lum-2 absolute inset-0 -z-10 h-full w-full overflow-clip object-cover saturate-200">
                    <div class="absolute top-0 h-full w-full -translate-y-1/2 scale-75 rounded-full bg-orange-500 opacity-30" />
                  </div>
                  <div class="rounded-lum-2 absolute inset-0 -z-10 backdrop-blur-2xl" />
                  <div class="mb-4">
                    {item.image && (
                      <item.image
                        class="max-w-20 sm:max-h-32 sm:max-w-full sm:object-contain"
                        alt={item.name}
                      />
                    )}
                    {!item.image && (
                      <Icon
                        size={128}
                        class="h-20 w-20 sm:mx-auto sm:h-auto sm:w-auto"
                      />
                    )}
                  </div>
                  <div class="flex flex-1 flex-col gap-2">
                    <h2
                      class={{
                        'font-futura flex gap-2 text-xl font-bold tracking-wider sm:text-2xl': true,
                      }}
                    >
                      {item.name}
                      {item.bestseller && <BestSeller />}
                    </h2>
                    <p class="text-lum-accent text-xs sm:text-sm">
                      {item.double && (
                        <span class="text-lum-text-secondary">Single: </span>
                      )}
                      {item.price}
                      {item.double && (
                        <>
                          <br />
                          <span class="text-lum-text-secondary">Double: </span>
                          {item.double}
                        </>
                      )}
                    </p>
                    <p class="text-lum-text-secondary h-full text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2
            id="chickenburgers"
            class="font-futura flex items-center gap-3 text-xl font-bold tracking-wider whitespace-nowrap text-yellow-100 sm:text-4xl"
          >
            <Drumstick class="text-yellow-200" size={46} />
            Chicken Burgers
          </h2>
          <h3 class="text-lum-text-secondary mt-1 text-sm">
            * All of our chicken burgers are made using boneless leg/thigh which
            is marinated in our special spice blend (mild) and deep fried.
          </h3>
          <div class="flex flex-wrap gap-2 pt-5 pb-10">
            {chickenburgers.map((item, i) => {
              return (
                <div
                  key={i}
                  class={{
                    'lum-card lum-grad-bg-lum-card-bg relative': true,
                    'min-w-[18rem] flex-1 flex-row gap-6 sm:flex-col': true,
                  }}
                >
                  <div class="rounded-lum-2 absolute inset-0 -z-10 h-full w-full overflow-clip object-cover saturate-200">
                    <div class="absolute top-0 h-full w-full -translate-y-1/2 scale-75 rounded-full bg-yellow-500 opacity-30" />
                  </div>
                  <div class="rounded-lum-2 absolute inset-0 -z-10 backdrop-blur-2xl" />
                  <div class="mb-4">
                    {item.image && (
                      <item.image
                        class="max-w-20 sm:max-h-32 sm:max-w-full sm:object-contain"
                        alt={item.name}
                      />
                    )}
                    {!item.image && (
                      <Drumstick
                        strokeWidth={1}
                        size={128}
                        class="h-20 w-20 text-yellow-200 sm:mx-auto sm:h-auto sm:w-auto"
                      />
                    )}
                  </div>
                  <div class="flex flex-1 flex-col gap-2">
                    <h2
                      class={{
                        'font-futura flex gap-2 text-xl font-bold tracking-wider sm:text-2xl': true,
                      }}
                    >
                      {item.name}
                      {item.bestseller && <BestSeller />}
                    </h2>
                    <p class="text-lum-accent text-xs sm:text-sm">
                      {item.price}
                    </p>
                    <p class="text-lum-text-secondary h-full text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2
            id="veggieburgers"
            class="font-futura flex items-center gap-3 text-xl font-bold tracking-wider whitespace-nowrap text-green-200 sm:text-4xl"
          >
            <Leaf class="text-green-300" size={46} />
            Vegetarian Burgers
          </h2>
          <div class="flex flex-wrap gap-2 pt-5 pb-10">
            {veggieburgers.map((item, i) => {
              return (
                <div
                  key={i}
                  class={{
                    'lum-card lum-grad-bg-lum-card-bg relative': true,
                    'min-w-[18rem] flex-1 flex-row gap-6 sm:flex-col': true,
                  }}
                >
                  <div class="rounded-lum-2 absolute inset-0 -z-10 h-full w-full overflow-clip object-cover saturate-200">
                    <div class="absolute top-0 h-full w-full -translate-y-1/2 scale-75 rounded-full bg-green-500 opacity-30" />
                  </div>
                  <div class="rounded-lum-2 absolute inset-0 -z-10 backdrop-blur-2xl" />
                  <div class="mb-4">
                    {item.image && (
                      <item.image
                        class="max-w-20 sm:max-h-32 sm:max-w-full sm:object-contain"
                        alt={item.name}
                      />
                    )}
                    {!item.image && (
                      <Icon
                        size={128}
                        class="h-20 w-20 sm:mx-auto sm:h-auto sm:w-auto"
                      />
                    )}
                  </div>
                  <div class="flex flex-1 flex-col gap-2">
                    <h2
                      class={{
                        'font-futura flex gap-2 text-xl font-bold tracking-wider sm:text-2xl': true,
                      }}
                    >
                      {item.name}
                    </h2>
                    <p class="text-lum-accent text-xs sm:text-sm">
                      {item.price}
                    </p>
                    <p class="text-lum-text-secondary h-full text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2
            id="steaksandwiches"
            class="font-futura flex items-center gap-3 text-xl font-bold tracking-wider whitespace-nowrap text-red-200 sm:text-4xl"
          >
            <Beef class="text-red-300" size={46} />
            Steak Sandwiches
          </h2>
          <div class="grid gap-2 pt-5 pb-10 sm:grid-cols-2">
            {steaksandwiches.map((item, i) => {
              return (
                <div
                  key={i}
                  class={{
                    'lum-card lum-grad-bg-lum-card-bg relative': true,
                    'min-w-[18rem] flex-1 flex-row gap-6 sm:flex-col': true,
                  }}
                >
                  <div class="rounded-lum-2 absolute inset-0 -z-10 h-full w-full overflow-clip object-cover saturate-200">
                    <div class="absolute top-0 h-full w-full -translate-y-1/2 scale-75 rounded-full bg-red-500 opacity-30" />
                  </div>
                  <div class="rounded-lum-2 absolute inset-0 -z-10 backdrop-blur-2xl" />
                  <div class="mb-4">
                    {item.image && (
                      <item.image
                        class="max-w-20 sm:max-h-32 sm:max-w-full sm:object-contain"
                        alt={item.name}
                      />
                    )}
                    {!item.image && (
                      <Beef
                        size={128}
                        strokeWidth={1}
                        class="h-20 w-20 rotate-5 text-red-300 sm:mx-auto sm:h-auto sm:w-auto"
                      />
                    )}
                  </div>
                  <div class="flex flex-1 flex-col gap-2">
                    <h2
                      class={{
                        'font-futura flex gap-2 text-xl font-bold tracking-wider sm:text-2xl': true,
                      }}
                    >
                      {item.name}
                    </h2>
                    <p class="text-lum-accent text-xs sm:text-sm">
                      {item.price}
                    </p>
                    <p class="text-lum-text-secondary h-full text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2
            id="extras"
            class="font-futura flex items-center gap-3 text-xl font-bold tracking-wider whitespace-nowrap text-yellow-100 sm:text-4xl"
          >
            <EggFried class="text-yellow-200" size={46} />
            Extras
          </h2>
          <div class="flex flex-wrap gap-2 pt-5 pb-10">
            {extras.map((item, i) => {
              return (
                <div
                  key={i}
                  class={{
                    'lum-card lum-grad-bg-lum-card-bg relative': true,
                    'min-w-[18rem] flex-1': true,
                  }}
                >
                  <h2
                    class={{
                      'font-futura flex gap-2 text-xl font-bold tracking-wider sm:text-2xl': true,
                    }}
                  >
                    {item.name}
                  </h2>
                  <div class="h-full">
                    <p class="text-lum-accent text-xs sm:text-sm">
                      {item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2
            id="combos"
            class="font-futura flex items-center gap-3 text-xl font-bold tracking-wider whitespace-nowrap text-orange-200 sm:text-4xl"
          >
            <div class="flex -space-x-5">
              <CupSoda class="text-red-300" size={46} />
              <Hamburger
                class="text-burger-200 z-10 drop-shadow-sm drop-shadow-black"
                size={46}
              />
              <Soup class="text-orange-300" size={46} />
            </div>
            Combo Options
          </h2>
          <div class="flex flex-wrap gap-2 pt-5 pb-10">
            {sides.map((item, i) => {
              return (
                <div
                  key={i}
                  class={{
                    'lum-card lum-grad-bg-lum-card-bg relative': true,
                    'min-w-[18rem] flex-1': true,
                  }}
                >
                  <h2
                    class={{
                      'font-futura flex gap-2 text-xl font-bold tracking-wider sm:text-2xl': true,
                    }}
                  >
                    {item.name} + Pop
                  </h2>
                  <div class="flex flex-1 flex-col gap-2">
                    <p class="text-lum-accent text-xs sm:text-sm">
                      {item.combo}
                    </p>
                    <p class="text-lum-text-secondary h-full text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2
            id="sides"
            class="font-futura flex items-center gap-3 text-xl font-bold tracking-wider whitespace-nowrap text-orange-200 sm:text-4xl"
          >
            <Soup class="text-orange-300" size={46} />
            Sides
          </h2>
          <div class="flex flex-wrap gap-2 pt-5 pb-10">
            {sides.map((item, i) => {
              return (
                <div
                  key={i}
                  class={{
                    'lum-card lum-grad-bg-lum-card-bg relative': true,
                    'min-w-[18rem] flex-1': true,
                  }}
                >
                  <h2
                    class={{
                      'font-futura flex gap-2 text-xl font-bold tracking-wider sm:text-2xl': true,
                    }}
                  >
                    {item.name}
                  </h2>
                  <div class="flex flex-1 flex-col gap-2">
                    <p class="text-lum-accent text-xs sm:text-sm">
                      {item.price}
                    </p>
                    <p class="text-lum-text-secondary h-full text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2
            id="drinks"
            class="font-futura flex items-center gap-3 text-xl font-bold tracking-wider whitespace-nowrap text-red-200 sm:text-4xl"
          >
            <CupSoda class="text-red-300" size={46} />
            Drinks
          </h2>
          <div class="flex flex-wrap gap-2 pt-5 pb-10">
            {drinks.map((item, i) => {
              return (
                <div
                  key={i}
                  class={{
                    'lum-card lum-grad-bg-lum-card-bg relative': true,
                    'min-w-[18rem] flex-1': true,
                  }}
                >
                  <div class="rounded-lum-2 absolute inset-0 -z-10 h-full w-full overflow-clip object-cover saturate-200">
                    {item.color && (
                      <div
                        class="absolute top-0 h-full w-full -translate-y-1/2 scale-75 opacity-30"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                  </div>
                  <div class="rounded-lum-2 absolute inset-0 -z-10 backdrop-blur-2xl" />
                  <div class="mb-2">
                    {item.image && (
                      <item.image
                        class="max-w-10 sm:max-h-20 sm:object-contain"
                        alt={item.name}
                      />
                    )}
                    {item.icon && (
                      <item.icon
                        class="max-w-10 sm:max-h-20 sm:object-contain"
                        style={{
                          color: item.color,
                        }}
                        size={20}
                      />
                    )}
                  </div>
                  <div class="flex flex-1 flex-col gap-2">
                    <h2
                      class={{
                        'font-futura flex gap-2 text-xl font-bold tracking-wider sm:text-2xl': true,
                      }}
                    >
                      {item.name}
                    </h2>
                    <p class="text-lum-accent text-xs sm:text-sm">
                      {item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export const head = generateHead({
  title: 'Burgers on Fleek - Menu',
});
