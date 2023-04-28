// LuminescentDev Navbar Component Apr 28

import { component$, Slot } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';

import { InInstagram, InFacebook, InTiktok, InNavArrowDown, InMenu, InHomeAlt, InOpenBook } from '@qwikest/icons/iconoir';

import Icon from '~/components/svg/Icon';

export default component$(() => {
  return (
    <Nav>
      <MainNav>
        <NavButton href="/" extraClass="hidden sm:flex">
          <InHomeAlt class="text-2xl"/> Home
        </NavButton>
        <NavButton href="/menu" extraClass="hidden sm:flex">
          <InOpenBook class="text-2xl"/> Menu
        </NavButton>
        <NavButton external icon href="https://instagram.com/burgersonfleek.ca" title="Instagram" extraClass="hidden sm:flex">
          <InInstagram />
        </NavButton>
        <NavButton external icon href="https://facebook.com/burgersonfleek.ca" title="Facebook" extraClass="hidden sm:flex">
          <InFacebook />
        </NavButton>
        <NavButton external icon href="https://tiktok.com/@burgersonfleek.ca" title="TikTok" extraClass="hidden sm:flex">
          <InTiktok />
        </NavButton>
        <button id="mobile-menu-button" type="button" title="Menu" onClick$={() => {
          const classList = document.getElementById('mobile-menu')?.classList;
          if (classList?.contains('hidden')) classList.replace('hidden', 'flex');
          else classList?.replace('flex', 'hidden');
        }} class="transition  ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg text-3xl sm:hidden">
          <InMenu />
        </button>
      </MainNav>
      <MobileNav>
        <NavButton mobile href="/" extraClass="flex sm:hidden">
          <InHomeAlt class="text-2xl"/> Home
        </NavButton>
        <NavButton mobile href="/menu" extraClass="flex sm:hidden">
          <InOpenBook class="text-2xl"/> Menu
        </NavButton>
        <div class="flex flex-row">
          <NavButton external mobile icon href="https://instagram.com/burgersonfleek.ca" title="Instagram" extraClass="flex sm:hidden">
            <InInstagram />
          </NavButton>
          <NavButton external mobile icon href="https://facebook.com/burgersonfleek.ca" title="Facebook" extraClass="flex sm:hidden">
            <InFacebook />
          </NavButton>
          <NavButton external mobile icon href="https://tiktok.com/@burgersonfleek.ca" title="TikTok" extraClass="flex sm:hidden">
            <InTiktok />
          </NavButton>
        </div>
      </MobileNav>
    </Nav>
  );
});

export const Nav = component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen py-2 bg-gray-900/70 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <Slot />
      </div>
    </nav>
  );
});

export const Brand = component$(() => {
  return (
    <div class="flex flex-1 items-center justify-start">
      <Link href="/" class="transition  ease-in-out text-gray-300 hover:bg-gray-800 hover:text-white drop-shadow-2xl px-3 pt-3 pb-2 rounded-lg text-lg flex items-center whitespace-nowrap">
        <Icon width={32} height={32} /> <span class="font-bold mr-1 ml-4">BURGERS</span> ON FLEEK
      </Link>
    </div>
  );
});

export const MainNav = component$(() => {
  return (
    <div class="relative flex h-16 items-center justify-between">
      <Brand/>
      <div class="flex flex-1 items-center justify-end">
        <div class="flex gap-2 text-gray-300 whitespace-nowrap">
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

export const NavButton = component$(({ href, title, icon, external, extraClass }: any) => {
  const nav = useNavigate();
  return <>
    {external &&
      <a href={href} title={title} class={`group transition ease-in-out ${extraClass} hover:bg-gray-800 hover:text-white py-2 rounded-lg ${icon ? 'text-3xl px-2' : 'text-lg gap-4 px-4'} items-center font-bold`}>
        <Slot />
      </a>
    }
    {!external &&
      <button onClick$={() => { document.getElementById('mobile-menu')?.classList.replace('flex', 'hidden'); nav(href); }} title={title} class={`group transition ease-in-out ${extraClass} hover:bg-gray-800 hover:text-white py-2 rounded-lg ${icon ? 'text-3xl px-2' : 'text-lg gap-4 px-4'} items-center font-bold`}>
        <Slot />
      </button>
    }
  </>;
});

export const Dropdown = component$(({ name, extraClass }: any) => {
  return (
    <div class={`cursor-pointer transition  ease-in-out ${extraClass} hover:bg-gray-800 hover:text-white drop-shadow-2xl group rounded-lg items-center gap-4`}>
      <div class="px-4 py-3 flex gap-2 items-center">
        {name}
        <InNavArrowDown class="transform group-hover:-rotate-180 transition duration-300 ease-in-out text-2xl" />
      </div>
      <div class="absolute top-12 left-0 z-10 hidden group-hover:flex pt-4 text-base">
        <div class="bg-black rounded-xl px-3 py-4 flex flex-col gap-2 font-medium whitespace-nowrap overflow-y-auto max-h-[calc(100svh-128px)]">
          <Slot/>
        </div>
      </div>
    </div>
  );
});