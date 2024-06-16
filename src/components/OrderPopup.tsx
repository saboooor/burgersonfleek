// LuminescentDev Navbar Component Apr 28

import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik';
import IconWhite from './svg/IconInBag';
import { ButtonAnchor, Card, Header } from '@luminescent/ui';

export default component$(() => {
  const prevScrollpos = useSignal(0);

  useOnDocument('scroll', $(() => {
    const orderpopup = document.getElementById('orderpopup')!;
    if (prevScrollpos.value > window.scrollY && window.scrollY + 1000 < document.body.scrollHeight) {
      orderpopup.style.bottom = '0';
    } else if (window.scrollY > 100) {
      orderpopup.style.bottom = '-9rem';
    }
    prevScrollpos.value = window.scrollY;
  }));

  return <div class="fixed bottom-0 w-full sm:hidden p-4">
    <Card color="orange" blobs class={{
      'font-futura backdrop-blur-lg': true,
    }} id="orderpopup">
      <Header>
        Feeling HANGRY?
      </Header>
      <ButtonAnchor href="tel:+1 (905) 427 4377" color="orange" class={{
        'flex transition backdrop-blur-lg bg-gradient-to-b from-burger-100/80 to-burger-200/80 hover:bg-burger-100 whitespace-nowrap mt-2': true,
      }}>
        <IconWhite width="24" class="fill-current" /> Call to order
      </ButtonAnchor>
    </Card>
  </div>;
});
