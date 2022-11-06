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
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};
