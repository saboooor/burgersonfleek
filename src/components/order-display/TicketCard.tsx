import { component$ } from '@qwik.dev/core';
import type { ToastOrderTicket } from '~/utils/toast-api';
import IconInBag from '~/components/svg/IconInBag';
import MapPin from 'lucide-icons-qwik/icons/MapPin';
import Phone from 'lucide-icons-qwik/icons/Phone';
import Clock from 'lucide-icons-qwik/icons/Clock';

export interface PickupTicketCardProps {
  ticket: ToastOrderTicket;
  isReady?: boolean;
}

function formatTicketTime(dateStr?: string): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  } catch {
    return '';
  }
}

function formatOrderEta(etaStr?: string, isReady?: boolean): string {
  if (isReady || !etaStr) return '';
  try {
    const d = new Date(etaStr);
    if (isNaN(d.getTime())) return '';
    const formatted = d.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    });
    return `ETA ${formatted}`;
  } catch {
    return '';
  }
}

export const PickupTicketCard = component$<PickupTicketCardProps>(
  ({ ticket, isReady }) => {
    const displayTime = formatTicketTime(
      isReady ? ticket.readyDate || ticket.openedDate : ticket.openedDate
    );
    const etaText = formatOrderEta(ticket.estimatedFulfillmentDate, isReady);

    return (
      <div
        class={{
          'lum-card rounded-lum-7 lum-grad-bg-lum-card-bg font-futura relative justify-between overflow-hidden p-6 transition-all duration-300 sm:p-7': true,
        }}
      >
        {/* Ticket Number & Order Time / ETA */}
        <div class="mb-3 flex items-start justify-between gap-3">
          <span
            class={[
              'font-futura shrink-0 leading-none font-bold tracking-tighter',
              isReady
                ? 'bg-linear-to-br from-emerald-200 via-emerald-400 to-green-100 bg-clip-text! text-4xl text-transparent drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] sm:text-5xl'
                : 'from-burger-200 via-burger-400 bg-linear-to-br to-orange-100 bg-clip-text! text-3xl text-transparent sm:text-4xl',
            ]}
          >
            #{ticket.displayNumber}
          </span>

          {/* Times */}
          {displayTime && (
            <div class="font-futura flex shrink-0 flex-col items-end whitespace-nowrap text-white">
              <span class="flex items-center gap-1.5 text-sm font-extrabold tracking-wide sm:text-base lg:text-lg">
                <Clock class="text-burger-300 h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                <span class="whitespace-nowrap">{displayTime}</span>
              </span>
              {etaText && (
                <span class="text-burger-300 mt-0.5 text-xs font-black tracking-wider whitespace-nowrap uppercase sm:text-sm">
                  {etaText}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Customer Details & Enlarged Dining Type */}
        <div class="mt-2 space-y-2">
          {ticket.customerName && (
            <h2 class="font-futura truncate text-xl font-bold tracking-wider text-white sm:text-2xl">
              {ticket.customerName}
            </h2>
          )}

          {/* Enlarged Dining Type */}
          <p class="text-burger-300 font-futura flex items-center gap-3 text-base font-black tracking-widest uppercase sm:text-lg lg:text-xl">
            {ticket.diningOption === 'TAKE_OUT' && (
              <IconInBag class="text-burger-300 h-6 w-6 sm:h-7 sm:w-7" />
            )}
            {ticket.diningOption === 'DINE_IN' && (
              <MapPin class="text-burger-300 h-6 w-6 sm:h-7 sm:w-7" />
            )}
            {ticket.diningOption === 'DELIVERY' && (
              <Phone class="text-burger-300 h-6 w-6 sm:h-7 sm:w-7" />
            )}
            <span>{ticket.diningOption.replace('_', ' ')}</span>
          </p>
        </div>
      </div>
    );
  }
);
