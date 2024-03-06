import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { Button, ButtonAnchor, LoadingIcon, Nav } from '@luminescent/ui';

import { BookOutline, LocationOutline, LogoFacebook, LogoInstagram, LogoTiktok } from 'qwik-ionicons';
import Icon from './svg/Icon';
import Halal from './svg/Halal';
import IconInBag from './svg/IconInBag';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav fixed class={{
      'font-futura tracking-wider': true,
    }}>
      <Link q:slot="start" href="/">
        <Button color="transparent">
          <Icon width={32} />
          <p class="mt-0.5 space-x-1 whitespace-nowrap">
            <span class="font-bold">BURGERS</span><span>ON</span><span>FLEEK</span>
          </p>
          <div class={{
            'transition-all': true,
            '-ml-6 opacity-0': !loc.isNavigating,
          }}>
            <LoadingIcon width={16} speed="0.4s" />
          </div>
        </Button>
      </Link>

      <Link q:slot="end" href="/menu" class={{ 'hidden sm:flex': true }}>
        <Button color="transparent" class={{ 'w-full': true }}>
          <BookOutline width="24" class="fill-current" /> MENU
        </Button>
      </Link>
      <ButtonAnchor q:slot="end" href="tel:+1 (905) 427 4377" color="transparent" class={{ 'hidden sm:flex': true }}>
        <IconInBag width="24" class="fill-current" /> ORDER
      </ButtonAnchor>
      <Link q:slot="end" href="/halal" class={{ 'hidden sm:flex': true }}>
        <Button color="transparent" class={{ 'w-full': true }}>
          <Halal width="24" class="fill-current" /> HALAL
        </Button>
      </Link>
      <div q:slot='end' class="hidden sm:flex gap-2">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/menu">
        <Button color="transparent" class={{ 'w-full': true }}>
          <BookOutline width="24" class="fill-current" /> MENU
        </Button>
      </Link>
      <ButtonAnchor q:slot="mobile" href="tel:+1 (905) 427 4377" color="transparent">
        <IconInBag width="24" class="fill-current" /> ORDER
      </ButtonAnchor>
      <Link q:slot="mobile" href="/halal">
        <Button color="transparent" class={{ 'w-full': true }}>
          <Halal width="24" class="fill-current" /> HALAL
        </Button>
      </Link>
      <div q:slot='mobile' class="flex justify-evenly">
        <SocialButtons />
      </div>

    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return <>
    <ButtonAnchor color="transparent" square href="https://instagram.com/burgersonfleek.ca" title="Instagram">
      <LogoInstagram width="24" />
    </ButtonAnchor>
    <ButtonAnchor color="transparent" square href="https://facebook.com/burgersonfleek.ca" title="Facebook">
      <LogoFacebook width="24" />
    </ButtonAnchor>
    <ButtonAnchor color="transparent" square href="https://tiktok.com/@burgersonfleek.ca" title="TikTok">
      <LogoTiktok width="24" />
    </ButtonAnchor>
    <ButtonAnchor color="transparent" square href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" title="Google Maps">
      <LocationOutline width="24" />
    </ButtonAnchor>
  </>;
});