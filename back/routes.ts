import {  Router } from "./deps.ts";
import { getNotes } from "./controllers/notes/index.ts";

const router = new Router();

router
  .get("/notes", getNotes)

export default router;