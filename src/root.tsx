import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { RouterHead } from './components/Head';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <script defer src="https://umami.bwmp.dev/script.js" data-website-id="0f3cda1e-13fd-4ca3-9057-1701f2f7ee36"/>
        <RouterHead />
      </head>
      <body class="text-lum-text" onTouchStart$={() => {}}>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});