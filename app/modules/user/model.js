"use strict";

const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxLength: 100,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    maxLength: 100,
    required: true,
    trim: true,
  },
  name: { type: String, default: `${this.firstName} ${this.lastName}` },
  email: {
    type: String,
    required: true,
    validate: { validator: function () {}, message: "email is invalid" },
    lowercase: true,
    trim: true,
    unique: true,
    index: true,
  },
  password: { type: String, required: true },
  createAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  lastUpdatedAt: {
    type: Date,
  },
});

const SALT = process.env.hash_salt;
const ITERATIONS = 1000;
const KEY_LENGTH = 64;
const DIGEST = "sha512";
const STRING_TYPE = "hex";

userSchema.methods.hashAndSavePassword = function (password) {
  this.password = crypto
    .pbkdf2Sync(password, SALT, ITERATIONS, KEY_LENGTH, DIGEST)
    .toString(STRING_TYPE);
};

userSchema.methods.isValidPassword = function (password) {
  const hashedPassword = crypto
    .pbkdf2Sync(password, SALT, ITERATIONS, KEY_LENGTH, DIGEST)
    .toString(STRING_TYPE);

  hashedPassword === this.password;
};

module.exports = mongoose.model("User", userSchema);
