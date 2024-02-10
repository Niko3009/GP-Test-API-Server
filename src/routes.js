import express from "express";
import * as appealsControllers from "./lib/controllers.js";

const router = express.Router();
const { getAllAppeals, addAppeal } = appealsControllers;

const URLofAppeals = "/appeals";

router.get(URLofAppeals, getAllAppeals);
router.post(URLofAppeals + "/add", addAppeal);

export default router;
