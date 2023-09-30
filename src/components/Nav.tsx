// LuminescentDev Navbar Component Apr 28

import { component$, Slot } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import { LogoInstagram, LogoFacebook, LogoTiktok, Menu, HomeOutline, BookOutline, MapOutline } from 'qwik-ionicons';

import LogoDoorDash from '~/components/svg/DoorDash';
import Icon from '~/components/svg/Icon';
import LoadingIcon from './svg/LoadingIcon';

export default component$(() => {
  return (
    <Nav>
      <MainNav>
        <NavButton href="/" extraClass="hidden sm:flex gap-3">
          <HomeOutline width="24" class="fill-current" /> HOME
        </NavButton>
        <NavButton href="/menu" extraClass="hidden sm:flex gap-3">
          <BookOutline width="24" class="fill-current" /> MENU
        </NavButton>
        <NavButton external href="https://burgersonfleek.order.online/store/25869825" extraClass="hidden sm:flex gap-3">
          <LogoDoorDash width="24" class="fill-current" /> ORDER
        </NavButton>
        <NavButton external icon href="https://instagram.com/burgersonfleek.ca" title="Instagram" extraClass="hidden sm:flex">
          <LogoInstagram width="24" class="fill-current" />
        </NavButton>
        <NavButton external icon href="https://facebook.com/burgersonfleek.ca" title="Facebook" extraClass="hidden sm:flex">
          <LogoFacebook width="24" class="fill-current" />
        </NavButton>
        <NavButton external icon href="https://tiktok.com/@burgersonfleek.ca" title="TikTok" extraClass="hidden sm:flex">
          <LogoTiktok width="24" class="fill-current" />
        </NavButton>
        <NavButton external icon href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" title="TikTok" extraClass="hidden sm:flex">
          <MapOutline width="24" class="fill-current" />
        </NavButton>
        <button id="mobile-menu-button" type="button" title="Menu" onClick$={() => {
          const classList = document.getElementById('mobile-menu')?.classList;
          if (classList?.contains('hidden')) classList.replace('hidden', 'flex');
          else classList?.replace('flex', 'hidden');
        }} class="transition  ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg text-3xl sm:hidden">
          <Menu width="24" class="fill-current" />
        </button>
      </MainNav>
      <MobileNav>
        <NavButton mobile href="/" extraClass="flex gap-3">
          <HomeOutline width="24" class="fill-current" /> HOME
        </NavButton>
        <NavButton mobile href="/menu" extraClass="flex gap-3">
          <BookOutline width="24" class="fill-current" /> MENU
        </NavButton>
        <NavButton external mobile href="https://burgersonfleek.order.online/store/25869825" extraClass="flex gap-3">
          <LogoDoorDash width="24" class="fill-current" /> ORDER
        </NavButton>
        <div class="flex justify-evenly">
          <NavButton external mobile icon href="https://instagram.com/burgersonfleek.ca" title="Instagram" extraClass="flex sm:hidden">
            <LogoInstagram width="24" class="fill-current" />
          </NavButton>
          <NavButton external mobile icon href="https://facebook.com/burgersonfleek.ca" title="Facebook" extraClass="flex sm:hidden">
            <LogoFacebook width="24" class="fill-current" />
          </NavButton>
          <NavButton external mobile icon href="https://tiktok.com/@burgersonfleek.ca" title="TikTok" extraClass="flex sm:hidden">
            <LogoTiktok width="24" class="fill-current" />
          </NavButton>
          <NavButton external mobile icon href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" title="TikTok" extraClass="flex sm:hidden">
            <MapOutline width="24" class="fill-current" />
          </NavButton>
        </div>
      </MobileNav>
    </Nav>
  );
});

export const Nav = component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen py-2 bg-gray-900/70 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 lg:px-6 font-futura tracking-wider">
        <Slot />
      </div>
    </nav>
  );
});

export const Brand = component$(() => {
  const location = useLocation();
  return (
    <div class="flex items-center justify-start">
      <Link href="/" class="transition ease-in-out text-gray-300 hover:bg-gray-800 hover:text-white drop-shadow-2xl px-3 py-3 rounded-lg text-lg flex tracking-wider items-center">
        <Icon width={32} height={32} />
        <p class="ml-1 mt-0.5 space-x-1 whitespace-nowrap font-futura">
          <span class="font-bold ml-2">BURGERS</span><span>ON</span><span>FLEEK</span>
        </p>
        <div class={{
          'transition-all': true,
          '-ml-7 opacity-0': !location.isNavigating,
        }}>
          <LoadingIcon/>
        </div>
      </Link>
    </div>
  );
});

export const MainNav = component$(() => {
  return (
    <div class="relative flex h-16 items-center justify-between">
      <Brand/>
      <div class="flex flex-1 items-center justify-end">
        <div class="flex gap-1 text-gray-300 whitespace-nowrap">
          <Slot/>
        </div>
      </div>
    </div>
  );
});

export const MobileNav = component$(() => {
  return (
    <div id="mobile-menu" class="gap-4 py-4 px-3 bg-black rounded-lg mt-2 hidden flex-col sm:hidden">
      <Slot />
    </div>
  );
});

export const NavButton = component$(({ href, title, icon, external, extraClass, style }: any) => {
  return <>
    {external &&
      <a href={href} title={title} style={style} class={`group transition ease-in-out hover:bg-gray-800 hover:text-white ${icon ? 'text-3xl px-2' : 'px-4'} py-2 rounded-lg items-center ${extraClass}`}>
        <Slot />
      </a>
    }
    {!external &&
      <Link href={href} onClick$={async () => { document.getElementById('mobile-menu')?.classList.replace('flex', 'hidden'); }} title={title} style={style} class={`group transition ease-in-out hover:bg-gray-800 hover:text-white ${icon ? 'text-3xl px-2' : 'px-4'} py-2 rounded-lg items-center ${extraClass}`}>
        <Slot />
      </Link>
    }
  </>;
});