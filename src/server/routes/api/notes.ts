import { Router } from "express";
import { checkToken } from "../../middlewares/auth.mw";
import { v4 as uuidv4 } from "uuid";

import db from "../../db";
const router = Router();

router.route("*").post(checkToken).put(checkToken).delete(checkToken);

// gets one note by id (GET /api/notes/:id)

// gets all the notes  (GET /api/notes)
router.get("/", async (req, res, next) => {
  try {
    const results = await db.notes.getAllNotes();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "couldnt do it" });
  }
});

router.get(`/mynotes/:userid`, async (req, res, next) => {
  // const user_id = req.query.userid as string | undefined;
  const userid = req.params.userid;

  try {
    const results = await db.notes.getUserNotes(userid);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const noteDTO = {
      id: uuidv4(),
      userid: req.payload.id,
      ...req.body,
    };
    await db.notes.insertNote(noteDTO);

    res.json({ id: noteDTO.id, message: "new note created" });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const [results] = await db.notes.getOneNote(id);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "" });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const userid = req.payload.id;
    const noteDTO = {
      ...req.body,
    };
    await db.notes.updateNote(noteDTO, id, userid);
    res.json({ id, message: "note updated" });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const userid = req.payload.id;
    const result = await db.notes.deleteNote(id, userid);

    if (result.affectedRows) {
      res.json({ id, message: "note deleted" });
    } else {
      res.json("TF?!?? shit aint even there");
    }
  } catch (error) {
    next(error);
  }
});

export default router;
