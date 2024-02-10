// import "firebase/compat/auth";
import "firebase/compat/database";
import app from "firebase/compat/app";

import firebaseConfig from "./config.js";
// import { initializeApp } from "firebase/app";
// app = initializeApp(firebaseConfig);

import { getAllData, postDataByRef, updateDataByRef } from "./controllers.js";

app.initializeApp(firebaseConfig);

const db = app.database();
const ref = (collection) => db.ref(collection);

//

const getFunx = (app) => {
  const funx = { getAllData, postDataByRef, updateDataByRef };
  for (const key of Object.keys(funx)) funx[key] = funx[key](app);
  return funx;
};

const { getAllData, postDataByRef, updateDataByRef } = getFunx(app);

//

export { db, ref };
export { getAllData, postDataByRef, updateDataByRef };
