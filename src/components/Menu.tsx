import { component$, Slot } from '@builder.io/qwik';
import scrollTo from '~/components/util/scrollTo';

export const Nav = component$(() => {
    return (
        <aside class="z-10 w-full sm:h-1 align-middle sm:sticky sm:top-28" aria-label="Sidebar">
            <p class="text-3xl font-bold mb-5 text-orange-200">Menu</p>
            <div class="overflow-y-auto py-4 px-3 rounded-xl bg-gray-800 border-2 border-gray-700 space-y-2">
                <Slot />
            </div>
        </aside>
    );
});

export const Item = component$(({ id, href }: any) => {
    return (
        <>
            { id &&
                <div class="cursor-pointer flex flex-1 items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 transition duration-200" onClick$={() => scrollTo(id)}>
                    <Slot />
                </div>
            }
            { href &&
                <a href={href} class="flex flex-1 items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 transition duration-200" onClick$={() => scrollTo(id)}>
                    <Slot />
                </a>
            }
        </>
    );
});

export const Title = component$(({ id }: any) => {
    return (
        <>
            <span id={id} class="block h-24 -mt-24" />
            <h1 class="font-bold tracking-tight text-orange-200 text-4xl transition duration-300" id={id}>
                <Slot />
            </h1>
        </>
    );
});