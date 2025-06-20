import express, { Request, Response } from "express";
import { Book } from "../model/books.model";

export const bookRoutes = express.Router();

bookRoutes.post("/", async (req: Request, res: Response) => {
  const bodyBook = req.body;
  const data = await Book.create(bodyBook);
  res.status(201).send({
    success: true,
    massage: "Book created successfully",
    data,
  });
});

bookRoutes.get("/", async (req: Request, res: Response) => {
  const queryData = req.query;
  let data = [];
  if (queryData) {
    data = await Book.find(queryData);
  } else {
    data = await Book.find();
  }
  res.status(201).send({
    success: true,
    message: "Book retrieved successfully",
    data,
  });
});

bookRoutes.get("/:bookId", async (req: Request, res: Response) => {
  const book = req.params.bookId;
  const data = await Book.findById(book);
  res.status(201).send({
    success: true,
    message: "Book retrieved successfully",
    data,
  });
});

bookRoutes.put("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const bookBody = req.body;
  const data = await Book.findByIdAndUpdate(bookId, bookBody, { new: true });
  res.status(201).send({
    success: true,
    message: "Book updated successfully",
    data,
  });
});

bookRoutes.delete("/:bookId", async (req: Request, res: Response) => {
  const book = req.params.bookId;
  await Book.findByIdAndDelete(book);
  res.status(201).send({
    success: true,
    message: "Book updated successfully",
    data: null,
  });
});
