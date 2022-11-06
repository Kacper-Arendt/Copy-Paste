import { Middleware } from "https://deno.land/x/oak@v11.1.0/middleware.ts";

export const errorHandler: Middleware = async ({ response }, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    response.status = 500;
    response.body = { msg: err.message };
  }
};
