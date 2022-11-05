import { Application, } from 'https://deno.land/x/oak@v11.1.0/mod.ts';

// ROUTES
import router from "./routes.ts";

// MIDDLEWARES
import {errorHandler, notFoundMiddleware} from './middlewares/index.ts'

// CONFIG
import { PORT } from "./config.ts";
import client from "./db/client.ts";

const port = PORT as unknown as number ?? 8000;
const app = new Application();

try {
  await client.queryObject`
    CREATE TABLE IF NOT EXISTS notes (
      id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
      title VARCHAR(20) NOT NULL
    )
  `;
} finally {
  client.release();
}

app.use(errorHandler);
app.use(router.allowedMethods())
app.use(router.routes())

app.use(notFoundMiddleware);

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });