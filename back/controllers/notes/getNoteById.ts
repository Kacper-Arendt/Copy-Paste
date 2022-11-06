import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";
import { getNoteByIdService } from "../../services/notes.ts";

export const getNoteById = async ({ response, params }: Context) => {
  const id = params?.noteId

  if (!id) {
    response.status = 422;
    response.body = { msg: "Incorrect data. Id is required" };
    return;
  }
  const note = await getNoteByIdService(id)
  
  if (!note) {
    response.status = 404;
    response.body = { msg: "Note not found" };
    return;
  } 
  
  return response.body = note
}