import { component$ } from '@qwik.dev/core';
import { useDocumentHead, useLocation } from '@qwik.dev/router';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{`${head.title}`}</title>
      <meta content={`${head.title}`} property="og:title" />
      <meta content="oklch(0.6617 0.1355 67.02)" name="theme-color" />

      <link rel="canonical" href={loc.url.href} />
      <link rel="icon" href="/branding/svg/icon.svg" />
      <link rel="apple-touch-icon" href="/branding/png/mobile/apple-icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Typekit Fonts */}
      <link rel="preconnect" href="https://use.typekit.net" />
      <link rel="preconnect" href="https://p.typekit.net" />
      <link rel="stylesheet" href="https://use.typekit.net/mvz1qpc.css" />

      {head.meta.map((m, i) => (
        <meta {...m} key={i} />
      ))}

      {head.links.map((l, i) => (
        <link {...l} key={i} />
      ))}

      {head.styles.map((s, i) => (
        <style {...s.props} key={i} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
