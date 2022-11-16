import client from "./client.ts";

export const initTables = async () => {
  try {
    await client.queryObject`
    CREATE TABLE IF NOT EXISTS notes (
      id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
      title TEXT NOT NULL,
      body TEXT
    )
  `;

    await client.queryObject`
    CREATE TABLE IF NOT EXISTS auth (
      id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
      password_hash TEXT NOT NULL,
      email VARCHAR (60) UNIQUE NOT NULL
    )
  `;

    await client.queryObject`
    CREATE TABLE IF NOT EXISTS profile (
      id UUID PRIMARY KEY REFERENCES auth(id),
      name VARCHAR (50),
      avatar TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
    `;
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};
