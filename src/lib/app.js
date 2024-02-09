import express from "express";
import parser from "body-parser";
import cors from "cors";

const app = express();

app.use(parser.json()); // app.use(express.bodyParser());
// app.use(app.router);

app.use((req, res, next) => {
  app.use(cors());
  next();
});

export default app;
