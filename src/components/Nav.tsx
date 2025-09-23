import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { Nav } from '@luminescent/ui-qwik';

import { Phone,  MapPin,  Instagram,  Facebook, BookOpen } from 'lucide-icons-qwik';
import TikTok from './svg/TikTok';
import Icon from './svg/Icon';
import Halal from './svg/Halal';
import IconInBag from './svg/IconInBag';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav fixed floating colorClass='lum-bg-gray-900' class={{
      'font-futura tracking-wider': true,
    }}>
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent rounded-lum-1 -m-1">
        <Icon size={30} />
        <p class="space-x-1 whitespace-nowrap">
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
        'lum-btn lum-bg-transparent hover:text-lum-text p-2 sm:lum-btn-p-2 rounded-lum-1': true,
      }}>
        <BookOpen strokeWidth={1} /> <span class="hidden lg:inline">MENU</span>
      </Link>
      <Link q:slot="end" target='_blank' data-umami-event="order_online" href="https://order.toasttab.com/online/burgers-on-fleek-135-harwood-ave-n-unit-b212" class={{
        'lum-btn lum-bg-transparent hover:text-lum-text p-2 sm:lum-btn-p-2 rounded-lum-1': true,
      }}>
        <IconInBag /> <span class="hidden lg:inline">ORDER</span>
      </Link>
      <Link q:slot="end" href="/halal" class={{
        'hidden lg:flex lum-btn lum-bg-transparent hover:text-lum-text p-2 rounded-lum-1': true,
      }}>
        <Halal />
      </Link>
      <div q:slot='end' class="hidden sm:flex gap-2">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/menu" class="lum-btn lum-bg-transparent hover:text-lum-text rounded-lum-1">
        <BookOpen strokeWidth={1} /> MENU
      </Link>
      <Link q:slot="mobile" target='_blank' data-umami-event="order_online" href="https://order.toasttab.com/online/burgers-on-fleek-135-harwood-ave-n-unit-b212" class="lum-btn lum-bg-transparent hover:text-lum-text rounded-lum-1">
        <IconInBag /> ORDER ONLINE
      </Link>
      <Link q:slot="mobile" href="/halal" class="lum-btn lum-bg-transparent hover:text-lum-text rounded-lum-1">
        <Halal /> HALAL
      </Link>
      <div q:slot='mobile' class="flex justify-evenly">
        <SocialButtons />
      </div>

    </Nav>
  );
});

export const SocialButtons = component$(({ big }: any) => {
  return <>
    <a href="tel:+1 (905) 427 4377" data-umami-event="phone" title="Call us" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2 rounded-lum-1': true,
      'p-4': big,
    }}>
      <Phone strokeWidth={1} />
    </a>
    <a href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA" data-umami-event="maps" title="Google Maps" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2 rounded-lum-1': true,
      'p-4': big,
    }}>
      <MapPin strokeWidth={1} />
    </a>
    <a href="https://instagram.com/burgersonfleek.ca" data-umami-event="social-instagram" title="Instagram" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2 rounded-lum-1': true,
      'p-4': big,
    }}>
      <Instagram strokeWidth={1} />
    </a>
    <a href="https://facebook.com/burgersonfleek.ca" data-umami-event="social-facebook" title="Facebook" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2 rounded-lum-1': true,
      'p-4': big,
    }}>
      <Facebook strokeWidth={1} />
    </a>
    <a href="https://tiktok.com/@burgersonfleek.ca" data-umami-event="social-tiktok" title="TikTok" class={{
      'lum-btn lum-bg-transparent hover:text-lum-text fill-current p-2 rounded-lum-1': true,
      'p-4': big,
    }}>
      <TikTok />
    </a>
  </>;
});