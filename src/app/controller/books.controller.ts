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

// /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
bookRoutes.get("/", async (req: Request, res: Response) => {
  const { filter, sortBy, sort, limit } = req.query;
  let data = [];
  if (filter) {
    data = await Book.find({ genre: filter })
      .sort({ [sortBy as any]: sort as any })
      .limit(limit as any);
  } else {
    data = await Book.find();
  }
  res.status(200).send({
    success: true,
    message: "Book retrieved successfully",
    data,
  });
});

bookRoutes.get("/:bookId", async (req: Request, res: Response) => {
  const book = req.params.bookId;
  const data = await Book.findById(book);
  res.status(200).send({
    success: true,
    message: "Book retrieved successfully",
    data,
  });
});

bookRoutes.put("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const bookBody = req.body;
  const data = await Book.findByIdAndUpdate(bookId, bookBody, { new: true });
  res.status(200).send({
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
