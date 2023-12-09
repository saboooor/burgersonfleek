// LuminescentDev Navbar Component Apr 28

import { component$, Slot, useStore } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import { LogoInstagram, LogoFacebook, LogoTiktok, Menu, HomeOutline, BookOutline, MapOutline } from 'qwik-ionicons';

import Icon from '~/components/svg/Icon';
import IconWhite from '~/components/svg/IconInBag';
import LoadingIcon from './svg/LoadingIcon';

export default component$(() => {
  const store = useStore({ mobilemenu: false });

  return (
    <Nav>
      <MainNav>
        <NavButton href="/" extraClass={{ 'hidden sm:flex': true }}>
          <HomeOutline width="24" class="fill-current" /> HOME
        </NavButton>
        <NavButton href="/menu" extraClass={{ 'hidden sm:flex': true }}>
          <BookOutline width="24" class="fill-current" /> MENU
        </NavButton>
        <NavButton external href="tel:+1 (905) 427 4377" extraClass={{ 'hidden sm:flex': true }}>
          <IconWhite width="24" class="fill-current" /> ORDER
        </NavButton>
        <NavButton external icon href="https://instagram.com/burgersonfleek.ca" title="Instagram" extraClass={{ 'hidden sm:flex': true }}>
          <LogoInstagram width="24" class="fill-current" />
        </NavButton>
        <NavButton external icon href="https://facebook.com/burgersonfleek.ca" title="Facebook" extraClass={{ 'hidden sm:flex': true }}>
          <LogoFacebook width="24" class="fill-current" />
        </NavButton>
        <NavButton external icon href="https://tiktok.com/@burgersonfleek.ca" title="TikTok" extraClass={{ 'hidden sm:flex': true }}>
          <LogoTiktok width="24" class="fill-current" />
        </NavButton>
        <NavButton external icon href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" title="Google Maps" extraClass={{ 'hidden sm:flex': true }}>
          <MapOutline width="24" class="fill-current" />
        </NavButton>
        <button id="mobile-menu-button" type="button" title="Menu" onClick$={() => {
          store.mobilemenu = !store.mobilemenu;
        }} class="transition  ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg text-3xl sm:hidden">
          <Menu width="24" class="fill-current" />
        </button>
      </MainNav>
      <MobileNav store={store}>
        <NavButton store={store} href="/">
          <HomeOutline width="24" class="fill-current" /> HOME
        </NavButton>
        <NavButton store={store} href="/menu">
          <BookOutline width="24" class="fill-current" /> MENU
        </NavButton>
        <NavButton external href="tel:+1 (905) 427 4377">
          <IconWhite width="24" class="fill-current" /> ORDER
        </NavButton>
        <div class="flex justify-evenly">
          <NavButton external icon href="https://instagram.com/burgersonfleek.ca" title="Instagram">
            <LogoInstagram width="24" class="fill-current" />
          </NavButton>
          <NavButton external icon href="https://facebook.com/burgersonfleek.ca" title="Facebook">
            <LogoFacebook width="24" class="fill-current" />
          </NavButton>
          <NavButton external icon href="https://tiktok.com/@burgersonfleek.ca" title="TikTok">
            <LogoTiktok width="24" class="fill-current" />
          </NavButton>
          <NavButton external icon href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" title="Google Maps">
            <MapOutline width="24" class="fill-current" />
          </NavButton>
        </div>
      </MobileNav>
    </Nav>
  );
});

export const Nav = component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen backdrop-blur-xl">
      <div class="font-futura tracking-wider transition-all">
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
        <Icon width={32} />
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
    <div class="bg-gray-900/80 px-4 lg:px-6 py-1">
      <div class="mx-auto max-w-7xl relative flex h-16 items-center justify-between">
        <Brand/>
        <div class="flex flex-1 items-center justify-end">
          <div class="flex gap-1 text-gray-300 whitespace-nowrap">
            <Slot/>
          </div>
        </div>
      </div>
    </div>
  );
});

export const MobileNav = component$(({ store }: any) => {
  return (
    <div id="mobile-menu" class={{
      'gap-2 px-3 flex flex-col sm:hidden transition-all duration-300 bg-gray-900/80': true,
      'opacity-100 max-h-screen pt-2 pb-8': store.mobilemenu,
      'opacity-0 max-h-0 py-0 pointer-events-none': !store.mobilemenu,
    }}>
      <Slot />
    </div>
  );
});

export const NavButton = component$(({ href, title, icon, external, extraClass, style, store }: any) => {
  const _class = {
    'group transition ease-in-out hover:bg-gray-800 hover:text-white py-3 rounded-lg items-center': true,
    'text-3xl px-3': icon,
    'px-4 flex gap-3': !icon,
    ...extraClass,
  };

  return <>
    {external &&
      <a href={href} title={title} style={style} class={_class}>
        <Slot />
      </a>
    }
    {!external &&
      <Link href={href} title={title} style={style} class={_class} onClick$={() => { store ? store.mobilemenu = false : undefined; }}>
        <Slot />
      </Link>
    }
  </>;
});