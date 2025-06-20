import { model, Schema } from "mongoose";
import { BorrowBooks } from "../interface/borrow.interface";
import { Book } from "./books.model";

const borroBook = new Schema<BorrowBooks>(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true },
    dueDate: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

borroBook.pre("save", async function (doc) {
  const bookCopies = await Book.findOne({ _id: this.book });
  if (
    bookCopies?.copies === this.quantity ||
    (bookCopies?.copies as number) < this.quantity
  ) {
    return this.quantity;
  }
});

export const Borrow = model("Borrow", borroBook);
