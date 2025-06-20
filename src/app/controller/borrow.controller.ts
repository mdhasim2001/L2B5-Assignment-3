import express, { Request, Response } from "express";
import { Borrow } from "../model/borrow.model";

export const borrowBook = express.Router();

borrowBook.post("/", async (req: Request, res: Response) => {
  const borrow = req.body;
  const data = await Borrow.create(borrow);
  res.status(201).send({
    success: true,
    message: "Book borrowed successfully",
    data,
  });
});
