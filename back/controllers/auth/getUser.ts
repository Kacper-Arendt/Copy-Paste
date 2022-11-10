import { Context } from "../../deps.ts";
import { getUserByIdService } from "../../services/auth.ts";

export const getUser = async ({ response, params }: Context) => {
  const id = params?.id;

  const user = await getUserByIdService(id);

  if (user) return response.body = user;
};
