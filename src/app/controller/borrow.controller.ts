import express, { Request, Response } from "express";
import { Borrow } from "../model/borrow.model";

export const borrowBook = express.Router();

borrowBook.post("/", async (req: Request, res: Response) => {
  try {
    const borrow = req.body;
    const data = await Borrow.create(borrow);
    res.status(201).send({
      success: true,
      message: "Book borrowed successfully",
      data,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      error,
    });
  }
});

borrowBook.get("/", async (req: Request, res: Response) => {
  try {
    const data = await Borrow.find().populate("book");
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      error,
    });
  }
});
