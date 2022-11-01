import {  Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';

export const session = new Router();

session.get('/session', (ctx) => {
  ctx.response.body = ctx.state.users.get(ctx.state.me.id);
});
