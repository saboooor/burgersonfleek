import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { Nav } from '@luminescent/ui-qwik';

import { Phone,  MapPin,  Instagram,  Facebook } from 'lucide-icons-qwik';
import TikTok from './svg/TikTok';
import Icon from './svg/Icon';
import Halal from './svg/Halal';
import IconInBag from './svg/IconInBag';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav fixed colorClass='lum-bg-gray-900' class={{
      'font-futura tracking-wider': true,
    }}>
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent">
        <Icon size={32} />
        <p class="mt-0.5 space-x-1 whitespace-nowrap">
          <span class="font-bold">BURGERS</span><span>ON</span><span>FLEEK</span>
        </p>
        <div class={{
          'transition-all': true,
          '-ml-6 opacity-0': !loc.isNavigating,
        }}>
          <div class="lum-loading w-4 h-4" />
        </div>
      </Link>

      <Link q:slot="end" href="/menu" class={{
        'lum-btn lum-bg-transparent hover:text-lum-text p-2 sm:lum-btn-p-2': true,
      }}>
        <IconInBag class="fill-current" /> <span class="hidden lg:inline">MENU</span>
      </Link>
      <Link q:slot="end" href="/halal" class={{
        'hidden lg:flex lum-btn lum-bg-transparent hover:text-lum-text p-2 sm:lum-btn-p-2': true,
      }}>
        <Halal class="fill-current" /> HALAL
      </Link>
      <div q:slot='end' class="hidden sm:flex gap-2">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/menu" class="lum-btn lum-bg-transparent hover:text-lum-text">
        <IconInBag class="fill-current" /> MENU
      </Link>
      <Link q:slot="mobile" href="/halal" class="lum-btn lum-bg-transparent hover:text-lum-text">
        <Halal class="fill-current" /> HALAL
      </Link>
      <div q:slot='mobile' class="flex justify-evenly">
        <SocialButtons />
      </div>

    </Nav>
  );
});

export const SocialButtons = component$(({ big }: any) => {
  return <>
    <a href="tel:+1 (905) 427 4377" title="Call us" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2': true,
      'p-4': big,
    }}>
      <Phone strokeWidth={1} />
    </a>
    <a href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" title="Google Maps" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2': true,
      'p-4': big,
    }}>
      <MapPin strokeWidth={1} />
    </a>
    <a href="https://instagram.com/burgersonfleek.ca" title="Instagram" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2': true,
      'p-4': big,
    }}>
      <Instagram strokeWidth={1} />
    </a>
    <a href="https://facebook.com/burgersonfleek.ca" title="Facebook" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2': true,
      'p-4': big,
    }}>
      <Facebook strokeWidth={1} />
    </a>
    <a href="https://tiktok.com/@burgersonfleek.ca" title="TikTok" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2': true,
      'p-4': big,
    }}>
      <TikTok />
    </a>
  </>;
});