
import { component$ } from '@builder.io/qwik';
import { MedalOutline } from 'qwik-ionicons';

export default  component$(() => {
  return (
    <span class="flex gap-1.5 items-center text-xs lum-bg-burger-500/50 text-white rounded-md px-2 py-1">
      <MedalOutline width='14'/>
      BEST SELLER
    </span>
  );
});