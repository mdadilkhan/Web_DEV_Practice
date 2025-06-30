// winston docs must read
// https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/

import winston from "winston";
import config from "./config";
import "winston-daily-rotate-file";
import { DailyRotateFile } from "winston/lib/winston/transports";

const { combine, timestamp, json, printf, colorize, align } = winston.format;

// // winston support six log levels
// //Each level is given an integer priority with the most severe being the lowest number and the least one being the highest.
// //  Numerical Code        Severity

// //     0                 Emergency: system is unusable
// //     1                 Alert: action must be taken immediately
// //     2                 Critical: critical conditions
// //     3                 Error: error conditions
// //     4                 Warning: warning conditions
// //     5                 Notice: normal but significant condition
// //     6                 Informational: informational messages
// //     7                 Debug: debug-level messages

// const LogLevels = {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6,
// };
// // The six log levels above each correspond to a method on the logger:
// // logger.error('error');
// // logger.warn('warn');
// // logger.info('info');
// // logger.verbose('verbose');
// // logger.debug('debug');
// // logger.silly('silly');

// // you can format your log message like give color time format alignment etc

// // transport in winston
// //Transports in Winston refer to the storage location for your log entries.
// //  Winston provides great flexibility in choosing where you want your log entries to be outputted to.
// // Four ways to see and store logs
// // 1. Console
// // 2. File
// // 3. Http
// // 4. Stream

// // Logging into files can quickly get out of hand if you keep logging to the same file as it can get extremely large and become cumbersome to manage. This is where the concept of log rotation can come in handy.
// // The main purpose of log rotation is to restrict the size of your log files and create new ones based on some predefined criteria.
// // you can create a new log file every day and automatically delete those older than a time period (say 30 days).
// // for this install package npm install winston-daily-rotate-file

// const fileRotateTransport = new winston.transports.DailyRotateFile({
//   filename: 'combined-%DATE%.log',
//   datePattern: 'YYYY-MM-DD',
//   maxFiles: '14d',
// });

// const errorFilter = winston.format((info, opts) => {
//   return info.level === 'error' ? info : false;
// });

// const infoFilter = winston.format((info, opts) => {
//   return info.level === 'info' ? info : false;
// });

// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || "info",
//   format: combine(
//     // colorize({ all: true }),
//     timestamp({
//       format: "YYYY-MM-DD hh:mm:ss.SSS A", // 2022-01-25 03:23:10.350 PM
//     }),
//     json()// it will show in json format in console
//     // align(),
//     // printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
//   ),
// //    transports: [
// //     new winston.transports.File({
// //       filename: 'combined.log',
// //     }),
// //     new winston.transports.File({
// //       filename: 'app-error.log',
// //       level: 'error',
// //       format: combine(errorFilter(), timestamp(), json()),
// //     }),
// //     new winston.transports.File({
// //       filename: 'app-info.log',
// //       level: 'info',
// //       format: combine(infoFilter(), timestamp(), json()),
// //     }),
// //   ],

// // for saving logs in file and delete afyer some time
//    transports:[fileRotateTransport]
// });

// logger.info("cjhsdvcjvsd");
// logger.warn("cbhdsc");
// logger.error("cvsjhdcbvjsdc");
// // export default logger;

// logs can also be connected with cloud watch

const LogLevels = {
  error: 0,
  warning: 1,
  info: 2,
  http: 3,
  debug: 4,
};
const logger = winston.createLogger({
  levels: LogLevels,
  level: config.logLevel,
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    winston.format.printf(
      ({ timestamp, level, message, logMetadata, stack }) => {
        return `${timestamp} ${level} ${logMetadata || ""} ${message} ${stack || ""}`;
      }
    )
  ),
  transports: [new winston.transports.Console()],
});

const fileRotateTransport = new DailyRotateFile({
  filename: "logs/application-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    winston.format.json()
  ),
});
logger.add(fileRotateTransport)

export default logger;
