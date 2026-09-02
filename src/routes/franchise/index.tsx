import { component$, useSignal, $ } from '@qwik.dev/core';
import { generateHead } from '~/root';
import Cutout from '~/components/images/Cutout.png?jsx';
import FAQAccordion from '~/components/Elements/FAQAccordion';
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
import Mail from 'lucide-icons-qwik/icons/Mail';
import Copy from 'lucide-icons-qwik/icons/Copy';

export const franchiseEmail = 'franchise@burgersonfleek.ca';
export const emailSubject = 'Franchise Inquiry - Burgers on Fleek';
export const emailTemplate = `Hi Burgers on Fleek Team,

I am interested in opening a Burgers on Fleek franchise in the Greater Toronto Area. Here are my details:

• Full Name: 
• Phone Number: 
• Target City / Neighbourhood in GTA: 
• Estimated Liquid Capital: 
• Estimated Timeline to Open: 
• Business / Restaurant Experience: 
• Questions or Additional Notes: 

Looking forward to connecting with your franchise development team!`;

export const mailtoUrl = `mailto:${franchiseEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailTemplate)}`;

const faqs = [
  {
    question: 'What is the initial investment required to open a location?',
    answer:
      'Total startup investment varies depending on location size, regional real estate rates, equipment, and build-out requirements. We provide a full breakdown including the franchise fee, construction estimates, equipment packages, opening inventory, and initial working capital during the discovery call.',
  },
  {
    question: 'What ongoing fees does a franchisee pay?',
    answer:
      'Ongoing fees include a standard royalty and a brand marketing contribution calculated as a percentage of gross weekly sales. These support ongoing field support, supply chain management, and national/regional advertising campaigns.',
  },
  {
    question: 'Do I need prior restaurant or culinary experience?',
    answer:
      'While hospitality or business management experience is helpful, it is not strictly required. Our comprehensive training program covers everything from kitchen operations and food prep standards to staff hiring, inventory controls, and financial reporting.',
  },
  {
    question: 'What territories and markets are currently available?',
    answer:
      'We are currently focused on expanding throughout the Greater Toronto Area (GTA), including Toronto, Durham Region, York Region, Peel Region, and surrounding areas. Email our team at franchise@burgersonfleek.ca to verify territory availability for your target neighbourhood or city.',
  },
  {
    question: 'How long does it take from signing to opening doors?',
    answer:
      'On average, the process takes approximately 4 to 9 months depending on site availability, municipal permitting, and contractor build-out timelines.',
  },
  {
    question: 'Why do you not have restaurant-level halal certification?',
    answer:
      'All our meats are 100% hand-slaughtered Halal and sourced directly from certified suppliers including St. Helen’s and Sargent Farms. Third-party restaurant-level certification programs charge recurring licensing fees that would drive up menu prices for customers. We maintain strict 100% halal integrity while keeping our gourmet offerings accessible and profitable.',
  },
];

