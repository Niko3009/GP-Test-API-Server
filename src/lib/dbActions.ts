import * as fsPromises from "node:fs/promises";

const { readFile, writeFile } = fsPromises;

const dbFile = "./src/database/appeals.json";

export const readData = async () => {
  const data = JSON.parse(String(await readFile(dbFile)));
  return data;
};

export const writeData = async (newData: AppealType[]) => {
  await writeFile(dbFile, JSON.stringify(newData));
  const newFileData = await readData();
  return newFileData;
};

interface AppealType {
  id: string;
  date: Date;
  autor: string;
  type: string;
  description: string;
  status: string;
}
