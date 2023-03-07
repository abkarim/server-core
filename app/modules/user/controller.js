"use strict";

const User = require("./model");

function createUser(req, res) {
  res.status(200).json({
    success: false,
    message: "testing",
  });
}

function updateUser(req, res) {}

function deleteUser(req, res) {}

function getSingleUser(req, res) {}

function getAllUser(req, res) {}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
};
