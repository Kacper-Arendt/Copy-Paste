import { selectAllNotes } from "../db/notes.ts";

export const getNotesService = async () => {
  const notes = await selectAllNotes();
  
  console.log('getNotes service =>',notes);
  
  return notes;
};