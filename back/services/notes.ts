import {
  createNote,
  deleteNote,
  selectAllNotes, selectAllUserNotes,
  selectNoteById
} from "../db/notes.ts";
import { NotesInterface } from "../models/notes.ts";

export const getNotesService = async () => {
  return await selectAllNotes();
};

export const getUserNotesService = async (author: string) => {
  return await selectAllUserNotes(author);
};


export const getNoteByIdService = async (id: string) => {
  return await selectNoteById(id);
};

export const deleteNoteByIdService = async (id: string) => {
  return await deleteNote(id);
};

export const createNoteService = async (
  { title, body, author }: Omit<NotesInterface, "id">,
) => {
  return await createNote({ title, body, author });
};
