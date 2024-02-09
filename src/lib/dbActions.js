import * as fsPromises from "node:fs/promises";

const { readFile, writeFile } = fsPromises;

const dbFile = "./src/database/appeals.json";

const options = { encoding: "utf-8" };

export const readData = async () => {
  const data = JSON.parse(await readFile(dbFile, options));
  return data
};

export const writeData = async (data) => {
  const result = JSON.parse(await writeFile(dbFile, options));
  return result;
};
