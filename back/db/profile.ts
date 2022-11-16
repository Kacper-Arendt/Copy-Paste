import client from "./client.ts";
import { ProfileInterface } from "../models/profile.ts";

export const profileDto = (profile: ProfileInterface): ProfileInterface => ({
  id: profile?.id,
  name: profile?.name,
  avatar: profile?.avatar,
  created_at: profile?.created_at,
});

export const createProfile = async (
  { id, name }: Pick<ProfileInterface, "id" | "name">,
) => {
  const user = await client.queryObject<ProfileInterface>`
          INSERT INTO profile (id, name) VALUES (${id}, ${name}) returning * 
        `;

  client.release();

  if (user) return profileDto(user?.rows[0]);
};

export const getProfile = async (
  { id }: Pick<ProfileInterface, "id">,
) => {
  const query = await client.queryObject<ProfileInterface>`
                  SELECT * FROM profile WHERE id = ${id} LIMIT 1
        `;

  client.release();

  if (query) return profileDto(query?.rows[0]);
};
