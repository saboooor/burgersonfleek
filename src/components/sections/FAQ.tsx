import { component$, useContextProvider, useSignal } from '@qwik.dev/core';
import Accordion, { openItemsContext } from '~/components/Elements/Accordion';
import { Link } from '@qwik.dev/router';
import Mail from 'lucide-icons-qwik/icons/Mail';
import Phone from 'lucide-icons-qwik/icons/Phone';
import Store from 'lucide-icons-qwik/icons/Store';

export default component$(() => {
  const faqs = [
    {
      question: 'Are all your meats 100% Halal?',
      answer:
        "Yes! We strictly use 100% hand-slaughtered Halal meat sourced from certified suppliers including St. Helen's and Sargent Farms. We adhere to strict halal handling standards across our entire kitchen and menu.",
    },
    {
      question: 'Why do you not have restaurant-level halal certification?',
      answer:
        "We are 100% Halal in all our ingredients and meat sourcing. Third-party restaurant-level certification carries recurring licensing costs that would ultimately increase food prices for our guests. Instead, we source exclusively from certified hand-slaughtered meat suppliers (St. Helen's for beef and Sargent Farms for chicken) to guarantee complete halal integrity while keeping our gourmet burgers affordable.",
    },
    {
      question: 'Why does food preparation take a minimum of 15 minutes?',
      answer:
        'We are not fast food. Every single burger is freshly hand-pressed and cooked to order on our grill to CFIA safety standards. Fresh gourmet food crafted with care takes a few extra minutes, and we guarantee you will taste the difference.',
    },
    {
      question: 'How do I place an order for pickup or delivery?',
      answer:
        'You can order online directly through our online ordering portal for fast pickup, or find us exclusively on Uber Eats for delivery straight to your door.',
    },
    {
      question: 'Do you offer vegetarian burger options?',
      answer:
        'Yes! We offer dedicated vegetarian options, including our seasoned Veggie Burger served with crisp toppings and gourmet sauces on our fresh brioche bun.',
    },
    {
      question: 'What menu items are and are not gluten-free?',
      answer:
        'Gluten-Free Highlights:\n• Dedicated Gluten-Free Fryer: Our Fresh Cut Fries and Sweet Potato Fries are cooked in a dedicated gluten-free fryer to prevent cross-contamination.\n• 100% Gluten-Free Gravy: Our house-made gravy is 100% vegetarian-based and gluten-free, so our Classic Poutine (fresh fries, cheese curds, and GF gravy) is completely gluten-free friendly.\n• Gluten-Free Buns: We offer dedicated Gluten-Free Buns (as well as Keto Buns) for any gourmet beef burger or steak sandwich.\n\nItems Containing Gluten:\n• Standard brioche buns & grilled cheese buns.\n• Breaded fried chicken burgers (Shawty, The Original, G.O.A.T) & fried chicken poutine.\n• Onion rings & crusted cheese/mushroom items.',
    },
    {
      question: 'How do you handle food allergies and dietary restrictions?',
      answer:
        'Please advise our staff of any food allergies before placing your order. While we take every possible precaution during preparation, please note that food is prepared in a kitchen that handles dairy, gluten, and other common allergens.',
    },
    {
      question: 'Can I purchase digital gift cards?',
      answer:
        'Yes! We offer digital e-gift cards through our online portal, perfect for friends, family, or celebrations.',
    },
    {
      question: 'How can I open a Burgers on Fleek franchise?',
      answer:
        'We are actively seeking passionate franchise partners across the Greater Toronto Area (GTA)! Visit our dedicated Franchise page to explore the opportunity, review support pillars, and submit your inquiry.',
    },
  ];

  const openItems = useSignal<string[]>([]);
  useContextProvider(openItemsContext, openItems);

  return (
    <div class="mx-auto flex w-full max-w-4xl flex-col gap-8 text-center">
      <div class="flex flex-col gap-2">
        <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
          Help & Information
        </p>
        <h2 class="font-futura text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Frequently Asked{' '}
          <span class="from-burger-200 via-burger-400 bg-linear-to-r to-orange-400 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p class="text-lum-text-secondary mx-auto max-w-lg text-sm sm:text-base">
          Everything you need to know about our halal gourmet menu, fresh
          preparation standards, and restaurant operations.
        </p>
      </div>

      <div class="flex flex-col gap-1 text-left">
        {faqs.map((faq, idx) => {
          const isOpen = openItems.value.includes(idx.toString());
          return (
            <div
              key={idx}
              class={{
                'lum-card gap-0 p-0 backdrop-blur-xl transition-all duration-200': true,
                'rounded-lg': idx !== 0 && idx !== faqs.length - 1,
                'rounded-b-lg': idx === 0,
                'rounded-t-lg': idx === faqs.length - 1,
              }}
            >
              <Accordion
                sectionName={idx.toString()}
                class={{
                  'w-full text-left text-lg text-white': true,
                  'rounded-lg': idx !== 0 && idx !== faqs.length - 1,
                  'rounded-b-lg': idx === 0,
                  'rounded-t-lg': idx === faqs.length - 1,
                }}
              >
                {faq.question}
              </Accordion>
              <div
                class={{
                  'overflow-hidden transition-all duration-350 ease-in-out': true,
                  'max-h-120': isOpen,
                  'max-h-0': !isOpen,
                }}
              >
                <div class="text-lum-text-secondary p-4 leading-relaxed whitespace-pre-line sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact & Franchise Cards */}
      <div class="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
        <div class="lum-card flex flex-col justify-between gap-4 p-6 backdrop-blur-md">
          <div>
            <h3 class="font-futura text-lg font-bold text-white">
              Interested in Franchising?
            </h3>
            <p class="text-lum-text-secondary mt-1 text-xs leading-relaxed sm:text-sm">
              Join our rapidly expanding gourmet halal burger brand. Explore
              territory opportunities across the GTA.
            </p>
          </div>
          <Link
            href="/franchise"
            class="lum-btn lum-btn-p-2 rounded-lum-2 font-futura lum-grad-bg-burger-600 from-burger-600 to-burger-700 hover:from-burger-500 inline-flex items-center justify-center gap-2 border-none text-xs font-bold tracking-wider text-white uppercase"
          >
            <Store size={16} /> Franchise Information
          </Link>
        </div>

        <div class="lum-card flex flex-col justify-between gap-4 p-6 backdrop-blur-md">
          <div>
            <h3 class="font-futura text-lg font-bold text-white">
              Still have questions?
            </h3>
            <p class="text-lum-text-secondary mt-1 text-xs leading-relaxed sm:text-sm">
              Get in touch with our team directly via email or phone.
            </p>
          </div>
          <div class="flex gap-2">
            <a
              href="mailto:eat@burgersonfleek.ca"
              class="lum-btn lum-btn-p-2 rounded-lum-2 font-futura text-burger-300 flex-1 text-center text-xs font-bold uppercase hover:text-white"
            >
              <Mail size={14} /> Email Us
            </a>
            <a
              href="tel:+1 (905) 427 4377"
              class="lum-btn lum-btn-p-2 rounded-lum-2 font-futura text-burger-300 flex-1 text-center text-xs font-bold uppercase hover:text-white"
            >
              <Phone size={14} /> Call Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
