import app from "./lib/app.js";
import logger from "./lib/config/logger.js";
import env from "./lib/config/environment.js";

import router from "./routes.js";

const { DOMAIN, PORT } = env;
app.listen(PORT, () => {
  const API = `${DOMAIN}:${PORT}`;
  logger.info(`API \x1b[4m${API}\x1b[0m`, `\n`);
});

app.use(router);

app.get("/", (req, res) => {
  res.status(200).send(`API is running`);
});

app.get("*", (req, res) => {
  res.status(404).send({ error: "Unknown endpoint!" });
});
