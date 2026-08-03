import type { RequestHandler } from '@qwik.dev/router';
import { getLiveToastOrders, type ToastApiConfig } from '~/utils/toast-api';

export const onGet: RequestHandler = ({ send, request, env }) => {
  const encoder = new TextEncoder();
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const toastConfig: ToastApiConfig = {
    clientId: env.get('TOAST_CLIENT_ID') || process.env.TOAST_CLIENT_ID,
    clientSecret:
      env.get('TOAST_CLIENT_SECRET') || process.env.TOAST_CLIENT_SECRET,
    restaurantId:
      env.get('TOAST_RESTAURANT_EXTERNAL_ID') ||
      env.get('TOAST_RESTAURANT_ID') ||
      process.env.TOAST_RESTAURANT_EXTERNAL_ID ||
      process.env.TOAST_RESTAURANT_ID,
    baseUrl:
      env.get('TOAST_API_BASE_URL') ||
      process.env.TOAST_API_BASE_URL ||
      'https://ws-api.toasttab.com',
  };

  const body = new ReadableStream({
    async start(controller) {
      const sendUpdate = async () => {
        try {
          const data = await getLiveToastOrders(toastConfig);
          const chunk = `data: ${JSON.stringify(data)}\n\n`;
          controller.enqueue(encoder.encode(chunk));
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          const errChunk = `event: error\ndata: ${JSON.stringify({ error: msg })}\n\n`;
          controller.enqueue(encoder.encode(errChunk));
        }
      };

      // Push first payload immediately
      await sendUpdate();

      // Poll Toast API every 12 seconds
      intervalId = setInterval(() => {
        sendUpdate().catch((e: unknown) =>
          console.error('SSE Toast push error:', e)
        );
      }, 12000);

      request.signal.addEventListener('abort', () => {
        if (intervalId) clearInterval(intervalId);
        try {
          controller.close();
        } catch {
          // ignore
        }
      });
    },
    cancel() {
      if (intervalId) clearInterval(intervalId);
    },
  });

  return send(
    new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  );
};
