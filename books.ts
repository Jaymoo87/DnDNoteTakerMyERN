import * as express from "express";
import { getAllBooks } from "../../db/queries/books";

// still gets categories!!!

import db from "../../db";

const bookRouter = express.Router();

bookRouter.get("/", async (req, res) => {
  try {
    let books = await db.books.getAllBooks();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error, Check that hindside." });
  }
});

bookRouter.get("/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    let book = (await db.books.getOneBook(id))[0];
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error, Check that backside." });
  }
});

bookRouter.post("/", async (req, res) => {
  try {
    const { categoryid, title, author, price } = req.body;

    if (!categoryid || !title || !author || !price)
      return res.status(400).json({ message: "Need All The Information To Add A Book" });
    const newBook = await db.books.addBook(categoryid, title, author, price);
    res.json({ message: "Book Added! Now Read It!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error, Check that backside" });
  }
});

bookRouter.put("/:id", async (req, res) => {
  const { categoryid, title, author, price } = req.body;
  let id = Number(req.params.id);
  if (!categoryid || !title || !author || !price)
    return res.status(400).json({ message: "Need All The Information To Update A Book" });
  try {
    const bookToEdit = { id, categoryid, title, author, price };
    await db.books.editBook(bookToEdit, id);
    res.json({ message: "Book Updated! Now Read It!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error, Check that backside" });
  }
});

bookRouter.delete("/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    let deletedBook = await db.books.deleteBook(id);
    res.json({ message: "Book Deleted! Simple minds destroy what they cannot understand" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error, Check backend" });
  }
});

export default bookRouter;
