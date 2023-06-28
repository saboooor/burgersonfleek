import { component$, Slot } from '@builder.io/qwik';

export default component$((props: any) => {
  return (
    <div class="flex gap-3 items-center">
      <label class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" {...props} class="sr-only peer" />
        <div class={{
          'transition ease-in-out h-7 rounded-md peer bg-gray-700 border border-gray-600 hover:bg-gray-600': true,
          'w-12': props.toggle,
          'w-7': !props.toggle,
          'peer-checked:bg-orange-700 peer-checked:border-orange-600 peer-checked:hover:bg-orange-600': true,
          'after:content-[\'\'] after:absolute after:top-[4px] after:left-[4px] after:rounded-md after:h-5 after:w-5 after:transition-all after:ease-in-out': true,
          'peer-checked:after:bg-orange-500 peer-checked:after:border-orange-400 peer-checked:hover:after:bg-orange-400': true,
          'peer-checked:after:translate-x-full after:bg-gray-600 after:border after:border-gray-500 hover:after:bg-gray-500': props.toggle,
        }} />
      </label>
      {!props.nolabel &&
        <label for={props.id} class="text-gray-100">
          <Slot/>
        </label>
      }
    </div>
  );
});