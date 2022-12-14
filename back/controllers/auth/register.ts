import { Context } from "../../deps.ts";
import { getUserByEmailService, registerService } from "../../services/auth.ts";

export const register = async ({ response, request }: Context) => {
  const { email, password } = await request.body().value;

  if (!email || !password) {
    response.status = 422;
    response.body = { msg: "Incorrect data. Email and password are required" };
    return;
  }

  const findUser = await getUserByEmailService(email);

  if (findUser?.id) return response.body = { msg: "Email exists" };

  const createUser = await registerService({ email, password });

  if (createUser) return response.body = createUser;
};
