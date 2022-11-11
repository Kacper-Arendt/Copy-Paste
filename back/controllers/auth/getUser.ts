import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";
import { getUserByIdService } from "../../services/auth.ts";

export const getUser = async ({ response, state }: Context) => {
  const id = state?.loggedUser;
  
  if (!id) {
    response.status = 404;
     response.body = {err: 'id not found'}
    return
  }

  const user = await getUserByIdService(id);

  if (user) return response.body = user;
};
