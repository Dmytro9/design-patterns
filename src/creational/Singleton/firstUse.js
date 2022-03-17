import logger from "./loggerSingelton.js";

export default function firstUse() {
  logger.printLogCount();
  logger.log("First File");
  logger.printLogCount();
}
