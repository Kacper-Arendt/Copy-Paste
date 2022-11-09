import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";
import { getUserByIdService } from "../../services/auth.ts";

export const getUser = async ({ response, params }: Context) => {
  const id = params?.noteId;

  const user = await getUserByIdService(id);

  if (user) return response.body = user;
};
