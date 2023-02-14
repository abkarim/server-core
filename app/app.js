const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

/**
 * Set HTTP headers
 */
app.use(helmet());

app.use(express.urlencoded());

/**
 * Parse json data
 */
app.use(express.json());

/**
 * Sanitize user data to protect NoSQL injection
 */
app.use(mongoSanitize());

module.exports = app;
