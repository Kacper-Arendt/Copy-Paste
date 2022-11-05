import { Application, } from 'https://deno.land/x/oak@v11.1.0/mod.ts';

// ROUTES
import router from "./routes.ts";

// MIDDLEWARES
import {errorHandler, notFoundMiddleware} from './middlewares/index.ts'

// CONFIG
import { PORT } from "./config.ts";

const port = PORT as unknown as number ?? 8000;
const app = new Application();

app.use(errorHandler);

app.use(router.allowedMethods())
app.use(router.routes())

app.use(notFoundMiddleware);

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });