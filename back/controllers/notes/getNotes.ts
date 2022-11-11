import { Context } from "../../deps.ts";
import { getNotesService } from "../../services/notes.ts";

export const getNotes = async ({ response, }: Context) => {
  response.body = await getNotesService();
};
