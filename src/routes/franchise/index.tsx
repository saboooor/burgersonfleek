import { component$, useSignal, $, useContextProvider } from '@qwik.dev/core';
import { generateHead } from '~/root';
import Cutout from '~/components/images/Cutout.png?jsx';
import Accordion, { openItemsContext } from '~/components/Elements/Accordion';
import Star from 'lucide-icons-qwik/icons/Star';
import CheckCircle2 from 'lucide-icons-qwik/icons/CheckCircle2';
import ArrowRight from 'lucide-icons-qwik/icons/ArrowRight';
import Store from 'lucide-icons-qwik/icons/Store';
import TrendingUp from 'lucide-icons-qwik/icons/TrendingUp';
import Sparkles from 'lucide-icons-qwik/icons/Sparkles';
import Flame from 'lucide-icons-qwik/icons/Flame';
import MapPin from 'lucide-icons-qwik/icons/MapPin';
import GraduationCap from 'lucide-icons-qwik/icons/GraduationCap';
import Megaphone from 'lucide-icons-qwik/icons/Megaphone';
import Headphones from 'lucide-icons-qwik/icons/Headphones';
import Send from 'lucide-icons-qwik/icons/Send';
import Mail from 'lucide-icons-qwik/icons/Mail';

export default component$(() => {
  const openItems = useSignal<string[]>([]);
  useContextProvider(openItemsContext, openItems);

  const isSubmitted = useSignal(false);
  const isSubmitting = useSignal(false);
  const formData = useSignal({
    name: '',
    email: '',
    phone: '',
    marketOfInterest: '',
    liquidCapital: '',
    timeline: '',
    background: '',
    notes: '',
    company_website: '',
  });

  const handleSubmit = $(async () => {
    if (formData.value.company_website) {
      // Honeypot spam trap triggered
      isSubmitted.value = true;
      return;
    }
    isSubmitting.value = true;

    // Simulate submission / send event
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('franchise_application_submit', {
        market: formData.value.marketOfInterest,
        capital: formData.value.liquidCapital,
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 800));
    isSubmitting.value = false;
    isSubmitted.value = true;
  });

  return (
    <div class="min-h-svh pt-20">
      {/* Hero Section */}
      <section class="relative mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div class="lum-card font-futura text-burger-300 mb-6 flex-row items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
              <Sparkles size={14} class="text-burger-300" />
              <span>Franchise Opportunities · Est. 2019</span>
            </div>

            <h1 class="font-futura animate-in fade-in motion-safe:slide-in-from-top-16 text-2xl/6 font-bold! tracking-tighter uppercase motion-safe:duration-700 sm:text-3xl/8 md:text-4xl/10">
              Own a{' '}
              <span class="from-burger-200 via-burger-400 bg-linear-to-br to-orange-100 bg-clip-text! text-transparent">
                Burgers on Fleek
              </span>
              <span class="align-top text-lg">™</span>
            </h1>

            <p class="text-lum-text-secondary mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl">
              Step into the booming gourmet halal burger market with a brand
              customers obsess over. Proven systems, craveable high-margin
              recipes, lean operations, and dedicated end-to-end franchise
              support.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              <a
                href="#franchise-form"
                class={{
                  'lum-btn lum-btn-p-3 sm:text-lg': true,
                  'hover:text-lum-text! active:text-lum-text border-none': true,
                  'lum-grad-bg-burger-600 from-burger-600 to-burger-700 hover:from-burger-500 active:from-burger-500 bg-linear-to-b': true,
                }}
              >
                Apply Now <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                class={{
                  'lum-btn lum-btn-p-3 sm:text-lg': true,
                  'hover:text-lum-text! active:text-lum-text border-none': true,
                }}
              >
                How It Works
              </a>
            </div>

            <div class="mt-8 flex items-center gap-6 text-sm text-gray-400">
              <div class="flex items-center gap-1.5">
                <CheckCircle2 size={16} class="text-green-400" />
                <span>100% Hand-Slaughtered Halal</span>
              </div>
              <div class="flex items-center gap-1.5">
                <CheckCircle2 size={16} class="text-green-400" />
                <span>4.5+ Star Rated</span>
              </div>
            </div>
          </div>

          <div class="relative mx-auto w-full max-w-md">
            <div class="from-burger-600/30 absolute inset-0 -rotate-3 rounded-3xl bg-linear-to-tr to-orange-600/10 blur-2xl" />
            <div class="relative z-10">
              <Cutout class="mx-auto max-h-72 object-contain drop-shadow-2xl" />
              <div class="lum-card mt-4 p-4 text-center backdrop-blur-md">
                <p class="font-futura text-lg font-bold text-white">
                  Gourmet Burgers & Sandwiches
                </p>
                <p class="text-lum-text-secondary text-xs">
                  Hand-pressed fresh daily · Signature brioche · Distinctive
                  sauces
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now / Market Opportunity */}
      <section class="border-burger-900/40 relative border-t py-16 md:py-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="text-center">
            <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
              Why Now
            </p>
            <h2 class="font-futura mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              A high-growth segment in fast casual.
            </h2>
            <p class="text-lum-text-secondary mx-auto mt-4 max-w-2xl text-base sm:text-lg">
              The demand for premium, halal fast-casual dining is accelerating
              faster than traditional burger concepts.
            </p>
          </div>

          <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="lum-card relative flex flex-col justify-between p-8 backdrop-blur-md">
              <div>
                <div class="lum-card mb-6 inline-flex p-3">
                  <Flame class="text-burger-300" size={28} />
                </div>
                <h3 class="font-futura text-2xl font-bold text-white">
                  Distinctive, Craveable Recipes
                </h3>
                <p class="text-lum-text-secondary mt-3 text-sm leading-relaxed sm:text-base">
                  Our hand-pressed gourmet burgers, loaded steak sandwiches, and
                  signature sauces stand out in any market. Customers come back
                  repeatedly for flavors they can't get anywhere else.
                </p>
              </div>
            </div>

            <div class="lum-card relative flex flex-col justify-between p-8 backdrop-blur-md">
              <div>
                <div class="lum-card mb-6 inline-flex p-3">
                  <TrendingUp class="text-burger-300" size={28} />
                </div>
                <h3 class="font-futura text-2xl font-bold text-white">
                  Proven Brand & Strong Retention
                </h3>
                <p class="text-lum-text-secondary mt-3 text-sm leading-relaxed sm:text-base">
                  Established in 2019, Burgers on Fleek has built a passionate,
                  loyal fanbase with glowing customer reviews and organic social
                  media momentum that drives recurring foot traffic.
                </p>
              </div>
            </div>

            <div class="lum-card relative flex flex-col justify-between p-8 backdrop-blur-md">
              <div>
                <div class="lum-card mb-6 inline-flex p-3">
                  <Store class="text-burger-300" size={28} />
                </div>
                <h3 class="font-futura text-2xl font-bold text-white">
                  Built to Run Lean & Agile
                </h3>
                <p class="text-lum-text-secondary mt-3 text-sm leading-relaxed sm:text-base">
                  A modern, tech-enabled operating model with streamlined
                  inventory, fast cook cycles, minimal waste, and omnichannel
                  revenue across dine-in, takeout, and top delivery platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section class="border-burger-900/40 relative border-t bg-gray-950/60 py-16 md:py-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="text-center">
            <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
              Quick Facts
            </p>
            <h2 class="font-futura mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Why operators choose Burgers on Fleek.
            </h2>
          </div>

          <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '100% Hand-Slaughtered Halal',
                desc: 'Strictly certified halal meats sourced directly from St. Helen’s and Sargent Farms.',
              },
              {
                title: 'Consistently 4.5+ Star Reviews',
                desc: 'Loved by guests with top-rated Google & social reviews across every category.',
              },
              {
                title: 'Optimized Fast-Casual Kitchen',
                desc: 'Streamlined prep and assembly designed for speed, consistency, and low labor overhead.',
              },
              {
                title: 'Integrated Digital & POS Systems',
                desc: 'Direct online ordering, modern POS integration, and automated third-party delivery routing.',
              },
              {
                title: 'Established Supply Chain',
                desc: 'Direct distributor relationships ensuring favorable pricing and consistent ingredient quality.',
              },
              {
                title: 'Multi-Unit Growth Potential',
                desc: 'Flexible real estate footprints suited for strip plazas, food halls, and high-street locations.',
              },
            ].map((fact, index) => (
              <div
                key={index}
                class="lum-card flex items-start gap-4 p-6 backdrop-blur-md"
              >
                <div class="lum-grad-bg-lum-input-bg text-burger-300 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                  <Star class="fill-current" size={18} />
                </div>
                <div>
                  <h4 class="font-futura text-lg font-bold text-white">
                    {fact.title}
                  </h4>
                  <p class="text-lum-text-secondary mt-1 text-sm leading-relaxed">
                    {fact.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Support Pillars */}
      <section class="border-burger-900/40 relative border-t py-16 md:py-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="text-center">
            <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
              Full Support
            </p>
            <h2 class="font-futura mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              You’re never operating alone.
            </h2>
            <p class="text-lum-text-secondary mx-auto mt-4 max-w-2xl text-base sm:text-lg">
              We provide the framework, training, and ongoing operational
              support you need to launch and scale with confidence.
            </p>
          </div>

          <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div class="lum-card flex flex-col justify-between p-7 backdrop-blur-md">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-futura text-burger-300 text-2xl font-black">
                    01
                  </span>
                  <MapPin size={24} class="text-burger-300" />
                </div>
                <h3 class="font-futura mt-6 text-xl font-bold text-white">
                  Site Selection & Build
                </h3>
                <p class="text-lum-text-secondary mt-3 text-sm leading-relaxed">
                  We assist with market analysis, foot-traffic evaluation, lease
                  guidance, and restaurant layout optimization.
                </p>
              </div>
            </div>

            <div class="lum-card flex flex-col justify-between p-7 backdrop-blur-md">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-futura text-2xl font-black text-green-400">
                    02
                  </span>
                  <GraduationCap size={24} class="text-green-400" />
                </div>
                <h3 class="font-futura mt-6 text-xl font-bold text-white">
                  Training & Operations
                </h3>
                <p class="text-lum-text-secondary mt-3 text-sm leading-relaxed">
                  Comprehensive hands-on training for management and staff
                  covering recipes, food safety, inventory, and standard
                  operating procedures.
                </p>
              </div>
            </div>

            <div class="lum-card flex flex-col justify-between p-7 backdrop-blur-md">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-futura text-2xl font-black text-blue-400">
                    03
                  </span>
                  <Megaphone size={24} class="text-blue-400" />
                </div>
                <h3 class="font-futura mt-6 text-xl font-bold text-white">
                  Marketing & Launch
                </h3>
                <p class="text-lum-text-secondary mt-3 text-sm leading-relaxed">
                  Grand opening launch playbook, digital ad assets, social media
                  campaigns, influencer collaborations, and ongoing brand
                  marketing.
                </p>
              </div>
            </div>

            <div class="lum-card flex flex-col justify-between p-7 backdrop-blur-md">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-futura text-2xl font-black text-orange-400">
                    04
                  </span>
                  <Headphones size={24} class="text-orange-400" />
                </div>
                <h3 class="font-futura mt-6 text-xl font-bold text-white">
                  Ongoing Support & R&D
                </h3>
                <p class="text-lum-text-secondary mt-3 text-sm leading-relaxed">
                  Dedicated franchise liaison, regular operational check-ins,
                  supply chain optimizations, and continuous menu innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        class="border-burger-900/40 relative scroll-mt-24 border-t bg-gray-950/60 py-16 md:py-24"
      >
        <div class="mx-auto max-w-7xl px-6">
          <div class="text-center">
            <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
              How It Works
            </p>
            <h2 class="font-futura mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              The Franchise Journey.
            </h2>
            <p class="text-lum-text-secondary mx-auto mt-4 max-w-2xl text-base sm:text-lg">
              From your initial inquiry to grand opening day, our 8-step roadmap
              ensures a structured and transparent launch.
            </p>
          </div>

          <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Submit Application',
                desc: 'Fill out the franchise form below with your target territory and details.',
              },
              {
                step: '02',
                title: 'Discovery Call',
                desc: 'We connect to discuss your vision, answer questions, and ensure mutual alignment.',
              },
              {
                step: '03',
                title: 'Agreement Review',
                desc: 'Review the franchise disclosure documents and financial expectations.',
              },
              {
                step: '04',
                title: 'Sign the Deal',
                desc: 'Finalize agreements and officially welcome you into the Burgers on Fleek family.',
              },
              {
                step: '05',
                title: 'Location & Financing',
                desc: 'Secure prime commercial space with our site assessment and lease support.',
              },
              {
                step: '06',
                title: 'Design & Build-out',
                desc: 'Construct and equip your restaurant adhering to our branded architectural specs.',
              },
              {
                step: '07',
                title: 'Training & Marketing',
                desc: 'Team onboarding, hands-on kitchen training, and grand opening PR planning.',
              },
              {
                step: '08',
                title: 'Grand Opening Day!',
                desc: 'Open your doors to the community with our launch team by your side.',
              },
            ].map((item, index) => (
              <div
                key={index}
                class="lum-card flex min-h-[190px] flex-col justify-between p-6 backdrop-blur-md transition-all"
              >
                <div class="font-futura text-burger-300 text-lg font-black tracking-wider opacity-80">
                  {item.step}
                </div>
                <div>
                  <h4 class="font-futura text-lg font-bold text-white">
                    {item.title}
                  </h4>
                  <p class="text-lum-text-secondary mt-1 text-xs leading-relaxed sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Application Form */}
      <section
        id="franchise-form"
        class="border-burger-900/40 relative scroll-mt-24 border-t bg-gray-950/60 py-16 md:py-24"
      >
        <div class="mx-auto max-w-4xl px-6">
          <div class="text-center">
            <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
              Apply Now
            </p>
            <h2 class="font-futura mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Tell us about yourself.
            </h2>
            <p class="text-lum-text-secondary mx-auto mt-4 max-w-xl text-base sm:text-lg">
              A franchise development manager will review your submission and
              reach out within two business days to schedule your discovery
              call.
            </p>
          </div>

          <div class="lum-card mt-12 p-8 backdrop-blur-xl md:p-12">
            {isSubmitted.value ? (
              <div class="flex flex-col items-center py-10 text-center">
                <div class="lum-card mb-6 flex h-16 w-16 items-center justify-center rounded-full text-green-400">
                  <CheckCircle2 size={36} />
                </div>
                <h3 class="font-futura text-2xl font-bold text-white sm:text-3xl">
                  Application Received!
                </h3>
                <p class="text-lum-text-secondary mt-3 max-w-md text-base">
                  Thank you for your interest in Burgers on Fleek. Our franchise
                  team has received your inquiry and will be in touch shortly.
                </p>
                <button
                  onClick$={() => {
                    isSubmitted.value = false;
                    formData.value = {
                      name: '',
                      email: '',
                      phone: '',
                      marketOfInterest: '',
                      liquidCapital: '',
                      timeline: '',
                      background: '',
                      notes: '',
                      company_website: '',
                    };
                  }}
                  class="lum-btn lum-btn-p-2 rounded-lum-2 font-futura mt-8 text-sm font-bold uppercase"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                preventdefault:submit
                onSubmit$={handleSubmit}
                class="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {/* Honeypot spam trap */}
                <div class="hidden" aria-hidden="true">
                  <label for="company_website">Company Website</label>
                  <input
                    id="company_website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.value.company_website}
                    onInput$={(e) => {
                      formData.value = {
                        ...formData.value,
                        company_website: (e.target as HTMLInputElement).value,
                      };
                    }}
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-lum-text text-xs font-bold tracking-wider uppercase">
                    Full Name <span class="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    class="lum-input lum-bg-lum-input-bg rounded-lum-1 px-4 py-3 text-white placeholder-gray-500"
                    value={formData.value.name}
                    onInput$={(e) => {
                      formData.value = {
                        ...formData.value,
                        name: (e.target as HTMLInputElement).value,
                      };
                    }}
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-lum-text text-xs font-bold tracking-wider uppercase">
                    Email Address <span class="text-orange-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    class="lum-input lum-bg-lum-input-bg rounded-lum-1 px-4 py-3 text-white placeholder-gray-500"
                    value={formData.value.email}
                    onInput$={(e) => {
                      formData.value = {
                        ...formData.value,
                        email: (e.target as HTMLInputElement).value,
                      };
                    }}
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-lum-text text-xs font-bold tracking-wider uppercase">
                    Phone Number <span class="text-orange-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    class="lum-input lum-bg-lum-input-bg rounded-lum-1 px-4 py-3 text-white placeholder-gray-500"
                    value={formData.value.phone}
                    onInput$={(e) => {
                      formData.value = {
                        ...formData.value,
                        phone: (e.target as HTMLInputElement).value,
                      };
                    }}
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-lum-text text-xs font-bold tracking-wider uppercase">
                    Target Markets / Cities{' '}
                    <span class="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Toronto, Mississauga, Scarborough, Ajax"
                    class="lum-input lum-bg-lum-input-bg rounded-lum-1 px-4 py-3 text-white placeholder-gray-500"
                    value={formData.value.marketOfInterest}
                    onInput$={(e) => {
                      formData.value = {
                        ...formData.value,
                        marketOfInterest: (e.target as HTMLInputElement).value,
                      };
                    }}
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-lum-text text-xs font-bold tracking-wider uppercase">
                    Liquid Capital <span class="text-orange-400">*</span>
                  </label>
                  <select
                    required
                    class="lum-input lum-bg-lum-input-bg rounded-lum-1 px-4 py-3 text-white"
                    value={formData.value.liquidCapital}
                    onChange$={(e) => {
                      formData.value = {
                        ...formData.value,
                        liquidCapital: (e.target as HTMLSelectElement).value,
                      };
                    }}
                  >
                    <option value="" class="bg-gray-900 text-gray-400">
                      Select a capital range...
                    </option>
                    <option value="Under $100k" class="bg-gray-900">
                      Under $100k
                    </option>
                    <option value="$100k – $250k" class="bg-gray-900">
                      $100k – $250k
                    </option>
                    <option value="$250k – $500k" class="bg-gray-900">
                      $250k – $500k
                    </option>
                    <option value="$500k – $1M" class="bg-gray-900">
                      $500k – $1M
                    </option>
                    <option value="$1M+" class="bg-gray-900">
                      $1M+
                    </option>
                  </select>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-lum-text text-xs font-bold tracking-wider uppercase">
                    Timeline <span class="text-orange-400">*</span>
                  </label>
                  <select
                    required
                    class="lum-input lum-bg-lum-input-bg rounded-lum-1 px-4 py-3 text-white"
                    value={formData.value.timeline}
                    onChange$={(e) => {
                      formData.value = {
                        ...formData.value,
                        timeline: (e.target as HTMLSelectElement).value,
                      };
                    }}
                  >
                    <option value="" class="bg-gray-900 text-gray-400">
                      Select estimated timeline...
                    </option>
                    <option value="ASAP (next 3 months)" class="bg-gray-900">
                      ASAP (next 3 months)
                    </option>
                    <option value="3 – 6 months" class="bg-gray-900">
                      3 – 6 months
                    </option>
                    <option value="6 – 12 months" class="bg-gray-900">
                      6 – 12 months
                    </option>
                    <option value="12+ months" class="bg-gray-900">
                      12+ months
                    </option>
                    <option value="Just exploring" class="bg-gray-900">
                      Just exploring
                    </option>
                  </select>
                </div>

                <div class="flex flex-col gap-2 md:col-span-2">
                  <label class="text-lum-text text-xs font-bold tracking-wider uppercase">
                    Background & Experience
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your restaurant, business, or management background..."
                    class="lum-input lum-bg-lum-input-bg rounded-lum-1 px-4 py-3 text-white placeholder-gray-500"
                    value={formData.value.background}
                    onInput$={(e) => {
                      formData.value = {
                        ...formData.value,
                        background: (e.target as HTMLTextAreaElement).value,
                      };
                    }}
                  />
                </div>

                <div class="flex flex-col gap-2 md:col-span-2">
                  <label class="text-lum-text text-xs font-bold tracking-wider uppercase">
                    Questions or Additional Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific questions or details you would like to share?"
                    class="lum-input lum-bg-lum-input-bg rounded-lum-1 px-4 py-3 text-white placeholder-gray-500"
                    value={formData.value.notes}
                    onInput$={(e) => {
                      formData.value = {
                        ...formData.value,
                        notes: (e.target as HTMLTextAreaElement).value,
                      };
                    }}
                  />
                </div>

                <div class="mt-4 flex flex-col items-start gap-3 md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting.value}
                    class="lum-btn lum-btn-p-3 rounded-lum-2 font-futura lum-grad-bg-burger-600 from-burger-600 to-burger-700 hover:from-burger-500 active:from-burger-500 flex cursor-pointer items-center gap-2 border-none text-sm font-bold tracking-wider text-white uppercase shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting.value ? (
                      <>
                        <div class="lum-loading h-4 w-4" /> Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Submit Application
                      </>
                    )}
                  </button>
                  <p class="text-lum-text-secondary text-xs">
                    Your information remains strictly confidential and is only
                    used for your franchise evaluation.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section class="border-burger-900/40 relative border-t py-16 md:py-24">
        <div class="mx-auto max-w-4xl px-6">
          <div class="text-center">
            <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
              FAQ
            </p>
            <h2 class="font-futura mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Frequently Asked Questions.
            </h2>
          </div>

          <div class="mt-12 flex flex-col gap-4">
            {[
              {
                q: 'What is the initial investment required to open a location?',
                a: 'Total startup investment varies depending on location size, regional real estate rates, equipment, and build-out requirements. We provide a full breakdown including the franchise fee, construction estimates, equipment packages, opening inventory, and initial working capital during the discovery call.',
              },
              {
                q: 'What ongoing fees does a franchisee pay?',
                a: 'Ongoing fees include a standard royalty and a brand marketing contribution calculated as a percentage of gross weekly sales. These support ongoing field support, supply chain management, and national/regional advertising campaigns.',
              },
              {
                q: 'Do I need prior restaurant or culinary experience?',
                a: 'While hospitality or business management experience is helpful, it is not strictly required. Our comprehensive training program covers everything from kitchen operations and food prep standards to staff hiring, inventory controls, and financial reporting.',
              },
              {
                q: 'What territories and markets are currently available?',
                a: 'We are currently focused on expanding throughout the Greater Toronto Area (GTA), including Toronto, Durham Region, York Region, Peel Region, and surrounding areas. Inquire through our form to verify territory availability for your target neighbourhood or city.',
              },
              {
                q: 'How long does it take from signing to opening doors?',
                a: 'On average, the process takes approximately 4 to 9 months depending on site availability, municipal permitting, and contractor build-out timelines.',
              },
              {
                q: 'Why do you not have restaurant-level halal certification?',
                a: 'All our meats are 100% hand-slaughtered Halal and sourced directly from certified suppliers including St. Helen’s and Sargent Farms. Third-party restaurant-level certification programs charge recurring licensing fees that would drive up menu prices for customers. We maintain strict 100% halal integrity while keeping our gourmet offerings accessible and profitable.',
              },
            ].map((faq, index) => {
              const isOpen = openItems.value.includes(index.toString());
              return (
                <div key={index} class="transition-all duration-200">
                  <Accordion
                    sectionName={index.toString()}
                    class={{
                      'font-futura w-full text-left text-lg font-bold text-white': true,
                    }}
                  >
                    {faq.q}
                  </Accordion>
                  <div
                    class={{
                      'overflow-hidden transition-all duration-350 ease-in-out': true,
                      'max-h-96': isOpen,
                      'max-h-0': !isOpen,
                    }}
                  >
                    <div class="text-lum-text-secondary p-4 leading-relaxed sm:text-base">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div class="lum-card mt-12 flex flex-col items-center justify-between gap-4 p-6 text-center backdrop-blur-md sm:flex-row sm:text-left">
            <div>
              <h4 class="font-futura text-lg font-bold text-white">
                Have more questions?
              </h4>
              <p class="text-lum-text-secondary text-sm">
                Reach out directly to our franchise development team.
              </p>
            </div>
            <a
              href="mailto:franchise@burgersonfleek.ca"
              class="lum-btn lum-btn-p-2 rounded-lum-2 font-futura text-burger-300 flex items-center gap-2 text-sm font-bold uppercase hover:text-white"
            >
              <Mail size={16} /> Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head = generateHead({
  title: 'Burgers on Fleek - Franchise Opportunities',
  description:
    'Own a Burgers on Fleek franchise. Join a proven gourmet halal burger brand with comprehensive training, lean operations, and strong customer demand.',
});
