import {  Router } from "./deps.ts";
import { getNotes, createNote, getNoteById, deleteNote } from "./controllers/notes/index.ts";

const router = new Router();

// NOTES
router
  .get("/notes", getNotes)
  .get("/notes/:noteId", getNoteById)
  .post("/notes", createNote)
  .delete("/notes/:noteId", deleteNote)

export default router;