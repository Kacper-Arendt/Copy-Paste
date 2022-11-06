import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";

// SERVICE
import { deleteNoteByIdService } from "../../services/notes.ts";

export const deleteNote = async ({ response, params }: Context) => {
  const id = params?.noteId;

  if (!id) {
    response.status = 422;
    response.body = { msg: "Incorrect params. Id is required" };
    return;
  }
  const note = await deleteNoteByIdService(id);

  if (!note) {
    response.status = 404;
    response.body = { msg: "Note not found" };
    return;
  }

  return response.body = { isDeleted: !!note?.rowCount };
};
