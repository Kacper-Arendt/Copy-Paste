import { helpers, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { uuid as uuidv4 } from "https://deno.land/x/unique/uuid.ts"

export const message = new Router();

message.get('/messages', (ctx) => {
  ctx.response.body = Array.from(ctx.state.messages.values());
});

message.get('/messages/:messageId', (ctx) => {
  const { messageId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = ctx.state.messages.get(messageId);
});

message.post('/messages', async (ctx) => {
  const id: string = uuidv4();

  const { value } = ctx.request.body({ type: 'json' });
  const { text } = await value;

  ctx.state.messages.set(id, {
    id,
    text,
    userId: ctx.state.me.id,
  });

  ctx.response.body = ctx.state.messages.get(id);
});

message.delete('/messages/:messageId',  (ctx) => {
  const { messageId } = helpers.getQuery(ctx, { mergeParams: true });

  ctx.response.body = ctx.state.messages.delete(messageId);
});
