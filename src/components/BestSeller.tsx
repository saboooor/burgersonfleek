
import { component$ } from '@builder.io/qwik';
import { Medal } from 'lucide-icons-qwik';

export default  component$(() => {
  return (
    <span class="flex gap-1.5 items-center text-[10px] lum-bg-burger-500/50 rounded-lum lum-btn-p-1">
      <Medal size={14} />
      BEST SELLER
    </span>
  );
});