export default component$(() => {
  const copiedTemplate = useSignal(false);
  const copiedEmail = useSignal(false);

  const handleCopyTemplate = $(async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(emailTemplate);
        copiedTemplate.value = true;
        setTimeout(() => {
          copiedTemplate.value = false;
        }, 2500);
      }
    } catch (err) {
      console.error('Failed to copy email template to clipboard:', err);
    }
  });

  const handleCopyEmail = $(async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(franchiseEmail);
        copiedEmail.value = true;
        setTimeout(() => {
          copiedEmail.value = false;
        }, 2500);
      }
    } catch (err) {
      console.error('Failed to copy franchise email to clipboard:', err);
    }
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
                href="#franchise-inquiry"
                class={{
                  'lum-btn lum-btn-p-3 sm:text-lg': true,
                  'hover:text-lum-text! active:text-lum-text border-none': true,
                  'lum-grad-bg-burger-600 from-burger-600 to-burger-700 hover:from-burger-500 active:from-burger-500 bg-linear-to-b': true,
                }}
              >
                Inquire Now <ArrowRight size={18} />
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
                  Hand-pressed fresh daily · Distinctive sauces
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
                <div class="lum-grad-bg-lum-input-bg text-burger-300 rounded-lum-2 flex h-8 w-8 shrink-0 items-center justify-center">
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
                class="lum-card flex min-h-47.5 flex-col justify-between p-6 backdrop-blur-md transition-all"
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

      {/* Franchise Inquiry Section */}
      <section
        id="franchise-inquiry"
        class="border-burger-900/40 relative scroll-mt-24 border-t bg-gray-950/60 py-16 md:py-24"
      >
        <div class="mx-auto max-w-4xl px-6">
          <div class="text-center">
            <p class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
              Start The Conversation
            </p>
            <h2 class="font-futura mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Franchise Inquiries
            </h2>
            <p class="text-lum-text-secondary mx-auto mt-4 max-w-xl text-base sm:text-lg">
              We are actively looking for passionate franchise partners across
              the Greater Toronto Area (GTA). Reach out to our franchise
              development team directly via email or use the pre-filled inquiry
              template below.
            </p>
          </div>

          <div class="lum-card mt-12 p-8 backdrop-blur-xl md:p-12">
            <div class="flex flex-col gap-8">
              {/* Header & Primary Actions */}
              <div class="flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-start">
                <div class="text-center sm:text-left">
                  <span class="text-burger-300 font-futura text-xs font-bold tracking-wider uppercase">
                    Direct Contact
                  </span>
                  <h3 class="font-futura mt-1 text-2xl font-bold text-white">
                    {franchiseEmail}
                  </h3>
                  <p class="text-lum-text-secondary mt-1 text-sm">
                    Click to launch your email client with the template
                    pre-loaded, or copy the template to compose manually.
                  </p>
                </div>

                <div class="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
                  <a
                    href={mailtoUrl}
                    data-umami-event="franchise_mailto_click"
                    class="lum-btn lum-btn-p-2 rounded-lum-2 font-futura lum-grad-bg-burger-600 from-burger-600 to-burger-700 hover:from-burger-500 active:from-burger-500 inline-flex items-center gap-2 border-none text-sm font-bold tracking-wider text-white uppercase shadow-lg"
                  >
                    <Mail size={18} /> Open Email App
                  </a>
                  <button
                    onClick$={handleCopyTemplate}
                    class="lum-btn lum-btn-p-2 rounded-lum-2 font-futura lum-bg-lum-card-bg hover:lum-bg-lum-input-bg inline-flex cursor-pointer items-center gap-2 text-sm font-bold tracking-wider text-white uppercase transition-colors"
                  >
                    {copiedTemplate.value ? (
                      <>
                        <CheckCircle2 size={18} class="text-green-400" />{' '}
                        Template Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={18} /> Copy Template
                      </>
                    )}
                  </button>
                  <button
                    onClick$={handleCopyEmail}
                    class="lum-btn lum-btn-p-2 rounded-lum-2 font-futura lum-bg-transparent hover:lum-bg-lum-card-bg text-lum-text-secondary! inline-flex cursor-pointer items-center gap-2 text-sm font-medium transition-colors"
                  >
                    {copiedEmail.value ? (
                      <span class="text-green-400">Email Copied!</span>
                    ) : (
                      <span>Copy Email Address</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Template Preview Box */}
              <div>
                <div class="mb-3 flex items-center justify-between">
                  <span class="text-xs font-bold tracking-wider text-gray-400 uppercase">
                    Inquiry Email Template
                  </span>
                  <span class="text-xs text-gray-500">
                    Click "Copy Template" or highlight below
                  </span>
                </div>
                <div class="lum-card rounded-lum-1 border-white/10 bg-gray-900/90 p-5 font-mono text-xs leading-relaxed text-gray-200 select-all sm:text-sm">
                  <div class="mb-3 border-b border-white/10 pb-3 text-gray-400">
                    <p>
                      <span class="text-gray-500">To:</span> {franchiseEmail}
                    </p>
                    <p>
                      <span class="text-gray-500">Subject:</span> {emailSubject}
                    </p>
                  </div>
                  <pre class="font-mono whitespace-pre-wrap">
                    {emailTemplate}
                  </pre>
                </div>
              </div>

              {/* Discovery Process Highlights */}
              <div class="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-3">
                <div class="lum-card flex flex-col gap-2 p-5 backdrop-blur-md">
                  <span class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
                    1. Send Email
                  </span>
                  <p class="text-lum-text-secondary text-xs leading-relaxed sm:text-sm">
                    Send over your target GTA city/neighbourhood and estimated
                    timeline.
                  </p>
                </div>
                <div class="lum-card flex flex-col gap-2 p-5 backdrop-blur-md">
                  <span class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
                    2. Team Review
                  </span>
                  <p class="text-lum-text-secondary text-xs leading-relaxed sm:text-sm">
                    Our team reviews territory availability and responds within
                    2 business days.
                  </p>
                </div>
                <div class="lum-card flex flex-col gap-2 p-5 backdrop-blur-md">
                  <span class="text-burger-300 font-futura text-xs font-bold tracking-widest uppercase">
                    3. Discovery Call
                  </span>
                  <p class="text-lum-text-secondary text-xs leading-relaxed sm:text-sm">
                    We review economics, site selection, and answer all your
                    questions.
                  </p>
                </div>
              </div>
            </div>
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

          <div class="mt-12">
            <FAQAccordion items={faqs} />
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
