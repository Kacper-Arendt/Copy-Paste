import client from "./client.ts";

export const runQuery = async <T>(query: string) => {
  try {
      const { rows, rowCount, } = await client.queryObject<T>(query);
      
      return {
        rowCount,
        rows,
      }
  }
  catch (e) {
    console.log(e);
  }
  finally {
    client.release();
  }
};