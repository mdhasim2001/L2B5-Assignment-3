import express, { Application, Request, Response } from "express";
import { bookRoutes } from "./app/controller/books.controller";
import { borrowBook } from "./app/controller/borrow.controller";

export const app: Application = express();

app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowBook);

app.get("/", async (req: Request, res: Response) => {
  res.send("server activ now");
});
