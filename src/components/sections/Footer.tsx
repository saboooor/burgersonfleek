import { component$ } from '@qwik.dev/core';
import { Link } from '@qwik.dev/router';
import { ActionButtons, SocialButtons } from '../Nav';
import Icon from '../svg/Icon';
import MapPin from 'lucide-icons-qwik/icons/MapPin';
import Phone from 'lucide-icons-qwik/icons/Phone';
import Mail from 'lucide-icons-qwik/icons/Mail';

export default component$(() => {
  return (
    <footer class="text-lum-text-secondary z-10 mt-20 border-t border-white/10 bg-gray-950/90 px-6 py-16 backdrop-blur-md md:px-12 md:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.1fr_1.1fr]">
          {/* Brand column */}
          <div class="flex flex-col items-start sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg rounded-lum-1 -ml-3 flex items-center gap-2.5 text-white!"
            >
              <Icon size={42} />
              <p class="font-futura space-x-1 text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl">
                <span>BURGERS</span>
                <span>ON</span>
                <span>FLEEK</span>
              </p>
            </Link>
            <p class="mt-4 max-w-md text-base leading-relaxed text-gray-300 md:text-lg">
              Gourmet hand-pressed burgers, signature steak sandwiches, and
              loaded sides. Handcrafted to order, 100% hand-slaughtered halal.
            </p>
            <div class="mt-6 -ml-2 flex items-center gap-2">
              <ActionButtons />
              <SocialButtons />
            </div>
            <div class="mt-6 max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
              <p>
                We are not fast food. All our food is made fresh (minimum
                15-minute prep). Cooked to CFIA standards. Please advise of any
                food allergies before ordering.
              </p>
            </div>
          </div>

          {/* Order column */}
          <div>
            <h4 class="font-futura mb-5 text-base font-bold tracking-widest text-white uppercase md:text-lg">
              Order
            </h4>
            <div class="-ml-3 flex flex-col items-start gap-1">
              <Link
                href="/menu"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1 text-base md:text-lg"
              >
                Full Menu
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event="footer_order_online"
                href="https://order.toasttab.com/online/burgers-on-fleek-135-harwood-ave-n-unit-b212"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1 text-base md:text-lg"
              >
                Order Online
              </a>
              <a
                href="mailto:eat@burgersonfleek.ca?subject=Catering%20Inquiry"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1 text-base md:text-lg"
              >
                Catering & Events
              </a>
            </div>
          </div>

          {/* Locations & Contact */}
          <div>
            <h4 class="font-futura mb-5 text-base font-bold tracking-widest text-white uppercase md:text-lg">
              Location & Contact
            </h4>
            <div class="-ml-3 flex flex-col items-start gap-1">
              <a
                href="https://maps.app.goo.gl/Unrrg3uda7AQQs4DA"
                target="_blank"
                rel="noopener noreferrer"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1 text-base md:text-lg"
              >
                <MapPin strokeWidth={1} class="mr-2 h-5 w-5 shrink-0" /> 135
                Harwood Ave N, Ajax
              </a>
              <a
                href="tel:+1 (905) 427 4377"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1 text-base md:text-lg"
              >
                <Phone strokeWidth={1} class="mr-2 h-5 w-5 shrink-0" /> +1 (905)
                427 4377
              </a>
              <a
                href="mailto:eat@burgersonfleek.ca"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1 text-base md:text-lg"
              >
                <Mail strokeWidth={1} class="mr-2 h-5 w-5 shrink-0" />{' '}
                eat@burgersonfleek.ca
              </a>
            </div>
          </div>

          {/* Company column */}
          <div>
            <h4 class="font-futura mb-5 text-base font-bold tracking-widest text-white uppercase md:text-lg">
              Company & Inquiries
            </h4>
            <div class="-ml-3 flex flex-col items-start gap-1">
              <Link
                href="/franchise"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-burger-300! rounded-lum-1 text-base font-medium md:text-lg"
              >
                Franchise Opportunities
              </Link>
              <a
                href="mailto:franchise@burgersonfleek.ca"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1 text-base md:text-lg"
              >
                <Mail
                  strokeWidth={1}
                  class="text-burger-300 mr-2 h-5 w-5 shrink-0"
                />{' '}
                franchise@burgersonfleek.ca
              </a>
              <Link
                href="/halal"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1 text-base md:text-lg"
              >
                100% Halal
              </Link>
              <Link
                href="/faq"
                class="lum-btn lum-btn-p-1 lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! rounded-lum-1 text-base md:text-lg"
              >
                FAQ & Support
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div class="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-base text-gray-400 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Burgers on Fleek. All rights reserved.
          </span>
          <span>100% Hand-Slaughtered Halal · Crafted Fresh Daily</span>
        </div>
      </div>
    </footer>
  );
});
