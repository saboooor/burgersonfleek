import { component$, Slot } from '@builder.io/qwik';

export default component$((props: any) => {
  return (
    <div class="flex flex-col">
      {!props.nolabel &&
        <label for={props.id} class="mb-2">
          <Slot />
        </label>
      }
      {props.big ?
        <RawTextAreaInput {...props} /> :
        <RawTextInput {...props} />
      }
    </div>
  );
});

export const RawTextInput = component$((props: any) => {
  return (
    <input {...props} class={{
      'transition ease-in-out text-lg border border-gray-600 bg-gray-700 text-gray-50 hover:bg-gray-600 focus:bg-gray-600 rounded-md px-3 py-2': true,
      [props.extraClass]: !!props.extraClass,
    }}/>
  );
});

export const RawTextAreaInput = component$((props: any) => {
  return (
    <textarea {...props} class={{
      'transition ease-in-out text-lg border border-gray-600 bg-gray-700 text-gray-50 hover:bg-gray-600 focus:bg-gray-600 rounded-md px-3 py-2 resize-y w-full h-32': true,
      [props.extraClass]: !!props.extraClass,
    }}/>
  );
});