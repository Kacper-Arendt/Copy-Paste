import { Router } from "./deps.ts";
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
} from "./controllers/notes/index.ts";
import { getUser, login, register } from "./controllers/auth/index.ts";
import { protectedRoute } from "./middlewares/protectedRoute.ts";

const router = new Router();

// AUTH
router
  .post("/auth/login", login)
  .post("/auth/register", register)
  .get("/users/:id", getUser);

// NOTES
router
  .get("/notes", protectedRoute, getNotes)
  .get("/notes/:noteId", protectedRoute, getNoteById)
  .post("/notes", protectedRoute, createNote)
  .delete("/notes/:noteId", protectedRoute, deleteNote);

export default router;
