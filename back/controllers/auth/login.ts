import { Context } from "../../deps.ts";
import { userLoginService } from "../../services/auth.ts";

export const login = async ({ response, request }: Context) => {
  const { email, password } = await request.body().value;

  if (!email || !password) {
    response.status = 422;
    response.body = { msg: "Incorrect data. Email and password are required" };
    return;
  }
  const token = await userLoginService({ email, password });

  if (!token) {
    response.body = { msg: "Wrong password" };
    response.status = 403;
    return;
  }

  response.body = { token };
};
