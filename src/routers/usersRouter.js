require("dotenv").config();
const express = require("express");
const { registerUser } = require("../controllers/usersController");

const usersRouter = express.Router();

usersRouter.post("/register", registerUser);

module.exports = usersRouter;
