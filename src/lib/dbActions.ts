import * as fsPromises from "node:fs/promises";

const { readFile, writeFile } = fsPromises;

const dbFile = "./src/database/appeals.json";

// const options = { encoding: "utf-8" };

export const readData = async () => {
  const data = JSON.parse(String(await readFile(dbFile)));
  return data;
};

export const writeData = async (newData) => {
  await writeFile(dbFile, JSON.stringify(newData));
  const newFileData = await readData();
  return newFileData;
};
