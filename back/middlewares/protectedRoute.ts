import { validateToken } from "../utils/token.ts";
import { Context, Middleware } from "../deps.ts";

export const protectedRoute: Middleware = async (
  { request, response ,state}: Context,
  next: () => Promise<unknown>,
) => {
  try {
    const headers: Headers = request.headers;
    const authorization = headers.get("Authorization");

    if (!authorization) {
      response.status = 401;
      response.body = {
        message: "You are not authorized to access this route",
      };
      return;
    }
    const token = authorization.split(" ")[1];

    const isValid = await validateToken(token);

    if (!isValid) {
      response.status = 401;
      response.body = {
        message: "You are not authorized to access this route",
      };
      return;
    }
    
    state.loggedUser= isValid?.id
    
    await next();
  } catch (error) {
    response.status = 500;
    response.body = { msg: "Error occurred while decoding token", error };
    return;
  }
};
