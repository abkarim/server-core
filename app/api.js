"use strict";

const express = require("express");
const router = express.Router();

const user = require("./modules/user/user");

router.use("/user", user);

module.exports = router;
