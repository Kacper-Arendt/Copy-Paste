import {
  createNote,
  deleteNote,
  selectAllNotes,
  selectNoteById,
} from "../db/notes.ts";
import { NotesInterface } from "../models/notes.ts";

export const getNotesService = async () => {
  return await selectAllNotes();
};

export const getNoteByIdService = async (id: string) => {
  return await selectNoteById(id);
};

export const deleteNoteByIdService = async (id: string) => {
  return await deleteNote(id);
};

export const createNoteService = async (
  { title, body }: Omit<NotesInterface, "id">,
) => {
  return await createNote({ title, body });
};
