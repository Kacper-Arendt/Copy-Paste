import { Router } from "./deps.ts";
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
} from "./controllers/notes/index.ts";
import { getUser, register } from "./controllers/auth/index.ts";

const router = new Router();

// AUTH
router
  // .post('/login', () => {})
  .post("/register", register)
  .post("/user/:id", getUser);

// NOTES
router
  .get("/notes", getNotes)
  .get("/notes/:noteId", getNoteById)
  .post("/notes", createNote)
  .delete("/notes/:noteId", deleteNote);

export default router;
