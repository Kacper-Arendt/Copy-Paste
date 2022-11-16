import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";
import { createProfileService } from "../../services/profile.ts";

export const createProfile = async ({ response, state }: Context) => {
  const id = state?.loggedUser;

  if (!id) {
    response.status = 404;
    response.body = { err: "id not found" };
    return;
  }

  const user = await createProfileService({ id, name: "123" });

  if (user) return response.body = user;
};
