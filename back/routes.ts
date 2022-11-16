import { Router } from "./deps.ts";
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
} from "./controllers/notes/index.ts";
import { getUser, login, register } from "./controllers/auth/index.ts";
import { protectedRoute } from "./middlewares/protectedRoute.ts";
import { getProfile } from "./controllers/profile/index.ts";
import { getUserNotes } from "./controllers/notes/getUserNotes.ts";

const router = new Router();

// PROFILE
router
  .get("/user/profile", protectedRoute, getProfile)
  .get("/user/notes", protectedRoute, getUserNotes)
  .post("/profile", () => {});

// AUTH
router
  .post("/auth/login", login)
  .post("/auth/register", register)
  .get("/auth/user", protectedRoute, getUser);

// NOTES
router
  .get("/notes", protectedRoute, getNotes)
  .get("/notes/:noteId", protectedRoute, getNoteById)
  .post("/notes", protectedRoute, createNote)
  .delete("/notes/:noteId", protectedRoute, deleteNote);

export default router;
