import {  Router } from "./deps.ts";
import { getNotes, createNote } from "./controllers/notes/index.ts";

const router = new Router();

// NOTES
router
  .get("/notes", getNotes)
  .post("/notes", createNote)

export default router;