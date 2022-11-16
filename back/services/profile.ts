import { createProfile, getProfile } from "../db/profile.ts";
import { ProfileInterface } from "../models/profile.ts";

export const createProfileService = async (
  { id, name }: Pick<ProfileInterface, "id" | "name">,
) => {
  return await createProfile({ name, id });
};

export const getProfileService = async (
  { id }: Pick<ProfileInterface, "id">,
) => {
  return await getProfile({ id });
};
