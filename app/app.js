const path = require("path");
const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const api = require("./api");

const app = express();

const CURRENT_DIRECTORY = __dirname;

/**
 * Set HTTP headers
 */
app.use(helmet());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(mongoSanitize());

/**
 * Expose a public path
 */
app.use(
  express.static(path.join(CURRENT_DIRECTORY, "../public"), {
    dotfiles: "ignore",
    index: false,
  })
);

app.use("/api", api);

module.exports = app;
