import { Context } from "../deps.ts";

export const notFoundMiddleware =  ({ response }: Context) => {
  response.status = 404;
  response.body = { msg: "Not Found" };
};