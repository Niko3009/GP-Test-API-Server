import uniqid from "uniqid";
import logger from "../lib/config/logger.js";

import { readData, writeData } from "./dbActions.js";
import { getResData, getErrData } from "./funcs/getData.js";

const availableTypes = ["mistake", "remark", "recommendation"];
const availableStatuses = ["waiting", "processing", "ready"];

export const getAllAppeals = async (req, res) => {
  try {
    const data = await readData();
    logger.info(`controller getAllAppeals`);
    res.status(200).send(getResData(data));
  } catch (err) {
    res.status(500).send(getErrData(err));
  }
};

export const addAppeal = async (req, res) => {
  try {
    const body = req.body;

    const id = uniqid();
    const date = new Date();
    const autor = body?.autor;
    const description = body?.description;

    const isAvailableType = availableTypes.includes(body?.type);
    const type = isAvailableType ? body?.type : availableTypes[0];

    const isAvailableStatus = availableStatuses.includes(body?.status);
    const status = isAvailableStatus ? body?.status : availableStatuses[0];

    const newAppeal = { id, date, autor, type, description, status };

    const oldAppealsList = await readData();
    const newAppealsList = [...oldAppealsList, newAppeal];

    const newData = await writeData(newAppealsList);

    logger.info(`controller addAppeal`);
    logger.info(JSON.stringify(body));
    res.status(200).send(getResData(newData));
  } catch (err) {
    res.status(500).send(getErrData(err));
  }
};
