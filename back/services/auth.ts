import { bcrypt } from "../deps.ts";

// DB
import { createUser, getUserByEmail, getUserById } from "../db/auth.ts";

// SERVICE
import { createProfileService, getProfileService } from "./profile.ts";

// UTILS
import { createToken } from "../utils/token.ts";

// MODELS
import { AuthInterface, AuthServiceInterface } from "../models/auth.ts";
import { ProfileInterface } from "../models/profile.ts";

const authDto = (
  user: Omit<AuthInterface, "profile">,
  profile?: Omit<ProfileInterface, "id">,
): AuthInterface => ({
  id: user.id,
  email: user.email,
  profile: {
    name: profile?.name,
    avatar: profile?.avatar,
    created_at: profile?.created_at,
  },
});

export const registerService = async (
  { email, password }: AuthServiceInterface,
) => {
  const salt = await bcrypt.genSalt(8);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = await createUser({ password_hash: passwordHash, email });

  if (user) {
    const profile = await createProfileService({ id: user?.id, name: "ragi" });

    return authDto(user, profile);
  }
};

export const getUserByIdService = async (id: string) => {
  const user = await getUserById(id);
  const profile = await getProfileService({ id });

  if (user) return authDto(user, profile);
};

export const getUserByEmailService = async (email: string) => {
  const user = await getUserByEmail(email);

  if (user) {
    const profile = await getProfileService({ id: user?.id });

    return authDto(user, profile);
  }
};

export const userLoginService = async (
  { email, password }: AuthServiceInterface,
) => {
  const user = await getUserByEmail(email);

  if (!user) return;

  const isValid = await bcrypt.compare(password, user.passwordHash);

  if (!isValid) return null;

  const token = await createToken({ email, id: user.id });

  if (token) return token;

  return null;
};
