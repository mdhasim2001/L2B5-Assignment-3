import { model, Schema } from "mongoose";
import { Books } from "../interface/books.interface";

const bookSchema = new Schema<Books>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      required: true,
    },
    isbn: { type: String, required: true },
    description: { type: String },
    copies: { type: Number },
    available: { type: Boolean },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Book = model("Book", bookSchema);
