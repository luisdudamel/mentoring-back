require("dotenv").config();
const debug = require("debug")("mentoring:server:initializeServer");
const chalk = require("chalk");
const app = require("./index");

const initializeServer = (port) => {
  try {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on port ${port}`));
    });

    server.on("error", (error) => {
      debug(chalk.red("Error on server"));
      if (error.code === "EADDRINUSE") {
        debug(chalk.red(`Port ${port} in use`));
      }
    });
  } catch (error) {}
};

module.exports = initializeServer;
