"use strict";

import { createLogger, format, transports } from "winston";
import path from "path";

const env = process.env.NODE_ENV || "development";
const filename = path.join("log", "results.log");

const logger = createLogger({
  level: env === "production" ? "info" : "debug",
  format: format.combine(
    format.label({ label: path.basename(import.meta?.url) }),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" })
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          (info) =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      ),
    }),
    new transports.File({
      filename,
      format: format.combine(
        format.printf(
          (info) =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      ),
    }),
  ],
});

export default logger;
