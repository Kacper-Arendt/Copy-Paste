import { ProfileInterface } from "./profile.ts";

export interface UserInterface {
  id: string;
  email: string;
  password_hash: string;
}

export interface AuthInterface extends Omit<UserInterface, "password_hash"> {
  profile?: Partial<ProfileInterface>;
}

export interface AuthServiceInterface {
  email: string;
  password: string;
}
