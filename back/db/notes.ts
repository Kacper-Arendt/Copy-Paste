import { runQuery } from "./utils.ts";

// MODELS
import { NotesInterface } from "../models/notes.ts";
import client from "./client.ts";

export const notesDto = (notes: NotesInterface): NotesInterface => ({
  id: notes?.id,
  title: notes?.title,
  body: notes?.title,
});

export const selectAllNotes = async () => {
  const notes = await runQuery<NotesInterface>(`SELECT * FROM notes`);
  return notes?.rows.map((el) => notesDto(el));
};

export const selectNoteById = async (id: string) => {
  const note = await client.queryObject<NotesInterface>` 
        SELECT * FROM notes WHERE ID = ${id} LIMIT 1
        `;

  client.release();

  return notesDto(note.rows[0]);
};

export const createNote = async (
  { title, body }: Omit<NotesInterface, "id">,
) => {
  const createdNote = await client.queryObject<NotesInterface>`
          INSERT INTO notes (title, body) VALUES (${title}, ${body}) RETURNING *
        `;

  client.release();

  return notesDto(createdNote?.rows[0]);
};

export const deleteNote = async (id: string) => {
  const deleteNote = await client.queryObject`
        DELETE FROM notes WHERE ID = ${id}
        `;

  client.release();

  return deleteNote;
};
