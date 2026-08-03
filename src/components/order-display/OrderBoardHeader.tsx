import {
  component$,
  type Signal,
  useSignal,
  useVisibleTask$,
} from '@qwik.dev/core';
import LogoHorizontal from '~/components/svg/LogoHorizontal';
import RefreshCw from 'lucide-icons-qwik/icons/RefreshCw';
import ShieldAlert from 'lucide-icons-qwik/icons/ShieldAlert';

export interface OrderBoardHeaderProps {
  connectionStatus: Signal<'connecting' | 'connected' | 'error'>;
  isMock: Signal<boolean>;
  readyCount?: number;
  preparingCount?: number;
}

export const OrderBoardHeader = component$<OrderBoardHeaderProps>(
  ({ connectionStatus, isMock }) => {
    const timeString = useSignal<string>('');

    useVisibleTask$(({ cleanup }) => {
      const updateClock = () => {
        const now = new Date();
        timeString.value = now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
      };
      updateClock();
      const interval = setInterval(updateClock, 1000);
      cleanup(() => clearInterval(interval));
    });

    return (
      <header class="progressive-blur-header font-futura sticky top-0 z-40 w-full bg-gray-900/50 pt-4 pb-8">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
          {/* Logo & Header Title */}
          <div class="flex items-center gap-4">
            <LogoHorizontal id="header-logo" size={300} height={125} />
          </div>

          {/* Controls & Connection Status */}
          <div class="flex flex-col items-end gap-2">
            {/* Live Clock */}
            {timeString.value && (
              <div class="font-futura flex items-center gap-2 text-5xl font-bold tracking-wider text-white drop-shadow-md sm:text-6xl">
                <span>{timeString.value}</span>
              </div>
            )}
            {/* Live SSE Status Badge */}
            <div>
              {connectionStatus.value === 'connected' && (
                <span class="lum-btn lum-btn-p-1 lum-bg-transparent rounded-lum-1 flex items-center gap-1.5 text-xs font-bold text-green-200!">
                  <span class="lum-grad-bg-green-300 h-2 w-2 animate-pulse rounded-full" />
                  {isMock.value ? 'Mock Stream' : 'Connected'}
                </span>
              )}
              {connectionStatus.value === 'connecting' && (
                <span class="lum-btn lum-btn-p-1 lum-bg-transparent rounded-lum-1 flex items-center gap-1.5 text-xs font-bold text-amber-200!">
                  <RefreshCw class="h-3.5 w-3.5 animate-spin" />
                  Connecting...
                </span>
              )}
              {connectionStatus.value === 'error' && (
                <span class="lum-btn lum-btn-p-1 lum-bg-transparent rounded-lum-1 flex items-center gap-1.5 text-xs font-bold text-red-200!">
                  <ShieldAlert class="h-3.5 w-3.5" />
                  Disconnected
                </span>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
);
