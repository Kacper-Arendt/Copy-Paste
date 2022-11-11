import { create, verify } from "../deps.ts";

const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);

export const createToken = async (
  { email, id }: { email: string; id: string },
) => {
  const payload = {
    email,
    id,
  };

  if (!key) return;

  return await create(
    { alg: "HS512", typ: "JWT" },
    payload,
    key,
  );
};

export const validateToken = async (token: string) => {
  return await verify(token, key);
};
