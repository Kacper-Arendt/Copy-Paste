import { createUser, getUserByEmail, getUserById } from "../db/auth.ts";
import { bcrypt } from "../deps.ts";
import { createToken } from "../utils/token.ts";

export const registerService = async (
  { email, password }: { email: string; password: string },
) => {
  const salt = await bcrypt.genSalt(8);
  const passwordHash = await bcrypt.hash(password, salt);

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

export const userLoginService = async (
  { email, password }: { email: string; password: string },
) => {
  const user = await getUserByEmail(email);

  if (!user) return;

  const isValid = await bcrypt.compare(password, user.password_hash);

  if (!isValid) return null;

  const token = await createToken({ email, id: user.id });

  if (token) return token;

  return null;
};
