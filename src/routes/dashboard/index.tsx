import { component$ } from '@builder.io/qwik';
import { routeLoader$, server$ } from '@builder.io/qwik-city';
import { PrismaClient } from '@prisma/client/edge';
import { TrashBinOutline } from 'qwik-ionicons';
import { Button } from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import TextInput from '~/components/TextInput';

export const useGetAuth = routeLoader$(async ({ env, cookie, redirect }) => {
  const prisma = new PrismaClient({ datasources: { db: { url: env.get('DATABASE_URL') } } });
  const sid = cookie.get('session');
  if (!sid?.value) throw redirect(302, '/login');
  const session = await prisma.sessions.findUnique({
    where: {
      token: sid.value,
    },
  });
  if (!session) throw redirect(302, '/login');
});

export const useGetHours = routeLoader$(async ({ env }) => {
  const prisma = new PrismaClient({ datasources: { db: { url: env.get('DATABASE_URL') } } });
  const hours = await prisma.hours.findMany();
  return hours;
});

export const addHours = server$(async function(day: string, closed: boolean, special: boolean, openTime?: string, closeTime?: string) {
  const prisma = new PrismaClient({ datasources: { db: { url: this.env.get('DATABASE_URL') } } });
  if (closed) {
    await prisma.hours.create({
      data: {
        day: day,
        closed: closed,
        special: special,
      },
    });
  }
  else {
    if (!openTime || !closeTime) return;
    await prisma.hours.create({
      data: {
        day: day,
        openTime: openTime,
        closeTime: closeTime,
        special: special,
      },
    });
  }
});

export const deleteHours = server$(async function(day: string) {
  const prisma = new PrismaClient({ datasources: { db: { url: this.env.get('DATABASE_URL') } } });
  await prisma.hours.delete({
    where: {
      day: day,
    },
  });
});

export default component$(() => {
  const hours = useGetHours();

  return (
    <section class="flex flex-col gap-6 mx-auto max-w-6xl px-6 items-center justify-center min-h-[calc(100lvh)] pt-22 sm:pt-28">
      <h1 class="flex items-center transition-all font-bold text-orange-100 text-5xl mb-6 ease-in-out" style="filter: drop-shadow(0 2rem 2rem rgba(251, 146, 60, 0.5));">
        Dashboard
      </h1>
      <div class="flex flex-col gap-4 bg-gray-800 p-5 rounded-lg">
        <h1 class="font-bold text-gray-100 text-2xl sm:text-3xl flex gap-4 items-center justify-center">
          Hours
        </h1>
        {
          hours.value.map((day, i) => <div key={i} class="flex gap-3 text-gray-400">
            <p class={{
              'text-left text-xl md:text-2xl': true,
              'text-yellow-500': day.special,
            }}>{day.day}:</p>
            <p class={{
              'text-right text-xl md:text-2xl flex-1': true,
              'text-yellow-500': day.special,
            }}>{day.closed ? 'CLOSED' : `${day.openTime} - ${day.closeTime}`}</p>
            <TrashBinOutline width='26' class="text-red-500 cursor-pointer" onClick$={async () => {
              await deleteHours(day.day);
              window.location.reload();
            }} />
          </div>)
        }
        <TextInput id="day">
          Day
        </TextInput>
        <Checkbox toggle id="closed" onChange$={(event: any) => {
          const timing = document.getElementById('timing') as HTMLInputElement;
          timing.style.display = event.target.checked ? 'none' : 'flex';
        }}>
          Closed
        </Checkbox>
        <div id="timing" class="flex flex-col gap-4">
          <TextInput id="openTime">
            Open Time
          </TextInput>
          <TextInput id="closeTime">
            Close Time
          </TextInput>
        </div>
        <Checkbox toggle id="special">
          Special
        </Checkbox>
        <Button color="info" big onClick$={async () => {
          const day = document.getElementById('day') as HTMLInputElement;
          const closed = document.getElementById('closed') as HTMLInputElement;
          const special = document.getElementById('special') as HTMLInputElement;
          const openTime = document.getElementById('openTime') as HTMLInputElement;
          const closeTime = document.getElementById('closeTime') as HTMLInputElement;
          await addHours(day.value, closed.checked, special.checked, openTime.value, closeTime.value);
          window.location.reload();
        }}>
          Create
        </Button>
      </div>
    </section>
  );
});
