import express from "express";
import * as appealsControllers from "./lib/controllers.js";

const router = express.Router();
const { getAllAppeals } = appealsControllers;

// const URLofAppeal = "/appeal";
const URLofAppeals = "/appeals";

router.get(URLofAppeals, getAllAppeals);

// router.get(URLofBook, getBook); // Получить книгу по названию.
// router.post(URLofBook, createBook); // Создать книгу по названию.
// router.patch(URLofBook, updateBook); // Обновить книгу по названию.
// router.delete(URLofBook, deleteBook); // Удалить книгу по названию.

export default router;
