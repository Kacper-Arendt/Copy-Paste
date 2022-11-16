import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";
import { getProfileService } from "../../services/profile.ts";

export const getProfile = async ({ response, state }: Context) => {
  const id = state?.loggedUser;

  const profile = await getProfileService({ id });

  if (profile) return response.body = { profile };
};