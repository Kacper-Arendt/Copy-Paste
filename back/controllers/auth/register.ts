import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";
import { getUserByEmailService, registerService } from "../../services/auth.ts";

export const register = async ({ response, request }: Context) => {
  const { email, password } = await request.body().value;

  if (!email || !password) {
    response.status = 422;
    response.body = { msg: "Incorrect data. Email and password are required" };
    return;
  }

  const findUser = await getUserByEmailService(email);

  if (findUser) return response.body = { msg: "Email exists" };

  const createUser = await registerService({ email, password });

  if (createUser) return response.body = createUser;
};
