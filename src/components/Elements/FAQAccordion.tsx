import { component$, useContextProvider, useSignal } from '@qwik.dev/core';
import Accordion, { openItemsContext } from './Accordion';

export interface FAQItem {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  class?: string | Record<string, boolean>;
}

export default component$(({ items, class: className }: FAQAccordionProps) => {
  const openItems = useSignal<string[]>([]);
  useContextProvider(openItemsContext, openItems);

  return (
    <div
      class={[
        'flex w-full flex-col gap-1 text-left',
        typeof className === 'string' ? className : '',
      ]}
    >
      {items.map((item, idx) => {
        const question = item.question || item.q || '';
        const answer = item.answer || item.a || '';
        const isOpen = openItems.value.includes(idx.toString());

        return (
          <div
            key={idx}
            class={{
              'lum-card gap-0 overflow-hidden p-0 backdrop-blur-xl transition-all duration-200': true,
              'rounded-lg': idx !== 0 && idx !== items.length - 1,
              'rounded-b-lg': idx === 0,
              'rounded-t-lg': idx === items.length - 1,
            }}
          >
            <Accordion
              sectionName={idx.toString()}
              class={{
                'font-futura w-full px-4 py-3 text-left text-sm font-bold text-white sm:py-3.5 sm:text-base': true,
                'rounded-lg': idx !== 0 && idx !== items.length - 1,
                'rounded-b-lg': idx === 0,
                'rounded-t-lg': idx === items.length - 1,
              }}
            >
              <span class="pr-3 text-left break-words whitespace-normal">
                {question}
              </span>
            </Accordion>
            <div
              class={{
                'overflow-hidden transition-all duration-350 ease-in-out': true,
                'max-h-120': isOpen,
                'max-h-0': !isOpen,
              }}
            >
              <div class="text-lum-text-secondary border-t border-white/5 p-4 text-xs leading-relaxed break-words whitespace-pre-line sm:text-sm">
                {answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});
