import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

const prisma = new PrismaClient()

export const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello App");
});

