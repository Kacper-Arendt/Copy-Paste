import { createNote, selectAllNotes } from "../db/notes.ts";
import { NotesInterface } from "../models/notes.ts";

export const getNotesService = async () => {
  return await selectAllNotes() 
};

export const createNoteService = async ({ title }: Pick<NotesInterface, 'title'>) => {
 return  await createNote({title})
};