import { component$, Slot } from '@builder.io/qwik';

export const Nav = component$(() => {
    return (
        <aside class="z-10 w-full sm:h-1 align-middle sm:sticky sm:top-28" aria-label="Sidebar">
            <p class="text-3xl font-bold mb-5 text-orange-300">Menu</p>
            <div class="overflow-y-auto py-4 px-3 rounded-2xl bg-gray-800">
                <ul class="space-y-2">
                    <Slot />
                </ul>
            </div>
        </aside>
    );
});

export const Item = component$(({ href }: any) => {
    return (
        <li>
            <a href={href} class="flex flex-1 items-center p-2 text-base font-normal rounded-xl text-white hover:bg-gray-700 transition duration-200">
                <Slot />
            </a>
        </li>
    );
});

export const Title = component$(({ id }: any) => {
    return (
      <h1 class="font-bold tracking-tight text-orange-300 text-4xl transition duration-300" id={id}>
        <Slot />
      </h1>
    );
});