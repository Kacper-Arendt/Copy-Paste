import { Application, } from 'https://deno.land/x/oak@v11.1.0/mod.ts';

// MODELS
import { users, messages } from "./models/index.ts";

// ROUTES
import {session, users as usersRoute, message} from "./routes/index.ts";

const port = 8000;
const app = new Application();

app.use(async (ctx, next) => {
  ctx.state = { me: users.get('1'), users, messages };

  await next();
});

app.use(session.allowedMethods());
app.use(session.routes());

app.use(usersRoute.allowedMethods());
app.use(usersRoute.routes());

app.use(message.allowedMethods());
app.use(message.routes());

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });