import { component$, useStore } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';
import { v4 } from 'uuid';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Button } from '~/components/Button';
import TextInput from '~/components/TextInput';
import LoadingIcon from '~/components/svg/LoadingIcon';

export const login = server$(async function(email: string, password: string) {
  const prisma = new PrismaClient({
    datasources: { db: { url: this.env.get('DATABASE_URL') } },
  }).$extends(withAccelerate());
  const user = await prisma.users.findUnique({
    where: {
      email_password: {
        email,
        password,
      },
    },
    cacheStrategy: { ttl: 3600 },
  });
  if (!user) throw new Error('Invalid email or password');
  const sid = v4();
  await prisma.sessions.create({
    data: {
      token: sid,
      userId: user.id,
    },
  });
  return sid;
});

export default component$(() => {
  const store = useStore({
    loading: false,
  });
  return (
    <section class="flex flex-col gap-6 mx-auto max-w-6xl px-6 items-center justify-center min-h-[calc(100lvh)] pt-22 sm:pt-28">
      <h1 class="flex items-center transition-all font-bold text-orange-100 text-5xl mb-6 ease-in-out" style="filter: drop-shadow(0 2rem 2rem rgba(251, 146, 60, 0.5));">
        Login <LoadingIcon extraClass={store.loading ? 'ml-6' : 'hidden'} />
      </h1>
      <TextInput id="email">
        Email
      </TextInput>
      <TextInput id="password" type="password">
        Password
      </TextInput>
      <Button color="info" big onClick$={async () => {
        store.loading = true;
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const sid = await login(email.value, password.value);
        document.cookie = `session=${sid}; path=/`;
        store.loading = false;
        document.location.href = '/dashboard';
      }}>
        Login
      </Button>
    </section>
  );
});
