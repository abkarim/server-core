"use strict";

const express = require("express");
const router = express.Router();

const user = require("./controller");

router.route("/").get(user.getAllUser).post(user.createUser);

module.exports = router;
