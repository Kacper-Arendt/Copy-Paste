import { Context } from "../../deps.ts";
import { createNoteService } from "../../services/notes.ts";

export const createNote = async ({ response, request }: Context) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid note data" };
    return;
  }

  const { title, body } = await request.body().value;

  if (!title) {
    response.status = 422;
    response.body = { msg: "Incorrect data. Title and body are required" };
    return;
  }

  const note = await createNoteService({ title, body });

  if (note) {
    response.body = { note };
    response.status = 200;
    return;
  }
};
