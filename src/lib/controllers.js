import getDate from "date-and-time";
import uniqid from "uniqid";

import { readData, writeData } from "./dbActions.js";
import { getResData } from "./funcs/getData.js";

// interface Game ={
//   name: string;
//   price: number;
//   id: string;
// }

const availableTypes = ["mistake", "remark", "recommendation"];
const availableStatuses = ["waiting", "processing", "ready"];

export const getAllAppeals = async (req, res) => {
  const data = await readData();
  res.status(200).send(getResData(data));
};

export const addAppeal = async (req, res) => {
  const body = req.body;
  const { autor, description } = body;

  const date = getDate.format(new Date(), "DD.MM.YYYY");
  const id = uniqid();

  const isAvailableType = availableTypes.includes(body?.type);
  const type = isAvailableType ? body?.type : availableTypes[0];

  const isAvailableStatus = availableStatuses.includes(body?.status);
  const status = isAvailableStatus ? body?.status : availableStatuses[0];

  const newAppeal = { id, date, autor, type, description, status };

  const oldAppealsList = await readData();
  const newAppealsList = [...oldAppealsList, newAppeal];

  const newData = await writeData(newAppealsList);
  
  res.status(200).send(getResData(newData));
};
