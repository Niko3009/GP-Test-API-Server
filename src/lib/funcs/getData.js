export const getResData = (data = null, status = "success", details = "ok") => {
  if (data === null && status !== "error") {
    status = "fail";
    details = "data not found";
  }
  return { status, details, data };
};

export const getErrData = (error = "Unknown error") => {
  return getResData(null, "error", error);
};
