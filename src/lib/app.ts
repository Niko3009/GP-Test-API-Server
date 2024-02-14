import express from "express";
import parser from "body-parser";
import cors from "cors";

const app = express();

const options = { origin: "*" }; //   origin: ['http://localhost:3000'],
app.use(cors(options));

app.use(parser.json());

export default app;
