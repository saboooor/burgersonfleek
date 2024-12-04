
import { component$ } from '@builder.io/qwik';
import { MedalOutline } from 'qwik-ionicons';

export default  component$(() => {
  return (
    <span class="flex gap-1.5 items-center text-xs bg-burger-700 border border-burger-500 text-white rounded-lg px-3 py-1">
      <MedalOutline width='14'/>
      Best Seller
    </span>
  );
});