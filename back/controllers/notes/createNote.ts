import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";
import { createNoteService } from "../../services/notes.ts";

export const createNote = async ({response, request}: Context) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid note data" };
    return;
  }

  const { title } = await request.body().value;
  

  if (!title) {
    response.status = 422;
    response.body = { msg: "Incorrect data. Title is required" };
    return;
  }

  const noteId = await createNoteService({ title })
  
  response.body = { msg: "Note created", noteId };
}