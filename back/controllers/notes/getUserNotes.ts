import { Context } from "../../deps.ts";
import {  getUserNotesService } from "../../services/notes.ts";

export const getUserNotes = async ({ response, state }: Context) => {
  const id = state?.loggedUser;

  const notes = await getUserNotesService(id);
  
  response.body = {notes}
  return;
};
