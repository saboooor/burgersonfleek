import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ response }) => { throw response.redirect('/menu') };