import { createUser, getUserByEmail, getUserById } from "../db/auth.ts";
import { bcrypt } from "../deps.ts";

export const registerService = async (
  { email, password }: { email: string; password: string },
) => {
  const passwordHash = await bcrypt.hash(password);

  const userId = await createUser({ passwordHash, email });
  if (userId) return userId;
};

export const getUserByIdService = async (id: string) => {
  const user = await getUserById(id);

  if (user) {
    return {
      id: user?.id,
      email: user?.email,
    };
  }
};

export const getUserByEmailService = async (email: string) => {
  const user = await getUserByEmail(email);

  if (user) {
    return {
      id: user?.id,
      email: user?.email,
    };
  }
};
