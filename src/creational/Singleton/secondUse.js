import logger from "./loggerSingelton.js";

export default function secondUse() {
  logger.printLogCount();
  logger.log("Second File");
  logger.printLogCount();
}
