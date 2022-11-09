import { runQuery } from "./utils.ts";

// MODELS
import { NotesInterface } from "../models/notes.ts";
import client from "./client.ts";

export const selectAllNotes = async () =>
  await runQuery<NotesInterface[]>(`SELECT * FROM notes`);

export const selectNoteById = async (id: string) => {
  const note = await client.queryObject<NotesInterface>` 
        SELECT * FROM notes WHERE ID = ${id} LIMIT 1
        `;

  client.release();

  return note.rows[0];
};

export const createNote = async (
  { title, body }: Omit<NotesInterface, "id">,
) => {
  const createdNote = await client.queryObject`
          INSERT INTO notes (title, body) VALUES (${title}, ${body}) RETURNING id
        `;

  client.release();
  return createdNote?.rows[0];
};

export const deleteNote = async (id: string) => {
  const deleteNote = await client.queryObject`
        DELETE FROM notes WHERE ID = ${id}
        `;

  client.release();

  return deleteNote;
};
