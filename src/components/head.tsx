import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>Burgers on Fleek - {head.title}</title>
      <meta content="Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. Only serving Halal حلال" name="description" />

      <link rel="canonical" href={loc.href} />
      <link rel="icon" href="/icon.svg" />
      <link rel="mask-icon" href="/mask-icon.svg" color="#c37f0c" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="Burgers On Fleek" property="og:title" />
      <meta content="Premium Quality Gourmet Burgers, Steak Sandwiches, Fries, and more. Only serving Halal حلال" property="og:description" />
      <meta content="https://burgersonfleek.ca/logo.png" property="og:image" />
      <meta content="#c37f0c" name="theme-color" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
