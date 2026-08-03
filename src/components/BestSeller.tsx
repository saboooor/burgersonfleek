import { component$ } from '@qwik.dev/core';
import Medal from 'lucide-icons-qwik/icons/Medal';

export default component$(() => {
  return (
    <span class="lum-grad-bg-burger-500/50 rounded-lum lum-btn-p-1 flex items-center gap-1.5 text-[10px]">
      <Medal size={14} />
      BEST SELLER
    </span>
  );
});
