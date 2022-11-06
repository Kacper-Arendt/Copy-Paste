import { runQuery } from "./utils.ts";

// MODELS
import { NotesInterface } from "../models/notes.ts";
import client from "./client.ts";

const tableName = 'notes'

export const selectAllNotes = async () => await runQuery<NotesInterface[]>(`SELECT * FROM ${tableName}`)

export const selectNoteById = async (id: string) => {
  try {
    const note = await client.queryObject<NotesInterface>`
        SELECT * FROM notes WHERE ID = ${id} LIMIT 1
        `;
    
    return note.rows[0]
  }
  catch (e) {
    console.error(e);
  }
  finally {
    client.release()
  }
};

export const createNote = async ({ title,body }: Omit<NotesInterface, 'id'>) => {
  try {
    const createdNote = await client.queryObject`
          INSERT INTO notes (title, body) VALUES (${title}, ${body}) RETURNING id
        `;

  return createdNote?.rows[0]?.id
  }
  catch (e) {
    console.error(e);
  }
  finally {
  client.release()
  }
}

export const deleteNote = async (id: string) => {
  try {
    const note = await client.queryObject`
        DELETE FROM notes WHERE ID = ${id}
        `;
    console.log(note);
    return note
  }
  catch (e) {
    console.error(e);
  }
  finally {
  client.release()
  }
}
