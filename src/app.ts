import express, { Application, Request, Response } from "express";
import { bookRoutes } from "./app/controller/books.controller";

export const app: Application = express();

app.use(express.json());

app.use("/api/books", bookRoutes);

app.get("/", async (req: Request, res: Response) => {
  res.send("server activ now");
});
