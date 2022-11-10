import client from "./client.ts";
import { CreateUserInterface } from "../models/auth.ts";

export const createUser = async (
  { email, passwordHash }: Pick<CreateUserInterface, "email" | "passwordHash">,
) => {
  const user = await client.queryObject<CreateUserInterface>`
          INSERT INTO auth (email, password_hash) VALUES (${email}, ${passwordHash}) RETURNING id
        `;

  console.log(user);
  client.release();
  if (user) return { id: user?.rows[0]?.id };
};

export const getUserById = async (id: string) => {
  const user = await client.queryObject<{ id: string; email: string }>`
                  SELECT * FROM auth WHERE ID = ${id} LIMIT 1
        `;

  client.release();

  if (user) return user?.rows[0];
};

export const getUserByEmail = async (email: string) => {
  const user = await client.queryObject<
    { id: string; email: string; password_hash: string }
  >`
                  SELECT * FROM auth WHERE EMAIL = ${email} LIMIT 1
        `;

  client.release();

  if (user) return user?.rows[0];
};
