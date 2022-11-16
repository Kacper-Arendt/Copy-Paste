import client from "./client.ts";
import { UserInterface } from "../models/auth.ts";

export const userDto = (user: UserInterface) => ({
  id: user?.id,
  email: user?.email,
  passwordHash: user?.password_hash,
});

export const createUser = async (
  { email, password_hash }: Pick<UserInterface, "email" | "password_hash">,
) => {
  const user = await client.queryObject<UserInterface>`
          INSERT INTO auth (email, password_hash) VALUES (${email}, ${password_hash}) returning *
        `;

  client.release();

  if (user) return userDto(user?.rows[0]);
};

export const getUserById = async (id: string) => {
  const user = await client.queryObject<UserInterface>`
                  SELECT * FROM auth WHERE ID = ${id} LIMIT 1
        `;

  client.release();

  if (user) return userDto(user?.rows[0]);
};

export const getUserByEmail = async (email: string) => {
  const user = await client.queryObject<UserInterface>`
                  SELECT * FROM auth WHERE EMAIL = ${email} LIMIT 1
        `;

  client.release();

  if (user) return userDto(user?.rows[0]);
};
