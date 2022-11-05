import { runQuery } from "./utils.ts";

// MODELS
import { NotesInterface } from "../models/notes.ts";

const tableName = 'notes'

export const selectAllNotes = async () => await runQuery<NotesInterface[]>(`SELECT * FROM ${tableName}`)

export const selectNoteById = async (id: string) => {
  return await runQuery<NotesInterface>(`SELECT * FROM ${tableName} WHERE ID = ${id}`)
};

export const createNote = async ({ title }: Pick<NotesInterface, 'title'>) => {
  const createdNote = await runQuery<NotesInterface>(`
          INSERT INTO ${tableName} (title) VALUES (${title}) RETURNING id
        `)

  return createdNote?.rows[0]?.id
}

