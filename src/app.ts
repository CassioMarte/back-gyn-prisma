import cors from "cors";
import express from "express";



export const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello App");
});


//https://app.rocketseat.com.br/classroom/api-node-js-com-solid/group/design-patterns-and-testes/lesson/configurando-vitest