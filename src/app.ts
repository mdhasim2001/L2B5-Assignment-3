import express, { Application, Request, Response } from "express";
import { bookRoutes } from "./app/controller/books.controller";
import { borrowBook } from "./app/controller/borrow.controller";
import cors from "cors";

export const app: Application = express();

app.use(
  cors({
    origin: [
      "https://books-client-site.vercel.app",
      "https://extraordinary-marshmallow-83e8a7.netlify.app",
      "http://localhost:5173",
    ],
  })
);
app.use(express.json());

app.use("/", bookRoutes);
app.use("/", borrowBook);

app.get("/", async (req: Request, res: Response) => {
  res.send("server activ now");
});
