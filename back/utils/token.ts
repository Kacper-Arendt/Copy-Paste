import {
  Jose,
  makeJwt,
  Payload,
  setExpiration,
  validateJwt,
} from "https://deno.land/x/djwt/create.ts";
import { TOKEN_SECRET_KEY } from "../config.ts";

const key = TOKEN_SECRET_KEY;

const payload: Payload = {
  iss: "Jon Doe",
  exp: setExpiration(new Date().getTime() + 60000),
};
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

export const createToken = () => {
  return makeJwt({ header, payload, key });
};

export const validateToken = (token: string) => {
  const isValid = validateJwt(token, key);
  console.log(isValid);
  return isValid;
};
