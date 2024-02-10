export const getAllData =
  (app) =>
  (responseFunc, requestData = { collection: null, path: null }) => {
    const { collection, path } = requestData;

    const urlCollection = collection || "courses";
    const urlPath = path ? `${path}` : "";
    const url = urlCollection + urlPath;

    const db = app.database();
    const ref = db.ref(url);
    ref
      .once("value")
      .then((response) => responseFunc(dbDataHandler({ response, ref })))
      .catch((response) => responseFunc(errorDataHandler(response)));
  };

export const postDataByRef =
  () =>
  (responseFunc, { ref, newData }) => {
    ref
      .push(newData)
      .then((response) => getDataByRef(responseFunc, { ref: response }))
      .catch((response) => responseFunc(response));
  };

export const updateDataByRef =
  () =>
  (responseFunc, { ref, newData }) => {
    ref
      .update(newData)
      .then(() => getDataByRef(responseFunc, { ref }))
      .catch((response) => responseFunc(response));
  };

const dbDataHandler = ({ response, ref }) => {
  const rawData = response.val();
  return { data: rawData, ref };
};

const getDataByRef = (responseFunc, { ref }) => {
  const newRef = ref;
  newRef
    .once("value")
    .then((response) => {
      const data = response.val();
      responseFunc({ data, ref: newRef });
    })
    .catch((response) => responseFunc(errorDataHandler(response)));
};

const errorDataHandler = (data) => {
  const error = data.code;
  return {
    error,
  };
};
