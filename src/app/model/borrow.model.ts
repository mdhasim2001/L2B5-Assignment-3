import { model, Schema } from "mongoose";
import { BorrowBooks } from "../interface/borrow.interface";

const borroBook = new Schema<BorrowBooks>(
  {
    book: { type: String, required: true },
    quantity: { type: Number, required: true },
    dueDate: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Borrow = model("Borrow", borroBook);
