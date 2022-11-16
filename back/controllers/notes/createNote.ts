import { Context } from "../../deps.ts";
import { createNoteService } from "../../services/notes.ts";

export const createNote = async ({ response, request,state }: Context) => {
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
  const author = state?.loggedUser;

  const note = await createNoteService({ title, body, author });

  if (note) {
    response.body = { note };
    response.status = 200;
    return;
  }
};
