import {  Router,helpers  } from 'https://deno.land/x/oak@v11.1.0/mod.ts';

export const users = new Router();

users.get('/users', (ctx) => {
  ctx.response.body = Array.from(ctx.state.users.values());
});

users.get('/users/:userId', (ctx) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = ctx.state.users.get(userId);
});
