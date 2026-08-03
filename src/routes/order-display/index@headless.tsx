import {
  component$,
  useSignal,
  useStore,
  useTask$,
  useVisibleTask$,
  $,
} from '@qwik.dev/core';
import { useLocation, type RequestHandler } from '@qwik.dev/router';
import { generateHead } from '~/root';
import type { ToastOrderTicket } from '~/utils/toast-api';
import { OrderBoardHeader } from '~/components/order-display/OrderBoardHeader';
import { PickupTicketCard } from '~/components/order-display/TicketCard';
import CheckCircle2 from 'lucide-icons-qwik/icons/CheckCircle2';
import Hamburger from 'lucide-icons-qwik/icons/Hamburger';

const videos = [
  '/videos/godzilla.mp4',
  '/videos/shook.mp4',
  '/videos/5years.mp4',
  '/videos/brisket.mp4',
];

const ITEMS_PER_PAGE = 4; // Max 4 tickets per section per page (2x2 grid for TV viewing)
const PAGE_ROTATE_INTERVAL_MS = 7000; // Rotate pages every 7 seconds

export default component$(() => {
  const loc = useLocation();
  const connectionStatus = useSignal<'connecting' | 'connected' | 'error'>(
    'connecting'
  );
  const isMock = useSignal<boolean>(true);
  const videoRef = useSignal<HTMLVideoElement>();
  const currentVideoIndex = useSignal<number>(0);
  const currentPageIndex = useSignal<number>(0);

  const state = useStore<{
    orders: ToastOrderTicket[];
  }>({
    orders: [],
  });

  const handleVideoEnded = $(() => {
    currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length;
  });

  useTask$(({ track }) => {
    track(() => currentVideoIndex.value);
    track(() => videoRef.value);

    const video = videoRef.value;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((e) => console.warn('Autoplay error:', e));
    }
  });

  // Client-side EventSource listener for read-only Toast API polling
  useVisibleTask$(({ cleanup }) => {
    const search =
      loc.url.search ||
      (typeof window !== 'undefined' ? window.location.search : '');
    const eventSource = new EventSource(`/api/orders${search}`);

    eventSource.onopen = () => {
      connectionStatus.value = 'connected';
    };

    eventSource.onmessage = (event) => {
      try {
        const payload = JSON.parse(String(event.data)) as {
          orders?: ToastOrderTicket[];
          isMock?: boolean;
        };
        const newOrders: ToastOrderTicket[] = payload.orders || [];
        isMock.value = !!payload.isMock;
        state.orders = newOrders;
      } catch (err) {
        console.error('Failed to parse SSE Toast payload:', err);
      }
    };

    eventSource.onerror = () => {
      connectionStatus.value = 'error';
      eventSource.close();
    };

    cleanup(() => {
      eventSource.close();
    });
  });

  // Automatic page rotation timer every 7 seconds
  useVisibleTask$(({ cleanup }) => {
    const timer = setInterval(() => {
      currentPageIndex.value += 1;
    }, PAGE_ROTATE_INTERVAL_MS);

    cleanup(() => {
      clearInterval(timer);
    });
  });

  // Auto-hide ready orders after 15 minutes on NOW SERVING
  const MAX_READY_AGE_MS = 15 * 60 * 1000;

  const readyOrders = state.orders.filter((o) => {
    if (o.orderState !== 'READY') return false;

    const timeStr = o.readyDate || o.openedDate;
    if (!timeStr) return true;

    const readyMs = new Date(timeStr).getTime();
    if (isNaN(readyMs)) return true;

    return Date.now() - readyMs <= MAX_READY_AGE_MS;
  });
  const preparingOrders = state.orders.filter(
    (o) => o.orderState === 'PREPARING'
  );

  // Calculate total pages for each column
  const readyTotalPages = Math.max(
    1,
    Math.ceil(readyOrders.length / ITEMS_PER_PAGE)
  );
  const preparingTotalPages = Math.max(
    1,
    Math.ceil(preparingOrders.length / ITEMS_PER_PAGE)
  );

  // Current page for each section
  const currentReadyPage = currentPageIndex.value % readyTotalPages;
  const currentPreparingPage = currentPageIndex.value % preparingTotalPages;

  // Paginated order slices
  const visibleReadyOrders = readyOrders.slice(
    currentReadyPage * ITEMS_PER_PAGE,
    (currentReadyPage + 1) * ITEMS_PER_PAGE
  );
  const visiblePreparingOrders = preparingOrders.slice(
    currentPreparingPage * ITEMS_PER_PAGE,
    (currentPreparingPage + 1) * ITEMS_PER_PAGE
  );

  const hasBothColumns = readyOrders.length > 0 && preparingOrders.length > 0;

  return (
    <div
      class="selection:bg-burger-300 flex min-h-screen flex-col selection:text-gray-950"
      style={{
        '--lum-border-radius': '3rem',
        '--lum-depth': '6',
      }}
    >
      {/* Background Video Layer - Alternates continuously between videos */}
      <video
        class="fullscreen-bg pointer-events-none opacity-50 transition-opacity duration-1000"
        autoplay
        playsInline
        muted
        ref={videoRef}
        onEnded$={handleVideoEnded}
        preload="auto"
      >
        <source src={videos[currentVideoIndex.value]} type="video/mp4" />
      </video>

      {/* Header Bar matching Nav.tsx */}
      <OrderBoardHeader
        connectionStatus={connectionStatus}
        isMock={isMock}
        readyCount={readyOrders.length}
        preparingCount={preparingOrders.length}
      />

      {/* Main Public Pickup Display */}
      <main class="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center p-4 sm:p-6">
        <div
          class={[
            'grid items-start gap-8',
            hasBothColumns
              ? 'grid-cols-1 md:grid-cols-2'
              : 'mx-auto w-full max-w-3xl grid-cols-1',
          ]}
        >
          {/* NOW SERVING (READY FOR PICKUP) */}
          {readyOrders.length > 0 && (
            <section class="lum-card lum-grad-bg-lum-card-bg relative overflow-hidden backdrop-blur-md">
              <div class="flex items-center justify-between px-2 pb-4">
                <div class="flex items-center gap-3">
                  <CheckCircle2 class="h-8 w-8 text-emerald-400 sm:h-10 sm:w-10" />
                  <h2 class="font-futura bg-linear-to-br from-emerald-200 via-emerald-400 to-green-100 bg-clip-text! text-2xl font-bold tracking-wider text-transparent sm:text-4xl">
                    NOW SERVING
                  </h2>
                </div>

                {/* Glowing Pagination Dots */}
                {readyTotalPages > 1 && (
                  <div class="rounded-lum-2 lum-bg-transparent flex items-center gap-2 px-3 py-1.5">
                    {Array.from({ length: readyTotalPages }).map((_, idx) => (
                      <span
                        key={idx}
                        class={[
                          'h-2.5 w-2.5 rounded-full transition-all duration-300',
                          idx === currentReadyPage
                            ? 'scale-125 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]'
                            : 'bg-emerald-400/30',
                        ]}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Ready Order Tickets */}
              <div class="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                {visibleReadyOrders.map((ticket) => (
                  <PickupTicketCard
                    key={ticket.id}
                    ticket={ticket}
                    isReady={true}
                  />
                ))}
              </div>
            </section>
          )}

          {/* IN PREPARATION */}
          {preparingOrders.length > 0 && (
            <section class="lum-card lum-grad-bg-lum-card-bg relative overflow-hidden backdrop-blur-md">
              <div class="flex items-center justify-between px-2 pb-4">
                <div class="flex items-center gap-3">
                  <Hamburger class="text-burger-300 h-8 w-8 sm:h-10 sm:w-10" />
                  <h2 class="font-futura from-burger-200 via-burger-400 bg-linear-to-br to-orange-100 bg-clip-text! text-2xl font-bold tracking-wider text-transparent sm:text-4xl">
                    IN PREPARATION
                  </h2>
                </div>

                {/* Glowing Pagination Dots */}
                {preparingTotalPages > 1 && (
                  <div class="rounded-lum-2 lum-bg-transparent flex items-center gap-2 px-3 py-1.5">
                    {Array.from({ length: preparingTotalPages }).map(
                      (_, idx) => (
                        <span
                          key={idx}
                          class={[
                            'h-2.5 w-2.5 rounded-full transition-all duration-300',
                            idx === currentPreparingPage
                              ? 'bg-burger-300 scale-125 shadow-[0_0_10px_rgba(249,115,22,0.8)]'
                              : 'bg-burger-300/30',
                          ]}
                        />
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Preparing Order Tickets */}
              <div class="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                {visiblePreparingOrders.map((ticket) => (
                  <PickupTicketCard
                    key={ticket.id}
                    ticket={ticket}
                    isReady={false}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
});

export const onRequest: RequestHandler = ({ headers }) => {
  headers.set('X-Robots-Tag', 'noindex, nofollow');
};

export const head = generateHead({
  title: 'Burgers on Fleek - Order Pickup Board',
  noindex: true,
});
