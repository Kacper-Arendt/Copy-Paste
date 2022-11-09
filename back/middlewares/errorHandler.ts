import { Middleware } from "https://deno.land/x/oak@v11.1.0/middleware.ts";
import { isHttpError } from "https://deno.land/x/oak@v11.1.0/deps.ts";

export const errorHandler: Middleware = async ({ response }, next) => {
  try {
    await next();
  } catch (err) {
    console.error("errorHandler =>", err);

    if (err instanceof Deno.errors.NotFound) {
      console.error("the file was not found");
    }

    if (isHttpError(err)) response.status = err.status;
    else response.status = 500;

    response.body = { error: err.message };
    response.type = "json";
  }
};
