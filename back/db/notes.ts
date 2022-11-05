import { runQuery } from "./utils.ts";

// MODELS
import {  NotesInterface } from "../models/notes.ts";

const tableName = 'notes'

export const selectAllNotes = async () => await runQuery<NotesInterface[]>(`SELECT * FROM ${tableName}`)

export const selectNoteById = async (id: string) => {
  const notes = await runQuery<NotesInterface>(`SELECT * FROM ${tableName} WHERE ID = ${id}`);
  console.log(notes);
  return notes
};

