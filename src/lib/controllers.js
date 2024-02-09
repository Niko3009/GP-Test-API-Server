import { readData, writeData } from "./dbActions.js";
import { getResData } from "./funcs/getData.js";

// interface Game ={
//   name: string;
//   price: number;
//   id: string;
// }

export const getAllAppeals = async (req, res) => {
  const data = await readData();
  res.status(200).send(getResData(data));
};

// // Получить пользователя по имени.
// const getBook = (req, res) => {
//   // const { book_id } = req.params;
//   const { title } = req.query;

//   Book.findOne({ title })
//     .then((book) => {
//       res.status(200).send(resData(book, `found`));
//     })
//     .catch((e) => sendError(res, e.message));
// };

// // Создать пользователя по имени.
// const createBook = (req, res) => {
//   const bookData = req.body;
//   Book.create(bookData)
//     .then((book) => {
//       res.status(200).send(resData(book, `created`));
//     })
//     .catch((e) => sendError(res, e.message));
// };

// // Обновить пользователя по имени.
// const updateBook = (req, res) => {
//   const { title } = req.query;
//   const bookData = req.body;

//   Book.findOneAndUpdate({ title }, bookData, { new: true, runValidators: true })
//     .then((book) => {
//       res.status(200).send(resData(book, `updated`));
//     })
//     .catch((e) => sendError(res, e.message));
// };

// // Удалить пользователя по имени.
// const deleteBook = (req, res) => {
//   const { title } = req.query;

//   Book.findOneAndDelete({ title })
//     .then((book) => {
//       res.status(200).send(resData(book, `deleted`));
//     })
//     .catch((e) => sendError(res, e.message));
// };
