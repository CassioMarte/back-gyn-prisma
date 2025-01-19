import cors from "cors";
import express from "express";

export const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello App");
});
